"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { isSupabaseConfigured } from "@/lib/supabase/config";
import { compressImage, dataUrlToBlob } from "@/lib/compressImage";
import { A } from "@/data/i18n-auth";
import { MAKERS } from "@/data/makers";
import type { Lang } from "@/data/types";

const OTHER = "__other__";

function PhotoPicker({
  label,
  preview,
  tap,
  change,
  onPick,
}: {
  label: string;
  preview: string | null;
  tap: string;
  change: string;
  onPick: (file: File) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="flex flex-col gap-2">
      <span className="text-base text-cobalt-ink">{label}</span>
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="rounded-xl border border-dashed border-line bg-paper aspect-[4/3] flex items-center justify-center overflow-hidden text-biscuit text-base hover:border-cobalt transition-colors"
      >
        {preview ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={preview} alt="" className="w-full h-full object-cover" />
        ) : (
          <span>{tap}</span>
        )}
      </button>
      {preview && <span className="text-xs text-biscuit text-center">{change}</span>}
      <input
        ref={inputRef}
        type="file"
        accept="image/*,.heic,.heif"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) onPick(file);
        }}
      />
    </div>
  );
}

export default function ContributeForm({ lang }: { lang: Lang }) {
  const t = A[lang];
  const router = useRouter();

  const [makerChoice, setMakerChoice] = useState(MAKERS[0]?.name ?? OTHER);
  const [makerNew, setMakerNew] = useState("");
  const [label, setLabel] = useState("");
  const [period, setPeriod] = useState("");
  const [style, setStyle] = useState(t.styles[0]);
  const [description, setDescription] = useState("");
  const [markFile, setMarkFile] = useState<File | null>(null);
  const [markPreview, setMarkPreview] = useState<string | null>(null);
  const [pieceFile, setPieceFile] = useState<File | null>(null);
  const [piecePreview, setPiecePreview] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handlePick(file: File, kind: "mark" | "piece") {
    try {
      const preview = await compressImage(file);
      if (kind === "mark") {
        setMarkFile(file);
        setMarkPreview(preview);
      } else {
        setPieceFile(file);
        setPiecePreview(preview);
      }
    } catch {
      setError(t.tPhotoBig);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    const makerName = makerChoice === OTHER ? makerNew.trim() : makerChoice;
    if (!markFile || !makerName || !label.trim() || !period.trim()) {
      setError(t.tNeed);
      return;
    }
    if (!isSupabaseConfigured()) {
      setError(t.tSaveFail);
      return;
    }

    setStatus("submitting");
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      setStatus("idle");
      return;
    }

    try {
      const markDataUrl = await compressImage(markFile);
      const markPath = `${user.id}/${Date.now()}-mark.jpg`;
      const { error: markErr } = await supabase.storage
        .from("contributions")
        .upload(markPath, dataUrlToBlob(markDataUrl), { contentType: "image/jpeg" });
      if (markErr) throw markErr;
      const photoMarkUrl = supabase.storage.from("contributions").getPublicUrl(markPath)
        .data.publicUrl;

      let photoPieceUrl: string | null = null;
      if (pieceFile) {
        const pieceDataUrl = await compressImage(pieceFile);
        const piecePath = `${user.id}/${Date.now()}-piece.jpg`;
        const { error: pieceErr } = await supabase.storage
          .from("contributions")
          .upload(piecePath, dataUrlToBlob(pieceDataUrl), { contentType: "image/jpeg" });
        if (pieceErr) throw pieceErr;
        photoPieceUrl = supabase.storage.from("contributions").getPublicUrl(piecePath)
          .data.publicUrl;
      }

      const { error: insertErr } = await supabase.from("contributions").insert({
        user_id: user.id,
        maker_name: makerName,
        label: label.trim(),
        period: period.trim(),
        style,
        description: description.trim() || null,
        photo_mark_url: photoMarkUrl,
        photo_piece_url: photoPieceUrl,
        status: "pending",
      });
      if (insertErr) throw insertErr;

      setStatus("sent");
    } catch {
      setStatus("idle");
      setError(t.tSaveFail);
    }
  }

  if (status === "sent") {
    return (
      <div className="text-center py-16">
        <p className="text-xl text-cobalt-ink leading-loose mb-6">{t.tSent}</p>
        <button
          onClick={() => router.push(`/${lang}/marques`)}
          className="rounded-full bg-cobalt text-paper px-8 py-3 text-base hover:bg-cobalt-ink transition-colors"
        >
          {t.tBackToCatalog}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid sm:grid-cols-2 gap-4">
        <PhotoPicker
          label={t.photoMark}
          preview={markPreview}
          tap={t.photoTap}
          change={t.photoChange}
          onPick={(f) => handlePick(f, "mark")}
        />
        <PhotoPicker
          label={t.photoProduct}
          preview={piecePreview}
          tap={t.photoTap}
          change={t.photoChange}
          onPick={(f) => handlePick(f, "piece")}
        />
      </div>

      <label className="flex flex-col gap-2">
        <span className="text-base text-cobalt-ink">{t.fMaker}</span>
        <select
          value={makerChoice}
          onChange={(e) => setMakerChoice(e.target.value)}
          className="w-full rounded-xl border border-line bg-paper px-5 py-3 text-lg text-cobalt-ink focus:outline-none focus:ring-2 focus:ring-cobalt-pale"
        >
          {MAKERS.map((m) => (
            <option key={m.id} value={m.name}>
              {m.name}
            </option>
          ))}
          <option value={OTHER}>{t.fNew}</option>
        </select>
      </label>
      {makerChoice === OTHER && (
        <input
          value={makerNew}
          onChange={(e) => setMakerNew(e.target.value)}
          placeholder={t.fNewPh}
          className="w-full rounded-xl border border-line bg-paper px-5 py-3 text-lg text-cobalt-ink placeholder:text-biscuit focus:outline-none focus:ring-2 focus:ring-cobalt-pale"
        />
      )}

      <label className="flex flex-col gap-2">
        <span className="text-base text-cobalt-ink">{t.fLabel}</span>
        <input
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          placeholder={t.fLabelPh}
          className="w-full rounded-xl border border-line bg-paper px-5 py-3 text-lg text-cobalt-ink placeholder:text-biscuit focus:outline-none focus:ring-2 focus:ring-cobalt-pale"
        />
      </label>

      <label className="flex flex-col gap-2">
        <span className="text-base text-cobalt-ink">{t.fPeriod}</span>
        <input
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
          placeholder={t.fPeriodPh}
          className="w-full rounded-xl border border-line bg-paper px-5 py-3 text-lg text-cobalt-ink placeholder:text-biscuit focus:outline-none focus:ring-2 focus:ring-cobalt-pale"
        />
      </label>

      <label className="flex flex-col gap-2">
        <span className="text-base text-cobalt-ink">{t.fStyle}</span>
        <select
          value={style}
          onChange={(e) => setStyle(e.target.value)}
          className="w-full rounded-xl border border-line bg-paper px-5 py-3 text-lg text-cobalt-ink focus:outline-none focus:ring-2 focus:ring-cobalt-pale"
        >
          {t.styles.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-2">
        <span className="text-base text-cobalt-ink">{t.fDesc}</span>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder={t.fDescPh}
          rows={4}
          className="w-full rounded-xl border border-line bg-paper px-5 py-3 text-lg text-cobalt-ink placeholder:text-biscuit focus:outline-none focus:ring-2 focus:ring-cobalt-pale"
        />
      </label>

      {error && <p className="text-warn text-base">{error}</p>}

      <p className="text-sm text-biscuit">{t.modNote}</p>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-full bg-cobalt text-paper px-8 py-4 text-lg tracking-wide hover:bg-cobalt-ink transition-colors disabled:opacity-60"
      >
        {status === "submitting" ? t.submitting : t.submit}
      </button>
    </form>
  );
}
