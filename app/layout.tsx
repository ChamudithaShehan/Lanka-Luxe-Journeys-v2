import type { Metadata } from "next";
import { Playfair_Display, Inter, Noto_Serif_KR, Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { MobileBottomBar } from "@/components/ui/MobileBottomBar";
import { JsonLd } from "@/components/seo/JsonLd";
import { AdminProvider } from "@/context/AdminContext";
import { LayoutContent } from "@/components/layout/LayoutContent";
import { CustomCursor } from "@/components/ui/CustomCursor";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Korean premium fonts — replaces system fallback (Malgun Gothic) for proper Hangul rendering
const notoSerifKR = Noto_Serif_KR({
  variable: "--font-noto-serif-kr",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  display: "swap",
});

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Lanka Luxe Journeys | 스리랑카 럭셔리 여행 & 골프 투어",
    template: "%s | Lanka Luxe Journeys",
  },
  description: "스리랑카 최고급 럭셔리 여행 전문 DMC. 한국인 VIP 골프 투어, 프라이빗 헬기 이동, 1:1 맞춤 콘시어지 서비스. Sri Lanka luxury travel, PGA golf holidays and bespoke concierge for Korean VIPs.",
  keywords: [
    // Korean keywords (Naver-targeted)
    "스리랑카 럭셔리 여행",
    "스리랑카 골프 투어",
    "스리랑카 허니문",
    "스리랑카 패키지",
    "스리랑카 VIP 여행",
    "랑카 럭스 저니스",
    "스리랑카 한국어 가이드",
    "스리랑카 골프 여행",
    // English keywords (Google-targeted)
    "Sri Lanka Luxury Travel",
    "Sri Lanka Golf Tours",
    "Royal Ceylon Tour",
    "Victoria Golf Kandy",
    "Nuwara Eliya Golf",
    "Korean Concierge Sri Lanka",
    "Lanka Luxe Journeys",
  ],
  alternates: {
    canonical: "https://lankaluxejourneys.com",
    languages: {
      "en": "https://lankaluxejourneys.com",
      "ko": "https://lankaluxejourneys.com/?lang=ko",
    },
  },
  openGraph: {
    title: "Lanka Luxe Journeys | 스리랑카 럭셔리 여행 & 골프 투어",
    description: "스리랑카 최고급 VIP 여행사. 한국인 전담 콘시어지, PGA 골프 투어, 프라이빗 제트 이동.",
    url: "https://lankaluxejourneys.com",
    siteName: "Lanka Luxe Journeys",
    images: [
      {
        url: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Lanka Luxe Journeys — 스리랑카 럭셔리 여행",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lanka Luxe Journeys | 스리랑카 럭셔리 여행 & 골프 투어",
    description: "스리랑카 최고급 VIP 전문 여행사. 한국인 1:1 전담 콘시어지.",
    images: ["https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${notoSerifKR.variable} ${notoSansKR.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <JsonLd />
        {/* hreflang for Korean & English audiences */}
        <link rel="alternate" hrefLang="en" href="https://lankaluxejourneys.com" />
        <link rel="alternate" hrefLang="ko" href="https://lankaluxejourneys.com/?lang=ko" />
        <link rel="alternate" hrefLang="x-default" href="https://lankaluxejourneys.com" />
      </head>
      <body className="min-h-full flex flex-col text-white selection:bg-[#C8A45D] selection:text-[#0B1F3A] pb-20 lg:pb-0" suppressHydrationWarning>
        <AdminProvider>
          <LanguageProvider>
            <LayoutContent
              loadingScreen={<LoadingScreen />}
              scrollProgress={<ScrollProgress />}
              customCursor={<CustomCursor />}
              navbar={<Navbar />}
              floatingWhatsApp={<FloatingWhatsApp />}
              mobileBottomBar={<MobileBottomBar />}
              footer={<Footer />}
            >
              {children}
            </LayoutContent>
          </LanguageProvider>
        </AdminProvider>
      </body>
    </html>
  );
}
