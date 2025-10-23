import React from 'react'
import Hero from '@/components/Hero'
import LeadForm from '@/components/LeadForm'
import { getGlobalSettings } from '@/lib/sanity.queries'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Vigour Gym',
  description: 'Get in touch for a free consultation. We help you get started with evidence-based training, nutrition, and coaching.',
}

export const revalidate = 0

export default async function ContactPage() {
  const settings = await getGlobalSettings().catch(() => null)

  return (
    <>
      <Hero
        title="Get In Touch"
        subtitle="Ready to transform your training? Contact us today for a free consultation and discover how our evidence-based approach can help you achieve your goals."
      />

      <section className="section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-brand-ink mb-6 font-display">
              Visit Us
            </h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <svg
                  className="w-6 h-6 text-brand-primary mr-4 flex-shrink-0 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div>
                  <h3 className="font-bold text-brand-ink mb-1">Address</h3>
                  <p className="text-gray-700">Sibyllegatan 19, Stockholm, Sverige</p>
                </div>
              </div>

              <div className="flex items-start">
                <svg
                  className="w-6 h-6 text-brand-primary mr-4 flex-shrink-0 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div>
                  <h3 className="font-bold text-brand-ink mb-1">Email</h3>
                  <a
                    href="mailto:johan@vigourfitness.se"
                    className="text-brand-primary hover:underline"
                  >
                    johan@vigourfitness.se
                  </a>
                </div>
              </div>

              {settings?.openingHours && settings.openingHours.length > 0 && (
                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-brand-primary mr-4 flex-shrink-0 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <h3 className="font-bold text-brand-ink mb-2">Opening Hours</h3>
                    <div className="space-y-1">
                      {settings.openingHours.map((schedule: any, index: number) => (
                        <div key={index} className="flex justify-between text-gray-700">
                          <span className="font-medium">{schedule.day}:</span>
                          <span className="ml-4">{schedule.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {settings?.socials && settings.socials.length > 0 && (
              <div className="mt-8">
                <h3 className="font-bold text-brand-ink mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {settings.socials.map((social: any, index: number) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-primary hover:text-brand-ink transition-colors font-medium"
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Contact Form */}
          <div>
            <LeadForm />
          </div>
        </div>
      </section>
    </>
  )
}
