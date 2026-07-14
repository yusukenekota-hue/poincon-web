import "server-only";
import { createClient } from "./server";
import { isSupabaseConfigured } from "./config";
import type { Profile } from "@/data/types";

/* サーバーコンポーネントから、現在ログイン中のユーザーとプロフィールをまとめて取得する。
   Supabase未接続の環境では図鑑閲覧を止めないよう、常に未ログイン扱いで返す。 */
export async function getCurrentUser() {
  if (!isSupabaseConfigured()) return { user: null, profile: null };

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return { user: null, profile: null };

  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .maybeSingle<Profile>();

  return { user, profile };
}

const ADMIN_USERNAMES = (process.env.ADMIN_USERNAMES ?? "")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

export function isAdmin(profile: Profile | null) {
  return !!profile && ADMIN_USERNAMES.includes(profile.username);
}
