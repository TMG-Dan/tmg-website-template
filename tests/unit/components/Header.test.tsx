import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Header } from '@/components/layout/Header'

// Mock the next/link component
vi.mock('next/link', () => ({
  default: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  ),
}))

// Mock the config
vi.mock('@/config/site', () => ({
  siteConfig: {
    name: 'Test Site',
    description: 'Test description',
  },
}))

vi.mock('@/config/navigation', () => ({
  mainNavItems: [
    { title: 'Home', href: '/' },
    { title: 'About', href: '/about' },
  ],
}))

describe('Header', () => {
  it('renders the site name', () => {
    render(<Header />)
    expect(screen.getByText('Test Site')).toBeInTheDocument()
  })

  it('renders the logo link to home', () => {
    render(<Header />)
    const logoLink = screen.getByRole('link', { name: /test site/i })
    expect(logoLink).toHaveAttribute('href', '/')
  })

  it('renders the contact button', () => {
    render(<Header />)
    const contactButton = screen.getByRole('link', { name: /get in touch/i })
    expect(contactButton).toHaveAttribute('href', '/contact')
  })

  it('renders mobile menu toggle button', () => {
    render(<Header />)
    const menuButton = screen.getByRole('button', { name: /open menu/i })
    expect(menuButton).toBeInTheDocument()
  })

  it('toggles mobile menu when button is clicked', () => {
    render(<Header />)
    const menuButton = screen.getByRole('button', { name: /open menu/i })

    // Initially, mobile navigation should not be visible (no extra border-t div)
    expect(screen.queryByRole('button', { name: /close menu/i })).not.toBeInTheDocument()

    // Click to open
    fireEvent.click(menuButton)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()

    // Click to close
    const closeButton = screen.getByRole('button', { name: /close menu/i })
    fireEvent.click(closeButton)
    expect(screen.queryByRole('button', { name: /close menu/i })).not.toBeInTheDocument()
  })

  it('has sticky header styling', () => {
    render(<Header />)
    const header = document.querySelector('header')
    expect(header).toHaveClass('sticky', 'top-0', 'z-50')
  })
})
