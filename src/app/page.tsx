"use client";
import Image from "next/image";
import { logout } from "./auth/logout/actions";
import { redirect } from "next/dist/server/api-utils";
import { login } from "./auth/login/actions";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Main page</h1>
      <button onClick={() => logout()}>Sign out</button>
      <Link href={"/auth/login"}>Sign in</Link>
    </div>
  );
}
