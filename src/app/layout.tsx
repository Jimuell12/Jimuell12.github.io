import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import Navbar from "./header";
import "./globals.css";
const montserrat = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jimuel Flojera",
  description: "Jimuel Flojera's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="acid" lang="en">
      <body className={`${montserrat.className} dark:bg-[#121212] overflow-x-hidden`}>
        <div className=" w-full flex flex-col min-h-screen text-[#121212] dark:text-[#f5f5f5]">
          {children}
        </div>
      </body>
    </html>
  );
}
