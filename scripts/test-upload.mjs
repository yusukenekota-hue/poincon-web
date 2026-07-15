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

// 1) バケットの存在確認
const { data: buckets, error: bErr } = await admin.storage.listBuckets();
console.log("=== buckets ===");
if (bErr) console.log("error:", bErr.message);
else for (const b of buckets) console.log(`${b.id}  public=${b.public}`);

// 2) 実ユーザーのセッションを作り、RLS込みでアップロードを試す
const email = "yusukehexagonal@gmail.com";
const { data: linkData, error: lErr } = await admin.auth.admin.generateLink({
  type: "magiclink",
  email,
});
if (lErr) {
  console.error("generateLink error:", lErr.message);
  process.exit(1);
}

const userClient = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.NEXT_PUBLIC_SUPABASE_ANON_KEY, {
  auth: { autoRefreshToken: false, persistSession: false },
});
const { data: sess, error: vErr } = await userClient.auth.verifyOtp({
  token_hash: linkData.properties.hashed_token,
  type: "magiclink",
});
if (vErr) {
  console.error("verifyOtp error:", vErr.message);
  process.exit(1);
}
const uid = sess.user.id;
console.log("\n=== authenticated as ===");
console.log(sess.user.email, uid);

// 1x1 JPEG
const jpeg = Buffer.from(
  "/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAP//////////////////////////////////////////////////////////////////////////////////////wgALCAABAAEBAREA/8QAFBABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQABPxA=",
  "base64"
);

const path = `${uid}/test-${Date.now()}.jpg`;
const { error: upErr } = await userClient.storage
  .from("contributions")
  .upload(path, jpeg, { contentType: "image/jpeg" });
console.log("\n=== upload as user (RLS) ===");
console.log(upErr ? `FAILED: ${upErr.message}` : `OK: ${path}`);

if (!upErr) {
  const { data: pub } = userClient.storage.from("contributions").getPublicUrl(path);
  const res = await fetch(pub.publicUrl);
  console.log(`public URL fetch: HTTP ${res.status}`);
  // 後片付け
  await admin.storage.from("contributions").remove([path]);
  console.log("cleaned up test file");
}

// 3) contributionsテーブルへのinsertも確認
const { error: insErr } = await userClient.from("contributions").insert({
  user_id: uid,
  maker_name: "TEST",
  label: "TEST ENTRY",
  period: "test",
  photo_mark_url: "https://example.com/test.jpg",
  status: "pending",
});
console.log("\n=== insert contribution as user (RLS) ===");
console.log(insErr ? `FAILED: ${insErr.message}` : "OK");
if (!insErr) {
  await admin.from("contributions").delete().eq("label", "TEST ENTRY");
  console.log("cleaned up test row");
}
