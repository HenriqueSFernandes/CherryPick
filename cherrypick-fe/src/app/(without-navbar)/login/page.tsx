"use client";

import { login, loginGithub, loginGitlab } from "@/lib/Authenticator";
import Image from "next/image";
import { montserrat } from "@/fonts";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import LoginLogo from "@/../public/loginLogo.svg";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Eye, EyeClosed, Loader2 } from "lucide-react";

export default function LoginPage() {
  const { setUser } = useAuth();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (event: React.FormEvent) => {
    setIsLoading(true);
    event.preventDefault();
    const formData = new FormData(event.currentTarget as HTMLFormElement);
    const username = formData.get("email") as string;
    const password = formData.get("password") as string;
    const newUser = await login(username, password);
    if (!newUser) {
      alert("Login failed");
      setUser(null);
      setIsLoading(false);
      return;
    }
    setUser(newUser);
    setIsLoading(false);
    router.push("/");
  };

  return (
    <main className="flex flex-col items-center justify-center bg-transparent px-4 p-[10px] md:p-[38px] min-h-screen">
      <Link href="/" className="cursor-pointer">
        <Image src={LoginLogo} alt="Logo" width="300" height="300" />
      </Link>
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
            className="absolute inset-y-0 right-0 flex items-center pr-3 text-xs text-red-800/70 hover:text-red-800/70 cursor-pointer"
          >
            {showPassword ? <Eye /> : <EyeClosed />}{" "}
          </button>
        </div>
        <a className="text-sm text-gray-500 hover:text-gray-700 text-right underline cursor-pointer">
          <p className={`pr-4 my-2 ${montserrat.className}`}>
            Forgot Password?
          </p>
        </a>
        <div className="flex flex-row justify-center gap-x-4 mt-4">
          <Button
            type="submit"
            variant="default"
            size="default"
            className="bg-dark-red"
          >
            {isLoading ? (
              <Loader2 className="animate-spin w-8 h-8 " />
            ) : (
              "Login"
            )}
          </Button>
          <Button
            type="submit"
            variant="default"
            size="default"
            className="bg-dark-red text-md"
            onClick={() => router.push("/register")}
          >
            Register
          </Button>
        </div>

        <div className="flex items-center my-6 w-full">
          <div className="flex-grow h-[1px] bg-dark-blue" />
          <span className="mx-4 text-dark-blue font-medium">or</span>
          <div className="flex-grow h-[1px] bg-dark-blue" />
        </div>

        <div className="flex justify-center gap-8">
          <a onClick={() => loginGithub()}>
            <Image
              src="/github-logo.svg"
              alt="Login with GitHub"
              width={64}
              height={64}
              className="cursor-pointer"
            />
          </a>
          <a onClick={() => loginGitlab()}>
            <Image
              src="/gitlab-logo.svg"
              alt="Login with GitLab"
              width={64}
              height={64}
              className="cursor-pointer"
            />
          </a>
        </div>
      </form>
    </main>
  );
}
