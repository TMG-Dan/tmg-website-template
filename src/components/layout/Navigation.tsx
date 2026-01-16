'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { mainNavItems } from '@/config/navigation'

interface NavigationProps {
  mobile?: boolean
  onNavigate?: () => void
}

export function Navigation({ mobile = false, onNavigate }: NavigationProps) {
  const pathname = usePathname()

  return (
    <nav className={cn(mobile ? 'flex flex-col space-y-4' : 'flex items-center space-x-6')}>
      {mainNavItems.map((item) => {
        const isActive = pathname === item.href
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className={cn(
              'text-sm font-medium transition-colors hover:text-primary',
              isActive ? 'text-primary' : 'text-muted-foreground',
              mobile && 'text-base'
            )}
          >
            {item.title}
          </Link>
        )
      })}
    </nav>
  )
}
