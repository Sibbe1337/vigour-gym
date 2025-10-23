import React from 'react'
import Image from 'next/image'

interface GalleryGridProps {
  images?: string[]
  columns?: 2 | 3 | 4
}

export default function GalleryGrid({
  images = [
    '/gallery/vigour-1.jpg',
    '/gallery/vigour-2.jpg',
    '/gallery/vigour-3.jpg',
    '/gallery/vigour-4.jpg',
    '/gallery/vigour-5.jpg',
    '/gallery/vigour-6.jpg',
  ],
  columns = 3
}: GalleryGridProps) {
  const columnClass = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4'
  }[columns]

  return (
    <div className={`grid grid-cols-1 ${columnClass} gap-4`}>
      {images.map((image, index) => (
        <div
          key={index}
          className="relative aspect-[4/3] rounded-xl overflow-hidden group"
        >
          <Image
            src={image}
            alt={`Vigour Gym facility ${index + 1}`}
            fill
            className="object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      ))}
    </div>
  )
}
