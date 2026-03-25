

# Reduce Header Logo Size

The logo is currently `h-64 md:h-80` (256px / 320px) which is enormous. Based on the screenshot, a good size would be around `h-16 md:h-20` (64px / 80px) — large enough to be prominent but reasonable for a fixed navigation bar.

## Changes

### `src/components/Header.tsx` (line 9)
- Change logo from `h-64 md:h-80` to `h-16 md:h-20`

