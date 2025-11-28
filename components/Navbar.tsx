'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: '/', label: 'Home' },
    { href: '/trainers', label: 'Trainers' },
    { href: '/coaching', label: 'Coaching' },
    { href: '/how-we-work', label: 'How We Work' },
    { href: '/nutrition', label: 'Nutrition' },
    { href: '/partners', label: 'Partners' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 safe-area-inset-top transition-all duration-300">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 md:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center transition-opacity duration-200 hover:opacity-80">
            <Image
              src="/vigour-logo.avif"
              alt="Vigour Gym"
              width={280}
              height={100}
              priority
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex space-x-8 items-center">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-gray-800 hover:text-black transition-all duration-200 text-sm font-semibold tracking-wide relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>

          <a href="/booking" className="hidden lg:block bg-brand-primary text-white rounded-lg px-6 py-2.5 text-sm font-bold hover:bg-brand-primary/90 transition-all shadow-sm">
            Book Now
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-3 -mr-3 touch-manipulation"
            aria-label="Toggle menu"
          >
            <svg
              className="w-7 h-7 text-brand-ink"
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
          <div className="lg:hidden pb-6 pt-2">
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-4 px-2 text-black font-semibold text-lg hover:text-gray-600 transition-colors touch-manipulation active:bg-gray-50 rounded-lg"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <a href="/booking" className="btn-primary block text-center w-full">
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
