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
    <nav className="bg-white/70 backdrop-blur-[20px] border-b border-black/[0.06] sticky top-0 z-50 safe-area-inset-top transition-all duration-300" style="box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.03);">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 md:px-8 lg:px-12">
        <div className="flex justify-between items-center h-[52px]">
          <Link href="/" className="flex items-center -ml-2 transition-opacity duration-200 hover:opacity-70">
            <Image
              src="/vigour-logo.avif"
              alt="Vigour Gym"
              width={240}
              height={85}
              priority
              className="h-[44px] w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex space-x-9 items-center">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-black/90 hover:text-black transition-all duration-200 text-[12px] font-normal tracking-[0.01em] relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>

          <a href="/booking" className="hidden lg:block bg-black text-white rounded-full px-[18px] py-[7px] text-[12px] font-normal hover:bg-black/90 active:scale-[0.96] touch-manipulation" style="transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1); box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);">
            Book
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
