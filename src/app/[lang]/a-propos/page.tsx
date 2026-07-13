import type { Metadata } from "next";
import { LANGS, isLang, DEFAULT_LANG } from "@/data/i18n";
import { ABOUT } from "@/data/legal";

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
  return { title: ABOUT[lang].pageTitle };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = isLang(rawLang) ? rawLang : DEFAULT_LANG;
  const t = ABOUT[lang];

  return (
    <div className="mx-auto max-w-2xl px-5 py-16">
      <h1 className="font-display text-3xl text-cobalt-ink mb-8">{t.pageTitle}</h1>
      <div className="space-y-5">
        {t.body.map((line, i) => (
          <p key={i} className="text-cobalt-ink/85 leading-relaxed">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}
