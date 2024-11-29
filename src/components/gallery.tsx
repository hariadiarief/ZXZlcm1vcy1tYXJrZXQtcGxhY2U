import Image from 'next/image'
import type { DataSourceArray } from 'photoswipe'
import 'photoswipe/dist/photoswipe.css'
import React from 'react'
import { Gallery, GalleryProps, Item } from 'react-photoswipe-gallery'

export default function ThumbnailsInOpenedPhotoswipe({
  img_url
}: {
  img_url: string
}) {
  const smallItemStyles: React.CSSProperties = {
    cursor: 'pointer',
    objectFit: 'cover',
    width: '100%',
    maxHeight: '100%'
  }

  const uiElements: GalleryProps['uiElements'] = [
    {
      name: 'bulletsIndicator',
      order: 9,
      isButton: false,
      appendTo: 'wrapper',
      onInit: (el, pswpInstance) => {
        let prevIndex = -1
        const thumbnails: HTMLElement[] = []

        /* eslint-disable no-param-reassign */
        el.style.position = 'absolute'
        el.style.bottom = '20px'
        el.style.left = '10px'
        el.style.right = '0'
        el.style.display = 'grid'
        el.style.gridGap = '10px'
        el.style.gridTemplateColumns = 'repeat(auto-fit, 40px)'
        el.style.gridTemplateRows = 'repeat(auto-fit, 40px)'
        el.style.justifyContent = 'center'
        /* eslint-enable no-param-reassign */

        const dataSource = pswpInstance.options.dataSource as DataSourceArray

        for (let i = 0; i < dataSource.length; i++) {
          const slideData = dataSource[i]

          const thumbnail = document.createElement('div')
          thumbnail.style.transition = 'transform 0.15s ease-in'
          thumbnail.style.opacity = '0.6'
          thumbnail.style.cursor = 'pointer'
          thumbnail.onclick = (e: MouseEvent) => {
            const target = e.target as HTMLImageElement | HTMLDivElement
            const thumbnailEl =
              target.tagName === 'IMG'
                ? target.parentElement
                : (e.target as HTMLImageElement | HTMLDivElement)
            if (thumbnailEl) {
              pswpInstance.goTo(thumbnails.indexOf(thumbnailEl))
            }
          }

          const thumbnailImage = document.createElement('img')
          thumbnailImage.setAttribute('src', slideData.msrc || '')
          thumbnailImage.style.width = '100%'
          thumbnailImage.style.height = '100%'
          thumbnailImage.style.objectFit = 'cover'

          thumbnail.appendChild(thumbnailImage)

          el.appendChild(thumbnail)

          thumbnails.push(thumbnail)
        }

        pswpInstance.on('change', () => {
          if (prevIndex >= 0) {
            const prevThumbnail = thumbnails[prevIndex]
            prevThumbnail.style.opacity = '0.6'
            prevThumbnail.style.cursor = 'pointer'
            prevThumbnail.style.transform = 'scale(1)'
          }

          const currentThumbnail = thumbnails[pswpInstance.currIndex]
          currentThumbnail.style.opacity = '1'
          currentThumbnail.style.cursor = 'unset'
          currentThumbnail.style.transform = 'scale(1.2)'

          prevIndex = pswpInstance.currIndex
        })
      }
    }
  ]

  return (
    <Gallery uiElements={uiElements}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridGap: 12
        }}
      >
        <div className='col-span-3 w-full cursor-pointer rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-900'>
          <Item<HTMLImageElement>
            original={img_url}
            thumbnail={img_url}
            width='1600'
            height='1068'
            alt='product image'
          >
            {({ ref, open }) => (
              <Image
                ref={ref}
                onClick={open}
                src={img_url || '/images/unavailable-image.jpg'}
                width={300}
                height={100}
                alt='product image'
                style={smallItemStyles}
              />
            )}
          </Item>
        </div>
        <Item<HTMLImageElement>
          original='https://farm6.staticflickr.com/5591/15008867125_b61960af01_h.jpg'
          thumbnail='https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg'
          width='1600'
          height='1068'
          alt='product image'
        >
          {({ ref, open }) => (
            <Image
              style={smallItemStyles}
              src='https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg'
              ref={ref}
              onClick={open}
              width={300}
              height={100}
              alt='product image'
            />
          )}
        </Item>
        <Item<HTMLImageElement>
          original='https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg'
          thumbnail='https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg'
          width='1600'
          height='1066'
          alt='product image'
        >
          {({ ref, open }) => (
            <Image
              style={smallItemStyles}
              src='https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg'
              ref={ref}
              onClick={open}
              width={300}
              height={100}
              alt='product image'
            />
          )}
        </Item>
        <Item<HTMLImageElement>
          original='https://farm6.staticflickr.com/5584/14985868676_b51baa4071_h.jpg'
          thumbnail='https://farm6.staticflickr.com/5584/14985868676_4b802b932a_m.jpg'
          width='1600'
          height='1066'
          alt='product image'
        >
          {({ ref, open }) => (
            <Image
              style={smallItemStyles}
              src='https://farm6.staticflickr.com/5584/14985868676_4b802b932a_m.jpg'
              ref={ref}
              onClick={open}
              width={300}
              height={100}
              alt='product image'
            />
          )}
        </Item>
      </div>
    </Gallery>
  )
}
