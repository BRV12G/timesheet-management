// app/page.tsx
"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return; // wait for auth
    if (session) router.push("/dashboard");
    else router.push("/login");
  }, [session, status, router]);

  return null; // or loading spinner
}
