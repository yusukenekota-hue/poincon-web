import Link from "next/link";
import { LANGS, S, isLang, DEFAULT_LANG } from "@/data/i18n";
import { MAKERS } from "@/data/makers";

export function generateStaticParams() {
  return LANGS.map((l) => ({ lang: l.code }));
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = isLang(rawLang) ? rawLang : DEFAULT_LANG;
  const t = S[lang];
  const markCount = MAKERS.reduce((n, m) => n + m.marks.length, 0);

  return (
    <div className="mx-auto max-w-4xl px-5 py-16">
      <section className="text-center mb-16">
        <p className="font-latin tracking-[0.3em] text-sm text-gold mb-4">POINÇON</p>
        <h1 className="font-display text-4xl md:text-5xl text-cobalt-ink mb-6">
          {t.heroTitle}
        </h1>
        <p className="max-w-xl mx-auto text-xl text-cobalt-ink leading-loose mb-10">
          {t.tagline}
        </p>
        <Link
          href={`/${lang}/marques`}
          className="inline-block rounded-full bg-cobalt text-paper px-10 py-4 text-lg tracking-wide hover:bg-cobalt-ink transition-colors"
        >
          {t.heroCta}
        </Link>
        <p className="mt-5 text-base text-biscuit">
          {MAKERS.length} {lang === "ja" ? "窯" : ""} · {markCount}{" "}
          {lang === "ja" ? "刻印" : lang === "fr" ? "marques" : "marks"}
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        {t.obProps.map(([title, body]) => (
          <div key={title} className="rounded-xl p-6 bg-paper">
            <h2 className="font-display text-xl text-cobalt mb-2">{title}</h2>
            <p className="text-base text-cobalt-ink/80 leading-relaxed">{body}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
