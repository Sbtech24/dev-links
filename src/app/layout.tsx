import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { LinkProvider } from "./context/LinkContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LinkProvider>
        {children}
        </LinkProvider>
      </body>
    </html>
  );
}
