import type React from "react";
import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "PureDNS - A public DNS for safer browsing in Indonesia",
  description:
    "A free, secure, and fast DNS service designed for a safer browsing experience in Indonesia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://api-scout.reflexapi.net/app"
          data-website-id="2c2bc413-b836-4047-9c31-ac650a796552"
        ></script>
      </head>
      <body
        className={`${inter.className} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
