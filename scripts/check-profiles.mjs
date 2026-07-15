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

const admin = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, {
  auth: { autoRefreshToken: false, persistSession: false },
});

const { data, error } = await admin.from("profiles").select("*");
if (error) {
  console.error("error:", error.message);
  process.exit(1);
}
console.log("=== profiles ===");
if (!data.length) console.log("(none)");
for (const p of data) {
  console.log(`username=${p.username}  display=${p.display_name}  region=${p.region ?? "-"}  id=${p.id}`);
}
