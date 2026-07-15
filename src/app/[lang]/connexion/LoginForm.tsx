"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { isSupabaseConfigured } from "@/lib/supabase/config";
import { A } from "@/data/i18n-auth";
import type { Lang } from "@/data/types";

export default function LoginForm({ lang, next }: { lang: Lang; next: string }) {
  const t = A[lang];
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isSupabaseConfigured()) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    const supabase = createClient();
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback?next=${encodeURIComponent(next)}`,
      },
    });
    setStatus(error ? "error" : "sent");
  }

  if (status === "sent") {
    return (
      <p className="text-lg text-cobalt-ink leading-loose text-center">{t.loginSent}</p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={t.loginEmailPh}
        className="w-full rounded-xl border border-line bg-paper px-5 py-4 text-lg text-cobalt-ink placeholder:text-biscuit focus:outline-none focus:ring-2 focus:ring-cobalt-pale"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-full bg-cobalt text-paper px-8 py-4 text-lg tracking-wide hover:bg-cobalt-ink transition-colors disabled:opacity-60"
      >
        {status === "sending" ? t.loginSending : t.loginSend}
      </button>
      {status === "error" && <p className="text-warn text-base text-center">{t.loginError}</p>}
    </form>
  );
}
