"use client";

import { createContext, useState } from "react";

interface Links {
  url: string;
  platform: string;
  delete: boolean;
}

type AppContextType = {
  links: Links[];
  addLink: () => void;
  platform: string;
  url: string;
  setUrl: React.Dispatch<React.SetStateAction<string>>;
  setPlatform: React.Dispatch<React.SetStateAction<string>>;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelectPlatform: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  updateLinkUrl: (index: number, newUrl: string) => void;
  updateLinkPlatform: (index: number, newPlatform: string) => void;
};

const initialContext: AppContextType = {
  links: [],
  url: "",
  platform: "",
  addLink: () => null,
  setUrl: () => {
    console.warn("setUrl called without a provider!");
  },
  setPlatform: () => {
    console.warn("setUrl called without a provider!");
  },
  handleInput: () => {
    console.warn("setUrl called without a provider!");
  },
  handleSelectPlatform: () => {
    console.warn("setUrl called without a provider!");
  },
  updateLinkUrl: () => {
    console.warn("called without a provider");
  },
  updateLinkPlatform: () => {
    console.warn("called without a provider ");
  },
};

export const LinkContext = createContext<AppContextType>(initialContext);

type AppProviderProps = {
  children: React.ReactNode;
};

export const LinkProvider = ({ children }: AppProviderProps) => {
  // object containing - select value,input value and will also contain the ad link function
  const [platform, setPlatform] = useState<string>("");
  const [url, setUrl] = useState<string>("");

  const [links, setLinks] = useState<Links[]>([]);

  const addLink = () => {
    const newItem: Links = {
      url: url,
      platform: platform,
      delete: false,
    };
    setLinks((prevLinks) => [...prevLinks, newItem]);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const handleSelectPlatform = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPlatform(e.target.value);
  };

  const updateLinkPlatform = (index: number, newPlatform: string) => {
    setLinks((prev) =>
      prev.map((link, i) =>
        i === index ? { ...link, platform: newPlatform } : link
      )
    );
  };

  const updateLinkUrl = (index: number, newUrl: string) => {
    setLinks((prev) =>
      prev.map((link, i) => (i === index ? { ...link, url: newUrl } : link))
    );
  };
  
  return (
    <LinkContext.Provider
      value={{
        links,
        addLink,
        platform,
        url,
        setUrl,
        handleInput,
        setPlatform,
        handleSelectPlatform,
        updateLinkPlatform,
        updateLinkUrl,
      }}
    >
      {children}
    </LinkContext.Provider>
  );
};

export default LinkContext;
