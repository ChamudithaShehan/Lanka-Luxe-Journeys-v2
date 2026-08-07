import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { MobileBottomBar } from "@/components/ui/MobileBottomBar";
import { JsonLd } from "@/components/seo/JsonLd";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lanka Luxe Journeys | Luxury Sri Lanka Tours & Golf Holidays",
  description: "Experience Sri Lanka beyond luxury. Exclusive journeys, PGA golf holidays, private helicopter transfers, and bespoke travel concierge for global VIPs and Korean travelers.",
  keywords: "Sri Lanka Luxury Travel, Sri Lanka Golf Tours, Royal Ceylon Tour, Victoria Golf Kandy, Nuwara Eliya Golf, Korean Concierge Sri Lanka",
  openGraph: {
    title: "Lanka Luxe Journeys | Luxury Sri Lanka Tours & Golf Holidays",
    description: "Exclusive luxury travel management company in Sri Lanka. Bespoke itineraries, PGA golf, and private jet transfers.",
    url: "https://lankaluxejourneys.com",
    siteName: "Lanka Luxe Journeys",
    images: [
      {
        url: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Lanka Luxe Journeys",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lanka Luxe Journeys | Luxury Sri Lanka Tours & Golf Holidays",
    description: "Exclusive luxury travel management company in Sri Lanka.",
    images: ["https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <JsonLd />
      </head>
      <body className="min-h-full flex flex-col bg-[#081B33] text-white selection:bg-[#C9A227] selection:text-[#081B33] pb-14 lg:pb-0" suppressHydrationWarning>
        <LanguageProvider>
          <LoadingScreen />
          <ScrollProgress />
          <CustomCursor />
          <Navbar />
          <main className="flex-grow">{children}</main>
          <FloatingWhatsApp />
          <MobileBottomBar />
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
