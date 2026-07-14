import type { Metadata } from "next";
import Link from "next/link";
import { getCurrentUser, isAdmin } from "@/lib/supabase/session";
import { createAdminClient } from "@/lib/supabase/admin";
import type { Contribution } from "@/data/types";
import { approveContribution, rejectContribution } from "./actions";

export const metadata: Metadata = { title: "管理画面 — POINÇON" };

export default async function AdminPage() {
  const { user, profile } = await getCurrentUser();

  if (!user || !isAdmin(profile)) {
    return (
      <div className="mx-auto max-w-md px-5 py-16 text-center">
        <p className="text-lg text-cobalt-ink">このページを見る権限がありません</p>
        <Link href="/ja/connexion" className="text-cobalt underline">
          ログイン
        </Link>
      </div>
    );
  }

  const admin = createAdminClient();
  const { data: pending } = await admin
    .from("contributions")
    .select("*")
    .eq("status", "pending")
    .order("created_at", { ascending: true })
    .returns<Contribution[]>();

  const contributions = pending ?? [];

  return (
    <div className="mx-auto max-w-3xl px-5 py-12">
      <h1 className="font-display text-3xl text-cobalt-ink mb-8">承認待ちの投稿</h1>

      {contributions.length === 0 ? (
        <p className="text-lg text-biscuit text-center py-12">承認待ちの投稿はありません</p>
      ) : (
        <ul className="flex flex-col gap-6">
          {contributions.map((c) => (
            <li key={c.id} className="rounded-2xl border border-line bg-paper p-6">
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.photo_mark_url}
                  alt="刻印写真"
                  className="w-full rounded-lg object-cover aspect-[4/3]"
                />
                {c.photo_piece_url && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={c.photo_piece_url}
                    alt="品物写真"
                    className="w-full rounded-lg object-cover aspect-[4/3]"
                  />
                )}
              </div>
              <p className="font-latin text-xl text-cobalt-ink">{c.label}</p>
              <p className="text-base text-biscuit mb-2">
                {c.maker_name} · {c.period} {c.style ? `· ${c.style}` : ""}
              </p>
              {c.description && (
                <p className="text-base text-cobalt-ink/85 leading-relaxed mb-4">
                  {c.description}
                </p>
              )}
              <form action={async () => {
                "use server";
                await approveContribution(c.id);
              }} className="inline">
                <button className="rounded-full bg-cobalt text-paper px-5 py-2 text-sm mr-3 hover:bg-cobalt-ink transition-colors">
                  承認する
                </button>
              </form>
              <form action={async () => {
                "use server";
                await rejectContribution(c.id);
              }} className="inline">
                <button className="rounded-full border border-warn text-warn px-5 py-2 text-sm hover:bg-warn/10 transition-colors">
                  却下する
                </button>
              </form>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
