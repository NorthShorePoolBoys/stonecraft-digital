

# Add Review Rating Badges Below Hero Section

## What
Add a horizontal row of 4 review platform badges (Yelp, Google, Angi, Yahoo) directly below the hero section, each showing 5 stars and linking to the corresponding review page.

## Changes

### `src/pages/Home.tsx`
Insert a new section between the hero `</section>` (line 69) and `<Stripe />` (line 71):

- A full-width dark bar (`bg-dark` or `bg-mid`) with 4 badges in a responsive grid (`grid-cols-2 md:grid-cols-4`)
- Each badge is an `<a>` tag with `target="_blank"` and `rel="noopener noreferrer"` linking to:
  - **Yelp**: `https://www.yelp.com/biz/new-england-pavers-and-stone-lynn`
  - **Google**: `https://www.google.com/maps/place/New+England+pavers%26stone/...`
  - **Angi**: `https://www.angi.com/companylist/us/ma/lynn/new-england-pavers-and-stone-llc-reviews-1.htm`
  - **Yahoo**: `https://local.yahoo.com/info-238197620-new-england-pavers-stone-lynn/`
- Each badge displays:
  - Platform name in `font-display` uppercase tracking
  - 5 filled stars in `text-accent` (using ★ characters or SVG stars)
  - "5.0" rating text
- Styled consistently with the existing design language (dark backgrounds, accent color stars, `tracking-[2px]`, `font-display`)
- Hover effect: subtle lift or brightness change
- `z-10 relative` to stay above the hero video layer
- Responsive: 2 columns on mobile, 4 on desktop

