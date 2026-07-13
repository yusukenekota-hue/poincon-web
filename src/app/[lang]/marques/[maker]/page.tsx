import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LANGS, S, isLang, DEFAULT_LANG } from "@/data/i18n";
import { MAKERS, getMaker } from "@/data/makers";
import MarkStamp from "@/components/MarkStamp";

export function generateStaticParams() {
  return LANGS.flatMap((l) => MAKERS.map((m) => ({ lang: l.code, maker: m.id })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; maker: string }>;
}): Promise<Metadata> {
  const { lang: rawLang, maker: makerId } = await params;
  const lang = isLang(rawLang) ? rawLang : DEFAULT_LANG;
  const maker = getMaker(makerId);
  if (!maker) return {};
  return {
    title: maker.name,
    description: maker.blurb[lang],
  };
}

export default async function MakerPage({
  params,
}: {
  params: Promise<{ lang: string; maker: string }>;
}) {
  const { lang: rawLang, maker: makerId } = await params;
  const lang = isLang(rawLang) ? rawLang : DEFAULT_LANG;
  const t = S[lang];
  const maker = getMaker(makerId);
  if (!maker) notFound();

  return (
    <div className="mx-auto max-w-4xl px-5 py-12">
      <Link href={`/${lang}/marques`} className="inline-block text-base text-cobalt hover:text-cobalt-ink">
        ← {t.backList}
      </Link>

      <header className="mt-6 mb-10">
        <h1 className="font-display text-4xl text-cobalt-ink mb-2">{maker.name}</h1>
        <p className="text-base text-biscuit mb-5">
          {maker.region[lang]} · {maker.period}
        </p>
        <p className="max-w-2xl text-lg text-cobalt-ink leading-loose">{maker.blurb[lang]}</p>
      </header>

      <h2 className="font-display text-xl text-cobalt mb-4">{t.marksListLabel}</h2>
      <ul className="grid sm:grid-cols-2 gap-4">
        {maker.marks.map((mark) => (
          <li key={mark.id}>
            <Link
              href={`/${lang}/marques/${maker.id}/${mark.id}`}
              className="flex items-center gap-4 border border-line rounded-xl p-5 bg-paper hover:border-cobalt transition-colors"
            >
              <MarkStamp mark={mark} size={72} />
              <div className="min-w-0">
                <p className="font-latin text-xl text-cobalt-ink truncate">{mark.label}</p>
                <p className="text-base text-biscuit mt-1">{mark.period}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
