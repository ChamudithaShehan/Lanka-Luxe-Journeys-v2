# Lanka Luxe Journeys v2 — Backend (SQL + Prisma) Report

## 1. Current State of the Project

### Stack
| Layer | Technology |
|---|---|
| Framework | Next.js `^16.3.0` (App Router) |
| Language | TypeScript `^5` |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion, GSAP |
| Forms | React Hook Form + Zod |
| UI | Radix UI, Lucide React, Swiper |

### What Exists Today (Frontend-only)
The project is a **purely client-side app** — there is **no database, no API routes, and no server-side persistence** at all.

#### Data Layer (as-is)
All data lives in two flat TypeScript files:

| File | Content |
|---|---|
| [`data/travelData.ts`](file:///c:/Users/Hiruw/OneDrive/Documents/GitHub/Lanka-Luxe-Journeys-v2/data/travelData.ts) | All entities — tours, golf, destinations, blogs, hotels, experiences, testimonials, team members (~1400 lines) |
| [`data/translations.ts`](file:///c:/Users/Hiruw/OneDrive/Documents/GitHub/Lanka-Luxe-Journeys-v2/data/translations.ts) | Korean/English UI string translations |

#### Admin CMS (as-is)
[`context/AdminContext.tsx`](file:///c:/Users/Hiruw/OneDrive\Documents/GitHub/Lanka-Luxe-Journeys-v2/context/AdminContext.tsx) is a React context that:
- Loads all data from **`localStorage`** on mount
- Persists edits back to **`localStorage`** on save
- Has a "reset to defaults" that re-seeds from the static TypeScript files

> [!WARNING]
> All admin edits are **browser-local only**. Clearing browser data, or using a different device/browser, wipes everything. This is the core problem the backend will solve.

---

## 2. Data Models (Entities to Migrate to SQL)

Extracted from [`data/travelData.ts`](file:///c:/Users/Hiruw/OneDrive/Documents/GitHub/Lanka-Luxe-Journeys-v2/data/travelData.ts) and [`context/AdminContext.tsx`](file:///c:/Users/Hiruw/OneDrive/Documents/GitHub/Lanka-Luxe-Journeys-v2/context/AdminContext.tsx):

### Core Entities

```
TourPackage          GolfCourse           Destination
BlogArticle          Experience           LuxuryHotel
VideoStory           PremiumService       Testimonial
TeamMember           HeroSlide            SiteSettings
```

### Relationships
```
TourPackage  --many:many--> Destination (locations)
TourPackage  --many:many--> LuxuryHotel (hotels)
TourPackage  --> Itinerary  (array of {day, title, desc} in EN + KR)
GolfCourse   --> LuxuryHotel (one hotel)
Destination  --many:many--> LuxuryHotel
```

### Notable Schema Details
- **All text content is bilingual** — every entity has `*En` and `*Kr` variants for English and Korean
- **Arrays stored inline**: `gallery[]`, `highlights[]`, `features[]`, `included[]`, `locations[]`, `hotels[]` — these become junction tables or JSON columns in SQL
- **Itinerary** is a nested array of `{day, title, desc}` — best modelled as a child table `ItineraryDay`
- **SiteSettings** is a singleton row (one record, always updated never inserted)

---

## 3. Proposed Prisma Schema

```prisma
// prisma/schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"   // or "mysql" / "sqlite" for dev
  url      = env("DATABASE_URL")
}

// ─── TOUR PACKAGES ───────────────────────────────────────────────

model TourPackage {
  id            String          @id @default(cuid())
  titleEn       String
  titleKr       String
  category      TourCategory
  duration      String
  priceUSD      Float
  image         String
  gallery       String[]        // Postgres array; use Json for MySQL
  descriptionEn String          @db.Text
  descriptionKr String          @db.Text
  highlightsEn  String[]
  highlightsKr  String[]
  includedEn    String[]
  includedKr    String[]
  idealForEn    String?
  idealForKr    String?
  createdAt     DateTime        @default(now())
  updatedAt     DateTime        @updatedAt

  itineraryEn   ItineraryDay[]  @relation("ItineraryEn")
  itineraryKr   ItineraryDay[]  @relation("ItineraryKr")
  locations     TourDestination[]
  hotels        TourHotel[]
}

enum TourCategory {
  Luxury
  Golf
  Wildlife
  Culture
  Honeymoon
  Family
  Ayurveda
  Beach
  TailorMade
}

model ItineraryDay {
  id            String       @id @default(cuid())
  day           Int
  title         String
  desc          String       @db.Text
  lang          String       // "en" | "kr"
  tourId        String
  tourEn        TourPackage? @relation("ItineraryEn", fields: [tourId], references: [id])
  tourKr        TourPackage? @relation("ItineraryKr", fields: [tourId], references: [id])
}

// ─── GOLF COURSES ────────────────────────────────────────────────

model GolfCourse {
  id            String   @id @default(cuid())
  nameEn        String
  nameKr        String
  location      String
  holes         Int
  par           Int
  established   Int
  designer      String
  image         String
  hotel         String
  duration      String
  greenFeeUSD   Float
  difficultyEn  String
  difficultyKr  String
  rating        Float
  recommended   Boolean  @default(false)
  overviewEn    String   @db.Text
  overviewKr    String   @db.Text
  featuresEn    String[]
  featuresKr    String[]
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
}

// ─── DESTINATIONS ────────────────────────────────────────────────

model Destination {
  id           String   @id @default(cuid())
  nameEn       String
  nameKr       String
  subtitleEn   String
  subtitleKr   String
  image        String
  gallery      String[]
  highlightsEn String[]
  highlightsKr String[]
  bestTimeEn   String
  bestTimeKr   String
  descEn       String   @db.Text
  descKr       String   @db.Text
  svgPosX      Float
  svgPosY      Float
  createdAt    DateTime @default(now())
  updatedAt    DateTime @updatedAt

  hotels       DestinationHotel[]
  tours        TourDestination[]
}

// ─── JUNCTION TABLES ─────────────────────────────────────────────

model TourDestination {
  tourId        String
  destinationId String
  tour          TourPackage @relation(fields: [tourId], references: [id])
  destination   Destination @relation(fields: [destinationId], references: [id])

  @@id([tourId, destinationId])
}

model TourHotel {
  id       String      @id @default(cuid())
  tourId   String
  hotelId  String
  tour     TourPackage @relation(fields: [tourId], references: [id])
  hotel    LuxuryHotel @relation(fields: [hotelId], references: [id])
}

model DestinationHotel {
  destinationId String
  hotelId       String
  destination   Destination @relation(fields: [destinationId], references: [id])
  hotel         LuxuryHotel @relation(fields: [hotelId], references: [id])

  @@id([destinationId, hotelId])
}

// ─── HOTELS ──────────────────────────────────────────────────────

model LuxuryHotel {
  id               String        @id @default(cuid())
  nameEn           String
  nameKr           String
  category         HotelCategory
  locationEn       String
  locationKr       String
  rating           Float
  image            String
  gallery          String[]
  facilitiesEn     String[]
  facilitiesKr     String[]
  pricePerNightUSD Float
  descEn           String        @db.Text
  descKr           String        @db.Text
  createdAt        DateTime      @default(now())
  updatedAt        DateTime      @updatedAt

  tours        TourHotel[]
  destinations DestinationHotel[]
}

enum HotelCategory {
  LuxuryResorts
  GolfResorts
  BeachResorts
  MountainHotels
  BoutiqueHotels
  PrivateVillas
}

// ─── BLOG ARTICLES ───────────────────────────────────────────────

model BlogArticle {
  id         String   @id @default(cuid())
  titleEn    String
  titleKr    String
  category   String
  date       DateTime @default(now())
  author     String
  image      String
  readTime   String
  excerptEn  String   @db.Text
  excerptKr  String   @db.Text
  contentEn  String   @db.Text
  contentKr  String   @db.Text
  createdAt  DateTime @default(now())
  updatedAt  DateTime @updatedAt
}

// ─── EXPERIENCES ─────────────────────────────────────────────────

model Experience {
  id       String @id @default(cuid())
  titleEn  String
  titleKr  String
  category String
  image    String
  descEn   String @db.Text
  descKr   String @db.Text
}

// ─── TESTIMONIALS ────────────────────────────────────────────────

model Testimonial {
  id          String   @id @default(cuid())
  nameEn      String
  nameKr      String
  countryEn   String
  countryKr   String
  rating      Float
  reviewEn    String   @db.Text
  reviewKr    String   @db.Text
  tourPackage String?
  image       String?
  createdAt   DateTime @default(now())
}

// ─── TEAM MEMBERS ────────────────────────────────────────────────

model TeamMember {
  id      String @id @default(cuid())
  nameEn  String
  nameKr  String
  roleEn  String
  roleKr  String
  bioEn   String @db.Text
  bioKr   String @db.Text
  image   String
}

// ─── HERO SLIDES ─────────────────────────────────────────────────

model HeroSlide {
  id    String @id @default(cuid())
  image String
  tag   String
  title String
  sub   String
  order Int    @default(0)
}

// ─── SITE SETTINGS (singleton) ───────────────────────────────────

model SiteSettings {
  id                String   @id @default("singleton")
  whatsappNumber    String
  kakaoLink         String
  email             String
  googleReviewCount String
  googleReviewScore String
  tripAdvisorScore  String
  sltdaLicence      String
  statGuests        String
  statExperiences   String
  statDestinations  String
  statYears         String
  statSatisfaction  String
  statGolfGuests    String
  bookingPackages   String[]
  primaryGoldColor  String
  primaryNavyColor  String
  seoTitle          String
  seoDescription    String   @db.Text
  seoKeywords       String[]
  imgbbApiKey       String?
  updatedAt         DateTime @updatedAt
}
```

---

## 4. Next.js API Routes to Build

All routes live in `app/api/` (Next.js App Router Route Handlers).

| Method | Route | Purpose |
|--------|--------|---------|
| `GET` | `/api/tours` | List all tour packages |
| `POST` | `/api/tours` | Create a tour |
| `GET` | `/api/tours/[id]` | Get a single tour |
| `PUT` | `/api/tours/[id]` | Update a tour |
| `DELETE` | `/api/tours/[id]` | Delete a tour |
| `GET` | `/api/golf` | List all golf courses |
| `POST` | `/api/golf` | Create a golf course |
| `PUT` | `/api/golf/[id]` | Update golf course |
| `DELETE` | `/api/golf/[id]` | Delete golf course |
| `GET` | `/api/destinations` | List destinations |
| `POST` | `/api/destinations` | Create destination |
| `PUT` | `/api/destinations/[id]` | Update destination |
| `DELETE` | `/api/destinations/[id]` | Delete destination |
| `GET` | `/api/blog` | List blog articles |
| `POST` | `/api/blog` | Create article |
| `PUT` | `/api/blog/[id]` | Update article |
| `DELETE` | `/api/blog/[id]` | Delete article |
| `GET` | `/api/hotels` | List hotels |
| `POST` | `/api/hotels` | Create hotel |
| `PUT` | `/api/hotels/[id]` | Update hotel |
| `DELETE` | `/api/hotels/[id]` | Delete hotel |
| `GET` | `/api/experiences` | List experiences |
| `POST/PUT/DELETE` | `/api/experiences/[id]` | CRUD |
| `GET` | `/api/testimonials` | List testimonials |
| `POST/PUT/DELETE` | `/api/testimonials/[id]` | CRUD |
| `GET` | `/api/team` | List team members |
| `POST/PUT/DELETE` | `/api/team/[id]` | CRUD |
| `GET` | `/api/hero-slides` | List hero slides |
| `POST/PUT/DELETE` | `/api/hero-slides/[id]` | CRUD |
| `GET` | `/api/settings` | Get singleton settings |
| `PUT` | `/api/settings` | Update settings |
| `POST` | `/api/seed` | Seed DB from static data files |

---

## 5. Implementation Steps

### Step 1 — Install Prisma & a Database Driver

```bash
# Install Prisma
npm install prisma @prisma/client

# Initialize Prisma (creates prisma/schema.prisma + .env)
npx prisma init
```

Choose your SQL database:

| Database | `provider` value | Dev option |
|----------|-----------------|------------|
| PostgreSQL | `"postgresql"` | Supabase free tier / local Docker |
| MySQL | `"mysql"` | PlanetScale / local Docker |
| SQLite | `"sqlite"` | Local file — great for dev/prototype |

For quick local prototyping, use **SQLite** first:
```
DATABASE_URL="file:./dev.db"
```

---

### Step 2 — Create the Schema File

Create `prisma/schema.prisma` with the full schema from Section 3 above.

> [!IMPORTANT]
> SQLite does **not** support `String[]` arrays or `@db.Text`. For SQLite, replace arrays with `Json` and remove `@db.Text` annotations. Switch to PostgreSQL when going to production.

---

### Step 3 — Run Migrations

```bash
# Create and apply migration to dev DB
npx prisma migrate dev --name init

# Generate Prisma Client
npx prisma generate
```

---

### Step 4 — Create the Prisma Client Singleton

Create `lib/prisma.ts`:

```typescript
import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['query'],
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
```

> [!NOTE]
> The singleton pattern prevents creating hundreds of connections in Next.js dev mode hot-reload.

---

### Step 5 — Write a Seed Script

Create `prisma/seed.ts` to import from [`data/travelData.ts`](file:///c:/Users/Hiruw/OneDrive/Documents/GitHub/Lanka-Luxe-Journeys-v2/data/travelData.ts) and insert all static data into the DB:

```typescript
import { PrismaClient } from '@prisma/client'
import { TOUR_PACKAGES, GOLF_COURSES, DESTINATIONS, BLOG_ARTICLES, EXPERIENCES, TESTIMONIALS, TEAM_MEMBERS } from '../data/travelData'

const prisma = new PrismaClient()

async function main() {
  // Seed tours
  for (const tour of TOUR_PACKAGES) {
    await prisma.tourPackage.upsert({
      where: { id: tour.id },
      update: {},
      create: {
        id: tour.id,
        titleEn: tour.titleEn,
        titleKr: tour.titleKr,
        // ... map all fields
      }
    })
  }
  // Repeat for all entities...
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
```

Add to `package.json`:
```json
"prisma": {
  "seed": "ts-node --compiler-options {\"module\":\"CommonJS\"} prisma/seed.ts"
}
```

Run with:
```bash
npx prisma db seed
```

---

### Step 6 — Build API Route Handlers

Example for `app/api/tours/route.ts`:

```typescript
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  const tours = await prisma.tourPackage.findMany({
    include: {
      itineraryEn: { orderBy: { day: 'asc' } },
      itineraryKr: { orderBy: { day: 'asc' } },
      locations: { include: { destination: true } },
    }
  })
  return NextResponse.json(tours)
}

export async function POST(req: Request) {
  const body = await req.json()
  const tour = await prisma.tourPackage.create({ data: body })
  return NextResponse.json(tour, { status: 201 })
}
```

---

### Step 7 — Update AdminContext to Use the API

Replace all `localStorage` reads/writes in [`context/AdminContext.tsx`](file:///c:/Users/Hiruw/OneDrive/Documents/GitHub/Lanka-Luxe-Journeys-v2/context/AdminContext.tsx) with `fetch()` calls to the new API routes.

**Before (localStorage)**:
```typescript
const savedTours = localStorage.getItem('llj_tours')
if (savedTours) setTourPackagesState(JSON.parse(savedTours))
```

**After (API)**:
```typescript
useEffect(() => {
  fetch('/api/tours').then(r => r.json()).then(setTourPackagesState)
  fetch('/api/golf').then(r => r.json()).then(setGolfCoursesState)
  // etc...
}, [])
```

---

### Step 8 — Admin Auth (Optional but Recommended)

The admin panel at `/admin` has no server-side auth today. Consider adding:

- **NextAuth.js** with credentials provider (username/password stored in DB)
- Or simple **middleware** checking a secret cookie/header for the `/admin` and `/api` routes

---

## 6. Build Commands

```bash
# Run migrations
npx prisma migrate dev

# Push schema without migrations (prototype only)
npx prisma db push

# Seed the database
npx prisma db seed

# Open Prisma Studio (GUI DB browser)
npx prisma studio

# Generate Prisma Client after schema changes
npx prisma generate

# Build Next.js for production
npm run build

# Start production server
npm run start
```

---

## 7. Recommended File Structure After Backend Addition

```
Lanka-Luxe-Journeys-v2/
├── app/
│   ├── api/
│   │   ├── tours/
│   │   │   ├── route.ts          ← GET all, POST
│   │   │   └── [id]/route.ts     ← GET one, PUT, DELETE
│   │   ├── golf/...
│   │   ├── destinations/...
│   │   ├── blog/...
│   │   ├── hotels/...
│   │   ├── experiences/...
│   │   ├── testimonials/...
│   │   ├── team/...
│   │   ├── hero-slides/...
│   │   ├── settings/route.ts
│   │   └── seed/route.ts
│   └── admin/...
├── prisma/
│   ├── schema.prisma             ← NEW
│   └── seed.ts                   ← NEW
├── lib/
│   ├── prisma.ts                 ← NEW (Prisma singleton)
│   └── utils.ts                  ← existing
├── context/
│   └── AdminContext.tsx          ← MODIFY (localStorage → API)
└── data/
    ├── travelData.ts             ← Keep for seed, deprecate for runtime
    └── translations.ts           ← Can stay static (UI strings)
```

---

## 8. Open Questions Before Starting

> [!IMPORTANT]
> Please decide on these before implementation begins:

1. **Database choice**: PostgreSQL (recommended for production), MySQL, or SQLite (dev prototype)?
2. **Hosting**: Vercel (with Supabase/PlanetScale/Neon) or self-hosted (VPS)?
3. **Admin auth**: Should the `/admin` routes require a proper login, or is the current no-auth approach OK for now?
4. **Array columns**: Use PostgreSQL native arrays, or JSON columns (works on all DB engines)?
5. **Image uploads**: Keep ImgBB API key approach, or switch to cloud storage (S3, Cloudflare R2)?
