

# Make Logo 1000px Wide with Less Padding

## Changes

### `src/components/Footer.tsx` (line 14)
- Change logo from `w-[500px]` to `w-[1000px]` and add `max-w-full` so it doesn't overflow on smaller screens

### `src/components/Header.tsx` (line 7)
- Reduce nav padding from `px-5 py-3 md:px-12 md:py-4` to `px-2 py-1 md:px-6 md:py-1`

### `src/components/Footer.tsx` (line 10)
- Reduce footer padding from `px-5 py-8 md:px-12 md:py-12` to `px-3 py-4 md:px-6 md:py-6`

