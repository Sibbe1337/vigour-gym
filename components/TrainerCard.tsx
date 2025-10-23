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
    <div className="group">
      <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden bg-brand-paper">
        {photoUrl ? (
          <Image
            src={photoUrl}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-brand-primary">
            {name
              .split(' ')
              .map((n) => n[0])
              .join('')}
          </div>
        )}
      </div>
      <h3 className="text-xl font-bold text-brand-ink mt-4 text-center">{name}</h3>
    </div>
  )
}
