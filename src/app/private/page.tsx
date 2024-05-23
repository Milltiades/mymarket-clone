import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { logout } from "../auth/logout/actions";

export default async function PrivatePage() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/auth/login");
  }

  return (
    <>
      <p>Hello {data.user.email}</p>

      <Link href={"/"}>Go to home page</Link>
    </>
  );
}
