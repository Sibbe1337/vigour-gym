import React from 'react'

interface CTAProps {
  heading: string
  text: string
  buttonText: string
  href: string
}

export default function CTA({ heading, text, buttonText, href }: CTAProps) {
  return (
    <section className="bg-gradient-to-r from-brand-primary to-brand-ink text-white py-16 md:py-20">
      <div className="section text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">{heading}</h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-brand-paper">{text}</p>
        <a href={href} className="bg-white text-brand-primary rounded-lg px-8 py-4 font-bold hover:bg-brand-paper transition-all duration-200 inline-block text-lg">
          {buttonText}
        </a>
      </div>
    </section>
  )
}
