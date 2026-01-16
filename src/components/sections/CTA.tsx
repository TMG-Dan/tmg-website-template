import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

interface CTAProps {
  title?: string
  description?: string
  ctaText?: string
  ctaHref?: string
}

export function CTA({
  title = 'Ready to Get Started?',
  description = "Let's create something amazing together. Contact us today to discuss your project.",
  ctaText = 'Contact Us',
  ctaHref = '/contact',
}: CTAProps) {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 md:px-12 md:py-24">
          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80">{description}</p>
            <div className="mt-10">
              <Button size="lg" variant="secondary" asChild>
                <Link href={ctaHref}>
                  {ctaText}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary-foreground/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-primary-foreground/10 blur-3xl" />
        </div>
      </div>
    </section>
  )
}
