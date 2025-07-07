import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Dwiana's Portfolio",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`inter.className overflow-y-auto h-screen`}
      >
        <Navbar/>
        {children}
        <Navigation/>
        <Footer/>
      </body>
    </html>
  );
}
