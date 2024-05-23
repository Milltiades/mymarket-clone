import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import LanguageChanger from "@/components/LanguageChanger";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "auth",
  description: "auth page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=" pt-[42px] px-[10px]">
          <div className="flex flex-row items-center justify-between">
            <Image
              src="/logo/tnet-en.svg"
              alt="logo-tnet"
              width={125}
              height={33}
              className=" ml-[10px]"
            />
            <LanguageChanger />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
