"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );
  const [loginError, setLoginError] = useState("");
  const router = useRouter();

  const validateForm = () => {
    const newErrors: { email?: string; password?: string } = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    //  Email validation
    if (!email) newErrors.email = "Email is required";
    else if (!emailRegex.test(email)) newErrors.email = "Invalid email format";

    // Password validation
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{6,}$/;

    if (!password) newErrors.password = "Password is required";
    else if (!passwordRegex.test(password)) {
      newErrors.password =
        "Password must be at least 6 characters long and contain at least one uppercase letter, one digit, and one special character.";
    }
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError(""); // reset login error

    if (!validateForm()) return; // validate form
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
      {/* Left Section - Login Form */}
      <div className="w-1/2 flex flex-col justify-center items-start px-24">
        <h2 className="text-2xl font-bold leading-tight mb-6  text-gray-900">
          Welcome back
        </h2>{" "}
        {/* mb-6 for spacing match */}
        <form onSubmit={handleLogin} className="w-full space-y-4">
          <div className="flex flex-col gap-2">
            <label className="text-md font-medium text-gray-900 leading-[21px] ">
              Email
            </label>{" "}
            {/* Added label */}
            <input
              className="border border-gray-300 px-4 py-3 w-full  rounded-lg text-md text-gray-600 "
              placeholder="name@example.com"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-md font-medium text-gray-900 leading-[21px]">
              Password
            </label>{" "}
            {/* Added label */}
            <input
              className="border border-gray-300 px-4 py-3 w-full  rounded-lg text-md  text-gray-500 "
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>
          <div className="flex items-center gap-2 text-md">
            <input
              type="checkbox"
              className="w-4.5 h-4.5 border border-0.5 bg-gray-200 rounded  border-gray-300  checked:bg-blue-600 checked:border-blue-600 "
            />
            <label className="text-gray-600">Remember me</label>
          </div>
          <button className="bg-blue-600 text-white px-5 py-3.5 w-full rounded-lg font-medium text-sm cursor-pointer">
            Sign in
          </button>
          {loginError && (
            <p className="text-red-500 text-sm text-center">{loginError}</p>
          )}
        </form>
      </div>

      {/* Right Section - Intro Text */}
      <div className="w-1/2 bg-blue-600 text-white flex items-center px-30">
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl font-semibold mb-4 leading-[60px]">
            ticktock
          </h1>
          <p className="text-lg  text-gray-200 text-justify  ">
            Introducing ticktock, our cutting-edge timesheet web application
            designed to revolutionize how you manage employee work hours. With
            ticktock, you can effortlessly track and monitor employee attendance
            and productivity from anywhere, anytime, using any
            internet-connected device.
          </p>
        </div>
      </div>
    </div>
  );
}
