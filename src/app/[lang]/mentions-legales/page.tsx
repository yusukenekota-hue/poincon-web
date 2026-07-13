import type { Metadata } from "next";
import { LANGS, isLang, DEFAULT_LANG } from "@/data/i18n";
import { LEGAL, type LegalSection } from "@/data/legal";

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
  return { title: LEGAL[lang].pageTitle };
}

function Section({ section }: { section: LegalSection }) {
  return (
    <section className="mb-10">
      <h2 className="font-display text-lg text-cobalt mb-3">{section.title}</h2>
      <ul className="space-y-2">
        {section.body.map((line, i) => (
          <li key={i} className="text-sm text-cobalt-ink/85 leading-relaxed">
            {line}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default async function LegalPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = isLang(rawLang) ? rawLang : DEFAULT_LANG;
  const t = LEGAL[lang];

  return (
    <div className="mx-auto max-w-2xl px-5 py-12">
      <h1 className="font-display text-3xl text-cobalt-ink mb-4">{t.pageTitle}</h1>
      <p className="mb-10 rounded-lg border border-warn/40 bg-warn/5 px-4 py-3 text-xs text-warn">
        {t.draftNotice}
      </p>
      <Section section={t.terms} />
      <Section section={t.privacy} />
      <Section section={t.mentions} />
    </div>
  );
}
