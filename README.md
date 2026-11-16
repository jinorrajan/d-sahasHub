# D SAHAS Hub — Official Website

> **Personal Brand Website for Dr. P. V. Devi Seshadri**  
> *Tactical Leadership Management Coach & Founder of D SAHAS Hub*  
> **Tagline:** Connecting Minds, Creating an Impact.  
> **Core Philosophy:** Moving leaders from **REACT to RESPOND** through Self-Care, Self-Healing, Self-Awareness, and Self-Understanding.

---

## 1. Brand Ecosystem & Architecture

| Venture / Initiative | Focus Area | External URL |
| :--- | :--- | :--- |
| **Dr. P. V. Devi Seshadri** | Personal Brand & Executive Leadership Coaching | `dsahashub.com` |
| **D SAHAS Hub** | Business Umbrella Connecting Leadership, Wellness & Nutrition | `dsahashub.com/d-sahas-hub` |
| **DeeSkill** | Tactical Leadership & Management Coaching | [deeskill.com](https://deeskill.com/) |
| **LiveEase** | Holistic Wellness & Life Balancing Solutions (Reiki) | [liveease.in](https://liveease.in/) |
| **Dhee Foods** | Traditional Foods for Healthy Living | [dheefoods.com](https://dheefoods.com/) |

> *Note on Brand Governance:* Dhee Foods operates as an independent traditional nutrition venture within D SAHAS Hub, visually and operationally distinct from executive coaching services.

---

## 2. Color Palette & Theme Tokens

- **Primary Crimson**: `#AE282E` (Brand anchor, primary badges, high-impact CTA)
- **Vibrant Orange**: `#F06321` (Metrics, hover accents, energy highlights)
- **Classic Navy**: `#004A7F` (Executive cards, high-contrast typography, footer)
- **Pure White**: `#FFFFFF` (Card surfaces, clean whitespace)
- **Warm Sand Neutral**: `#FAF8F5` / `#F3EFE9` (Section backgrounds, gentle contrast)
- **Charcoal Text**: `#111827` / `#1F2937` (High readability display typography)

---

## 3. Tech Stack

- **Framework**: Next.js 14 (App Router, Static Site Generation)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS with custom theme variables
- **Motion & 3D**: `framer-motion` (interactive 3D physics-based tilt, scroll reveals, expanding flex accordion)
- **Icons**: `lucide-react`
- **SEO**: Dynamic `sitemap.ts`, `robots.ts`, OpenGraph metadata, JSON-LD Schema (`Person`, `Organization`, `ProfessionalService`)

---

## 4. Folder Structure

```
d-sahas-hub/
├── public/
│   └── images/
│       └── client/
│           ├── person/          # Client portraits & headshots
│           ├── certificates/    # World records & qualifications
│           ├── meetings/        # Speaking & mentoring sessions
│           ├── prize/           # Awards & Rotary leadership
│           └── logo/            # D SAHAS Hub emblem
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Global HTML, Navbar, Footer, JsonLd
│   │   ├── page.tsx             # Home: Hero, Stats, SELF Matrix, Accordion, Ventures, CTA
│   │   ├── about/page.tsx       # Bio, 22+ yr IT career, Anna Univ & MBA, BYST, Rotary
│   │   ├── expertise/page.tsx   # 5 Offerings (Leadership, Consulting, Life Skills, Wellness, Relationships)
│   │   ├── d-sahas-hub/page.tsx # Ecosystem overview, DeeSkill, LiveEase, Dhee Foods
│   │   ├── achievements/page.tsx# 55h 40s marathon webinar, Elite World Records, certificates
│   │   ├── contact/page.tsx     # Filterable consultation form & unified FAQ accordion
│   │   ├── sitemap.ts           # Dynamic XML sitemap
│   │   ├── robots.ts            # Crawler directives
│   │   └── globals.css          # Theme tokens, custom utilities, scrollbars
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx       # Sticky executive header + mobile drawer
│   │   │   └── Footer.tsx       # Rich multi-column footer with venture routing
│   │   ├── widgets/
│   │   │   ├── TiltCard.tsx     # 3D interactive cursor-following card tilt
│   │   │   ├── StatCounter.tsx  # Animated numeric counter on scroll intersection
│   │   │   ├── InteractiveAccordion.tsx # Mindco-style expanding flex coaching tracks
│   │   │   ├── SelfPhilosophyMatrix.tsx # 4 S.E.L.F. interactive pillars
│   │   │   ├── CertificateModal.tsx     # Fullscreen document lightbox viewer
│   │   │   ├── FaqAccordion.tsx # Unified expandable FAQ accordion
│   │   │   └── ContactForm.tsx  # Multi-category enquiry submission form
│   │   └── seo/
│   │       └── JsonLd.tsx       # Schema.org structured data
│   ├── config/
│   │   ├── site.ts              # Global metadata, stats, contact info
│   │   ├── navigation.ts        # Route links & footer arrays
│   │   ├── ventures.ts          # DeeSkill, LiveEase, Dhee Foods data
│   │   ├── expertise.ts         # 5 service categories, challenges, deliverables
│   │   └── achievements.ts      # World records, timeline, client testimonials
│   └── types/
│       └── index.ts             # TypeScript definitions
└── tailwind.config.ts           # Extended palette & typography config
```

---

## 5. Development & Build Commands

```bash
# 1. Install dependencies
pnpm install

# 2. Run local development server
pnpm dev

# 3. Type-check with TypeScript
pnpm tsc --noEmit

# 4. Production build
pnpm build

# 5. Start production server
pnpm start
```

