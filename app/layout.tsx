import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { Space_Grotesk, Inter, Allura } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Cursive font for the "T" in Tomi
const allura = Allura({
  weight: "400",
  variable: "--font-allura",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tomi - Motion Designer",
  description: "Motion design portfolio showcasing creative video editing and animation work",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${allura.variable} antialiased`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
