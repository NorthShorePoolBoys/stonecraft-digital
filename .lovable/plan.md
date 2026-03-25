

# Add Company Logo to Header and Footer

## What
Copy the uploaded logo (`logo_red_straight.png`) to `src/assets/logo.png` and use it in the Header (replacing the text-based logo) and the Footer (replacing the text-based branding).

## Changes

### 1. Copy asset
`user-uploads://logo_red_straight.png` → `src/assets/logo.png`

### 2. `src/components/Header.tsx`
- Import the logo: `import logo from "@/assets/logo.png"`
- Replace the text "NEW ENGLAND / PAVERS & STONE" + `<small>` tag (lines 7-10) with an `<img>` of the logo
- Size it to ~160-180px wide (`h-10 md:h-12 w-auto`) so it fits the nav bar
- Keep the `<Link to="/">` wrapper

### 3. `src/components/Footer.tsx`
- Import the same logo
- Replace the text-based branding block (the "NEW ENGLAND PAVERS & STONE" + `<small>` tag) with the logo image
- Size it slightly larger (~200px wide) since the footer has more room
- Keep the tagline text "Masonry · Hardscape · Stonework" below it

