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

      <div className="relative z-10 max-w-[980px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-20 sm:py-28 md:py-36 text-center">
        <h1 className="text-[40px] sm:text-[56px] md:text-[80px] lg:text-[96px] font-semibold mb-5 sm:mb-6 tracking-[-0.02em] leading-[1.05] text-balance drop-shadow-2xl">
          {title}
        </h1>
        {subtitle && (
          <p className={`text-[19px] sm:text-[21px] md:text-[24px] lg:text-[28px] mb-10 sm:mb-12 ${backgroundImage ? 'text-white/90' : 'text-[#86868b]'} max-w-3xl mx-auto text-balance font-normal leading-[1.4] tracking-[-0.01em] drop-shadow-lg`}>
            {subtitle}
          </p>
        )}
        {(ctaPrimary || ctaSecondary) && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center max-w-md sm:max-w-none mx-auto">
            {ctaPrimary && (
              <a href={ctaPrimary.href} className="btn-primary w-full sm:w-auto text-center shadow-2xl">
                {ctaPrimary.text}
              </a>
            )}
            {ctaSecondary && (
              <a
                href={ctaSecondary.href}
                className={`${backgroundImage ? 'bg-white/15 backdrop-blur-md text-white hover:bg-white/25 border-2 border-white/30 font-semibold' : 'btn-secondary'} w-full sm:w-auto text-center rounded-full px-7 sm:px-9 py-3.5 sm:py-4 text-[17px] leading-tight transition-all duration-200 ease-out shadow-xl active:scale-[0.98]`}
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
