import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LANGS, S, isLang, DEFAULT_LANG } from "@/data/i18n";
import { getPublishedShops, getShop } from "@/data/shops";

export function generateStaticParams() {
  return LANGS.flatMap((l) =>
    getPublishedShops().map((shop) => ({ lang: l.code, shop: shop.id }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; shop: string }>;
}): Promise<Metadata> {
  const { lang: rawLang, shop: shopId } = await params;
  const lang = isLang(rawLang) ? rawLang : DEFAULT_LANG;
  const shop = getShop(shopId);
  if (!shop) return {};
  return { title: shop.name, description: shop.note[lang] };
}

export default async function ShopPage({
  params,
}: {
  params: Promise<{ lang: string; shop: string }>;
}) {
  const { lang: rawLang, shop: shopId } = await params;
  const lang = isLang(rawLang) ? rawLang : DEFAULT_LANG;
  const t = S[lang];
  const shop = getShop(shopId);
  if (!shop) notFound();

  return (
    <div className="mx-auto max-w-2xl px-5 py-12">
      <Link href={`/${lang}/marchands`} className="text-xs text-biscuit hover:text-cobalt">
        ← {t.backShops}
      </Link>

      <header className="mt-6 mb-8">
        <h1 className="font-display text-3xl text-cobalt-ink mb-2">{shop.name}</h1>
        <p className="text-sm text-biscuit mb-1">{shop.place[lang]}</p>
        <p className="text-sm text-cobalt">{shop.owner[lang]}</p>
      </header>

      <section className="mb-8">
        <p className="text-cobalt-ink/85 leading-relaxed mb-3">{shop.genre[lang]}</p>
        <p className="text-cobalt-ink/85 leading-relaxed">{shop.note[lang]}</p>
      </section>

      <a
        href={shop.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block rounded-full bg-cobalt text-paper px-6 py-2.5 text-sm hover:bg-cobalt-ink transition-colors"
      >
        {t.visitInstagram}
      </a>
    </div>
  );
}
