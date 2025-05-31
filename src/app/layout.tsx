import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Buckler Systems | Advanced Armored Vehicle Solutions",
  description: "Leading provider of armored vehicles and security solutions for high-profile clients worldwide. Offering state-of-the-art protection and custom security services.",
  keywords: "armored vehicles, security solutions, bulletproof cars, VIP protection, security services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}
