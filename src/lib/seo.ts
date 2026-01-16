import type { Metadata } from 'next'
import { siteConfig } from '@/config/site'

interface GenerateMetadataOptions {
  title?: string
  description?: string
  image?: string
  noIndex?: boolean
  keywords?: string[]
}

export function generateMetadata({
  title,
  description,
  image,
  noIndex = false,
  keywords,
}: GenerateMetadataOptions = {}): Metadata {
  const pageTitle = title || siteConfig.name
  const pageDescription = description || siteConfig.description
  const pageImage = image || '/images/og-default.png'

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: keywords || siteConfig.keywords,
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: siteConfig.url,
      siteName: siteConfig.name,
      images: [
        {
          url: pageImage,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [pageImage],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
  }
}

export function generateJsonLd(type: 'website' | 'article' | 'organization', data: Record<string, unknown> = {}) {
  const baseData = {
    '@context': 'https://schema.org',
  }

  switch (type) {
    case 'website':
      return {
        ...baseData,
        '@type': 'WebSite',
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        ...data,
      }
    case 'organization':
      return {
        ...baseData,
        '@type': 'Organization',
        name: siteConfig.name,
        url: siteConfig.url,
        ...data,
      }
    case 'article':
      return {
        ...baseData,
        '@type': 'Article',
        publisher: {
          '@type': 'Organization',
          name: siteConfig.name,
        },
        ...data,
      }
    default:
      return baseData
  }
}
