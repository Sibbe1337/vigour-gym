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
    <footer className="bg-brand-sand border-t border-gray-200 text-gray-800 py-20">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-12">
          <div>
            <Image
              src="/vigour-logo.avif"
              alt="Vigour Gym"
              width={200}
              height={71}
              className="h-16 w-auto mb-6"
            />
            <p className="text-gray-700 text-base leading-relaxed font-medium">
              Transform your body, elevate your life.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-base text-black">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/trainers" className="text-gray-700 hover:text-black transition-colors text-base font-semibold">Trainers</Link></li>
              <li><Link href="/how-we-work" className="text-gray-700 hover:text-black transition-colors text-base font-semibold">How We Work</Link></li>
              <li><Link href="/nutrition" className="text-gray-700 hover:text-black transition-colors text-base font-semibold">Nutrition</Link></li>
              <li><Link href="/partners" className="text-gray-700 hover:text-black transition-colors text-base font-semibold">Partners</Link></li>
              <li><Link href="/booking" className="text-gray-700 hover:text-black transition-colors text-base font-semibold">Book Now</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-base text-black">Contact</h4>
            {settings?.address && <p className="text-gray-700 mb-3 text-base font-semibold">{settings.address}</p>}
            {settings?.phone && <p className="text-gray-700 mb-3 text-base font-semibold">Tel: {settings.phone}</p>}
            {settings?.email && <p className="text-gray-700 mb-6 text-base font-semibold">Email: {settings.email}</p>}
            {settings?.socials && settings.socials.length > 0 && (
              <div className="flex gap-6 mt-6">
                {settings.socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-black transition-colors text-base font-semibold"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="border-t border-gray-300 pt-10 text-center">
          <p className="text-gray-600 text-sm font-medium">&copy; {new Date().getFullYear()} Vigour Gym. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
