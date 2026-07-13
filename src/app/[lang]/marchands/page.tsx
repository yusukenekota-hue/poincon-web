import type { Metadata } from "next";
import Link from "next/link";
import { LANGS, S, isLang, DEFAULT_LANG } from "@/data/i18n";
import { getPublishedShops } from "@/data/shops";

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
  return { title: S[lang].marchandsTitle };
}

export default async function MarchandsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = isLang(rawLang) ? rawLang : DEFAULT_LANG;
  const t = S[lang];
  const shops = getPublishedShops();

  return (
    <div className="mx-auto max-w-4xl px-5 py-12">
      <header className="mb-4">
        <h1 className="font-display text-3xl text-cobalt-ink mb-1">{t.marchandsTitle}</h1>
        <p className="font-latin text-sm text-cobalt/70">{t.marchandsSub}</p>
      </header>
      <p className="mb-10 rounded-lg border border-warn/40 bg-warn/5 px-4 py-3 text-xs text-warn">
        {t.marchandsNote}
      </p>

      {shops.length === 0 ? (
        <p className="text-sm text-biscuit py-12 text-center">{t.marchandsEmpty}</p>
      ) : (
        <ul className="grid sm:grid-cols-2 gap-4">
          {shops.map((shop) => (
            <li key={shop.id}>
              <Link
                href={`/${lang}/marchands/${shop.id}`}
                className="block border border-line rounded-lg p-5 bg-paper hover:border-cobalt transition-colors"
              >
                <p className="font-display text-lg text-cobalt-ink mb-1">{shop.name}</p>
                <p className="text-xs text-biscuit mb-2">{shop.place[lang]}</p>
                <p className="text-sm text-cobalt-ink/80">{shop.genre[lang]}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
