# 🚀 Portfolio v3.0

A modern, high-performance portfolio website showcasing frontend development expertise with cutting-edge web technologies and smooth animations.

**[Live Demo](https://maged-karam.vercel.app)** | **[GitHub](https://github.com/MagedKaram)** | **[LinkedIn](https://linkedin.com/in/maged-karam)**

---

## ✨ Features

- **🎨 Modern Design** – Minimalist, dark-themed interface with smooth gradient transitions
- **⚡ High Performance** – Optimized for speed using Next.js 16 App Router and lazy loading
- **🎬 Smooth Animations** – Professional GSAP animations for scroll triggers and interactions
- **📱 Fully Responsive** – Perfect experience on mobile, tablet, and desktop
- **🔗 Project Showcase** – Interactive project cards with hover effects and detailed case studies
- **📊 Experience Timeline** – Visual representation of professional experiences
- **🎯 Tech Stack Display** – Skills organized by category with icons
- **🌙 Dark Mode Ready** – Beautiful dark theme for reduced eye strain
- **♿ Accessible** – WCAG compliant, semantic HTML, and keyboard navigation support
- **📈 SEO Optimized** – Meta tags, structured data, and sitemap generation
- **🚀 Vercel Optimized** – Built for fast deployment and edge caching

---

## 🛠️ Tech Stack

### Core Technologies

- **Framework:** [Next.js 16](https://nextjs.org) – React with App Router
- **Language:** [TypeScript](https://typescript.org) – Type-safe development
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com) – Utility-first CSS framework
- **UI Development:** [React 19](https://react.dev) – Latest React features

### Animations & Interactions

- **GSAP** – Professional-grade animations and DOM manipulation
- **Lenis** – Smooth scroll behavior for silky-smooth scrolling
- **Lucide Icons** – Modern, accessible icons library

### Development Tools

- **ESLint 9** – Code quality and style consistency
- **PostCSS 4** – Advanced CSS tooling
- **SVGR** – SVG to React component conversion

---

## 📂 Project Structure

```
portfolio-3.0/
├── app/                          # Next.js app directory
│   ├── layout.tsx               # Root layout with global styles
│   ├── page.tsx                 # Homepage
│   ├── template.tsx             # Route transitions template
│   ├── globals.css              # Global styles
│   ├── _components/             # Page-level components
│   │   ├── AboutMe.tsx
│   │   ├── Banner.tsx           # Hero section
│   │   ├── Experiences.tsx
│   │   ├── Project.tsx          # Individual project item
│   │   ├── ProjectList.tsx      # Projects grid
│   │   ├── Skills.tsx
│   │   └── StickyEmail.tsx
│   └── projects/
│       └── [slug]/              # Dynamic project detail pages
│           └── _components/
│               └── ProjectDetails.tsx
├── components/                   # Shared UI components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Button.tsx
│   ├── CustomCursor.tsx         # Custom pointer effect
│   ├── ParticleBackground.tsx
│   ├── Preloader.tsx
│   ├── ScrollProgressIndicator.tsx
│   ├── SectionTitle.tsx
│   ├── TransitionLink.tsx       # Client-side transitions
│   ├── ArrowAnimation.tsx
│   └── icons/                   # Icon components
├── data/                         # Static data
│   ├── personal.ts              # Contact info
│   ├── projects.ts              # Portfolio projects
│   ├── experiences.ts           # Work experience
│   ├── education.ts             # Education history
│   └── skills.ts                # Technical skills
├── types/                        # TypeScript types
│   └── index.ts                 # Shared interfaces
├── lib/                          # Utility functions
│   └── utils.ts
├── public/                       # Static assets
│   ├── logo/
│   └── projects/                # Project screenshots
│       ├── thumbnail/
│       ├── long/
│       └── images/
└── config/                       # Configuration files
    ├── tailwind.config.ts
    ├── next.config.ts
    ├── tsconfig.json
    └── eslint.config.mjs
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.17+ or later
- **pnpm** (recommended) or npm/yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/MagedKaram/portfolio-3.0.git
   cd portfolio-3.0
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Run development server**

   ```bash
   pnpm dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📝 Development

### Common Commands

```bash
# Start development server with hot reload
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linter
pnpm lint

# Format code (if configured)
pnpm format
```

### Adding a New Project

1. Add project data to `data/projects.ts`:

   ```typescript
   {
     title: "Project Name",
     slug: "project-slug",
     year: 2026,
     liveUrl: "https://...",
     description: "...",
     role: "...",
     techStack: ["Tech1", "Tech2"],
     thumbnail: "/projects/long/project.png",
     longThumbnail: "/projects/long/project.png",
     images: ["/projects/images/..."],
   }
   ```

2. Add project images to `public/projects/`:
   - **Thumbnail:** `public/projects/long/project.png`
   - **Detail images:** `public/projects/images/project-*.png`

3. Dynamic page automatically generates at `/projects/project-slug`

---

## 🎯 Key Features Explained

### Performance Optimizations

- **Image Optimization** – Next.js automatic image optimization and WebP conversion
- **Code Splitting** – Route-based code splitting for faster initial loads
- **Lazy Loading** – Components and images load on demand
- **CSS Minification** – Tailwind purges unused styles in production

### Animation System

- **GSAP Timeline Animations** – Choreographed animations for page transitions
- **Scroll Triggers** – Elements animate into view as user scrolls
- **Parallax Effects** – Depth and motion with scroll-linked animations
- **Custom Cursor** – Interactive cursor feedback on hover

### Responsive Design

- **Mobile-First Approach** – Base styles for mobile, enhanced for larger screens
- **Breakpoint Strategy** – xs, sm, md, lg, xl viewport sizes covered
- **Touch Friendly** – Large tap targets and smooth interactions

---

## 📦 Production Deployment

### Deploy on Vercel (Recommended)

The easiest way to deploy this project is using [Vercel](https://vercel.com):

1. **Push to GitHub** – Ensure code is committed
2. **Connect Vercel** – Import repository in Vercel dashboard
3. **Deploy** – Vercel automatically builds and deploys on push

**Live:** [maged-karam.vercel.app](https://maged-karam.vercel.app)

### Environment Variables

Create `.env.local`:

```env
# Add any required environment variables here
```

---

## 📊 Project Stats

- **Projects Showcased:** 5+
- **TypeScript Coverage:** 100%
- **Page Load Time:** < 1s (Lighthouse optimized)
- **Lighthouse Score:** 95+ (Performance, Accessibility, Best Practices)

---

## 🤝 Contributing

This is a personal portfolio project. For suggestions or improvements:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit changes (`git commit -m 'Add improvement'`)
4. Push to branch (`git push origin feature/improvement`)
5. Open a Pull Request

---

## 📧 Contact

**Maged Karam**

- 📧 Email: [maged.karm341@gmail.com](mailto:maged.karm341@gmail.com)
- 💼 LinkedIn: [linkedin.com/in/maged-karam](https://linkedin.com/in/maged-karam)
- 🐙 GitHub: [github.com/MagedKaram](https://github.com/MagedKaram)
- 📱 Phone: +20 102 332 6386
- 📍 Location: Cairo, Egypt

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org) – The React framework
- [Tailwind CSS](https://tailwindcss.com) – Utility-first CSS
- [GSAP](https://greensock.com/gsap) – Professional animations
- [Vercel](https://vercel.com) – Hosting and deployment

---

**Last Updated:** April 2026 | **Version:** 3.0.0
