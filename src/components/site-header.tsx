'use client'

import { MainNav } from './main-nav'
import { MobileNav } from './mobile-nav'
import { ModeToggle } from './mode-toggle'

export const SiteHeader = () => {
  return (
    <header className='sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container flex h-14 items-center justify-between'>
        <MainNav />
        <MobileNav />
        <div className='flex flex-1 md:justify-end'>
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
