import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LANGS, S, isLang, DEFAULT_LANG } from "@/data/i18n";
import { MAKERS, getMark } from "@/data/makers";
import MarkStamp from "@/components/MarkStamp";

export function generateStaticParams() {
  return LANGS.flatMap((l) =>
    MAKERS.flatMap((maker) =>
      maker.marks.map((mark) => ({ lang: l.code, maker: maker.id, mark: mark.id }))
    )
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; maker: string; mark: string }>;
}): Promise<Metadata> {
  const { lang: rawLang, maker: makerId, mark: markId } = await params;
  const lang = isLang(rawLang) ? rawLang : DEFAULT_LANG;
  const found = getMark(makerId, markId);
  if (!found) return {};
  return {
    title: `${found.mark.label} — ${found.maker.name}`,
    description: found.mark.desc[lang],
  };
}

export default async function MarkPage({
  params,
}: {
  params: Promise<{ lang: string; maker: string; mark: string }>;
}) {
  const { lang: rawLang, maker: makerId, mark: markId } = await params;
  const lang = isLang(rawLang) ? rawLang : DEFAULT_LANG;
  const t = S[lang];
  const found = getMark(makerId, markId);
  if (!found) notFound();
  const { maker, mark } = found;

  return (
    <div className="mx-auto max-w-2xl px-5 py-10">
      <Link
        href={`/${lang}/marques/${maker.id}`}
        className="inline-block text-base text-cobalt hover:text-cobalt-ink mb-6"
      >
        ← {maker.name}
      </Link>

      <header className="flex flex-col items-center text-center mb-8">
        <MarkStamp mark={mark} size={150} />
        <h1 className="font-latin text-4xl text-cobalt-ink mt-4">{mark.label}</h1>
      </header>

      <div className="flex flex-wrap justify-center gap-3 mb-10">
        <span className="rounded-full bg-cobalt-pale px-5 py-2 text-base text-cobalt-ink">
          {mark.period}
        </span>
        <span className="rounded-full bg-cobalt-pale px-5 py-2 text-base text-cobalt-ink">
          {maker.region[lang]}
        </span>
        <span className="rounded-full bg-cobalt-pale px-5 py-2 text-base text-cobalt-ink">
          {mark.style[lang]}
        </span>
      </div>

      <section className="rounded-2xl bg-paper border border-line p-6 mb-6">
        <h2 className="font-display text-xl text-cobalt mb-3">{t.desc}</h2>
        <p className="text-lg text-cobalt-ink leading-loose">{mark.desc[lang]}</p>
      </section>

      <p className="text-center text-sm text-biscuit">
        {t.contributor}: {mark.by}
      </p>
    </div>
  );
}
