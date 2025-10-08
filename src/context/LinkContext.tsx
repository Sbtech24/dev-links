"use client";

import { createContext, useState, useContext } from "react";
import { addLinks, getUserLinks, removeLinks } from "@/lib/links";
import { useAuth } from "./AuthContext";

interface Link {
  id: string;
  platform: string;
  url: string;
}

interface LinkContextType {
  links: Link[];
  addNewLink: (platform: string, url: string) => Promise<void>;
  removeLink: (id: string) => Promise<void>;
  refreshLinks: () => Promise<void>;
  updateLinkPlatform: (id: string, platform: string) => void;
  updateLinkUrl: (id: string, url: string) => void;
  platform: string;
  url: string;
  setPlatform: React.Dispatch<React.SetStateAction<string>>;
  setUrl: React.Dispatch<React.SetStateAction<string>>;
}

const LinkContext = createContext<LinkContextType | undefined>(undefined);

export const LinkProvider = ({ children }: { children: React.ReactNode }) => {
  const [links, setLinks] = useState<Link[]>([]);
  const [platform, setPlatform] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const { user } = useAuth();

  // ➕ Add new link
  const addNewLink = async (platform: string, url: string) => {
    if (!user) {
      console.error("User not logged in");
      return;
    }

    const newLink: Link = {
      id: Math.random().toString(36).substring(2, 9), // Temporary ID for UI
      platform,
      url,
    };

    try {
      const savedLink = await addLinks(user.id, platform, url);
      setLinks((prev) => [...prev, savedLink || newLink]);
    } catch (err) {
      console.error("Error saving link:", err);
      setLinks((prev) => [...prev, newLink]);
    }
  };

  // 🧠 Update platform in local state
  const updateLinkPlatform = (id: string, newPlatform: string) => {
    setLinks((prev) =>
      prev.map((link) =>
        link.id === id ? { ...link, platform: newPlatform } : link
      )
    );
  };

  // 🧠 Update URL in local state
  const updateLinkUrl = (id: string, newUrl: string) => {
    setLinks((prev) =>
      prev.map((link) => (link.id === id ? { ...link, url: newUrl } : link))
    );
  };

  // 🔁 Refresh from Supabase
  const refreshLinks = async () => {
    if (!user) return;
    const data = await getUserLinks(user.id);
    setLinks(data || []);
  };

  // ❌ Remove link
  const removeLink = async (id: string) => {
    try {
      await removeLinks(id);
    } catch (err) {
      console.warn("Error deleting link:", err);
    }
    setLinks((prev) => prev.filter((link) => link.id !== id));
  };

  // get links from suoerbase '

    return (
    <LinkContext.Provider
      value={{
        links,
        addNewLink,
        removeLink,
        refreshLinks,
        updateLinkPlatform,
        updateLinkUrl,
        platform,
        url,
        setPlatform,
        setUrl,
      }}
    >
      {children}
    </LinkContext.Provider>
  );
};

export const useLinks = () => {
  const context = useContext(LinkContext);
  if (!context) throw new Error("useLinks must be used within LinkProvider");
  return context;
};

export default LinkContext;
