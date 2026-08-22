import { PrismaClient } from '../lib/generated/prisma/client';
import {
  TOUR_PACKAGES,
  GOLF_COURSES,
  DESTINATIONS,
  LUXURY_HOTELS,
  BLOG_ARTICLES,
  TESTIMONIALS,
  TEAM_MEMBERS,
  EXPERIENCES
} from '../data/travelData';
import dotenv from 'dotenv';
dotenv.config();

const dbUser = process.env.DB_USER || 'root';
const dbPass = process.env.DB_PASSWORD ? encodeURIComponent(process.env.DB_PASSWORD) : 'your_password_here';
const dbHost = process.env.DB_HOST || 'localhost';
const dbPort = process.env.DB_PORT || '3306';
const dbName = process.env.DB_NAME || 'Lanka_luxe';
const dbUrl = `mysql://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}`;

const prisma = new PrismaClient({
  datasourceUrl: dbUrl,
});

async function main() {
  console.log('Seeding data...');
  
  // Clear existing data (optional but good for testing)
  await prisma.tourPackage.deleteMany();
  await prisma.golfCourse.deleteMany();
  await prisma.destination.deleteMany();
  await prisma.luxuryHotel.deleteMany();
  await prisma.blogArticle.deleteMany();
  await prisma.testimonial.deleteMany();
  await prisma.teamMember.deleteMany();
  await prisma.experience.deleteMany();

  // Seed Tour Packages
  for (const pkg of TOUR_PACKAGES) {
    await prisma.tourPackage.create({ data: pkg as any });
  }
  console.log('✔ Tour Packages seeded');

  // Seed Golf Courses
  for (const gc of GOLF_COURSES) {
    await prisma.golfCourse.create({ data: gc as any });
  }
  console.log('✔ Golf Courses seeded');

  // Seed Destinations
  for (const dest of DESTINATIONS) {
    const { svgPos, ...destData } = dest;
    await prisma.destination.create({ data: {
      ...destData,
      svgPosX: svgPos.x,
      svgPosY: svgPos.y
    } as any });
  }
  console.log('✔ Destinations seeded');

  // Seed Luxury Hotels
  for (const hotel of LUXURY_HOTELS) {
    await prisma.luxuryHotel.create({ data: hotel as any });
  }
  console.log('✔ Luxury Hotels seeded');

  // Seed Blog Articles
  for (const article of BLOG_ARTICLES) {
    await prisma.blogArticle.create({ data: article as any });
  }
  console.log('✔ Blog Articles seeded');

  // Seed Testimonials
  for (const test of TESTIMONIALS) {
    await prisma.testimonial.create({ data: {
      nameEn: test.name,
      nameKr: test.name, // Fallback
      countryEn: test.flag || 'Unknown',
      countryKr: test.flag || 'Unknown',
      rating: test.rating,
      reviewEn: test.commentEn,
      reviewKr: test.commentKr,
      tourPackage: test.package,
      image: test.avatar,
    } as any });
  }
  console.log('✔ Testimonials seeded');

  // Seed Team Members
  for (const member of TEAM_MEMBERS) {
    const { name, ...memberData } = member;
    await prisma.teamMember.create({ data: {
      ...memberData,
      nameEn: name,
      nameKr: name
    } as any });
  }
  console.log('✔ Team Members seeded');

  // Seed Experiences
  for (const exp of EXPERIENCES) {
    await prisma.experience.create({ data: exp as any });
  }
  console.log('✔ Experiences seeded');

  console.log('Database seeded successfully!');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
