import type { Metadata } from "next";
import { Geist, Geist_Mono, Unna } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const unna = Unna({
  variable: "--font-unna",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Kleenmaids",
  description: "Professional cleaning and staffing solutions for homes and businesses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${unna.variable} antialiased`}
      >
        <div className="min-h-screen bg-white">
          {/* <Navbar className="" /> */}
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
