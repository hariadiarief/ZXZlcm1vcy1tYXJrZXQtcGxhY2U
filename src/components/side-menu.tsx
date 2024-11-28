'use client'

import { cn } from '@/lib/utils'

export interface SideMenuItem {
  name: string
  disabled: boolean
}

export interface SideMenuProps {
  title: string
  items: SideMenuItem[]
  onClick: (menu: string) => void
  activeItem: string
  className?: string
}

export function SideMenu({
  items,
  onClick,
  title,
  activeItem,
  className
}: SideMenuProps) {
  return items.length ? (
    <div className={cn('w-full', className)}>
      <div className={cn('pb-8')}>
        <h4 className='mb-1 rounded-md px-2 py-1 text-sm font-medium'>
          {title}
        </h4>
        <div className='grid grid-flow-row auto-rows-max text-sm'>
          {items.map((item, index) =>
            !item.disabled ? (
              <div
                key={index}
                onClick={() => onClick(item.name)} // 'data' represents the name of the clicked item
                className={cn(
                  'flex w-full cursor-pointer items-center rounded-md p-2 hover:underline',
                  {
                    'bg-muted': item.name === activeItem
                  }
                )}
              >
                {item.name}
              </div>
            ) : (
              <span
                key={index}
                className='flex w-full cursor-not-allowed items-center rounded-md p-2 opacity-60'
              >
                {item.name}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  ) : null
}
