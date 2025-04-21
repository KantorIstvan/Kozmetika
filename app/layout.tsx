import React from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kozmetika",
  description: "Kozm",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <nav className="bg-lightest flex justify-between items-center px-15 py-5 text-darkest text-[18px]">
          <div>
            <Link href="/">LOGO</Link>
          </div>
          <ul className="flex gap-10 items-center">
            <li>
              <Link href="">Szolgáltatások</Link>
            </li>
            <li>
              <Link href="">Sminktetoválás</Link>
            </li>
            <li>
              <Link href="/arlista">Árlista</Link>
            </li>
            <li className="bg-dark hover:bg-darkest transition duration-150 text-lightest px-5 py-2 rounded-[15px]">
              <Link href="/idopontfoglalo">Időpontfoglalás</Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
