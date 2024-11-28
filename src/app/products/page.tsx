import dynamic from 'next/dynamic'
import Loading from './loading'

const DynamicProductItems = dynamic(
  () => import('@/components/product-items'),
  { loading: () => <Loading /> }
)

export default function Products() {
  return (
    <div className='content-container container'>
      <DynamicProductItems />
    </div>
  )
}
