export interface NavItem {
  title: string
  href: string
  description?: string
  disabled?: boolean
  external?: boolean
  children?: NavItem[]
}

export const mainNavItems: NavItem[] = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Blog',
    href: '/blog',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
]

export const footerNavItems: NavItem[] = [
  {
    title: 'Privacy Policy',
    href: '/privacy',
  },
  {
    title: 'Terms of Service',
    href: '/terms',
  },
]
