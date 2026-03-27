import type { Metadata } from "next";
import './globals.css';
import { inter } from '@/app/ui/fonts';


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
