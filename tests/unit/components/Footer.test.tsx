import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Footer } from '@/components/layout/Footer'

// Mock the next/link component
vi.mock('next/link', () => ({
  default: ({ children, href, ...props }: { children: React.ReactNode; href: string }) => (
    <a href={href} {...props}>{children}</a>
  ),
}))

// Mock the config
vi.mock('@/config/site', () => ({
  siteConfig: {
    name: 'Test Site',
    description: 'A test site description',
  },
}))

vi.mock('@/config/navigation', () => ({
  mainNavItems: [
    { title: 'Home', href: '/' },
    { title: 'About', href: '/about' },
  ],
  footerNavItems: [
    { title: 'Privacy', href: '/privacy' },
    { title: 'Terms', href: '/terms' },
  ],
}))

describe('Footer', () => {
  it('renders the site name', () => {
    render(<Footer />)
    expect(screen.getByText('Test Site')).toBeInTheDocument()
  })

  it('renders the site description', () => {
    render(<Footer />)
    expect(screen.getByText('A test site description')).toBeInTheDocument()
  })

  it('renders quick links section', () => {
    render(<Footer />)
    expect(screen.getByText('Quick Links')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/')
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '/about')
  })

  it('renders legal links section', () => {
    render(<Footer />)
    expect(screen.getByText('Legal')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Privacy' })).toHaveAttribute('href', '/privacy')
    expect(screen.getByRole('link', { name: 'Terms' })).toHaveAttribute('href', '/terms')
  })

  it('renders copyright with current year', () => {
    render(<Footer />)
    const currentYear = new Date().getFullYear()
    expect(screen.getByText(new RegExp(`© ${currentYear}`))).toBeInTheDocument()
  })

  it('renders all rights reserved text', () => {
    render(<Footer />)
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
  })

  it('renders TMG Website Builder attribution link', () => {
    render(<Footer />)
    const tmgLink = screen.getByRole('link', { name: 'TMG Website Builder' })
    expect(tmgLink).toHaveAttribute('href', 'https://github.com/the-marketing-guys')
    expect(tmgLink).toHaveAttribute('target', '_blank')
    expect(tmgLink).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('renders logo link to home', () => {
    render(<Footer />)
    // There are multiple links to home - the logo in footer brand section
    const homeLinks = screen.getAllByRole('link', { name: /test site/i })
    expect(homeLinks.length).toBeGreaterThan(0)
    expect(homeLinks[0]).toHaveAttribute('href', '/')
  })
})
