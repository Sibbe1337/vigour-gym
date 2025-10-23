import React from 'react'

interface HeroProps {
  title: string
  subtitle?: string
  ctaPrimary?: { text: string; href: string }
  ctaSecondary?: { text: string; href: string }
  backgroundImage?: string
}

export default function Hero({
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  backgroundImage,
}: HeroProps) {
  return (
    <section
      className="relative min-h-[85vh] flex items-center justify-center bg-white text-brand-ink"
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : undefined
      }
    >
      <div className="max-w-[980px] mx-auto px-6 sm:px-8 lg:px-12 py-24 md:py-32 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold mb-8 tracking-tight leading-none text-balance">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl lg:text-3xl mb-12 text-gray-600 max-w-3xl mx-auto text-balance font-normal leading-snug">
            {subtitle}
          </p>
        )}
        {(ctaPrimary || ctaSecondary) && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {ctaPrimary && (
              <a href={ctaPrimary.href} className="btn-primary">
                {ctaPrimary.text}
              </a>
            )}
            {ctaSecondary && (
              <a
                href={ctaSecondary.href}
                className="btn-secondary"
              >
                {ctaSecondary.text}
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
