import React from 'react'
import Hero from '@/components/Hero'
import FAQ from '@/components/FAQ'
import { getGlobalSettings } from '@/lib/sanity.queries'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book Consultation | Vigour Gym',
  description: 'Book a complimentary 15-minute consultation with our experts. We help you get started!',
}

export const revalidate = 0

export default async function BookingPage() {
  const settings = await getGlobalSettings().catch(() => null)

  const faqItems = [
    {
      question: 'What is included in the complimentary consultation?',
      answer:
        'During the consultation, we review your goals, current situation, and how we can help you. We explain our methods and answer all your questions.',
    },
    {
      question: 'How long is the consultation?',
      answer:
        'The complimentary consultation is 15 minutes. If you want a more in-depth review, we can schedule a longer session.',
    },
    {
      question: 'Do I need to be a member to book?',
      answer:
        'No, the consultation is complimentary and without obligation. You can book even if you are not a member.',
    },
    {
      question: 'Can I cancel or reschedule my appointment?',
      answer:
        'Yes, you can cancel or reschedule up to 24 hours before your booked time at no cost.',
    },
  ]

  return (
    <>
      <Hero
        title="Book Your Consultation"
        subtitle="Take the first step toward your goals - book a complimentary 15-minute consultation today"
      />

      <section className="section">
        <div className="max-w-4xl mx-auto">
          {/* Booking Widget/Link */}
          <div className="bg-gradient-to-br from-brand-primary to-brand-ink rounded-xl p-8 md:p-12 text-white mb-16 text-center">
            <h2 className="text-3xl font-bold mb-4 font-display">
              Ready to Get Started?
            </h2>
            <p className="text-lg mb-8 text-brand-paper">
              Click the button below to choose a time that works for you
            </p>

            {settings?.bookingUrl ? (
              <>
                <a
                  href={settings.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-brand-primary rounded-lg px-8 py-4 font-bold hover:bg-brand-paper transition-all duration-200 inline-block text-lg"
                >
                  Book Now →
                </a>
                <p className="mt-6 text-sm text-brand-paper">
                  You will be redirected to our booking system
                </p>
              </>
            ) : (
              <div>
                <p className="mb-4 text-brand-paper">
                  Booking system is not yet configured.
                </p>
                <a href="/contact" className="btn-outline inline-block border-white text-white hover:bg-white hover:text-brand-primary">
                  Contact us instead
                </a>
              </div>
            )}
          </div>

          {/* What to Expect */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-brand-ink mb-8 text-center font-display">
              What to Expect
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold mb-2">Assessment</h3>
                <p className="text-gray-600">
                  We listen to your goals and challenges
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold mb-2">Analysis</h3>
                <p className="text-gray-600">
                  We explain how we can help you
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold mb-2">Next Steps</h3>
                <p className="text-gray-600">
                  We create a plan to reach your goals
                </p>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-3xl font-bold text-brand-ink mb-8 text-center font-display">
              Frequently Asked Questions
            </h2>
            <FAQ items={faqItems} />
          </div>

          {/* Contact Alternative */}
          <div className="mt-16 bg-brand-paper rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-brand-ink mb-4 font-display">
              Prefer to Call?
            </h3>
            <p className="text-gray-700 mb-6">
              We're here to answer your questions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {settings?.phone && (
                <a href={`tel:${settings.phone}`} className="btn-primary">
                  Call us: {settings.phone}
                </a>
              )}
              <a href="/contact" className="btn-secondary">
                Contact Form
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
