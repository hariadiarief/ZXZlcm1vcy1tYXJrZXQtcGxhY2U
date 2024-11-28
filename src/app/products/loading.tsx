import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <div
      className={
        'xl:grid-cols- grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-8 lg:grid-cols-4'
      }
    >
      {Array(6)
        .fill(undefined)
        .map((_, index: number) => (
          <div key={index}>
            <Skeleton className='mb-2 h-[100px] w-full' />
            <Skeleton className='h-4 w-[50%]' />
          </div>
        ))}
    </div>
  )
}
