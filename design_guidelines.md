# Design Guidelines: Personal Portfolio Website for Software Engineer & Web Designer

## Design Approach

**Selected Approach:** Reference-Based with Creative Portfolio Patterns
Drawing inspiration from award-winning developer portfolios and modern SaaS aesthetics, blending Linear's technical sophistication with Awwwards-level creative presentation.

**Key Design Principles:**
- Technical credibility through clean, precise layouts
- Creative distinction through bold typography and asymmetric compositions
- Immediate impact showcasing dual expertise (engineering + design)
- Portfolio-first approach: work speaks before words

## Core Design Elements

### A. Color Palette

**Dark Mode (Primary):**
- Background: 220 20% 8% (deep navy-black)
- Surface: 220 18% 12% (elevated cards)
- Primary: 200 95% 65% (vibrant cyan-blue)
- Text Primary: 220 10% 95%
- Text Secondary: 220 8% 65%

**Light Mode:**
- Background: 220 15% 98%
- Surface: 0 0% 100%
- Primary: 200 90% 50%
- Text Primary: 220 20% 15%
- Text Secondary: 220 12% 45%

**Accent (sparingly):** 280 70% 65% (subtle purple for CTAs/highlights)

### B. Typography

- **Display:** Inter or Outfit (bold, 700-800 weight) for hero headlines
- **Body:** Inter (400-500 weight) for readable content
- **Code/Technical:** JetBrains Mono for code snippets or technical details
- **Scale:** text-5xl/6xl/7xl for hero, text-lg/xl for body, text-sm/base for captions

### C. Layout System

**Spacing Primitives:** Tailwind units of 4, 6, 8, 12, 16, 20, 24 (e.g., p-4, gap-8, py-20)
- Section padding: py-20 md:py-32 for generous breathing room
- Component spacing: gap-6 to gap-12 for cards/grids
- Container: max-w-7xl for full sections, max-w-4xl for content-focused areas

### D. Component Library

**Navigation:**
- Fixed top navigation with blur backdrop (backdrop-blur-md)
- Logo/Name left, nav links center/right, CTA button right
- Mobile: Slide-in hamburger menu with smooth transitions

**Hero Section:**
- Full-width creative layout with large professional headshot/workspace image
- Asymmetric design: Image left (60%), text content right (40%)
- Large bold headline emphasizing dual expertise
- Animated typing effect for role/specialties
- Primary CTA: "View My Work" | Secondary: "Contact Me"
- Subtle grid or dot pattern background overlay

**Project Showcase:**
- Masonry grid layout (3 columns desktop, 2 tablet, 1 mobile)
- Large project cards with hover animations revealing project details
- Category filters: All, Web Design, Software Engineering, Full Stack
- Each card: Featured image, title, tech stack badges, brief description
- Click to expand into detailed case study modal/page

**About Section:**
- Two-column split: Personal story/bio (left) + Skills visualization (right)
- Skills presented as progress bars or animated icons with proficiency levels
- Include: Frontend (React, TypeScript, Tailwind), Backend (Node.js, Python), Design (Figma, UI/UX)
- Professional photo integrated naturally

**Contact Section:**
- Split layout: Contact form (left) + Information/Social links (right)
- Form fields: Name, Email, Project Type (dropdown), Message
- Social proof: "Let's build something amazing together" + response time indicator
- Social icons: GitHub, LinkedIn, Dribbble/Behance, Email

**Footer:**
- Minimal, centered design
- Quick navigation links
- Copyright and "Designed & Built by [Name]"
- Subtle back-to-top button

### E. Animations

**Minimal but Impactful:**
- Scroll-triggered fade-in for sections (no parallax)
- Smooth hover states on project cards (subtle lift + shadow)
- Navigation menu slide animations
- NO continuous/looping animations

## Images

**Large Hero Image:** YES - Professional workspace setup or creative headshot
- Placement: Hero section, left side, 60% width on desktop
- Style: High-quality, slightly desaturated, with subtle gradient overlay

**Project Thumbnails:** 
- 6-8 project preview images in portfolio section
- High-fidelity mockups or screenshots
- Consistent aspect ratio (16:9 or 3:2)

**About Section Photo:**
- Professional headshot, circular crop
- Placement: Right column of about section

**Image Treatment:**
- Subtle border-radius (rounded-lg to rounded-xl)
- Shadow on hover for depth
- Responsive sizing with object-cover

## Viewport & Layout Strategy

- Hero: 85vh for impactful entry
- Content sections: Natural height with py-20/32 rhythm
- Portfolio grid: Multi-column (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- About: 2-column on desktop (grid-cols-1 lg:grid-cols-2)
- Contact: 2-column split form/info
- All sections: Centered with max-w-7xl containers