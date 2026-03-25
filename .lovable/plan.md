

# Remove Orange Overlay and "CALL NOW" from CTA Banner

## Changes to `src/components/CTABanner.tsx`
- Remove the orange/accent overlay (`bg-accent/85` div on line 13)
- Remove the "CALL NOW" watermark text (line 14)
- Add a subtle dark overlay (`bg-black/40`) instead so the text remains readable over the photo
- Keep the headline, phone number, subtext, and CTA button as-is

