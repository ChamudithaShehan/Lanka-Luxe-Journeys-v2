# 🇱🇰 Lanka Luxe Journeys — Premier Ultra-Luxury & Golf DMC

> **Where Luxury Meets Authentic Sri Lankan Experiences**  
> Lanka Luxe Journeys is a bespoke Destination Management Company (DMC) delivering ultra-luxury private aviation, 5-star Relais & Châteaux tea estate stays, PGA championship golf holidays, and 1:1 VIP chauffeur concierges across Sri Lanka.

🌐 **Live Website:** [https://lanka-luxe-journeys-v2.vercel.app/](https://lanka-luxe-journeys-v2.vercel.app/)

---

## 🎨 Brand Identity & Palette

Crafted with a timeless, high-contrast luxury design system:

- **Deep Navy** (`#0B1F3A`) — Primary dark background & luxury authority
- **Luxury Gold** (`#C8A45D`) — Accents, borders, badges & text gradients
- **Pure White** (`#FFFFFF`) — Clean typography & card overlays
- **Light Beige** (`#F8F5EF`) — Soft warm background in light mode

---

## 💎 9 Premium Tour Packages

1. **Sri Lanka Luxury Highlights** (8 Days / 7 Nights) — Sigiriya Citadel, Tooth Relic Temple, Nuwara Eliya tea estates, Ella train, Yala safari & Bentota beach.
2. **Sri Lanka Golf Escape** (10 Days / 9 Nights) — All 4 premier PGA courses (*Royal Colombo, Victoria Kandy, Nuwara Eliya, Shangri-La Hambantota*).
3. **Sri Lanka Wildlife Adventure** (7 Days / 6 Nights) — Yala leopards, Minneriya Elephant Gathering, Wilpattu lakes & Mirissa blue whales.
4. **Cultural Heritage Journey** (7 Days / 6 Nights) — 2,500 years of history across Anuradhapura, Mihintale, Sigiriya, Polonnaruwa, Dambulla & Kandy.
5. **Romantic Honeymoon in Paradise** (8 Days / 7 Nights) — Candlelight beach dining, ocean plunge pool villas, couple's Ayurveda spa & sunset yacht cruises.
6. **Family Discovery Tour** (9 Days / 8 Nights) — Pinnawala elephant bathing, turtle hatcheries, mangrove boat safaris & water sports.
7. **Wellness & Ayurveda Retreat** (10 Days / 9 Nights) — 1:1 Ayurvedic doctor consultations, herbal oil baths, sunrise mountain yoga & organic dining.
8. **Luxury Beach Holiday** (7 Days / 6 Nights) — Bentota, Mirissa, Weligama & Tangalle coastlines with blue whale charters and seafood dining.
9. **Tailor-Made Sri Lanka Experience** — 100% bespoke itinerary designed around travel dates, budget, group size, and personal interests.

---

## 🌟 Why Choose Lanka Luxe Journeys?

The platform features our 7 core service pillars:

1. **Personalized Travel Experiences:** 100% tailor-made itineraries matching guest pace and budget.
2. **Local Expertise:** Deep knowledge of famous landmarks and hidden island gems.
3. **Luxury with Authenticity:** 5-star Relais & Châteaux bungalows, Aman estates & authentic Sri Lankan hospitality.
4. **Professional & Reliable Service:** White-glove VIP airport transfers, chauffeur guides & end-to-end logistics.
5. **Flexible Itineraries:** Fully custom schedules for quick weekend escapes or multi-week retreats.
6. **Passion for Excellence:** Honest advice, 1:1 concierge care, and uncompromised quality.
7. **Explore with Confidence:** 24/7 guest support and meticulous attention to security & privacy.

---

## 🛡️ Trust & Credibility Credentials

- **Google Reviews:** 5.0 ★★★★★ (*240+ Verified High-Net-Worth Guest Reviews*)
- **TripAdvisor Choice:** 5.0 ★★★★★ (*Travelers' Choice Winner 2026*)
- **Government Accreditation:** Sri Lanka Tourism Development Authority (SLTDA) `Licence No: TA/2026/Luxe-084`
- **Payment Security:** 256-Bit SSL Encrypted Gateway (*Visa, MasterCard, American Express, Apple Pay*)

---

## 🚀 Key Interactive Features

- **Interactive SVG Sri Lanka Map:** Visual destination exploration highlighting key luxury hubs.
- **PGA Golf Course Comparison Tool:** Detailed specs, green fees, difficulty ratings & mobile swipe hints.
- **AI Trip Planner Widget:** Interactive itinerary generator matching user preferences.
- **Real-Time Currency & Weather Calculator:** Live USD/KRW/LKR rates and regional weather updates.
- **Travel Cost Estimator:** Interactive budget breakdown for accommodation, transport, and experiences.
- **Bilingual Internationalization:** Instant English ↔ Korean (한국어) switching via React Context.
- **Mobile First Design:** Dedicated floating bottom bar, touch-friendly navigation, and streamlined responsive layouts.

---

## ⚙️ Admin Dashboard & CMS

A powerful, custom-built local Content Management System (CMS) allows for complete control over the website's content without needing external databases:

- **Complete Content Control:** Manage Tours, Golf Courses, Destinations, Luxury Hotels, Experiences, Testimonials, Team Members, Blog Articles, and Hero Slides directly from the `/admin` dashboard.
- **LocalStorage as CMS:** All content changes are synchronized seamlessly and persisted client-side using `localStorage`, keeping the application fast and purely static.
- **ImgBB Image Uploads:** Integrated direct-to-ImgBB image upload functionality within the dashboard allows for instant image hosting and seamless content updates.

---

## 🛠️ Technology Stack

- **Framework:** Next.js 16 (App Router, Turbopack, Static Site Generation)
- **Core:** React 19, TypeScript
- **Styling:** Tailwind CSS v4, Vanilla CSS Custom Variables (`app/globals.css`)
- **Icons & Animations:** Lucide-React, Framer Motion

---

## 💻 Getting Started

### 1. Environment Setup

Create a `.env` file in the root directory of your project. You can copy the variables below and update them with your own database credentials:

```env
# Database Credentials
DB_USER="root"
DB_PASSWORD="your_password_here"
DB_HOST="localhost"
DB_PORT="3306"
DB_NAME="Lanka_luxe"

# Prisma database connection string
DATABASE_URL="mysql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}"

# Session secret for authentication
SESSION_SECRET="llj-fallback-secret-key-change-me"
```

### 2. Install Dependencies & Run

Run the development server:

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

Start production server:

```bash
npm run start
```
