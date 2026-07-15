import { readFileSync } from "node:fs";
import { createClient } from "@supabase/supabase-js";

// .env.local を読む
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

const target = process.argv[2];

const { data, error } = await admin.auth.admin.listUsers();
if (error) {
  console.error("listUsers error:", error.message);
  process.exit(1);
}

console.log("=== users ===");
for (const u of data.users) {
  console.log(
    `${u.email}  confirmed=${!!u.email_confirmed_at}  id=${u.id}`
  );
}

if (target) {
  const u = data.users.find((x) => x.email === target);
  if (!u) {
    console.log(`\n(no user with email ${target})`);
  } else if (u.email_confirmed_at) {
    console.log(`\n${target} は既に確認済みです。`);
  } else {
    const { error: uErr } = await admin.auth.admin.updateUserById(u.id, {
      email_confirm: true,
    });
    console.log(uErr ? `confirm error: ${uErr.message}` : `\n${target} を確認済みにしました。`);
  }
}
