/**
 * Theme Configuration
 *
 * This file defines the visual design system for the website.
 * Edit these values to customize colors, typography, and spacing.
 *
 * Colors use HSL format for better compatibility with Tailwind CSS.
 * Format: "hue saturation% lightness%" (e.g., "221 83% 53%")
 */

export const themeConfig = {
  // Brand Colors
  colors: {
    // Primary brand color - used for buttons, links, and accents
    primary: {
      light: '221.2 83.2% 53.3%', // Blue
      dark: '217.2 91.2% 59.8%',
    },
    // Background colors
    background: {
      light: '0 0% 100%', // White
      dark: '222.2 84% 4.9%', // Near black
    },
    // Foreground (text) colors
    foreground: {
      light: '222.2 84% 4.9%',
      dark: '210 40% 98%',
    },
    // Muted backgrounds (for cards, sections)
    muted: {
      light: '210 40% 96.1%',
      dark: '217.2 32.6% 17.5%',
    },
    // Muted foreground (secondary text)
    mutedForeground: {
      light: '215.4 16.3% 46.9%',
      dark: '215 20.2% 65.1%',
    },
    // Card backgrounds
    card: {
      light: '0 0% 100%',
      dark: '222.2 84% 4.9%',
    },
    // Border colors
    border: {
      light: '214.3 31.8% 91.4%',
      dark: '217.2 32.6% 17.5%',
    },
    // Input backgrounds
    input: {
      light: '214.3 31.8% 91.4%',
      dark: '217.2 32.6% 17.5%',
    },
    // Ring (focus) color
    ring: {
      light: '221.2 83.2% 53.3%',
      dark: '224.3 76.3% 48%',
    },
    // Secondary color
    secondary: {
      light: '210 40% 96.1%',
      dark: '217.2 32.6% 17.5%',
    },
    secondaryForeground: {
      light: '222.2 47.4% 11.2%',
      dark: '210 40% 98%',
    },
    // Accent color
    accent: {
      light: '210 40% 96.1%',
      dark: '217.2 32.6% 17.5%',
    },
    accentForeground: {
      light: '222.2 47.4% 11.2%',
      dark: '210 40% 98%',
    },
    // Destructive (error) color
    destructive: {
      light: '0 84.2% 60.2%',
      dark: '0 62.8% 30.6%',
    },
    destructiveForeground: {
      light: '210 40% 98%',
      dark: '210 40% 98%',
    },
  },

  // Typography
  typography: {
    // Font families - customize these for your brand
    fontFamily: {
      sans: 'Inter, system-ui, -apple-system, sans-serif',
      heading: 'Inter, system-ui, -apple-system, sans-serif',
      mono: 'ui-monospace, SFMono-Regular, monospace',
    },
    // Base font size (in pixels)
    baseFontSize: 16,
  },

  // Spacing
  spacing: {
    // Border radius values
    borderRadius: {
      base: '0.5rem', // 8px
      sm: 'calc(0.5rem - 2px)',
      md: 'calc(0.5rem + 2px)',
      lg: '0.75rem', // 12px
      full: '9999px',
    },
  },

  // Animation
  animation: {
    duration: {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms',
    },
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
}

export type ThemeConfig = typeof themeConfig
