import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";

/* サーバーコンポーネント/Route Handler用。ログイン中ユーザーのセッションを引き継ぐ(RLS適用)。 */
export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            /* Server Componentからの呼び出しではCookie書き込みができない。
               proxy.tsでセッションを更新していれば無視してよい。 */
          }
        },
      },
    }
  );
}
