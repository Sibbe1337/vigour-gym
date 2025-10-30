import React from 'react'
import Hero from '@/components/Hero'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Coaching Services | Vigour Gym',
  description: 'Professional coaching services including online coaching and in-person training at Vigour with personalized programs, body fat measurements, and nutrition guidance.',
}

export default function CoachingPage() {
  return (
    <>
      <Hero
        title="Coaching"
        subtitle="Coaching at Vigour is personal, precise, and reserved. We work primarily with our members, though a select few non-members are accepted for online coaching. Up to three guests at a time may join us for testing and a 16-week tailored program, before continuing their training independently — guided by the Vigour standard."
      />

      {/* 16-week programming at Vigour */}
      <section className="section bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-ink mb-8 font-display">
            16-week programming at Vigour
          </h2>

          <div className="bg-brand-paper rounded-xl p-8 md:p-10">
            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-brand-primary pl-6">
                <h4 className="font-bold text-brand-ink mb-2 text-lg">5 Personal Coaching Sessions</h4>
                <p className="text-gray-700">
                  Each session is 1 hour long, scheduled throughout your 16-week program for consistent guidance and support.
                </p>
              </div>

              <div className="border-l-4 border-brand-primary pl-6">
                <h4 className="font-bold text-brand-ink mb-2 text-lg">Customized Training Program</h4>
                <p className="text-gray-700">
                  Personalized 16-week training plan designed specifically for your goals, fitness level, and progress.
                </p>
              </div>

              <div className="border-l-4 border-brand-primary pl-6">
                <h4 className="font-bold text-brand-ink mb-2 text-lg">Body Fat Measurements</h4>
                <p className="text-gray-700">
                  Initial and final 14-site body fat measurements to track your progress and identify areas for optimization.
                </p>
              </div>

              <div className="border-l-4 border-brand-primary pl-6">
                <h4 className="font-bold text-brand-ink mb-2 text-lg">Nutrition Guidance</h4>
                <p className="text-gray-700">
                  Personalized nutrition recommendations and adjustments throughout the program to support your training and body composition goals.
                </p>
              </div>
            </div>

            <a href="/contact" className="btn-primary inline-block">
              Start Your Transformation
            </a>
          </div>
        </div>
      </section>

      {/* Online Coaching */}
      <section className="section bg-brand-paper">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-ink mb-8 font-display">
            Online Coaching
          </h2>

          <div className="bg-white rounded-xl p-8 md:p-10">
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-brand-primary mr-3 font-bold text-xl">•</span>
                <span className="text-lg">Program design tailored to your goals</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-primary mr-3 font-bold text-xl">•</span>
                <span className="text-lg">Regular program updates and adjustments</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-primary mr-3 font-bold text-xl">•</span>
                <span className="text-lg">Email support for form checks and questions</span>
              </li>
            </ul>

            <a href="/contact" className="btn-primary inline-block mt-8">
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-brand-ink mb-6 font-display">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Contact us to discuss which coaching option is best for your goals and schedule a consultation with one of our expert coaches.
          </p>
          <a href="/contact" className="btn-primary">
            Contact Us
          </a>
        </div>
      </section>
    </>
  )
}
