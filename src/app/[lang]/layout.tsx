import type { Metadata } from "next";
import Link from "next/link";
import { Marcellus } from "next/font/google";
import "../globals.css";
import Nav from "@/components/Nav";
import { LANGS, S, isLang, DEFAULT_LANG } from "@/data/i18n";
import { ABOUT, LEGAL } from "@/data/legal";

/* Shippori Minchoはnext/fontの同梱メタデータがjapaneseサブセットを含まないため、
   通常のGoogle Fonts <link> で読み込む(globals.cssの --font-shippori と対応)。 */

const marcellus = Marcellus({
  variable: "--font-marcellus",
  weight: "400",
  subsets: ["latin"],
});

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
  return {
    title: { default: `${t.siteName} — ${t.heroTitle}`, template: `%s — ${t.siteName}` },
    description: t.tagline,
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = isLang(rawLang) ? rawLang : DEFAULT_LANG;

  return (
    <html lang={lang} className={marcellus.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-email text-cobalt-ink">
        <Nav lang={lang} />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-line py-8 mt-16">
          <div className="mx-auto max-w-4xl px-5 flex flex-col gap-3 text-xs text-biscuit">
            <p>POINÇON — {S[lang].tagline}</p>
            <nav className="flex gap-4">
              <Link href={`/${lang}/a-propos`} className="hover:text-cobalt">
                {ABOUT[lang].pageTitle}
              </Link>
              <Link href={`/${lang}/mentions-legales`} className="hover:text-cobalt">
                {LEGAL[lang].pageTitle}
              </Link>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
