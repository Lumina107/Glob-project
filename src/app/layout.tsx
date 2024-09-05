import type { Metadata } from "next";
import { Madimi_One, Chivo } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const madimi = Madimi_One({
  subsets: ["latin"],
  variable: '--font-madimi-one',
  weight: '400',
  display: 'swap'
});

const chivo = Chivo({
  subsets: ['latin'],
  variable: '--font-chivo',
  display: 'swap'
})

export const metadata: Metadata = {
  title: "$Glob",
  description: "A fat GLOB of culture on Solana. Nothing more. Nothing less.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${madimi.variable} ${chivo.variable} scroll-smooth`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
