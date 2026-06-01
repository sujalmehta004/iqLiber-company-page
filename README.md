# IQ Liber — Corporate Website

A premium, high-performance, multi-page corporate website for **IQ Liber** — a Nepal-based technology company offering Software Development, Mobile Apps, Web Solutions, Digital Marketing (WhatsApp API), DevOps, and AI Automation services.

Built with **Next.js 15**, **React 19**, **Framer Motion**, and a glassmorphism design system.

---

## 🚀 Tech Stack

| Layer         | Technology                            |
|--------------|----------------------------------------|
| Framework    | Next.js 15 (App Router)               |
| Language     | TypeScript + React 19                 |
| Styling      | Tailwind CSS v4                       |
| Animations   | Framer Motion                         |
| 3D / Canvas  | Three.js / React Three Fiber          |
| Smooth Scroll| Lenis                                 |
| Fonts        | Google Fonts (Inter + Display)        |
| Icons        | Lucide React                          |
| Confetti     | canvas-confetti                       |

---

## 📁 File Structure & Page Map

```
src/
├── app/                          ← Next.js App Router pages
│   ├── page.tsx                  ← 🏠 Home / Landing Page
│   ├── layout.tsx                ← Root layout (fonts, global CSS)
│   ├── sitemap.ts                ← Auto-generated /sitemap.xml
│   ├── globals.css               ← Global styles & font imports
│   │
│   ├── blog/
│   │   └── page.tsx              ← 📰 /blog – Blog listing page
│   │
│   ├── contact/
│   │   └── page.tsx              ← 📬 /contact – Dedicated contact page
│   │
│   └── services/
│       ├── custom-software/
│       │   └── page.tsx          ← 💻 /services/custom-software
│       ├── mobile-app/
│       │   └── page.tsx          ← 📱 /services/mobile-app
│       ├── web-solutions/
│       │   └── page.tsx          ← 🌐 /services/web-solutions
│       ├── digital-marketing/
│       │   └── page.tsx          ← 📈 /services/digital-marketing (with Pricing)
│       ├── devops/
│       │   └── page.tsx          ← ⚙️  /services/devops
│       └── ai-automation/
│           └── page.tsx          ← 🤖 /services/ai-automation
│
├── components/                   ← Shared reusable components
│   ├── Navbar.tsx                ← Top sticky navigation bar
│   ├── Hero.tsx                  ← Home hero section + sand particle canvas
│   ├── SandCanvas.tsx            ← Full-height interactive particle canvas
│   ├── Services.tsx              ← Services grid on home page
│   ├── About.tsx                 ← Company story / founder timeline
│   ├── Blogs.tsx                 ← Blog cards section (used on /blog page)
│   ├── Contact.tsx               ← Contact form component (shared across all pages)
│   ├── PageShell.tsx             ← Wrapper for all sub-pages (navbar + footer)
│   ├── IntroScreen.tsx           ← Falling-letter intro animation (plays once/session)
│   ├── MarketingShowcase.tsx     ← Digital marketing showcase section
│   └── DigitalMarketingInteractive.tsx  ← Accordion cards + Process for /digital-marketing
│
└── public/
    ├── robots.txt                ← SEO: crawler rules
    └── favicon.ico               ← Site favicon
```

---

## ✏️ How to Edit Content

### Changing Company Info (Address, Phone, Email)
Edit **`src/components/Contact.tsx`** — look for the array near line 56:
```tsx
{ icon: MapPin, label: "Our Office",      value: "Mid-Baneshwor, Kathmandu, Nepal" },
{ icon: Mail,   label: "Business Email",  value: "grow@iqliber.com" },
{ icon: Phone,  label: "Phone Line",      value: "+977 1 4586940" },
```

### Changing the Hero Headline / Tagline
Edit **`src/components/Hero.tsx`** — the main `<h1>` tag around line 60:
```tsx
<h1>From Pixel to Empire.<br/>We Build It All.</h1>
```

### Changing Service Cards on Home Page
Edit **`src/components/Services.tsx`** — update the `services` array at the top of the file.

### Changing Blog Posts
Edit **`src/app/blog/page.tsx`** — find the `posts` array at the top and add/edit entries.

### Changing Digital Marketing Page (Features, Process, Pricing)
- **Features & Process (deep-dive accordions):** Edit **`src/components/DigitalMarketingInteractive.tsx`**
  - `features` array — card titles, descriptions, and `deepDive` expansion text
  - `process` array — step titles, summary descriptions, and `deepDive` expansion text
- **Pricing tiers:** Edit **`src/app/services/digital-marketing/page.tsx`** — find the 3 tier `<div>` blocks in the Pricing section

### Changing Any Service Detail Page
Each service lives in `src/app/services/[service-name]/page.tsx`. Open the relevant file and edit:
- The `features` array at the top (card icons, titles, descriptions)
- The hero `<h1>` and intro paragraph
- The `ContactComponent` at the bottom is automatically shared

### Changing the Intro Animation (Falling Letters)
Edit **`src/components/IntroScreen.tsx`** — modify the `WORD` constant at the top:
```tsx
const WORD = "IQ LIBER";  // ← Change this text
```

### Updating Domain After Deployment
Edit **`src/app/sitemap.ts`**:
```ts
const baseUrl = "https://iqliber.com";  // ← Replace with your actual domain
```
Also update **`public/robots.txt`**:
```
Sitemap: https://iqliber.com/sitemap.xml  ← Replace with your domain
```

---

## 🛠️ Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# → Open http://localhost:3000

# Build for production
npm run build

# Preview production build locally
npm run start
```

---

## ☁️ Hosting on Cloudflare Pages (Recommended)

### Step 1 — Push code to GitHub

```bash
git init
git add .
git commit -m "Initial commit: IQ Liber website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/iq-liber.git
git push -u origin main
```

### Step 2 — Install Cloudflare Next.js adapter

```bash
npm install --save-dev @cloudflare/next-on-pages
```

Add this to your `package.json` scripts:
```json
"pages:build": "npx @cloudflare/next-on-pages"
```

### Step 3 — Deploy on Cloudflare

1. Go to [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages** → **Create application** → **Pages**
2. Click **Connect to Git** → Select your GitHub repository
3. Configure build settings:

   | Setting           | Value                                |
   |------------------|--------------------------------------|
   | Framework preset  | **Next.js**                          |
   | Build command     | `npx @cloudflare/next-on-pages`      |
   | Build output dir  | `.vercel/output/static`              |
   | Node.js version   | `20`                                 |

4. Click **Save and Deploy** ✅

### Step 4 — Add your custom domain

In Cloudflare Pages → **Custom Domains** → Add `iqliber.com` → Update DNS as prompted.

---

## 🌍 Other Hosting Options

| Platform       | How To Deploy                                                                      |
|---------------|------------------------------------------------------------------------------------|
| **Vercel** ⭐  | Easiest for Next.js — connect GitHub repo at [vercel.com](https://vercel.com)      |
| **Netlify**    | Connect GitHub repo → Framework: Next.js → Auto-deploy                            |
| **Self-hosted**| `npm run build` → `npm run start` → Proxy with Nginx + PM2 on a VPS              |

### Vercel (Simplest Option)
```bash
npm install -g vercel
vercel
# Follow prompts → auto-detects Next.js → deploys instantly
```

---

## 📄 License

Private — IQ Liber © 2025. All rights reserved.
