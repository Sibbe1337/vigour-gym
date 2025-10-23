import React from 'react'
import Image from 'next/image'

interface PartnerLogoProps {
  name: string
  logoUrl?: string
  url?: string
  description?: string
}

export default function PartnerLogo({ name, logoUrl, url, description }: PartnerLogoProps) {
  const content = (
    <div className="card h-full flex flex-col items-center justify-center p-8 group cursor-pointer">
      <div className="relative w-full h-24 mb-4">
        {logoUrl ? (
          <Image
            src={logoUrl}
            alt={name}
            fill
            className="object-contain group-hover:scale-105 transition-transform"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-2xl font-bold text-brand-primary">
            {name}
          </div>
        )}
      </div>
      {description && (
        <p className="text-sm text-gray-600 text-center line-clamp-2">{description}</p>
      )}
    </div>
  )

  if (url) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer nofollow">
        {content}
      </a>
    )
  }

  return content
}
