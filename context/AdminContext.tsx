'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
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
  image: string;
  tag: string;
  title: string;
  sub: string;
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
}

const defaultHeroSlides: HeroSlide[] = [
  {
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80",
    tag: "SRI LANKA ULTRA-LUXURY JOURNEYS",
    title: "Experience Sri Lanka Beyond Luxury",
    sub: "Exclusive private jet charters, 5-star Relais & Châteaux tea estate bungalows, and bespoke travel concierge."
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

  useEffect(() => {
    try {
      const savedHero = localStorage.getItem('llj_hero_slides');
      if (savedHero) setHeroSlidesState(JSON.parse(savedHero));

      const savedTours = localStorage.getItem('llj_tours');
      if (savedTours) setTourPackagesState(JSON.parse(savedTours));

      const savedGolf = localStorage.getItem('llj_golf');
      if (savedGolf) setGolfCoursesState(JSON.parse(savedGolf));

      const savedDest = localStorage.getItem('llj_destinations');
      if (savedDest) setDestinationsState(JSON.parse(savedDest));

      const savedBlog = localStorage.getItem('llj_blog');
      if (savedBlog) setBlogArticlesState(JSON.parse(savedBlog));

      const savedTestimonials = localStorage.getItem('llj_testimonials');
      if (savedTestimonials) setTestimonialsState(JSON.parse(savedTestimonials));

      const savedTeam = localStorage.getItem('llj_team');
      if (savedTeam) setTeamMembersState(JSON.parse(savedTeam));

      const savedExp = localStorage.getItem('llj_experiences');
      if (savedExp) setExperiencesState(JSON.parse(savedExp));

      const savedSettings = localStorage.getItem('llj_settings');
      if (savedSettings) setSiteSettingsState(JSON.parse(savedSettings));

      const savedTrans = localStorage.getItem('llj_translations');
      if (savedTrans) setSiteTranslationsState(JSON.parse(savedTrans));
    } catch (e) {
      console.error("Failed to load admin settings from localStorage", e);
    }
    setIsLoaded(true);
  }, []);

  const setHeroSlides = (val: HeroSlide[]) => {
    setHeroSlidesState(val);
    localStorage.setItem('llj_hero_slides', JSON.stringify(val));
  };

  const setTourPackages = (val: TourPackage[]) => {
    setTourPackagesState(val);
    localStorage.setItem('llj_tours', JSON.stringify(val));
  };

  const setGolfCourses = (val: GolfCourse[]) => {
    setGolfCoursesState(val);
    localStorage.setItem('llj_golf', JSON.stringify(val));
  };

  const setDestinations = (val: Destination[]) => {
    setDestinationsState(val);
    localStorage.setItem('llj_destinations', JSON.stringify(val));
  };

  const setBlogArticles = (val: BlogArticle[]) => {
    setBlogArticlesState(val);
    localStorage.setItem('llj_blog', JSON.stringify(val));
  };

  const setTestimonials = (val: typeof TESTIMONIALS) => {
    setTestimonialsState(val);
    localStorage.setItem('llj_testimonials', JSON.stringify(val));
  };

  const setTeamMembers = (val: typeof TEAM_MEMBERS) => {
    setTeamMembersState(val);
    localStorage.setItem('llj_team', JSON.stringify(val));
  };

  const setExperiences = (val: Experience[]) => {
    setExperiencesState(val);
    localStorage.setItem('llj_experiences', JSON.stringify(val));
  };

  const setSiteSettings = (val: SiteSettings) => {
    setSiteSettingsState(val);
    localStorage.setItem('llj_settings', JSON.stringify(val));
  };

  const setSiteTranslations = (val: typeof translations) => {
    setSiteTranslationsState(val);
    localStorage.setItem('llj_translations', JSON.stringify(val));
  };

  const resetAllToDefaults = () => {
    if (confirm("Are you sure you want to reset all content, settings, and translations back to defaults? This action cannot be undone.")) {
      localStorage.removeItem('llj_hero_slides');
      localStorage.removeItem('llj_tours');
      localStorage.removeItem('llj_golf');
      localStorage.removeItem('llj_destinations');
      localStorage.removeItem('llj_blog');
      localStorage.removeItem('llj_testimonials');
      localStorage.removeItem('llj_team');
      localStorage.removeItem('llj_experiences');
      localStorage.removeItem('llj_settings');
      localStorage.removeItem('llj_translations');

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
      
      alert("All site content has been reset to defaults!");
    }
  };

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
      resetAllToDefaults
    }}>
      {isLoaded ? children : <div className="min-h-screen bg-[#0B1F3A] flex items-center justify-center text-white">Loading Custom CMS Settings...</div>}
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
