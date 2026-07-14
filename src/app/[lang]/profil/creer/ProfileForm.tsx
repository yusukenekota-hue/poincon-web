"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { isSupabaseConfigured } from "@/lib/supabase/config";
import { A } from "@/data/i18n-auth";
import type { Lang } from "@/data/types";

const USERNAME_RE = /^[a-zA-Z0-9_]{3,}$/;

export default function ProfileForm({ lang, next }: { lang: Lang; next: string }) {
  const t = A[lang];
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [region, setRegion] = useState("");
  const [status, setStatus] = useState<"idle" | "saving">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!username.trim() || !displayName.trim()) {
      setError(t.regNeedBoth);
      return;
    }
    if (!USERNAME_RE.test(username.trim())) {
      setError(t.regInvalid);
      return;
    }
    if (!isSupabaseConfigured()) {
      setError(t.regError);
      return;
    }

    setStatus("saving");
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      setStatus("idle");
      return;
    }

    const { error: insertError } = await supabase.from("profiles").insert({
      id: user.id,
      username: username.trim(),
      display_name: displayName.trim(),
      region: region.trim() || null,
    });

    if (insertError) {
      setStatus("idle");
      setError(insertError.code === "23505" ? t.regTaken : t.regError);
      return;
    }

    router.push(next);
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <label className="flex flex-col gap-2">
        <span className="text-base text-cobalt-ink">{t.regUsername}</span>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder={t.regUsernamePh}
          className="w-full rounded-xl border border-line bg-paper px-5 py-3 text-lg text-cobalt-ink placeholder:text-biscuit focus:outline-none focus:ring-2 focus:ring-cobalt-pale"
        />
      </label>
      <label className="flex flex-col gap-2">
        <span className="text-base text-cobalt-ink">{t.regDisplay}</span>
        <input
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          placeholder={t.regDisplayPh}
          className="w-full rounded-xl border border-line bg-paper px-5 py-3 text-lg text-cobalt-ink placeholder:text-biscuit focus:outline-none focus:ring-2 focus:ring-cobalt-pale"
        />
      </label>
      <label className="flex flex-col gap-2">
        <span className="text-base text-cobalt-ink">{t.regRegionF}</span>
        <input
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          placeholder={t.regRegionPh}
          className="w-full rounded-xl border border-line bg-paper px-5 py-3 text-lg text-cobalt-ink placeholder:text-biscuit focus:outline-none focus:ring-2 focus:ring-cobalt-pale"
        />
      </label>

      {error && <p className="text-warn text-base">{error}</p>}

      <button
        type="submit"
        disabled={status === "saving"}
        className="rounded-full bg-cobalt text-paper px-8 py-4 text-lg tracking-wide hover:bg-cobalt-ink transition-colors disabled:opacity-60"
      >
        {status === "saving" ? t.regCreating : t.regCreate}
      </button>
    </form>
  );
}
