import type { Metadata } from "next";
import { Geist, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const ibmPlexSerif = IBM_Plex_Serif({
  variable: "--font-ibm-plex-serif",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
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
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${ibmPlexSerif.variable} antialiased`}
      >
        <div className="min-h-screen bg-white">
          {children}
          <Footer />
        </div>
      </body>
      {gaId && <GoogleAnalytics gaId={gaId} />}
    </html>
  );
}
