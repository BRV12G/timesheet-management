"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    if (res?.ok) router.push("/dashboard");
    else alert("Invalid credentials");
  };

  return (
    <div className="flex min-h-screen">
      <div className="w-1/2 flex flex-col justify-center items-center px-12">
        <h2 className="text-2xl font-semibold mb-4">Welcome back</h2>
        <form onSubmit={handleLogin} className="w-full space-y-4">
          <input
            className="border px-4 py-2 w-full rounded"
            placeholder="name@example.com"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="border px-4 py-2 w-full rounded"
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-blue-600 text-white px-4 py-2 w-full rounded">
            Sign in
          </button>
        </form>
        <p className="mt-10 text-sm text-gray-500">© 2024 tentwenty</p>
      </div>
      <div className="w-1/2 bg-blue-600 text-white flex items-center px-20">
        <div>
          <h1 className="text-4xl font-bold mb-4">ticktock</h1>
          <p>
            Introducing ticktock, our cutting-edge timesheet web application designed to revolutionize how you manage employee work hours...
          </p>
        </div>
      </div>
    </div>
  );
}
