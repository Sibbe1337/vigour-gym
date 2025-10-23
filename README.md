# Vigour Gym Website

A modern, fast, and SEO-optimized gym website built with Next.js 14 and Sanity CMS.

## Features

- 🎨 **Modern Design** - Clean, professional design with Vigour's brand colors
- ⚡ **Fast Performance** - Built with Next.js 14 App Router for optimal speed
- 📱 **Fully Responsive** - Perfect experience on all devices
- 🔍 **SEO Optimized** - JSON-LD structured data, meta tags, and semantic HTML
- 📝 **Content Management** - Easy content editing via Sanity Studio
- 📧 **Lead Capture** - Contact forms with validation
- 🎯 **BioSignature Section** - Dedicated section for BioSignature methodology
- 🤝 **Partners Integration** - Showcase Funmed, Werlabs, Björn Borg, etc.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **CMS:** Sanity
- **Styling:** Tailwind CSS
- **Forms:** React Hook Form + Zod
- **Type Safety:** TypeScript
- **Deployment:** Vercel-ready

## Project Structure

```
vigour-gym/
├── app/                      # Next.js App Router pages
│   ├── page.tsx             # Home page
│   ├── tranare/             # Trainers page
│   ├── hur-vi-jobbar/       # How We Work + BioSignature
│   ├── kost-och-tillskott/  # Nutrition & Supplements
│   ├── partners/            # Partners page
│   ├── kontakt/             # Contact page
│   ├── bokning/             # Booking page
│   ├── blogg/               # Blog listing & posts
│   └── api/contact/         # Contact form API
├── components/              # Reusable React components
│   ├── Hero.tsx
│   ├── TrainerCard.tsx
│   ├── FAQ.tsx
│   ├── LeadForm.tsx
│   ├── Navbar.tsx
│   └── Footer.tsx
├── lib/                     # Utilities and helpers
│   ├── sanity.client.ts    # Sanity client config
│   ├── sanity.queries.ts   # GROQ queries
│   ├── json-ld.ts          # SEO structured data
│   └── seo-config.ts       # SEO configuration
├── sanity/                  # Sanity Studio
│   ├── schemas/            # Content schemas
│   │   ├── globalSettings.ts
│   │   ├── trainer.ts
│   │   ├── method.ts
│   │   ├── nutrition.ts
│   │   ├── partner.ts
│   │   └── post.ts
│   └── sanity.config.ts
└── public/                  # Static assets
```

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Sanity

Create a new Sanity project at [sanity.io](https://www.sanity.io/):

```bash
cd sanity
npm install -g @sanity/cli
sanity init
```

Follow the prompts to create your project.

### 3. Environment Variables

Copy `.env.local.example` to `.env.local` and fill in your values:

```bash
cp .env.local.example .env.local
```

Required variables:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=your_read_token
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

Optional:
```env
RESEND_API_KEY=your_resend_api_key  # For email notifications
```

### 4. Seed Content in Sanity Studio

Start Sanity Studio:

```bash
npm run sanity
```

Visit `http://localhost:3333` and add content:

#### Global Settings
- Site name: "Vigour Gym"
- Address, phone, email
- Opening hours
- Social media links
- Booking URL (Calendly/Bokadirekt)

#### Trainers
Add 2-3 trainers with:
- Name, role, photo
- Bio, certifications
- Focus areas
- Contact info

#### Method (How We Work)
Create one document with:
- Title: "Hur vi jobbar"
- Ingress and main content
- **BioSignature section:**
  - Title: "BioSignature"
  - Intro: "BioSignature är en metod utvecklad av Charles Poliquin..."
  - Bullets: Key points about the method
  - FAQ: 3-4 common questions
  - Disclaimer: "Detta är inte medicinsk rådgivning..."

#### Nutrition
- Title: "Kost & Tillskott"
- Content about nutrition principles
- List of recommended supplements
- Disclaimer

#### Partners
Add partners:
- **Funmed** - Functional medicine partner
- **Werlabs** - Lab testing services
- **Björn Borg** - Sports apparel
- Upload logos and descriptions

#### Blog Posts (Optional)
- Add 2-3 sample posts about fitness/nutrition

### 5. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000`

Run Sanity Studio separately:
```bash
npm run sanity
```

## Pages Overview

### Home (`/`)
- Hero with CTAs
- How We Work (3-step process)
- BioSignature teaser
- Featured trainers (3)
- Nutrition teaser
- Partners showcase
- CTA section

### Trainers (`/tranare`)
- Grid of all active trainers
- Trainer cards with photos, bios, certifications

### How We Work (`/hur-vi-jobbar`)
- Main methodology content
- **BioSignature section** with:
  - Introduction and explanation
  - Key bullet points
  - FAQ accordion
  - Disclaimer warning
  - CTA to book measurement

### Nutrition & Supplements (`/kost-och-tillskott`)
- Nutrition philosophy
- List of recommended supplements (with links)
- Disclaimer
- CTA for consultation

### Partners (`/partners`)
- Filterable partner grid (All, Funmed, Werlabs, Björn Borg, Other)
- Partner logos with descriptions and links

### Contact (`/kontakt`)
- Contact information (address, phone, email, hours)
- Lead capture form with validation
- Social media links

### Booking (`/bokning`)
- Booking widget/link integration
- What to expect (3 steps)
- FAQ about consultations
- Phone contact alternative

### Blog (`/blogg` and `/blogg/[slug]`)
- Blog listing with filters
- Individual post pages with SEO

## BioSignature Content (Swedish)

Use this content in Sanity for the BioSignature section:

**Intro:**
```
BioSignature är en metod utvecklad av tränaren Charles Poliquin. Den bygger på idén att fördelningen av kroppsfett på olika delar av kroppen kan ge information om hormonnivåer och metaboliska obalanser.
```

**Bullets:**
- Mätning av kroppsfett på specifika punkter med kaliper
- Tolkning för att identifiera möjliga hormonella mönster (t.ex. insulin, kortisol, östrogen, testosteron)
- Rekommendationer för kost, träning, sömn och tillskott för att optimera hormonbalans och kroppssammansättning

**Disclaimer:**
```
Detta är inte medicinsk rådgivning. Rådgör med din vårdgivare vid medicinska frågor eller innan du börjar använda nya tillskott.
```

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Deploy Sanity Studio

```bash
npm run sanity:deploy
```

Your studio will be available at `https://your-project.sanity.studio`

## Performance Targets

- ✅ Lighthouse Score: >90
- ✅ LCP (Largest Contentful Paint): <2s
- ✅ CLS (Cumulative Layout Shift): <0.1
- ✅ Mobile-friendly and responsive

## Customization

### Brand Colors

Edit colors in `tailwind.config.ts`:

```typescript
colors: {
  brand: {
    primary: '#4A5C70',  // Slate blue-gray (logo color)
    ink: '#2B2B2B',      // Deep graphite
    sand: '#C6BBAE',     // Muted champagne
    paper: '#F5F5F5',    // Soft white smoke
  },
}
```

### Fonts

Current fonts (via Google Fonts):
- **Body:** Inter
- **UI/Display:** Work Sans
- **Accents:** Playfair Display

Change in `app/globals.css` and `tailwind.config.ts`.

### Add Email Notifications

Install Resend:

```bash
npm install resend
```

Uncomment email code in `app/api/contact/route.ts` and add your `RESEND_API_KEY`.

## Support

For issues or questions:
- Check Sanity Studio for content
- Verify environment variables
- Check browser console for errors

## License

Proprietary - Vigour Gym © 2025

---

Built with ❤️ for Vigour Gym
