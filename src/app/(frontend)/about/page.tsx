import type { Metadata } from 'next'
import { CTA } from '@/components/sections/CTA'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn more about our company and what we do.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-background to-muted/30">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">About Us</h1>
            <p className="mt-6 text-lg text-muted-foreground">
              We&apos;re passionate about helping businesses succeed online with beautiful,
              functional websites.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <div className="prose prose-lg dark:prose-invert">
              <h2>Our Story</h2>
              <p>
                We started with a simple mission: make professional websites accessible to every
                business, regardless of size or budget. Today, we&apos;ve helped countless
                businesses establish their online presence and connect with customers.
              </p>

              <h2>What We Do</h2>
              <p>
                We create custom websites that are fast, beautiful, and easy to manage. Our
                websites come with a built-in content management system, so you can update your
                content without any technical knowledge.
              </p>

              <h2>Our Values</h2>
              <ul>
                <li>
                  <strong>Quality First</strong> - We never compromise on quality. Every website we
                  build is crafted with care and attention to detail.
                </li>
                <li>
                  <strong>Customer Focus</strong> - Your success is our success. We work closely
                  with you to understand your needs and deliver results.
                </li>
                <li>
                  <strong>Continuous Improvement</strong> - We stay up-to-date with the latest
                  technologies and best practices to deliver the best possible solutions.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Want to Work Together?"
        description="We'd love to hear about your project. Get in touch and let's start the conversation."
        ctaText="Contact Us"
        ctaHref="/contact"
      />
    </>
  )
}
