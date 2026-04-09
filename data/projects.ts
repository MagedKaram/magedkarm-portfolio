import { IProject } from "@/types";

export const PROJECTS: IProject[] = [
  {
    title: "Clinic Queue",
    slug: "clinic-queue",
    liveUrl: "https://clinic-pro-web.vercel.app/",
    year: 2026,
    description: `
      A production-ready multi-tenant SaaS platform for clinic queue management. <br/><br/>

      Key Features:<br/>
      <ul>
        <li>🏥 Multi-Tenant Architecture: Clinic isolation with global patient identity flow</li>
        <li>👨‍👩‍👧 Guardian/Dependent Linking: Patient relationship management</li>
        <li>📊 Real-Time Queue Management: Live queue updates via Supabase Realtime</li>
        <li>🛡️ Admin Console: Real-time metrics dashboard, clinic approval workflows, audit log views</li>
        <li>🌐 Bilingual RTL Interface: Full Arabic/English support via next-intl</li>
      </ul><br/>

      Technical Highlights:
      <ul>
        <li>Built with Next.js 16 App Router, TypeScript, Tailwind CSS v4, and Supabase</li>
        <li>Backend: PostgreSQL with Row-Level Security (RLS) and stored procedures (RPCs)</li>
        <li>Dark-themed marketing website with Framer Motion animations and SEO metadata</li>
      </ul>
    `,
    role: `
      Full-Stack (Frontend Focus) — Personal Project <br/>
      <ul>
        <li>✅ Built the complete frontend from scratch using Next.js 16 App Router and TypeScript</li>
        <li>🗄️ Designed Supabase schema with PostgreSQL, RLS policies, and Realtime APIs</li>
        <li>🌐 Implemented bilingual Arabic/English RTL interface via next-intl</li>
        <li>📈 Built admin console with cross-clinic analytics and real-time dashboards</li>
        <li>🚀 SSR for all public pages with SEO metadata and sitemap generation</li>
      </ul>
    `,
    techStack: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS v4",
      "Supabase",
      "PostgreSQL",
      "Framer Motion",
      "next-intl",
    ],
    thumbnail: "/projects/thumbnail/clinic.png",
    longThumbnail: "/projects/long/clinic.png",
    images: [
      "/projects/images/clinic-1.png",
      "/projects/images/clinic-2.png",
      "/projects/images/clinic-3.png",
      "/projects/images/clinic-4.png",
      "/projects/images/clinic-5.png",
    ],
  },
  {
    title: "EliteSync",
    slug: "elitesync",
    liveUrl: "https://elitesync-fitness-app.vercel.app/",
    year: 2026,
    description: `
    A modern fitness coaching web app for discovering certified trainers, choosing a training mode, and booking sessions with a clean checkout experience. <br/><br/>

    Key Features:<br/>
    <ul>
      <li>🧑‍🏫 Trainer Marketplace: Browse trainers with search + filter/sort UI</li>
      <li>🏷️ Packages & Pricing: Package cards + comparison table + guarantees</li>
      <li>📅 Session Scheduling: Date picker + time-slot selection before checkout</li>
      <li>💳 Booking & Payments UI: Stripe Card (Elements) + PayPal/Vodafone Cash flows</li>
      <li>🔐 Auth & Protected Areas: Login/Signup/Forgot/OTP Verify + Private Profile route</li>
      <li>📈 Profile Dashboard: Progress stats + sessions-over-time chart + billing & payment methods</li>
      <li>📩 Contact & FAQ: Contact form + FAQ accordion section</li>
    </ul><br/>

    Technical Highlights:
    <ul>
      <li>Built with React 19 + TypeScript + Vite, using React Router for routing</li>
      <li>Tailwind CSS v4 styling with Radix/shadcn-style UI primitives</li>
      <li>Forms + validation using React Hook Form + Zod</li>
      <li>Charts via Recharts, scheduling UI via react-day-picker, payments via Stripe Elements</li>
    </ul>
  `,
    role: `
    Frontend Developer — Team Project <br/>
    <ul>
      <li>✅ Implemented core UI pages: Home, Trainers browse, Trainer profile, Packages, Booking, Contact</li>
      <li>🔐 Built auth screens (login/signup/forgot/reset/verify OTP) with React Hook Form + Zod validation</li>
      <li>💳 Integrated Stripe Elements UI flow and payment-method switching (Card/PayPal/Vodafone)</li>
      <li>📈 Built profile dashboard components including activity stats and charts (Recharts)</li>
      <li>🧩 Created reusable UI components (navbar/footer/cards/buttons) and consistent layout structure</li>
    </ul>
  `,
    techStack: [
      "React 19",
      "TypeScript",
      "Vite 7",
      "Tailwind CSS v4",
      "React Router v7",
      "Radix UI",
      "Stripe Elements",
      "React Hook Form",
      "Zod",
      "Recharts",
      "react-day-picker",
      "Lucide Icons",
    ],
    thumbnail: "/projects/thumbnail/elitesync.png",
    longThumbnail: "/projects/long/elitesync.png",
    images: [
      "/projects/images/elitesync.png",
      "/projects/images/elitesync-2.png",
      "/projects/images/elitesync-3.png",
      "/projects/images/elitesync-4.png",
      "/projects/images/elitesync-5.png",
      "/projects/images/elitesync-6.png",
    ],
  },
  {
    title: "MOOD Hair Care",
    slug: "mood-hair-care",
    liveUrl: "https://mood-hair-care.myshopify.com/",
    year: 2026,
    description: `
      A premium Dutch professional hair care e-commerce platform featuring salon-quality products. MOOD combines science, nature, and passion to deliver hair care solutions for all hair types. <br/><br/>

      Key Features:<br/>
      <ul>
        <li>🛍️ Full E-Commerce Store: Product catalog, collections, and filtering by hair type</li>
        <li>💇 Hair Type Collections: Personalized product recommendations (Fine Hair, Long Hair, Curly Hair, Colored Hair, etc.)</li>
        <li>🎯 Product Categories: Shampoos (22 products), Hair Masks & Conditioners (13), Leave-in Treatments (6), Styling (17)</li>
        <li>⭐ Customer Social Proof: 1,795+ Trustpilot reviews and Instagram integration</li>
        <li>📦 Shipping & Support: Free shipping over €40, 24/7 customer support via chat and phone</li>
        <li>🌍 Multilingual: Dutch/English language support with localized content</li>
      </ul><br/>

      Technical Highlights:
      <ul>
        <li>Built entirely on Shopify platform with custom Liquid code</li>
        <li>Metaobject implementation for product metadata and collection attributes</li>
        <li>Optimized product imagery and descriptions for conversions</li>
        <li>Integrated third-party apps for reviews aggregation (Trustpilot) and social feeds</li>
        <li>Performance optimized for mobile-first shopping experience</li>
      </ul>
    `,
    role: `
      Full-Stack Developer (Shopify Specialist) — Client Project <br/>
      <ul>
        <li>✅ Developed custom Liquid templates and theme modifications from scratch</li>
        <li>📊 Designed and implemented Metaobjects for product attributes, testimonials, and collection metadata</li>
        <li>🖼️ Curated and optimized product imagery, banner assets, and collection hero images</li>
        <li>📝 Structured and populated product data with detailed descriptions, pricing, and category taxonomy</li>
        <li>🔗 Configured third-party integrations (Trustpilot, Instagram feeds, payment gateways)</li>
        <li>🚀 Project currently under active development with ongoing feature enhancements</li>
      </ul>
    `,
    techStack: [
      "Shopify",
      "Liquid",
      "HTML/CSS",
      "JavaScript",
      "Metaobjects",
      "REST APIs",
    ],
    thumbnail: "/projects/thumbnail/mood.png",
    longThumbnail: "/projects/long/mood.png",
    images: [
      "/projects/images/mood-1.png",
      "/projects/images/mood-2.png",
      "/projects/images/mood-3.png",
    ],
  },
  {
    title: "Era of Legends",
    slug: "era-of-legends",
    liveUrl: "https://eraoflegends.vercel.app/",
    year: 2025,
    description: `
    A bilingual marketing + onboarding SPA for a Lineage II High Five (Low Rate) server. <br/><br/>

    Key Features:<br/>
    <ul>
      <li>🌐 Bilingual RTL/LTR Interface: Arabic/English toggle with persisted preference</li>
      <li>⏳ Launch Countdown: live countdown to the official launch time</li>
      <li>🎠 Features Showcase: auto-playing slider for server highlights (Low Rate / Auto-Farm / Clans / Events)</li>
      <li>⚔️ Server Rates & Rules: clear breakdown (XP/SP, Adena, Drop/Spoil, Safe/Max Enchant, characters limit)</li>
      <li>🧾 Register & Sign-in UI: client-side validation + ready onboarding flows</li>
      <li>💬 Community CTA: Discord deep-link + community section</li>
    </ul><br/>

    Technical Highlights:
    <ul>
      <li>React 18 + TypeScript SPA built with Vite</li>
      <li>Tailwind CSS dark fantasy theme + responsive layout</li>
      <li>Express server serving the built SPA + lightweight API endpoints (/api/ping, /api/demo)</li>
    </ul>
  `,
    role: `
    Full-Stack (Frontend Focus) — Personal Project <br/>
    <ul>
      <li>✅ Built the full marketing website + onboarding pages using React Router</li>
      <li>🌐 Implemented Arabic/English translations with RTL/LTR switching</li>
      <li>🎨 Designed a consistent UI theme using Tailwind utilities and reusable section components</li>
      <li>🧩 Added an Express layer to serve the SPA build and expose basic API routes</li>
    </ul>
  `,
    techStack: [
      "React 18",
      "TypeScript",
      "Vite 6",
      "Tailwind CSS",
      "React Router",
      "TanStack Query",
      "Express",
      "Node.js",
      "Zod",
    ],
    thumbnail: "/projects/thumbnail/era.png",
    longThumbnail: "/projects/long/era.png",
    images: [
      "/projects/images/era-1.png",
      "/projects/images/era-2.png",
      "/projects/images/era-3.png",
      "/projects/images/era-4.png",
    ],
  },
  {
    title: "Movie Explorer",
    slug: "movie-explorer",
    liveUrl: "https://chic-froyo-76bace.netlify.app/",
    year: 2025,
    description: `
    A modern movie discovery app that combines fast search with real trending analytics. <br/><br/>

    Key Features:<br/>
    <ul>
      <li>🔎 Smart Search Experience: Debounced search with clean UX and instant results</li>
      <li>🎬 Discovery Feed: Browse popular titles and explore movies without typing</li>
      <li>📈 Trending Searches (Appwrite): Tracks searches and ranks trending movies by real user behavior</li>
      <li>🧩 Reusable UI: Component-driven cards + search module for maintainable scaling</li>
      <li>🛡️ Resilient UI: Loading, empty states, and error handling to prevent crashes</li>
    </ul><br/>

    Technical Highlights:
    <ul>
      <li>Built with React + Vite for a fast dev experience and optimized production builds</li>
      <li>TMDB integration using Bearer token auth + robust fetch layer</li>
      <li>Appwrite Database used as a lightweight analytics store (create/update + ordering by count)</li>
      <li>Performance-focused: request reduction via debouncing and minimal re-renders</li>
    </ul>
  `,
    role: `
    Frontend Developer — Personal Project <br/>
    <ul>
      <li>✅ Built the full movie browsing + search UI and integrated TMDB endpoints</li>
      <li>📊 Designed and implemented trending analytics on Appwrite (searchTerm + count + poster storage)</li>
      <li>⚡ Improved perceived performance with debounced input and clear loading feedback</li>
      <li>🧯 Added defensive rendering to avoid runtime crashes when APIs fail or return empty results</li>
      <li>🚀 Prepared the app for deployment with environment-based config (Vite env vars)</li>
    </ul>
  `,
    techStack: [
      "React",
      "Vite",
      "JavaScript",
      "Appwrite",
      "TMDB API",
      "react-use",
      "react-spinners",
      "CSS",
    ],
    thumbnail: "/projects/thumbnail/movie.png",
    longThumbnail: "/projects/long/movie.png",
    images: ["/projects/images/movie.png", "/projects/images/movie-1.png"],
  },
  {
    title: "Harri Shop",
    slug: "haiie-shop",
    liveUrl: "https://haiie-beryl.vercel.app/",
    year: 2024,
    description: `
    A modern e-commerce web app for browsing products and placing orders with a smooth shopping experience. <br/><br/>

    Key Features:<br/>
    <ul>
      <li>🛍️ Product Catalog & Details: Browse products and open item details pages</li>
      <li>🔎 Filtering: Filter products for faster discovery</li>
      <li>🔥 Best Sellers: Dedicated “Best Selling” section/tab for top products</li>
      <li>🛒 Cart & Orders: Add to cart and review orders</li>
      <li>🔐 Auth (Sign in) + Token: Persisted session using token-based authentication</li>
    </ul><br/>

    Technical Highlights:
    <ul>
      <li>Built with React + Redux for predictable client-side state</li>
      <li>React Query used for server-state fetching, caching, and request syncing</li>
      <li>Axios-based API layer connected to a real backend</li>
    </ul>
  `,
    role: `
    Frontend Developer — Personal Project <br/>
    <ul>
      <li>✅ Implemented core shopping flows (browse, filter, cart, orders)</li>
      <li>🔐 Built sign-in flow and token persistence for protected actions</li>
      <li>🔌 Integrated backend APIs using Axios + React Query</li>
      <li>🧠 Managed UI and cart state with Redux for a consistent UX</li>
    </ul>
  `,
    techStack: ["React", "Redux", "Axios", "React Query"],
    thumbnail: "/projects/thumbnail/shop.png",
    longThumbnail: "/projects/long/shop.png",
    images: [
      "/projects/images/shop-1.png",
      "/projects/images/shop-2.png",
      "/projects/images/shop-3.png",
      "/projects/images/shop-4.png",
    ],
  },
  {
    title: "Sawah",
    slug: "sawah",
    liveUrl: "https://sawah.vercel.app/",
    year: 2024,
    description: `
      A smart tourism platform enabling trip booking and attraction discovery across Egypt — graduation project at Tanta University. <br/><br/>

      Key Features:<br/>
      <ul>
        <li>🗺️ Trip Booking: Full booking flow across all device sizes</li>
        <li>📸 AI Landmark Recognition: Pre-trained model integration for identifying landmarks</li>
        <li>👤 Role-Based Dashboard: 3 user tiers — admin, agent, guest</li>
        <li>📱 Fully Responsive: Optimized for mobile, tablet, and desktop</li>
      </ul>
    `,
    role: `
      Frontend Developer — Graduation Project <br/>
      <ul>
        <li>🎨 Built responsive UI using React.js and Tailwind CSS</li>
        <li>🔌 Integrated REST APIs via Axios with React Query and Context API</li>
        <li>🤖 Built and integrated AI-powered landmark recognition using a pre-trained model</li>
        <li>🛠️ Delivered role-based admin dashboard for 3 user tiers with granular content controls</li>
      </ul>
    `,
    techStack: [
      "React.js",
      "Tailwind CSS",
      "React Query",
      "Axios",
      "Context API",
      "AI/ML Model",
    ],
    thumbnail: "/projects/thumbnail/sawah.jpg",
    longThumbnail: "/projects/long/sawah.jpg",
    images: ["/projects/images/sawah-1.jpg", "/projects/images/sawah-2.jpg"],
  },
];
