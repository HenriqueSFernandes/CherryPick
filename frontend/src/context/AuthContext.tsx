"use client";

import { getUser } from "@/lib/Authenticator";
import type { Models } from "appwrite"; // This is where `User<Preferences>` comes from
import React, { createContext, useContext, useEffect, useState } from "react";

interface AuthContextType {
  user: Models.User<Models.Preferences> | null;
  setUser: React.Dispatch<
    React.SetStateAction<Models.User<Models.Preferences> | null>
  >;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<Models.User<Models.Preferences> | null>(
    null,
  );

  useEffect(() => {
    const fetchUser = async () => {
      const fetchedUser = await getUser();
      if (fetchedUser) {
        setUser(fetchedUser);
      } else {
        setUser(null);
      }
    };
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
