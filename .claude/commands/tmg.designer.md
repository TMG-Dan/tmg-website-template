# /tmg-designer - Visual Design Configuration

Define visual design, layouts, and styling for the website.

## Prerequisites

- Project initialized via `/tmg-setup`
- Site structure defined via `/tmg-sitemap`

## Workflow

1. **Reference Input (Recommended)**
   - Ask for Webflow template URL or any website reference
   - Use browser tools to visit and analyze the reference site
   - Extract design tokens: colors, typography, spacing, layout patterns
   - Show extracted palette to user for approval

2. **Brand Identity** (if no reference provided)
   - Brand colours (primary, secondary, accent)
   - Typography preferences (modern, traditional, playful)
   - Design style (minimal, bold, elegant, friendly)

3. **Apply Design**
   - Configure Tailwind theme with extracted/chosen colors
   - Set typography scale and font families
   - Configure spacing and container widths
   - Generate CSS variables for theming

4. **Generate Layouts**
   - Create page section components matching reference aesthetic
   - Style existing components to match design direction

## Webflow Reference Analysis

When a Webflow URL is provided:
1. Navigate to the site using browser tools
2. Extract computed styles for:
   - Primary/secondary/accent colors
   - Font families and sizes
   - Heading styles (h1-h6)
   - Button styles
   - Card/container styles
   - Spacing patterns
3. Map to Tailwind config and CSS variables
4. Show user the extracted design tokens for approval

## Output

- Updated `tailwind.config.ts` with custom theme
- Updated `src/app/globals.css` with CSS variables
- Design tokens in `src/config/design.ts`
- Page layouts matching the reference aesthetic

## Next Steps

Suggest running `/tmg-content` to generate page copy
