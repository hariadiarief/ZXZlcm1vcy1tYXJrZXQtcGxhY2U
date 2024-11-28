'use client'

import { API } from '@/app/services/api'
import { cn } from '@/lib/utils'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import Link from 'next/link'
import { Icons } from './icons'
import { buttonVariants } from './ui/button'
import { Skeleton } from './ui/skeleton'

interface IProsProductItems {
  limit?: number
}

export interface IProducts {
  id: number
  name: string
  price: string
  img_url: string
}

export default function ProductItems({ limit = undefined }: IProsProductItems) {
  const { data: products, isPending } = useQuery({
    queryKey: ['product'],
    queryFn: () => API.get('/products').then(res => res.data)
  })

  return (
    <>
      <div
        className={
          'grid w-full grid-cols-2 gap-4 md:grid-cols-3 md:gap-8 lg:grid-cols-4 xl:grid-cols-5'
        }
      >
        {isPending ? (
          Array(6)
            .fill(undefined)
            .map((_, index: number) => (
              <div key={index}>
                <Skeleton className='mb-2 h-[100px] w-full' />
                <Skeleton className='h-4 w-[50%]' />
              </div>
            ))
        ) : products && products.length ? (
          products.slice(0, limit || undefined).map((product: IProducts) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className='max-h-100 rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-900'
            >
              <Image
                width={300}
                height={100}
                className='w-full object-contain'
                src={product.img_url || '/images/unavailable-image.jpg'}
                alt='product image'
                sizes='(max-width: 768px) 100vw, 33vw'
              />
              <div className='px-2 pb-2'>
                <h3 className='mt-1 tracking-tight text-gray-900 dark:text-white'>
                  {product.name}
                </h3>
                <div className='mt-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white'>
                  {new Intl.NumberFormat('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0
                  }).format(Number(product.price))}
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className='col-span-full'>
            <p className='text-center'>{`No Product Yet :'(`}</p>
          </div>
        )}
      </div>

      {products && products.length && limit && limit > 0 ? (
        <Link
          href='/product'
          className={cn('mt-8', buttonVariants({ variant: 'ghost' }))}
        >
          See all products
          <Icons.moveRight className='ml-2 h-4 w-4' />
        </Link>
      ) : null}
    </>
  )
}
