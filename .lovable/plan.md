

# Fix Blurry CTA Background Image

## Problem
The uploaded JPG was likely compressed or downscaled when copied to `public/images/cta-bg.jpg`. The `loading="lazy"` attribute is fine but isn't causing the blur.

## Fix
1. **Re-copy the original image** at full resolution from `user-uploads://IMG_8087.JPG` → `public/images/cta-bg.jpg`, ensuring no quality loss
2. **Add `fetchpriority="high"`** to the `<img>` tag since it's a prominent visual element, ensuring the browser loads the full-res version quickly
3. **Remove `loading="lazy"`** — this banner is often visible without much scrolling, so lazy loading can cause a blurry placeholder effect

