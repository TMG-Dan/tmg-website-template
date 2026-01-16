# /tmg-developer - Custom Feature Development

Add custom features and functionality beyond standard templates.

## Prerequisites

- Project initialized via `/tmg-setup`
- Site structure defined via `/tmg-sitemap`
- Design configured via `/tmg-designer`
- Content populated via `/tmg-content`

## Workflow

1. **Gather Requirements**
   - Ask user to describe the feature in natural language
   - Clarify which page or section needs the feature
   - Identify any third-party services needed

2. **Plan Implementation**
   - Read existing page/component code
   - Determine best approach:
     - New component needed?
     - Existing component modification?
     - Third-party library required?
     - API integration needed?

3. **Implement Feature**

   For **UI Components**:
   ```
   src/components/
   ├── features/
   │   ├── BookingCalendar.tsx
   │   ├── PricingCalculator.tsx
   │   ├── ImageSlider.tsx
   │   └── PropertySearch.tsx
   ```

   For **Integrations**:
   ```
   src/lib/
   ├── integrations/
   │   ├── google-maps.ts
   │   ├── calendly.ts
   │   ├── stripe.ts
   │   └── mailchimp.ts
   ```

4. **Add Environment Variables (if needed)**
   Update `.env.local`:
   ```
   GOOGLE_MAPS_API_KEY=
   CALENDLY_API_KEY=
   STRIPE_PUBLISHABLE_KEY=
   STRIPE_SECRET_KEY=
   ```

5. **Test Feature**
   - Verify feature works locally
   - Test responsive behavior
   - Check for console errors

6. **Update tmg-config.json**
   Add custom features to tracking:
   ```json
   {
     "customFeatures": [
       { "name": "booking-calendar", "page": "/contact", "date": "2024-01-16" }
     ]
   }
   ```

## Common Feature Examples

### Booking/Scheduling
- Calendly embed
- Custom booking form with date picker
- Availability calendar

### Maps & Location
- Google Maps with custom markers
- Store locator
- Service area map

### Interactive Elements
- Before/after image slider
- Image gallery with lightbox
- Testimonial carousel
- FAQ accordion

### Calculators & Forms
- Pricing calculator
- Quote request form
- ROI calculator
- Mortgage calculator

### Social & Marketing
- Social media feed embed
- Newsletter signup (Mailchimp, ConvertKit)
- Live chat widget
- Exit intent popup

### E-commerce
- Stripe checkout
- Product quick view
- Shopping cart
- Wishlist

## Package Installation

If a feature requires new packages:
```bash
npm install [package-name]
```

Common packages for features:
- `@googlemaps/js-api-loader` - Google Maps
- `react-datepicker` - Date selection
- `swiper` - Carousels and sliders
- `react-compare-slider` - Before/after images
- `@stripe/stripe-js` - Payments

## Output

- New component(s) created
- Page updated with feature
- Environment variables documented
- Third-party integration configured
- Feature tested and working

## Example Session

```
User: /tmg-developer

Claude: What custom feature would you like to add?

User: Add a before/after image slider to the services page

Claude: I'll add a before/after comparison slider to the services page.

Installing react-compare-slider...
✓ Installed react-compare-slider

Creating component...
✓ Created src/components/features/BeforeAfterSlider.tsx

Updating services page...
✓ Added slider section to /services

The slider accepts two images and allows users to drag to compare.
Usage in any page:
<BeforeAfterSlider
  beforeImage="/images/before.jpg"
  afterImage="/images/after.jpg"
  beforeLabel="Before"
  afterLabel="After"
/>

Run /tmg-deploy when ready to launch.
```

## Animation Notes

Framer Motion is pre-installed in the template. For animated components, import from `src/lib/animations.ts`:
```tsx
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { motion } from 'framer-motion'

<motion.div variants={fadeInUp} initial="hidden" animate="visible">
  {/* content */}
</motion.div>
```

## Next Steps

Continue with `/tmg-developer` for more features or `/tmg-deploy` to ship
