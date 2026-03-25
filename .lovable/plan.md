

# Add Background Video to Hero Section

## What
Copy the uploaded MP4 to `public/videos/hero-bg.mp4` and add it as a full-screen background video behind the existing hero section content. No design changes — just layer the video behind the current text and CTAs with a dark overlay for readability.

## Changes

### 1. Copy video file
Copy `user-uploads://hf_20260325_074938_e935e13d-a0b3-4a87-b2d6-8ac6aafb1a16-2.mp4` → `public/videos/hero-bg.mp4`

### 2. Update `src/pages/Home.tsx` — Hero section only (lines 43-60)
- Wrap the hero `<section>` with `relative overflow-hidden`
- Add an absolutely-positioned `<video>` element behind the content:
  - `autoPlay`, `muted`, `loop`, `playsInline` (for mobile autoplay)
  - Covers full section with `object-cover`, `absolute inset-0 w-full h-full`
- Add a dark overlay `<div>` (absolute, `bg-black/60`) between video and text for contrast
- Make the text content `relative z-10` so it sits above the overlay
- No other changes to styling, layout, or content

