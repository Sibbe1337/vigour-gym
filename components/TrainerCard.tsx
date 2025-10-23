import React from 'react'
import Image from 'next/image'

interface TrainerCardProps {
  name: string
  photoUrl?: string
}

export default function TrainerCard({
  name,
  photoUrl,
}: TrainerCardProps) {
  return (
    <div className="group touch-manipulation">
      <div className="relative w-full aspect-[3/4] rounded-lg sm:rounded-xl overflow-hidden bg-brand-paper">
        {photoUrl ? (
          <Image
            src={photoUrl}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-3xl sm:text-4xl font-bold text-brand-primary">
            {name
              .split(' ')
              .map((n) => n[0])
              .join('')}
          </div>
        )}
      </div>
      <h3 className="text-lg sm:text-xl font-bold text-brand-ink mt-3 sm:mt-4 text-center">{name}</h3>
    </div>
  )
}
