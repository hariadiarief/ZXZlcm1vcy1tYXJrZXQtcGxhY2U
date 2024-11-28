'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { navigationsConfig } from '@/config/navigations'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { Icons } from './icons'

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className='mr-4 hidden md:flex'>
      <Link href='/' className='mr-6 flex items-center space-x-2'>
        <Icons.logo
          className={
            (cn('mr-2 h-4 w-4'),
            pathname === '/'
              ? 'font-bold text-foreground'
              : 'font-semibold text-foreground/60')
          }
        />
        <span
          className={cn(
            'hidden font-bold transition-colors hover:text-foreground/80 sm:inline-block',
            pathname === '/'
              ? 'font-bold text-foreground'
              : 'font-semibold text-foreground/60'
          )}
        >
          {siteConfig.name}
        </span>
      </Link>

      <nav className='flex items-center gap-4 text-sm lg:gap-6'>
        {navigationsConfig.mainNav?.map((navigation, index) => (
          <Link
            key={index}
            href={navigation.href}
            className={cn(
              'transition-colors hover:text-foreground/80',
              pathname?.startsWith(navigation.href)
                ? 'font-semibold text-foreground'
                : 'text-foreground/60'
            )}
          >
            {navigation.title}
          </Link>
        ))}
      </nav>
    </div>
  )
}
