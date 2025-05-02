"use client";

import { login } from "@/lib/Authenticator";
import Image from "next/image";
import { makasar, montserrat } from "@/fonts";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"; // Assuming you have a Button component
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const { setUser } = useAuth();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget as HTMLFormElement);
    const username = formData.get("email") as string;
    const password = formData.get("password") as string;
    const newUser = await login(username, password);
    if (!newUser) {
      alert("Login failed");
      setUser(null);
      return;
    }
    setUser(newUser);
  };

  return (
    <main className="flex flex-col items-center justify-center px-4 bg-transparent">
      <Image
        src="/icon.svg"
        alt="Logo"
        width={32}
        height={32}
        className="sm:w-64 sm:h-64 w-32 h-32"
      />
      <h1
        className={`text-4xl sm:text-8xl font-bold mb-12 text-center text-dark-blue ${makasar.className}`}
      >
        Cherry Pick
      </h1>
      <form onSubmit={handleLogin} className="flex flex-col w-full max-w-md">
        <p className={`pl-4 ${montserrat.className}`}>E-mail</p>
        <Input
          name="email"
          type="email"
          required
          placeholder="E-mail"
          className={`h-10 ${montserrat.className} rounded-full border-dark-blue border-2 placeholder:text-gray-700 px-4 mb-4`}
        />
        <p className={` pl-4 ${montserrat.className}`}>Password</p>
        <div className="relative">
          <Input
            name="password"
            type={showPassword ? "text" : "password"}
            required
            placeholder="Password"
            className={`h-10 ${montserrat.className} rounded-full border-dark-blue border-2 placeholder:text-gray-700 px-4`}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700 cursor-pointer"
          >
            {showPassword ? "hide" : "show"} {/* TODO: Replace with icon */}
          </button>
        </div>
        <a className="text-sm text-gray-500 hover:text-gray-700 text-right underline cursor-pointer">
          <p className={`pr-4 my-2 ${montserrat.className}`}>
            Forgot Password?
          </p>
        </a>
        <div className="flex flex-row">
          <Button
            type="submit"
            className="rounded-full bg-black text-white h-10 font-semibold"
          >
            Login
          </Button>
          <Button
            type="button"
            className="rounded-full bg-black text-white h-10 font-semibold"
            onClick={() => router.push("/register")}
          >
            Register
          </Button>
        </div>
      </form>
    </main>
  );
}
