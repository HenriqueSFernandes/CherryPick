"use client";

import { Button } from "../ui/button";
import Logo from "./logo";
import { useAuth } from "@/context/AuthContext";
import { logout } from "@/lib/Authenticator";

export default function Header() {
  const { user, setUser } = useAuth();

  const handleLogout = async () => {
    await logout();
    setUser(null);
  };

  return (
    <header className="h-16 px-4 grid grid-cols-[auto_1fr_auto] items-center">
      <Logo />
      <span></span>
      {user ? (
        <Button className="font-bold bg-dark-red" onClick={handleLogout}>
          {user.email}
        </Button>
      ) : (
        <Button className="font-bold bg-dark-red">Login</Button>
      )}
    </header>
  );
}
