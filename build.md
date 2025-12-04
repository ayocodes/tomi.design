# Motion Design Portfolio - Build Guide

## Project Overview
A bold, motion-rich video editing portfolio built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion. Features 4 pages with smooth animations and mobile responsiveness.

---

## Tech Stack
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Fonts**: Space Grotesk (headings), Inter (body)
- **Video Hosting**: YouTube embeds

---

## Color Palette & Setup (Tailwind v4)

### Step 1: Update `app/globals.css`
Replace the entire contents with:

```css
@import "tailwindcss";

:root {
  --primary-accent: #D4A373;
  --background: #FAF7F2;
  --text-primary: #1A1A1A;
  --text-secondary: #666666;
  --button-bg: #000000;
  --button-text: #FFFFFF;
  --hover: #333333;
  --border: #E5E0D8;
}

@theme inline {
  /* Colors */
  --color-primary-accent: var(--primary-accent);
  --color-background: var(--background);
  --color-text-primary: var(--text-primary);
  --color-text-secondary: var(--text-secondary);
  --color-button-bg: var(--button-bg);
  --color-button-text: var(--button-text);
  --color-hover: var(--hover);
  --color-border: var(--border);
  
  /* Fonts */
  --font-heading: var(--font-space-grotesk);
  --font-body: var(--font-inter);
}

body {
  background: var(--background);
  color: var(--text-primary);
  font-family: var(--font-body);
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
}
```

### Step 2: Update `app/layout.tsx`
```typescript
import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Motion Design Portfolio",
  description: "Video editing and motion design portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
```

### Color Usage in Components
Use these Tailwind classes throughout your project:

- **Primary Accent**: `bg-primary-accent`, `text-primary-accent`, `border-primary-accent`
- **Background**: `bg-background`
- **Text Primary**: `text-text-primary`
- **Text Secondary**: `text-text-secondary`
- **Buttons**: `bg-button-bg text-button-text hover:bg-hover`
- **Borders**: `border-border`

### Font Usage
- **Headings**: `font-heading`
- **Body text**: `font-body` (applied globally to body)

**Note**: In Tailwind v4, there is NO `tailwind.config.ts` file. All configuration is done directly in `globals.css` using the `@theme` directive.

---

## Site Structure

### Pages (4 total)
1. **Home** (`/`) - Hero, Featured Works (3 videos), CTA
2. **Work** (`/work`) - Grid of all projects (up to 6), some with case studies
3. **About Me** (`/about`) - Bio, skills, experience
4. **Contact** (`/contact`) - Calendly embed + email option

### Routes
```
/app
  /page.tsx          → Home
  /work
    /page.tsx        → Work Grid
  /about
    /page.tsx        → About Me
  /contact
    /page.tsx        → Contact (Calendly + Email)
```

---

## Components Breakdown

### Global Components (in `/components`)

#### 1. **Navigation** (`/components/Navigation.tsx`)
- **Features**:
  - Fixed header that hides on scroll down, shows on scroll up
  - Desktop: Horizontal nav links
  - Mobile: Hamburger menu (slide-in drawer)
  - Active page indicator
- **Animation**: Framer Motion slide-in/out
- **Links**: Home, Work, About, Contact

#### 2. **Footer** (`/components/Footer.tsx`)
- **Content**: Social links, copyright, email
- **Style**: Minimal, consistent across all pages

#### 3. **Button** (`/components/Button.tsx`)
- **Variants**: Primary (black bg), Secondary (outline)
- **Hover**: Scale + color change animation

#### 4. **VideoCard** (`/components/VideoCard.tsx`)
- **Props**: title, thumbnailUrl, youtubeId, hasCaseStudy
- **Features**: 
  - YouTube thumbnail
  - Hover: Scale + overlay with play icon
  - Click: Opens modal or expands inline
- **Animation**: Smooth hover transforms

#### 5. **CaseStudyModal** (`/components/CaseStudyModal.tsx`)
- **Features**:
  - Overlay backdrop (blur)
  - YouTube video embed
  - Project details, role, tools used
  - Close button (X + click outside)
- **Animation**: Fade + scale in/out

#### 6. **SectionHeading** (`/components/SectionHeading.tsx`)
- **Purpose**: Consistent section titles with animated underline
- **Animation**: Slide in from left on scroll

---

### Page-Specific Components

#### Home Page (`/app/page.tsx`)
**Sections**:
1. **Hero Section**
   - Large heading with animated text
   - Subheading
   - CTA button ("View My Work" → /work)
   - Background: Subtle parallax or gradient animation
   
2. **Featured Works**
   - Grid of 3 video cards
   - Stagger animation on load
   
3. **About Preview**
   - Short intro
   - CTA to About page

4. **Contact CTA**
   - "Let's work together" + button to Contact page

**Animations**:
- Hero text: Stagger fade + slide up
- Video cards: Stagger with delay
- Scroll-triggered animations for sections

---

#### Work Page (`/app/work/page.tsx`)
**Components**:
1. **Page Header**
   - Title: "Selected Works"
   - Filter tags (optional): "All", "Commercial", "Personal"
   
2. **Work Grid**
   - Grid layout (2 cols mobile, 3 cols desktop)
   - Up to 6 VideoCard components
   - Some cards have "Case Study" badge
   
3. **Case Study Content**
   - Modal/inline expansion with:
     - YouTube embed
     - Project description
     - Role, client, tools, year
     - Additional images/GIFs (optional)

**Animations**:
- Grid items: Stagger fade-in on scroll
- Modal: Scale + fade transition

---

#### About Page (`/app/about/page.tsx`)
**Sections**:
1. **Hero/Intro**
   - Profile image (optional)
   - Name + title
   - Bio paragraph
   
2. **Skills/Tools**
   - List of software (After Effects, Premiere, etc.)
   - Icon + label cards
   - Hover animations
   
3. **Experience/Process**
   - Timeline or paragraph format
   
4. **Fun Facts** (optional)
   - Quick personal touches

**Animations**:
- Profile image: Fade + scale
- Skills cards: Stagger on scroll
- Text: Fade up

---

#### Contact Page (`/app/contact/page.tsx`)
**Sections**:
1. **Page Header**
   - "Let's Connect"
   - Subheading
   
2. **Calendly Integration**
   - Embedded Calendly widget
   - "Book a call" heading
   
3. **Email Option**
   - "Or email me directly"
   - Email link (opens mailto:)
   - Social links
   
4. **Alternative**: 
   - Two columns: Calendly left, Email/info right

**Animations**:
- Fade in sections
- Calendly: Slide from bottom

---

## Animation Patterns

### Scroll-Triggered Animations
Use Framer Motion's `whileInView`:
```typescript
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.6 }}
>
```

### Stagger Children
```typescript
<motion.div
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  {items.map((item) => (
    <motion.div variants={itemVariants} key={item.id}>
      {/* content */}
    </motion.div>
  ))}
</motion.div>
```

### Hover Effects
- **Scale**: `whileHover={{ scale: 1.05 }}`
- **Brightness**: Combine with CSS filter
- **Lift**: `y: -10` with shadow increase

### Page Transitions
Consider adding in `layout.tsx` for smooth page changes.

---

## Data Structure

### Work Items (`/data/works.ts`)
```typescript
export interface Work {
  id: string;
  title: string;
  youtubeId: string;
  thumbnailUrl: string;
  category?: string;
  featured?: boolean;
  hasCaseStudy: boolean;
  caseStudy?: {
    description: string;
    role: string;
    client?: string;
    tools: string[];
    year: string;
    additionalMedia?: string[];
  };
}

export const works: Work[] = [
  // Hard-coded work items
];
```

---

## Installation & Setup

### 1. Initialize Project
```bash
npx create-next-app@latest motion-portfolio --typescript --tailwind --app
cd motion-portfolio
```

### 2. Install Dependencies
```bash
npm install framer-motion
```

### 3. Update `app/globals.css`
Replace contents with the CSS from the "Color Palette & Setup" section above

### 4. Update `app/layout.tsx`
Replace contents with the layout code from the "Color Palette & Setup" section above

**That's it!** No `tailwind.config.ts` needed in Tailwind v4.

---

## Build Order

### Phase 1: Foundation
1. ✅ Update `app/globals.css` (colors, fonts)
2. ✅ Update `app/layout.tsx` (Space Grotesk + Inter fonts)
3. ✅ Install framer-motion
4. ✅ Create folder structure (/components, /data)
5. ✅ Create data/works.ts with sample data

### Phase 2: Global Components
6. ✅ Navigation component
7. ✅ Footer component
8. ✅ Button component
9. ✅ VideoCard component
10. ✅ CaseStudyModal component

### Phase 3: Pages
11. ✅ Home page (Hero + Featured Works)
12. ✅ Work page (Grid + Case Studies)
13. ✅ About page
14. ✅ Contact page (Calendly + Email)

### Phase 4: Polish
15. ✅ Add all Framer Motion animations
16. ✅ Mobile responsiveness check
17. ✅ Test all interactions
18. ✅ Performance optimization

---

## Progress Tracking

### Completed Components:
- [x] Tailwind Config
- [x] Font Setup
- [x] Navigation
- [x] Footer
- [x] Button
- [x] VideoCard
- [x] CaseStudyModal
- [x] Home Page
- [x] Work Page
- [x] About Page
- [x] Contact Page

### Current Task:
**[Task Name]** - [Description]

### Next Up:
**[Next Task]** - [Description]

---

## Notes for Continuation

When continuing in a new chat:
1. Copy this entire README
2. Mention which component/page you were last working on
3. Reference the "Progress Tracking" section
4. Provide any additional context about changes made

---

## Design References

[Placeholder for design screenshots/links you'll provide]

---

## Calendly Integration

For Contact page:
```typescript
// Embed Calendly inline
<div className="calendly-inline-widget" 
     data-url="YOUR_CALENDLY_LINK"
     style={{ minWidth: '320px', height: '700px' }} />

// Add to <head> in layout or page
<script src="https://assets.calendly.com/assets/external/widget.js" />
```

---

## YouTube Embed

```typescript
<iframe
  width="100%"
  height="400"
  src={`https://www.youtube.com/embed/${youtubeId}`}
  title={title}
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>
```

---

**Last Updated**: [Date]
**Version**: 1.0