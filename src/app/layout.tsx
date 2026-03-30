import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { LevelProvider } from "@/context/LevelContext";

export const metadata: Metadata = {
  title: "FriendlyUmp - Baseball Umpire Training",
  description: "Interactive training app for baseball umpires across all playing levels.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-gray-900 font-sans">
        <LevelProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </LevelProvider>
      </body>
    </html>
  );
}
