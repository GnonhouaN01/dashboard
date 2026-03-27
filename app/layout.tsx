import type { Metadata } from "next";
import localFont from "next/font/local";
import './globals.css';

import { inter } from '@/app/ui/fonts';

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Exercice app Next.js Dashboard avec app router",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <header></header>
        {children}
      </body>
    </html>
  );
}
