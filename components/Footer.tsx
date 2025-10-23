import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface FooterProps {
  settings?: {
    siteName?: string
    address?: string
    phone?: string
    email?: string
    socials?: Array<{ label: string; url: string }>
  }
}

export default function Footer({ settings }: FooterProps) {
  return (
    <footer className="bg-brand-sand border-t border-gray-200 text-gray-800 py-12 sm:py-16 md:py-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 md:gap-16 mb-8 sm:mb-10 md:mb-12">
          <div>
            <Image
              src="/vigour-logo.avif"
              alt="Vigour Gym"
              width={200}
              height={71}
              className="h-12 sm:h-14 md:h-16 w-auto mb-4 sm:mb-6"
            />
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-medium">
              Transform your body, elevate your life.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 sm:mb-6 text-sm sm:text-base text-black">Quick Links</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li><Link href="/trainers" className="text-gray-700 hover:text-black transition-colors text-sm sm:text-base font-semibold touch-manipulation inline-block py-1">Trainers</Link></li>
              <li><Link href="/how-we-work" className="text-gray-700 hover:text-black transition-colors text-sm sm:text-base font-semibold touch-manipulation inline-block py-1">How We Work</Link></li>
              <li><Link href="/nutrition" className="text-gray-700 hover:text-black transition-colors text-sm sm:text-base font-semibold touch-manipulation inline-block py-1">Nutrition</Link></li>
              <li><Link href="/partners" className="text-gray-700 hover:text-black transition-colors text-sm sm:text-base font-semibold touch-manipulation inline-block py-1">Partners</Link></li>
              <li><Link href="/booking" className="text-gray-700 hover:text-black transition-colors text-sm sm:text-base font-semibold touch-manipulation inline-block py-1">Book Now</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 sm:mb-6 text-sm sm:text-base text-black">Contact</h4>
            {settings?.address && <p className="text-gray-700 mb-3 text-sm sm:text-base font-semibold">{settings.address}</p>}
            {settings?.phone && <p className="text-gray-700 mb-3 text-sm sm:text-base font-semibold">Tel: {settings.phone}</p>}
            {settings?.email && <p className="text-gray-700 mb-6 text-sm sm:text-base font-semibold">Email: {settings.email}</p>}
            {settings?.socials && settings.socials.length > 0 && (
              <div className="flex gap-4 sm:gap-6 mt-4 sm:mt-6">
                {settings.socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-black transition-colors text-sm sm:text-base font-semibold touch-manipulation py-1"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="border-t border-gray-300 pt-6 sm:pt-8 md:pt-10 text-center">
          <p className="text-gray-600 text-xs sm:text-sm font-medium">&copy; {new Date().getFullYear()} Vigour Gym. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
