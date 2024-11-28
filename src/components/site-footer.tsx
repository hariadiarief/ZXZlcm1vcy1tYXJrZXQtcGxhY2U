import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { Icons } from './icons'
import { buttonVariants } from './ui/button'

export default function SiteFooter() {
  return (
    <footer className='container mt-20 flex h-14 flex-col-reverse items-center justify-between md:flex-row'>
      <p className='text-balance text-center text-xs leading-loose text-muted-foreground md:text-left md:text-sm'>
        © 2024 Masagus Hariadi Arief.
      </p>
      <div className='lex self-center justify-self-center'>
        <Link href={siteConfig.links.github} target='_blank' rel='noreferrer'>
          <div
            className={cn(
              buttonVariants({
                variant: 'ghost'
              }),
              'w-9 px-0'
            )}
          >
            <Icons.gitHub className='h-4 w-4' />
            <span className='sr-only'>GitHub</span>
          </div>
        </Link>
        <Link href={siteConfig.links.twitter} target='_blank' rel='noreferrer'>
          <div
            className={cn(
              buttonVariants({
                variant: 'ghost'
              }),
              'w-9 px-0'
            )}
          >
            <Icons.twitter className='h-3 w-3 fill-current' />
            <span className='sr-only'>Twitter</span>
          </div>
        </Link>
        <Link href={siteConfig.links.linkedin} target='_blank' rel='noreferrer'>
          <div
            className={cn(
              buttonVariants({
                variant: 'ghost'
              }),
              'w-9 px-0'
            )}
          >
            <Icons.linkedin className='h-3 w-3 fill-current' />
            <span className='sr-only'>LinkedIn</span>
          </div>
        </Link>
      </div>
    </footer>
  )
}
