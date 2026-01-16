import { Hero } from '@/components/sections/Hero'
import { Features } from '@/components/sections/Features'
import { CTA } from '@/components/sections/CTA'

export default function HomePage() {
  return (
    <>
      <Hero
        title="Welcome to Your New Website"
        subtitle="A professional, modern website built for your business. Fast, beautiful, and easy to manage with our built-in CMS."
        ctaText="Get in Touch"
        ctaHref="/contact"
        secondaryCtaText="Learn More"
        secondaryCtaHref="/about"
      />
      <Features
        title="Everything You Need"
        subtitle="Our websites come packed with features to help your business succeed online."
      />
      <CTA
        title="Ready to Get Started?"
        description="Let's create something amazing together. Contact us today to discuss your project."
        ctaText="Contact Us"
        ctaHref="/contact"
      />
    </>
  )
}
