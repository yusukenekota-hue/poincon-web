import type { Metadata } from "next";
import { LANGS, S, isLang, DEFAULT_LANG } from "@/data/i18n";
import { MAKERS } from "@/data/makers";
import MakerList from "@/components/MakerList";

export function generateStaticParams() {
  return LANGS.map((l) => ({ lang: l.code }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang = isLang(rawLang) ? rawLang : DEFAULT_LANG;
  const t = S[lang];
  return { title: t.zukanTitle, description: t.tagline };
}

export default async function MarquesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = isLang(rawLang) ? rawLang : DEFAULT_LANG;
  const t = S[lang];

  return (
    <div className="mx-auto max-w-4xl px-5 py-12">
      <header className="mb-8">
        <h1 className="font-display text-3xl text-cobalt-ink mb-1">{t.zukanTitle}</h1>
        <p className="font-latin text-sm text-cobalt/70">{t.zukanSub}</p>
      </header>
      <MakerList lang={lang} makers={MAKERS} />
    </div>
  );
}
