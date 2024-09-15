import type { Metadata } from "next";
import "./globals.css";
import MainHeader from "@/components/main-header";

export const metadata: Metadata = {
  title: "Job Board 2.0",
  description: "Job Board 2.0 for Unibui",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MainHeader/>
        {children}
      </body>
    </html>
  );
}
