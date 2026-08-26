import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { prisma } from '@/lib/prisma';
import {
  GOLF_COURSES,
  TOUR_PACKAGES,
  LUXURY_HOTELS,
  DESTINATIONS,
  BLOG_ARTICLES,
  TESTIMONIALS,
  TEAM_MEMBERS,
  EXPERIENCES,
} from '@/data/travelData';

const DEFAULT_HERO_SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80",
    tag: "SRI LANKA ULTRA-LUXURY JOURNEYS",
    title: "Experience Sri Lanka Beyond Luxury",
    sub: "Exclusive private jet charters, 5-star Relais & Châteaux tea estate bungalows, and bespoke travel concierge.",
    order: 0,
  },
  {
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1920&q=80",
    tag: "CEYLON HIGHLAND TEA ESTATES",
    title: "Misty Tea Bungalows & Royal Trains",
    sub: "Stay at colonial planter bungalows surrounded by emerald tea hills and private train carriages.",
    order: 1,
  },
  {
    image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=1920&q=80",
    tag: "PGA CHAMPIONSHIP GOLF HOLIDAYS",
    title: "Championship Golf & Ocean Views",
    sub: "Play on Asia's top courses with guaranteed morning tee times and private PGA caddies.",
    order: 2,
  },
  {
    image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1920&q=80",
    tag: "ANCIENT SIGIRIYA CITADEL",
    title: "Sunrise Access to Royal Rock Fortress",
    sub: "VIP early access to the 200-meter-high granite citadel surrounded by ancient water gardens.",
    order: 3,
  },
];

const DEFAULT_SETTINGS = {
  whatsappNumber: "94770008899",
  kakaoLink: "https://open.kakao.com/o/lankaluxe",
  email: "concierge@lankaluxejourneys.com",
  googleReviewCount: "240+",
  googleReviewScore: "5.0",
  tripAdvisorScore: "5.0",
  sltdaLicence: "TA/2026/Luxe-084",
  statGuests: "2,400+",
  statExperiences: "75+",
  statDestinations: "9+",
  statYears: "12+",
  statSatisfaction: "99.8%",
  statGolfGuests: "850+",
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
  imgbbApiKey: "",
};

export async function POST() {
  try {
    let seeded = {
      admin: 0, tours: 0, golf: 0, destinations: 0, hotels: 0,
      blog: 0, testimonials: 0, team: 0, experiences: 0, heroSlides: 0, settings: 0,
    };

    // Admin user
    const existingAdmin = await prisma.adminUser.findUnique({ where: { email: 'admin@lankaluxejourneys.com' } });
    if (!existingAdmin) {
      const hashed = await bcrypt.hash('LankLuxe2026!', 10);
      await prisma.adminUser.create({
        data: { email: 'admin@lankaluxejourneys.com', password: hashed, name: 'Admin' },
      });
      seeded.admin = 1;
    }

    // Tour packages
    for (const tour of TOUR_PACKAGES) {
      await prisma.tourPackage.upsert({
        where: { id: tour.id },
        update: {},
        create: {
          id: tour.id,
          titleEn: tour.titleEn,
          titleKr: tour.titleKr,
          category: tour.category,
          duration: tour.duration,
          priceUSD: tour.priceUSD,
          image: tour.image,
          gallery: tour.gallery,
          descriptionEn: tour.descriptionEn,
          descriptionKr: tour.descriptionKr,
          highlightsEn: tour.highlightsEn,
          highlightsKr: tour.highlightsKr,
          itineraryEn: tour.itineraryEn,
          itineraryKr: tour.itineraryKr,
          includedEn: tour.includedEn,
          includedKr: tour.includedKr,
          locations: tour.locations,
          hotels: tour.hotels,
          idealForEn: tour.idealForEn,
          idealForKr: tour.idealForKr,
        },
      });
      seeded.tours++;
    }

    // Golf courses
    for (const course of GOLF_COURSES) {
      await prisma.golfCourse.upsert({
        where: { id: course.id },
        update: {},
        create: {
          id: course.id,
          nameEn: course.nameEn,
          nameKr: course.nameKr,
          location: course.location,
          holes: course.holes,
          par: course.par,
          established: course.established,
          designer: course.designer,
          image: course.image,
          hotel: course.hotel,
          duration: course.duration,
          greenFeeUSD: course.greenFeeUSD,
          difficultyEn: course.difficultyEn,
          difficultyKr: course.difficultyKr,
          rating: course.rating,
          recommended: course.recommended ?? false,
          overviewEn: course.overviewEn,
          overviewKr: course.overviewKr,
          featuresEn: course.featuresEn,
          featuresKr: course.featuresKr,
        },
      });
      seeded.golf++;
    }

    // Destinations
    for (const dest of DESTINATIONS) {
      await prisma.destination.upsert({
        where: { id: dest.id },
        update: {},
        create: {
          id: dest.id,
          nameEn: dest.nameEn,
          nameKr: dest.nameKr,
          subtitleEn: dest.subtitleEn,
          subtitleKr: dest.subtitleKr,
          image: dest.image,
          gallery: dest.gallery,
          hotels: dest.hotels,
          highlightsEn: dest.highlightsEn,
          highlightsKr: dest.highlightsKr,
          bestTimeEn: dest.bestTimeEn,
          bestTimeKr: dest.bestTimeKr,
          descEn: dest.descEn,
          descKr: dest.descKr,
          svgPosX: dest.svgPos.x,
          svgPosY: dest.svgPos.y,
        },
      });
      seeded.destinations++;
    }

    // Luxury hotels
    for (const hotel of LUXURY_HOTELS) {
      await prisma.luxuryHotel.upsert({
        where: { id: hotel.id },
        update: {},
        create: {
          id: hotel.id,
          nameEn: hotel.nameEn,
          nameKr: hotel.nameKr,
          category: hotel.category,
          locationEn: hotel.locationEn,
          locationKr: hotel.locationKr,
          rating: hotel.rating,
          image: hotel.image,
          gallery: hotel.gallery,
          facilitiesEn: hotel.facilitiesEn,
          facilitiesKr: hotel.facilitiesKr,
          pricePerNightUSD: hotel.pricePerNightUSD,
          descEn: hotel.descEn,
          descKr: hotel.descKr,
        },
      });
      seeded.hotels++;
    }

    // Blog articles
    for (const article of BLOG_ARTICLES) {
      await prisma.blogArticle.upsert({
        where: { id: article.id },
        update: {},
        create: {
          id: article.id,
          titleEn: article.titleEn,
          titleKr: article.titleKr,
          category: article.category,
          date: article.date,
          author: article.author,
          image: article.image,
          readTime: article.readTime,
          excerptEn: article.excerptEn,
          excerptKr: article.excerptKr,
          contentEn: article.contentEn,
          contentKr: article.contentKr,
        },
      });
      seeded.blog++;
    }

    // Testimonials (fields: name, role, flag, avatar, commentEn, commentKr, rating, package, verified)
    for (const t of TESTIMONIALS) {
      const existing = await prisma.testimonial.findFirst({ where: { nameEn: t.name } });
      if (!existing) {
        await prisma.testimonial.create({
          data: {
            nameEn: t.name,
            nameKr: t.name,
            countryEn: t.role ?? '',
            countryKr: t.role ?? '',
            rating: t.rating,
            reviewEn: t.commentEn,
            reviewKr: t.commentKr ?? t.commentEn,
            tourPackage: t.package ?? null,
            image: t.avatar ?? null,
          },
        });
        seeded.testimonials++;
      }
    }

    // Team members (fields: name, roleEn, roleKr, image, bioEn, bioKr)
    for (const m of TEAM_MEMBERS) {
      const existing = await prisma.teamMember.findFirst({ where: { nameEn: m.name } });
      if (!existing) {
        await prisma.teamMember.create({
          data: {
            nameEn: m.name,
            nameKr: m.name,
            roleEn: m.roleEn,
            roleKr: m.roleKr ?? m.roleEn,
            bioEn: m.bioEn,
            bioKr: m.bioKr ?? m.bioEn,
            image: m.image,
          },
        });
        seeded.team++;
      }
    }

    // Experiences
    for (const exp of EXPERIENCES) {
      await prisma.experience.upsert({
        where: { id: exp.id },
        update: {},
        create: {
          id: exp.id,
          titleEn: exp.titleEn,
          titleKr: exp.titleKr,
          category: exp.category,
          image: exp.image,
          descEn: exp.descEn,
          descKr: exp.descKr,
        },
      });
      seeded.experiences++;
    }

    // Hero slides
    const existingSlides = await prisma.heroSlide.count();
    if (existingSlides === 0) {
      for (const slide of DEFAULT_HERO_SLIDES) {
        await prisma.heroSlide.create({ data: slide });
        seeded.heroSlides++;
      }
    }

    // Site settings
    await prisma.siteSettings.upsert({
      where: { id: 'singleton' },
      update: {},
      create: { id: 'singleton', ...DEFAULT_SETTINGS },
    });
    seeded.settings = 1;

    return NextResponse.json({
      success: true,
      message: 'Database seeded successfully',
      seeded,
    });
  } catch (error) {
    console.error('Seed error:', error);
    return NextResponse.json({
      error: 'Seed failed',
      details: error instanceof Error ? error.message : String(error),
    }, { status: 500 });
  }
}
