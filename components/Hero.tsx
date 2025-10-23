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
      className={`relative min-h-[100svh] sm:min-h-[85vh] flex items-center justify-center ${backgroundImage ? 'text-white' : 'bg-white text-brand-ink'}`}
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
      {/* Dark overlay for better text readability */}
      {backgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 z-0"></div>
      )}

      <div className="relative z-10 max-w-[980px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-24 md:py-32 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold mb-6 sm:mb-8 tracking-tight leading-[1.1] text-balance drop-shadow-lg">
          {title}
        </h1>
        {subtitle && (
          <p className={`text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 sm:mb-12 ${backgroundImage ? 'text-white/95' : 'text-gray-600'} max-w-3xl mx-auto text-balance font-normal leading-relaxed drop-shadow-md`}>
            {subtitle}
          </p>
        )}
        {(ctaPrimary || ctaSecondary) && (
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center max-w-md sm:max-w-none mx-auto">
            {ctaPrimary && (
              <a href={ctaPrimary.href} className="btn-primary w-full sm:w-auto text-center shadow-xl">
                {ctaPrimary.text}
              </a>
            )}
            {ctaSecondary && (
              <a
                href={ctaSecondary.href}
                className={`${backgroundImage ? 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border-2 border-white/40' : 'btn-secondary'} w-full sm:w-auto text-center rounded-full px-6 sm:px-8 py-4 font-medium transition-all duration-300 shadow-xl`}
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
