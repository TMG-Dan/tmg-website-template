# /tmg-motion - Add Page Animations

Apply Framer Motion animations to all section components for a polished, professional feel.

## Prerequisites

- Project initialized via `/tmg-setup`
- Site structure defined via `/tmg-sitemap`
- Design configured via `/tmg-designer`

## Workflow

1. **Choose Animation Style**
   Ask user for their preferred animation style:

   | Style | Description | Details |
   |-------|-------------|---------|
   | **Subtle** | Professional, minimal | Gentle fades, 0.3s duration, minimal movement |
   | **Moderate** | Balanced, engaging | Fade + slight slide, 0.5s duration |
   | **Dynamic** | Bold, eye-catching | Larger movements, stagger effects, 0.6s duration |

2. **Apply Animations to All Sections**
   Update all section components in `src/components/sections/`:

   - **Hero** - Fade in on page load (immediate)
   - **Features** - Staggered fade in on scroll
   - **CTA** - Fade in on scroll
   - **Testimonials** - Staggered cards on scroll
   - **About/Team** - Fade in on scroll
   - **Pricing** - Staggered cards on scroll
   - **FAQ** - Staggered items on scroll
   - **Contact** - Fade in on scroll
   - **Any other sections** - Appropriate scroll animation

3. **Implementation Pattern**

   For each section component:
   ```tsx
   'use client'

   import { motion } from 'framer-motion'
   import { useInView } from 'framer-motion'
   import { useRef } from 'react'

   // Animation variants based on chosen style
   const fadeInUp = {
     hidden: { opacity: 0, y: 20 },
     visible: {
       opacity: 1,
       y: 0,
       transition: { duration: 0.5 } // Adjust based on style
     }
   }

   const staggerContainer = {
     hidden: { opacity: 0 },
     visible: {
       opacity: 1,
       transition: {
         staggerChildren: 0.1 // Adjust based on style
       }
     }
   }

   export function SectionComponent() {
     const ref = useRef(null)
     const isInView = useInView(ref, { once: true, margin: "-100px" })

     return (
       <motion.section
         ref={ref}
         initial="hidden"
         animate={isInView ? "visible" : "hidden"}
         variants={fadeInUp}
       >
         {/* content */}
       </motion.section>
     )
   }
   ```

4. **Style-Specific Settings**

   **Subtle:**
   ```ts
   duration: 0.3
   y: 10
   staggerChildren: 0.05
   ```

   **Moderate:**
   ```ts
   duration: 0.5
   y: 20
   staggerChildren: 0.1
   ```

   **Dynamic:**
   ```ts
   duration: 0.6
   y: 30
   staggerChildren: 0.15
   ```

5. **Preview and Test**
   - Run `npm run dev`
   - Scroll through all pages
   - Verify animations trigger on scroll
   - Check mobile viewport behavior
   - Run `npm run build` to ensure no errors

6. **Confirm with User**
   Ask if any adjustments are needed:
   - Animation speed
   - Specific section tweaks
   - Disable animation on mobile

## Animation Utilities

If `src/lib/animations.ts` exists, use those utilities. Otherwise create animation variants directly in components.

Common patterns to apply:

```tsx
// Hero - animate immediately on load
<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>

// Scroll-triggered sections
const ref = useRef(null)
const isInView = useInView(ref, { once: true, margin: "-100px" })

// Staggered children (features, cards, etc.)
<motion.div variants={staggerContainer}>
  {items.map((item, i) => (
    <motion.div key={i} variants={fadeInUp}>{item}</motion.div>
  ))}
</motion.div>
```

## Output

- All section components wrapped with motion animations
- Scroll-triggered effects throughout the site
- Consistent animation timing based on chosen style
- Smooth, professional page experience

## Example Session

```
User: /tmg-motion

Claude: What animation style would you like for your website?

1. **Subtle** - Professional, minimal movement (recommended for corporate sites)
2. **Moderate** - Balanced, engaging animations (good for most sites)
3. **Dynamic** - Bold, eye-catching effects (great for creative/agency sites)

User: Moderate

Claude: Applying moderate animations to all sections...

✓ Updated Hero.tsx - fade in on load
✓ Updated Features.tsx - staggered fade in
✓ Updated CTA.tsx - fade in on scroll
✓ Updated Testimonials.tsx - staggered cards
✓ Updated About.tsx - fade in on scroll

Run `npm run dev` and scroll through the site to see the animations.

Would you like any adjustments to the animation timing or effects?
```

## Next Steps

- Preview animations with `npm run dev`
- Adjust individual sections if needed with `/tmg-developer`
- Deploy with `/tmg-deploy` when satisfied
