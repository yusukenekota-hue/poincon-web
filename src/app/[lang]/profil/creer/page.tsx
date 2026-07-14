import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { LANGS, isLang, DEFAULT_LANG } from "@/data/i18n";
import { A } from "@/data/i18n-auth";
import { getCurrentUser } from "@/lib/supabase/session";
import ProfileForm from "./ProfileForm";

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
  return { title: A[lang].regTitle };
}

export default async function CreateProfilePage({
  params,
  searchParams,
}: {
  params: Promise<{ lang: string }>;
  searchParams: Promise<{ next?: string }>;
}) {
  const { lang: rawLang } = await params;
  const { next } = await searchParams;
  const lang = isLang(rawLang) ? rawLang : DEFAULT_LANG;
  const t = A[lang];

  const { user, profile } = await getCurrentUser();
  if (!user) redirect(`/${lang}/connexion`);
  if (profile) redirect(next ?? `/${lang}/contribuer`);

  return (
    <div className="mx-auto max-w-md px-5 py-16">
      <h1 className="font-display text-3xl text-cobalt-ink mb-3 text-center">{t.regTitle}</h1>
      <p className="text-lg text-cobalt-ink/85 leading-loose mb-8 text-center">{t.regIntro}</p>
      <ProfileForm lang={lang} next={next ?? `/${lang}/contribuer`} />
    </div>
  );
}
