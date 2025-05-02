"use client";

import { login, logout } from "@/lib/Authenticator";
import { useState } from "react";

export default function LoginPage() {
  const [currentUser, setCurrentUser] = useState("");

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget as HTMLFormElement);
    const username = formData.get("email") as string;
    const password = formData.get("password") as string;
    const newUsername = await login(username, password);
    if (!newUsername) {
      alert("Login failed");
      return;
    }
    setCurrentUser(newUsername);
  };

  const handleLogout = async () => {
    await logout();
    setCurrentUser("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <p>Current User: {currentUser}</p>
      <button onClick={handleLogout}>Logout</button>

      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
