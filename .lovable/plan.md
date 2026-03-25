

# Full Implementation: Build Fix + Content Expansion + SEO

## 1. Fix Build Error
Add `"build:dev": "vite build --mode development"` to `package.json` scripts.

## 2. New Files

### `src/components/SEOHead.tsx`
Reusable component that uses `useEffect` to dynamically set:
- `<title>` tag (unique per page)
- `<meta name="description">` (unique per page, 150-160 chars)
- Open Graph tags (`og:title`, `og:description`, `og:type`, `og:locale`, `og:site_name`)
- Injects JSON-LD `<script>` tags for:
  - **LocalBusiness** (`HomeAndConstructionBusiness`) on every page — correct Wakefield, MA data: name, phone `(617) 697-3456`, address `Wakefield, MA`, geo `42.5065, -71.0529`, hours Mon-Sat 7-6, priceRange `$$`, aggregateRating 5.0 / 87 reviews, areaServed (20+ towns)
  - **BreadcrumbList** on every page
  - **FAQPage** on service pages (wrapping FAQ questions)
  - **Service** schema on service pages

Props: `title`, `description`, `breadcrumbs`, `faqItems?`, `serviceSchema?`

### `src/data/testimonials.ts`
6 realistic testimonials with first name, last initial, town, service mentioned, 2-4 sentences each, all 5 stars. Towns: Wakefield, Melrose, Reading, Stoneham, Winchester, Lexington.

## 3. Expand `src/data/services.ts`

Add to the `ServiceData` interface:
- `faqItems: { question: string; answer: string }[]` — 5-8 per service with location keywords
- `benefits: { title: string; description: string }[]` — 4-6 per service
- `processSteps: { title: string; description: string }[]` — 4 steps per service
- `whyChooseUs: string` — paragraph per service
- `relatedSlugs: string[]` — 3-4 related service slugs
- `serviceAreaText: string` — closing paragraph with town list
- `includedDetails: { title: string; description: string }[]` — "What's Included" H3 subsections

All 18 services get fully unique content following the user's keyword and angle guidance (e.g., paver patios covers Belgard/Unilock, freeze-thaw base prep, ROI vs wood decks; chimney covers winter damage, flue liners, code compliance, etc.).

## 4. Page Updates (content only, no design changes)

### Homepage (`Home.tsx`)
- Add SEOHead with title "New England Pavers & Stone | Masonry & Hardscape Contractor Wakefield, MA"
- Update H1 to "Masonry & Hardscape Contractor in Wakefield, MA"
- Add 150-200 word intro paragraph after stats
- Expand services grid to show all 18 services with unique 2-sentence descriptions
- Add "Why Homeowners Across Greater Boston Trust New England Pavers & Stone" section (5-6 differentiators, ~350 words)
- Add "How Your Project Works" 4-step process section
- Add testimonials section (6 reviews from data file)
- Expand service areas with town links grouped by region (North Shore, Greater Boston, MetroWest, North/NW)

### Service Pages (`ServicePage.tsx`)
- Add SEOHead with service-specific title/description + FAQ + Service schema
- H1 pattern: "[Service Name] in Wakefield, MA"
- Render new data sections in order: intro, "What's Included" (H3 subsections), benefits, process, why choose us, FAQ (expandable), related services cards, service area closing text
- Internal links woven into body copy (3+ per page, keyword-rich anchors)

### About Page (`About.tsx`)
- Add SEOHead
- Update H1: "About New England Pavers & Stone — Wakefield, MA's Trusted Masonry Contractor"
- Expand "Our Story" to ~350 words (founder story, growth through referrals)
- Add "What Sets Us Apart" — 5 values with H3s
- Add "Meet the Crew" section (~175 words)
- Add "Licensed, Insured & Manufacturer-Certified" section (Belgard, Unilock, Techo-Bloc, ICPI)

### Gallery Page (`Gallery.tsx`)
- Add SEOHead
- Update H1: "Our Work — Masonry & Hardscape Projects Across Greater Boston"
- Add 100-150 word intro
- Organize into categorized sections with H2 headers (Paver Patios, Retaining Walls, Walkways & Steps, Driveways, Outdoor Living, Masonry & Repair)
- Each placeholder gets town name and 1-sentence project description

### Contact Page (`Contact.tsx`)
- Add SEOHead
- Update H1: "Contact New England Pavers & Stone — Free Estimates in Wakefield, MA & Greater Boston"
- Add "What Happens When You Call" section (~175 words)
- Add FAQ section (4 questions: free estimate, timeline, financing, unsure what I need)

### Service Areas Page (`ServiceAreas.tsx`)
- Add SEOHead
- Update H1: "Masonry & Hardscape Services Across Greater Boston"
- Expand intro to ~225 words (highway access, project types by area)
- Add 20 town-specific content blocks (H3 + 60-80 words each + links to 2 service pages)
- Organize full 50+ town list by region

### NotFound Page
- Add SEOHead with basic meta

### `index.html`
- Add `geo.position` and `ICBM` meta tags
- Add `og:site_name` meta tag
- Add favicon reference placeholder

## 5. Content Rules Applied Throughout
- Direct contractor voice, no fluff, no puns
- Specific materials named (Belgard, Unilock, Techo-Bloc, bluestone, granite)
- New England climate context (freeze-thaw, spring heaving, base depth)
- Short paragraphs (2-4 sentences), active voice, no exclamation points
- Natural internal linking with keyword-rich anchors
- Every H1 unique with location
- Primary keywords 2-3 times naturally per page

## Files Modified
1. `package.json` — build:dev script
2. `index.html` — geo meta tags, favicon
3. `src/components/SEOHead.tsx` — new
4. `src/data/testimonials.ts` — new
5. `src/data/services.ts` — massive expansion (18 services x full content)
6. `src/pages/Home.tsx` — content sections
7. `src/pages/ServicePage.tsx` — restructured with all new sections
8. `src/pages/About.tsx` — expanded
9. `src/pages/Gallery.tsx` — categorized with descriptions
10. `src/pages/Contact.tsx` — expanded + FAQ
11. `src/pages/ServiceAreas.tsx` — town-specific blocks
12. `src/pages/NotFound.tsx` — SEOHead

