'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import {
  GOLF_COURSES,
  TOUR_PACKAGES,
  DESTINATIONS,
  BLOG_ARTICLES,
  TESTIMONIALS,
  TEAM_MEMBERS,
  EXPERIENCES,
  TourPackage,
  GolfCourse,
  Destination,
  BlogArticle,
  Experience
} from '@/data/travelData';
import { translations } from '@/data/translations';

// Custom interfaces for Admin settings and hero slides
export interface HeroSlide {
  id?: string;
  image: string;
  tag: string;
  title: string;
  sub: string;
  order?: number;
}

export interface SiteSettings {
  whatsappNumber: string;
  kakaoLink: string;
  email: string;
  googleReviewCount: string;
  googleReviewScore: string;
  tripAdvisorScore: string;
  sltdaLicence: string;
  stats: {
    guests: string;
    experiences: string;
    destinations: string;
    years: string;
    satisfaction: string;
    golfGuests: string;
  };
  bookingPackages: string[];
  primaryGoldColor: string;
  primaryNavyColor: string;
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];
  imgbbApiKey: string;
}

interface AdminContextType {
  heroSlides: HeroSlide[];
  setHeroSlides: (slides: HeroSlide[]) => void;
  tourPackages: TourPackage[];
  setTourPackages: (tours: TourPackage[]) => void;
  golfCourses: GolfCourse[];
  setGolfCourses: (courses: GolfCourse[]) => void;
  destinations: Destination[];
  setDestinations: (dest: Destination[]) => void;
  blogArticles: BlogArticle[];
  setBlogArticles: (articles: BlogArticle[]) => void;
  testimonials: typeof TESTIMONIALS;
  setTestimonials: (testimonials: typeof TESTIMONIALS) => void;
  teamMembers: typeof TEAM_MEMBERS;
  setTeamMembers: (members: typeof TEAM_MEMBERS) => void;
  experiences: Experience[];
  setExperiences: (exp: Experience[]) => void;
  siteSettings: SiteSettings;
  setSiteSettings: (settings: SiteSettings) => void;
  siteTranslations: typeof translations;
  setSiteTranslations: (trans: typeof translations) => void;
  resetAllToDefaults: () => void;
  isLoading: boolean;
}

const defaultHeroSlides: HeroSlide[] = [
  {
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80",
    tag: "SRI LANKA ULTRA-LUXURY JOURNEYS",
    title: "Experience Sri Lanka Beyond Luxury",
    sub: "Exclusive private jet charters, 5-star Relais & Chateaux tea estate bungalows, and bespoke travel concierge."
  },
  {
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1920&q=80",
    tag: "CEYLON HIGHLAND TEA ESTATES",
    title: "Misty Tea Bungalows & Royal Trains",
    sub: "Stay at colonial planter bungalows surrounded by emerald tea hills and private train carriages."
  },
  {
    image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=1920&q=80",
    tag: "PGA CHAMPIONSHIP GOLF HOLIDAYS",
    title: "Championship Golf & Ocean Views",
    sub: "Play on Asia's top courses with guaranteed morning tee times and private PGA caddies."
  },
  {
    image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1920&q=80",
    tag: "ANCIENT SIGIRIYA CITADEL",
    title: "Sunrise Access to Royal Rock Fortress",
    sub: "VIP early access to the 200-meter-high granite citadel surrounded by ancient water gardens."
  }
];

const initialSiteSettings: SiteSettings = {
  whatsappNumber: "94770008899",
  kakaoLink: "https://open.kakao.com/o/lankaluxe",
  email: "concierge@lankaluxejourneys.com",
  googleReviewCount: "240+",
  googleReviewScore: "5.0",
  tripAdvisorScore: "5.0",
  sltdaLicence: "TA/2026/Luxe-084",
  stats: {
    guests: "2,400+",
    experiences: "75+",
    destinations: "9+",
    years: "12+",
    satisfaction: "99.8%",
    golfGuests: "850+"
  },
  bookingPackages: [
    "Grand Ceylon Royal Tour",
    "Sri Lanka Luxury Highlights",
    "Sri Lanka Golf Escape",
    "Sri Lanka Wildlife Adventure",
    "Cultural Heritage Journey",
    "Romantic Honeymoon in Paradise",
    "Family Discovery Tour",
    "Wellness & Ayurveda Retreat",
    "Luxury Beach Holiday",
    "Tailor-Made Sri Lanka Experience"
  ],
  primaryGoldColor: "#BFA46A",
  primaryNavyColor: "#0B1F3A",
  seoTitle: "Lanka Luxe Journeys | 스리랑카 럭셔리 여행 & 골프 투어",
  seoDescription: "스리랑카 최고급 럭셔리 여행 전문 DMC. 한국인 VIP 골프 투어, 프라이빗 헬기 이동, 1:1 맞춤 콘시어지 서비스.",
  seoKeywords: ["스리랑카 럭셔리 여행", "스리랑카 골프 투어", "Sri Lanka Luxury Travel", "Sri Lanka Golf Tours"],
  imgbbApiKey: ""
};

// Helper to map DB settings row to SiteSettings shape
function mapDbSettings(row: Record<string, unknown> | null): SiteSettings | null {
  if (!row) return null;
  return {
    whatsappNumber: String(row.whatsappNumber ?? ''),
    kakaoLink: String(row.kakaoLink ?? ''),
    email: String(row.email ?? ''),
    googleReviewCount: String(row.googleReviewCount ?? ''),
    googleReviewScore: String(row.googleReviewScore ?? ''),
    tripAdvisorScore: String(row.tripAdvisorScore ?? ''),
    sltdaLicence: String(row.sltdaLicence ?? ''),
    stats: {
      guests: String(row.statGuests ?? ''),
      experiences: String(row.statExperiences ?? ''),
      destinations: String(row.statDestinations ?? ''),
      years: String(row.statYears ?? ''),
      satisfaction: String(row.statSatisfaction ?? ''),
      golfGuests: String(row.statGolfGuests ?? ''),
    },
    bookingPackages: Array.isArray(row.bookingPackages) ? row.bookingPackages as string[] : [],
    primaryGoldColor: String(row.primaryGoldColor ?? '#BFA46A'),
    primaryNavyColor: String(row.primaryNavyColor ?? '#0B1F3A'),
    seoTitle: String(row.seoTitle ?? ''),
    seoDescription: String(row.seoDescription ?? ''),
    seoKeywords: Array.isArray(row.seoKeywords) ? row.seoKeywords as string[] : [],
    imgbbApiKey: String(row.imgbbApiKey ?? ''),
  };
}

// Helper to map SiteSettings to DB row shape
function mapSettingsToDb(s: SiteSettings): Record<string, unknown> {
  return {
    whatsappNumber: s.whatsappNumber,
    kakaoLink: s.kakaoLink,
    email: s.email,
    googleReviewCount: s.googleReviewCount,
    googleReviewScore: s.googleReviewScore,
    tripAdvisorScore: s.tripAdvisorScore,
    sltdaLicence: s.sltdaLicence,
    statGuests: s.stats.guests,
    statExperiences: s.stats.experiences,
    statDestinations: s.stats.destinations,
    statYears: s.stats.years,
    statSatisfaction: s.stats.satisfaction,
    statGolfGuests: s.stats.golfGuests,
    bookingPackages: s.bookingPackages,
    primaryGoldColor: s.primaryGoldColor,
    primaryNavyColor: s.primaryNavyColor,
    seoTitle: s.seoTitle,
    seoDescription: s.seoDescription,
    seoKeywords: s.seoKeywords,
    imgbbApiKey: s.imgbbApiKey,
  };
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [heroSlides, setHeroSlidesState] = useState<HeroSlide[]>(defaultHeroSlides);
  const [tourPackages, setTourPackagesState] = useState<TourPackage[]>(TOUR_PACKAGES);
  const [golfCourses, setGolfCoursesState] = useState<GolfCourse[]>(GOLF_COURSES);
  const [destinations, setDestinationsState] = useState<Destination[]>(DESTINATIONS);
  const [blogArticles, setBlogArticlesState] = useState<BlogArticle[]>(BLOG_ARTICLES);
  const [testimonials, setTestimonialsState] = useState<typeof TESTIMONIALS>(TESTIMONIALS);
  const [teamMembers, setTeamMembersState] = useState<typeof TEAM_MEMBERS>(TEAM_MEMBERS);
  const [experiences, setExperiencesState] = useState<Experience[]>(EXPERIENCES);
  const [siteSettings, setSiteSettingsState] = useState<SiteSettings>(initialSiteSettings);
  const [siteTranslations, setSiteTranslationsState] = useState<typeof translations>(translations);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Load all data from API on mount
  useEffect(() => {
    const loadAll = async () => {
      try {
        const [
          toursRes, golfRes, destRes, blogRes, expRes,
          testimonialRes, teamRes, heroRes, settingsRes
        ] = await Promise.all([
          fetch('/api/tours'),
          fetch('/api/golf'),
          fetch('/api/destinations'),
          fetch('/api/blog'),
          fetch('/api/experiences'),
          fetch('/api/testimonials'),
          fetch('/api/team'),
          fetch('/api/hero-slides'),
          fetch('/api/settings'),
        ]);

        if (toursRes.ok) { const d = await toursRes.json(); if (Array.isArray(d) && d.length) setTourPackagesState(d); }
        if (golfRes.ok) { const d = await golfRes.json(); if (Array.isArray(d) && d.length) setGolfCoursesState(d); }
        if (destRes.ok) { const d = await destRes.json(); if (Array.isArray(d) && d.length) setDestinationsState(d); }
        if (blogRes.ok) { const d = await blogRes.json(); if (Array.isArray(d) && d.length) setBlogArticlesState(d); }
        if (expRes.ok) { const d = await expRes.json(); if (Array.isArray(d) && d.length) setExperiencesState(d); }
        if (testimonialRes.ok) { const d = await testimonialRes.json(); if (Array.isArray(d) && d.length) setTestimonialsState(d); }
        if (teamRes.ok) { const d = await teamRes.json(); if (Array.isArray(d) && d.length) setTeamMembersState(d); }
        if (heroRes.ok) { const d = await heroRes.json(); if (Array.isArray(d) && d.length) setHeroSlidesState(d); }
        if (settingsRes.ok) {
          const d = await settingsRes.json();
          const mapped = mapDbSettings(d);
          if (mapped) setSiteSettingsState(mapped);
        }
      } catch (e) {
        console.warn('API unavailable — using static defaults', e);
      } finally {
        setIsLoaded(true);
        setIsLoading(false);
      }
    };
    loadAll();
  }, []);

  const setHeroSlides = useCallback(async (val: HeroSlide[]) => {
    setHeroSlidesState(val);
    try {
      const existing = await fetch('/api/hero-slides').then(r => r.json()) as HeroSlide[];
      await Promise.all(existing.map((s: HeroSlide) => s.id && fetch(`/api/hero-slides/${s.id}`, { method: 'DELETE' })));
      await Promise.all(val.map((s, i) => fetch('/api/hero-slides', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...s, order: i }),
      })));
    } catch (e) { console.error('Failed to save hero slides', e); }
  }, []);

  const setTourPackages = useCallback((val: TourPackage[]) => {
    setTourPackagesState(val);
    val.forEach(tour => {
      if (tour.id) {
        fetch(`/api/tours/${tour.id}`, {
          method: 'PUT', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(tour),
        }).catch(console.error);
      }
    });
  }, []);

  const setGolfCourses = useCallback((val: GolfCourse[]) => {
    setGolfCoursesState(val);
    val.forEach(course => {
      if (course.id) {
        fetch(`/api/golf/${course.id}`, {
          method: 'PUT', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(course),
        }).catch(console.error);
      }
    });
  }, []);

  const setDestinations = useCallback((val: Destination[]) => {
    setDestinationsState(val);
    val.forEach(dest => {
      if (dest.id) {
        fetch(`/api/destinations/${dest.id}`, {
          method: 'PUT', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...dest, svgPosX: dest.svgPos?.x, svgPosY: dest.svgPos?.y }),
        }).catch(console.error);
      }
    });
  }, []);

  const setBlogArticles = useCallback((val: BlogArticle[]) => {
    setBlogArticlesState(val);
    val.forEach(article => {
      if (article.id) {
        fetch(`/api/blog/${article.id}`, {
          method: 'PUT', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(article),
        }).catch(console.error);
      }
    });
  }, []);

  const setTestimonials = useCallback((val: typeof TESTIMONIALS) => {
    setTestimonialsState(val);
  }, []);

  const setTeamMembers = useCallback((val: typeof TEAM_MEMBERS) => {
    setTeamMembersState(val);
  }, []);

  const setExperiences = useCallback((val: Experience[]) => {
    setExperiencesState(val);
    val.forEach(exp => {
      if (exp.id) {
        fetch(`/api/experiences/${exp.id}`, {
          method: 'PUT', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(exp),
        }).catch(console.error);
      }
    });
  }, []);

  const setSiteSettings = useCallback((val: SiteSettings) => {
    setSiteSettingsState(val);
    fetch('/api/settings', {
      method: 'PUT', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(mapSettingsToDb(val)),
    }).catch(console.error);
  }, []);

  const setSiteTranslations = useCallback((val: typeof translations) => {
    setSiteTranslationsState(val);
    // Translations remain static for now (no DB table yet)
  }, []);

  const resetAllToDefaults = useCallback(() => {
    if (confirm("Are you sure you want to reset all content, settings, and translations back to defaults? This action cannot be undone.")) {
      setHeroSlidesState(defaultHeroSlides);
      setTourPackagesState(TOUR_PACKAGES);
      setGolfCoursesState(GOLF_COURSES);
      setDestinationsState(DESTINATIONS);
      setBlogArticlesState(BLOG_ARTICLES);
      setTestimonialsState(TESTIMONIALS);
      setTeamMembersState(TEAM_MEMBERS);
      setExperiencesState(EXPERIENCES);
      setSiteSettingsState(initialSiteSettings);
      setSiteTranslationsState(translations);
      alert("All site content has been reset to defaults! Re-seed the database to persist the reset.");
    }
  }, []);

  return (
    <AdminContext.Provider value={{
      heroSlides,
      setHeroSlides,
      tourPackages,
      setTourPackages,
      golfCourses,
      setGolfCourses,
      destinations,
      setDestinations,
      blogArticles,
      setBlogArticles,
      testimonials,
      setTestimonials,
      teamMembers,
      setTeamMembers,
      experiences,
      setExperiences,
      siteSettings,
      setSiteSettings,
      siteTranslations,
      setSiteTranslations,
      resetAllToDefaults,
      isLoading,
    }}>
      {isLoaded ? children : <div className="min-h-screen bg-[#0B1F3A] flex items-center justify-center text-white">Loading CMS Settings...</div>}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};
