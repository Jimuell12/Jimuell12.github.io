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
    <html lang="en">
      <body className={`${montserrat.className} bg-[#121212] no-scrollbar`}>
        <div className=" w-full flex flex-col min-h-screen text-[#f5f5f5]">
          {children}
        </div>
      </body>
    </html>
  );
}
