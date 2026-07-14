import "server-only";
import { createClient as createSupabaseClient } from "@supabase/supabase-js";

/* 管理画面の承認/却下操作専用。SERVICE_ROLE_KEYはRLSを無視するため、
   サーバー側(Route Handler / Server Action)以外から絶対に import しないこと。
   このファイルはクライアントバンドルに含まれないよう "server-only" で保護している。 */
export function createAdminClient() {
  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { autoRefreshToken: false, persistSession: false } }
  );
}
