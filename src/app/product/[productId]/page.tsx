'use client'

import { API } from '@/app/services/api'
import ThumbnailsInOpenedPhotoswipe from '@/components/gallery'
import { IProducts } from '@/components/product-items'
import { useQuery } from '@tanstack/react-query'
import 'photoswipe/dist/photoswipe.css'

export interface IProductDetail {
  params: { productId: string }
}

export default function ProductDetail({ params }: IProductDetail) {
  const { productId } = params

  const { data: product, isPending } = useQuery({
    queryKey: ['product'],
    queryFn: () => API.get('/products').then(res => res.data)
  })

  const selectedProduct = product
    ? product.find((item: IProducts) => item.id === Number(productId))
    : null

  return (
    <div className='content-container container'>
      {!selectedProduct || isPending ? null : (
        <div className='flex flex-col md:flex-row'>
          <div className='mb-8 mr-0 md:mb-0 md:mr-8'>
            <ThumbnailsInOpenedPhotoswipe img_url={selectedProduct.img_url} />
          </div>

          <div className='mt-4 w-full md:mt-0'>
            <h3 className='mt-1 tracking-tight text-gray-900 dark:text-white'>
              {selectedProduct.name}
            </h3>
            <div className='mt-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white'>
              {new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: 'IDR',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
              }).format(Number(selectedProduct.price))}
            </div>
            <hr className='my-4 w-full' />
            <div>
              {`
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.`}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
