'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: '/', label: 'Home' },
    { href: '/trainers', label: 'Trainers' },
    { href: '/how-we-work', label: 'How We Work' },
    { href: '/nutrition', label: 'Nutrition' },
    { href: '/partners', label: 'Partners' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="bg-white/95 backdrop-blur-xl border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/vigour-logo.avif"
              alt="Vigour Gym"
              width={240}
              height={85}
              priority
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex space-x-12 items-center">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-black hover:text-gray-600 transition-colors text-base font-semibold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <a href="/booking" className="hidden lg:block bg-black text-white rounded-full px-7 py-3 text-base font-bold hover:bg-gray-800 transition-all duration-200">
            Book
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-brand-ink"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-6">
            <ul className="space-y-4">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-3 text-black font-semibold text-lg hover:text-gray-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href="/booking" className="btn-primary block text-center mt-4">
                  Book
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}
