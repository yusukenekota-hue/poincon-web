"use server";

import { revalidatePath } from "next/cache";
import { getCurrentUser, isAdmin } from "@/lib/supabase/session";
import { createAdminClient } from "@/lib/supabase/admin";

/* サーバーアクション自体もisAdminを再検証する(多重防御。ページ側のガードだけに頼らない)。 */
async function assertAdmin() {
  const { profile } = await getCurrentUser();
  if (!isAdmin(profile)) throw new Error("forbidden");
}

export async function approveContribution(id: string) {
  await assertAdmin();
  const admin = createAdminClient();
  const { data: contribution, error } = await admin
    .from("contributions")
    .update({ status: "approved" })
    .eq("id", id)
    .select("user_id")
    .single();
  if (error) throw error;

  if (contribution) {
    const { data: profile } = await admin
      .from("profiles")
      .select("approved_count")
      .eq("id", contribution.user_id)
      .single();
    if (profile) {
      await admin
        .from("profiles")
        .update({ approved_count: profile.approved_count + 1 })
        .eq("id", contribution.user_id);
    }
  }

  revalidatePath("/admin");
}

export async function rejectContribution(id: string) {
  await assertAdmin();
  const admin = createAdminClient();
  const { error } = await admin.from("contributions").update({ status: "rejected" }).eq("id", id);
  if (error) throw error;
  revalidatePath("/admin");
}
