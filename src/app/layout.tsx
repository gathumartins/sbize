import type { Metadata } from "next";
import {Source_Sans_3 } from 'next/font/google';
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


const sourceSans = Source_Sans_3({
  weight:['200', '300', '400', '500', '600', '700', '800', '900'], subsets:['latin'], display: 'swap',
  variable: '--font-sourceSans'
})
export const metadata: Metadata = {
  title: "S-BIZE | NairoBits",
  description: "A project by NairoBits Trust",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sourceSans.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
