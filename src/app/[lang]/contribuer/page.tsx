import type { Metadata } from "next";
import Link from "next/link";
import { LANGS, isLang, DEFAULT_LANG } from "@/data/i18n";
import { A } from "@/data/i18n-auth";
import { getCurrentUser } from "@/lib/supabase/session";
import ContributeForm from "./ContributeForm";

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
  return { title: A[lang].contribTitle };
}

export default async function ContribuerPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = isLang(rawLang) ? rawLang : DEFAULT_LANG;
  const t = A[lang];
  const { user, profile } = await getCurrentUser();

  return (
    <div className="mx-auto max-w-xl px-5 py-12">
      <header className="mb-8 text-center">
        <h1 className="font-display text-3xl text-cobalt-ink mb-1">{t.contribTitle}</h1>
        <p className="font-latin text-sm text-cobalt/70">{t.contribSub}</p>
      </header>

      {!user ? (
        <p className="text-lg text-cobalt-ink leading-loose text-center">
          {t.loginRequired}
          {" — "}
          <Link
            href={`/${lang}/connexion?next=${encodeURIComponent(`/${lang}/contribuer`)}`}
            className="text-cobalt underline hover:text-cobalt-ink"
          >
            {t.loginTitle}
          </Link>
        </p>
      ) : !profile ? (
        <p className="text-lg text-cobalt-ink leading-loose text-center">
          {t.needProfile}
          {" — "}
          <Link
            href={`/${lang}/profil/creer?next=${encodeURIComponent(`/${lang}/contribuer`)}`}
            className="text-cobalt underline hover:text-cobalt-ink"
          >
            {t.regTitle}
          </Link>
        </p>
      ) : (
        <ContributeForm lang={lang} />
      )}
    </div>
  );
}
