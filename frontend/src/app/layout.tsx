import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { MainMenu } from "@/components/layout/MainMenu";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Concordia",
  description: "The professional platform for the startup ecosystem",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} antialiased min-h-screen`}>
        <MainMenu />
        <main className="">{children}</main>
      </body>
    </html>
  );
}
