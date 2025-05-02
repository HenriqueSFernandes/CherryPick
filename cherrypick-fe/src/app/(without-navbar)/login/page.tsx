"use client";

import { login } from "@/lib/Authenticator";
import Image from "next/image";
import { makasar, montserrat } from "@/fonts";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"; // Assuming you have a Button component
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { setUser } = useAuth();
  const router = useRouter();

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
        className={`text-4xl sm:text-8xl font-bold mb-12 text-center ${makasar.className}`}
      >
        Cherry Pick
      </h1>
      <form onSubmit={handleLogin} className="flex flex-col w-full max-w-md">
        <p className={`pl-4 ${montserrat.className}`}>Email</p>
        <Input
          name="email"
          type="email"
          required
          placeholder="Email"
          className={`h-10 ${montserrat.className} rounded-full border-black border-2 placeholder:text-gray-700 px-4 mb-4`}
        />
        <p className={` pl-4 ${montserrat.className}`}>Password</p>
        <Input
          name="password"
          type="password"
          required
          placeholder="Password"
          className={`h-10 ${montserrat.className} rounded-full border-black border-2 placeholder:text-gray-700 px-4`}
        />
        <a className="text-sm text-gray-500 hover:text-gray-700 text-right underline">
          <p className={`pr-4 mb-4 ${montserrat.className}`}>
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
