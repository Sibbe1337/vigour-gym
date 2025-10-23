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
      className="relative min-h-[100svh] sm:min-h-[85vh] flex items-center justify-center bg-white text-brand-ink"
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
      <div className="max-w-[980px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-24 md:py-32 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold mb-6 sm:mb-8 tracking-tight leading-[1.1] text-balance">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 sm:mb-12 text-gray-600 max-w-3xl mx-auto text-balance font-normal leading-relaxed">
            {subtitle}
          </p>
        )}
        {(ctaPrimary || ctaSecondary) && (
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center max-w-md sm:max-w-none mx-auto">
            {ctaPrimary && (
              <a href={ctaPrimary.href} className="btn-primary w-full sm:w-auto text-center">
                {ctaPrimary.text}
              </a>
            )}
            {ctaSecondary && (
              <a
                href={ctaSecondary.href}
                className="btn-secondary w-full sm:w-auto text-center"
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
