import type { Metadata } from "next";

import "./globals.css";
import { LinkProvider } from "../context/LinkContext";



export const metadata: Metadata = {
  title: "Dev Links",
  description: "Built by Bajomo Oluwasemilore",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
       
      >
        <LinkProvider>
        {children}
        </LinkProvider>
      </body>
    </html>
  );
}
