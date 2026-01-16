export const siteConfig = {
  name: 'TMG Website',
  description: 'Professional website built with TMG Website Builder',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  ogImage: '/images/og-image.jpg',
  links: {
    twitter: 'https://twitter.com',
    github: 'https://github.com',
  },
  creator: 'The Marketing Guys',
  keywords: ['website', 'business', 'professional', 'marketing'],
}

export type SiteConfig = typeof siteConfig
