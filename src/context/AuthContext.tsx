"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { createClient } from "@/utils/superbase/client";
import { getProfile } from "@/lib/fetchProfile";

interface UserProfile {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  avatar_url?: string;
}

interface AuthContextType {
  user: UserProfile | null;
  loading: boolean;
  signOut: () => Promise<void>;
  refreshProfile: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  // Load user profile on mount
  useEffect(() => {
    const loadUser = async () => {
      setLoading(true);
    const supabase = await createClient()

      const { data } = await supabase.auth.getSession();
      if (data.session) {
        try {
          const profile = await getProfile();
          setUser(profile);
        } catch (error) {
          console.error(error);
          setUser(null);
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    };

    loadUser();

    // Listen to auth changes (login/logout)
    const supabase = createClient()
    const { data: listener } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        if (session) {
          const profile = await getProfile();
          setUser(profile);
        } else {
          setUser(null);
        }
      }
    );

    return () => listener.subscription.unsubscribe();
  }, []);

  const signOut = async () => {
    const supabase = createClient()
    await supabase.auth.signOut();
    setUser(null);
  };

  const refreshProfile = async () => {
    const profile = await getProfile();
    setUser(profile);
  };

  return (
    <AuthContext.Provider value={{ user, loading, signOut, refreshProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
