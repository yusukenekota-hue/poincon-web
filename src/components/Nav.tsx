"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LANGS, S } from "@/data/i18n";
import { A } from "@/data/i18n-auth";
import { createClient } from "@/lib/supabase/client";
import { isSupabaseConfigured } from "@/lib/supabase/config";
import type { Lang } from "@/data/types";

/* langを切り替える際、現在のパス内の言語セグメントだけ差し替える */
export default function Nav({ lang }: { lang: Lang }) {
  const t = S[lang];
  const ta = A[lang];
  const pathname = usePathname();
  const router = useRouter();
  const rest = pathname.split("/").slice(2).join("/");
  const [loggedIn, setLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    if (!isSupabaseConfigured()) {
      setLoggedIn(false);
      return;
    }
    const supabase = createClient();
    supabase.auth.getUser().then(({ data }) => setLoggedIn(!!data.user));
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      setLoggedIn(!!session?.user);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  async function handleLogout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push(`/${lang}`);
    router.refresh();
  }

  return (
    <header className="border-b border-line bg-paper/80 backdrop-blur sticky top-0 z-10">
      <div className="mx-auto max-w-4xl px-5 py-4 flex items-center justify-between gap-4">
        <Link
          href={`/${lang}`}
          className="font-display text-xl tracking-[0.15em] text-cobalt-ink"
        >
          {t.siteName}
        </Link>
        <nav className="flex items-center gap-5 text-sm">
          <Link href={`/${lang}/marques`} className="text-cobalt-ink hover:text-cobalt">
            {t.navMarques}
          </Link>
          <Link href={`/${lang}/marchands`} className="text-cobalt-ink hover:text-cobalt">
            {t.navMarchands}
          </Link>
          <Link href={`/${lang}/contribuer`} className="text-cobalt-ink hover:text-cobalt">
            {ta.navContribute}
          </Link>
          {loggedIn ? (
            <button onClick={handleLogout} className="text-cobalt-ink hover:text-cobalt">
              {ta.navLogout}
            </button>
          ) : (
            <Link href={`/${lang}/connexion`} className="text-cobalt-ink hover:text-cobalt">
              {ta.navLogin}
            </Link>
          )}
          <span className="flex gap-2 text-xs text-biscuit">
            {LANGS.map((l, i) => (
              <span key={l.code} className="flex items-center gap-2">
                {i > 0 && <span className="opacity-40">/</span>}
                <Link
                  href={`/${l.code}${rest ? `/${rest}` : ""}`}
                  className={l.code === lang ? "text-cobalt font-semibold" : "hover:text-cobalt"}
                >
                  {l.code.toUpperCase()}
                </Link>
              </span>
            ))}
          </span>
        </nav>
      </div>
    </header>
  );
}
