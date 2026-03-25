

# Add Background Image to CTA Banner

## What
Use the uploaded construction photo (`IMG_8087.JPG`) as a background image behind the CTA Banner section, similar to how the hero uses a background video with a dark overlay.

## Changes

### 1. Copy image to project
Copy `user-uploads://IMG_8087.JPG` → `public/images/cta-bg.jpg`

### 2. Update `src/components/CTABanner.tsx`
- Add the image as an absolutely-positioned `<img>` element behind the content (same pattern as the hero video)
- Add `relative overflow-hidden` to the section wrapper
- Add a colored overlay (`bg-accent/85` or similar) on top of the image to maintain the red/accent background while showing the photo through it
- Make existing text content `relative z-10` so it sits above the overlay
- Keep all existing text, links, buttons, and styling unchanged

