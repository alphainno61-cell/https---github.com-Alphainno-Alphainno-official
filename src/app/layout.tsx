import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Alphainno Official",
    template: "%s · Alphainno",
  },
  description:
    "Showcase of Alphainno software products and professional services.",
  keywords: [
    "Alphainno",
    "software",
    "products",
    "services",
    "cloud",
    "AI",
    "consulting",
  ],
  openGraph: {
    title: "Alphainno Official",
    description:
      "Explore Alphainno's product suite and service offerings.",
    type: "website",
    locale: "en_US",
    siteName: "Alphainno",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alphainno Official",
    description:
      "Explore Alphainno's product suite and service offerings.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          <NavBar />
          <main className="flex-1">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
              {children}
            </div>
          </main>
          <Footer />
        </div>
        {/* TODO: Add analytics provider (e.g., Vercel/Plausible/GA4) */}
      </body>
    </html>
  );
}
