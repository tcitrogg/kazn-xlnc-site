import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../public/styles/main.css";
import { metainfo } from "@/lib/config";
import { Toaster } from "@/components/ui/sonner"
import Cursor from "@/components/Cursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: metainfo.title,
  authors: metainfo.authors,
  description: metainfo.description,
  icons: ["/favicon.svg"],
  openGraph: {
    type: "website",
    url: metainfo.url,
    title: metainfo.title,
    description: metainfo.description,
    images: [
      {
        url: `${metainfo.url}/og.png`,
        width: 1200,
        height: 630,
        alt: metainfo.title,
      },
      { url: "/favicon.svg" }
    ],
    siteName: metainfo.title,
    locale: "en_US",
    // images: [{ url: "/og.png" },],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style>
          @import url('https://fonts.cdnfonts.com/css/creato-display');
          @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap');
        </style>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-50 text-neutral-900`}
      >
        <Cursor/>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
