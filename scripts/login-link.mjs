import { readFileSync } from "node:fs";
import { createClient } from "@supabase/supabase-js";

const env = Object.fromEntries(
  readFileSync(new URL("../.env.local", import.meta.url), "utf-8")
    .split(/\r?\n/)
    .filter((l) => l && !l.startsWith("#") && l.includes("="))
    .map((l) => {
      const i = l.indexOf("=");
      return [l.slice(0, i).trim(), l.slice(i + 1).trim()];
    })
);

const admin = createClient(
  env.NEXT_PUBLIC_SUPABASE_URL,
  env.SUPABASE_SERVICE_ROLE_KEY,
  { auth: { autoRefreshToken: false, persistSession: false } }
);

const email = process.argv[2];
const next = process.argv[3] ?? "/ja/profil/creer";

const { data, error } = await admin.auth.admin.generateLink({
  type: "magiclink",
  email,
});
if (error) {
  console.error("generateLink error:", error.message);
  process.exit(1);
}

// token_hash を使い、アプリ側の /auth/callback で verifyOtp する形に組み立てる。
// これなら申請ブラウザに依存せず(PKCE不要で)セッションを確立できる。
const tokenHash = data.properties.hashed_token;
const url =
  `http://localhost:3000/auth/callback` +
  `?token_hash=${encodeURIComponent(tokenHash)}` +
  `&type=magiclink` +
  `&next=${encodeURIComponent(next)}`;

console.log(url);
