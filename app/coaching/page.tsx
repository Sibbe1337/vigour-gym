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
        subtitle="Personalized training programs designed to help you achieve your strength and body composition goals"
      />

      {/* Online Coaching */}
      <section className="section bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-ink mb-8 font-display">
            Online Coaching
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Get expert coaching wherever you are. Choose the program that fits your training schedule and goals.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* 2 Workouts per week */}
            <div className="bg-brand-paper rounded-xl p-8 border-2 border-transparent hover:border-brand-primary transition-all duration-300">
              <h3 className="text-2xl font-bold text-brand-ink mb-4">2 Workouts Per Week</h3>
              <div className="mb-6">
                <div className="text-4xl font-bold text-brand-primary mb-2">1,200 SEK</div>
                <p className="text-gray-600">per month</p>
              </div>
              <ul className="space-y-3 text-gray-700 mb-8">
                <li className="flex items-start">
                  <span className="text-brand-primary mr-3 font-bold text-xl">•</span>
                  <span>2 customized workout programs per week</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-primary mr-3 font-bold text-xl">•</span>
                  <span>Program design tailored to your goals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-primary mr-3 font-bold text-xl">•</span>
                  <span>Regular program updates and adjustments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-primary mr-3 font-bold text-xl">•</span>
                  <span>Email support for form checks and questions</span>
                </li>
              </ul>
              <a href="/contact" className="btn-primary w-full text-center block">
                Get Started
              </a>
            </div>

            {/* 3-4 Workouts per week */}
            <div className="bg-brand-paper rounded-xl p-8 border-2 border-brand-primary relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-brand-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-brand-ink mb-4">3-4 Workouts Per Week</h3>
              <div className="mb-6">
                <div className="text-4xl font-bold text-brand-primary mb-2">1,200 SEK</div>
                <p className="text-gray-600">per month</p>
              </div>
              <ul className="space-y-3 text-gray-700 mb-8">
                <li className="flex items-start">
                  <span className="text-brand-primary mr-3 font-bold text-xl">•</span>
                  <span>3-4 customized workout programs per week</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-primary mr-3 font-bold text-xl">•</span>
                  <span>Comprehensive program design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-primary mr-3 font-bold text-xl">•</span>
                  <span>Weekly check-ins and program adjustments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-primary mr-3 font-bold text-xl">•</span>
                  <span>Priority email support and form reviews</span>
                </li>
              </ul>
              <a href="/contact" className="btn-primary w-full text-center block">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Coaching at Vigour */}
      <section className="section bg-brand-paper">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-ink mb-8 font-display">
            Coaching at Vigour
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Train at our facility with one-on-one coaching, comprehensive assessments, and ongoing support.
          </p>

          <div className="bg-white rounded-xl p-8 md:p-10">
            <h3 className="text-2xl font-bold text-brand-ink mb-6">16-Week Transformation Program</h3>

            <div className="mb-8">
              <div className="text-4xl font-bold text-brand-primary mb-2">7,400 SEK</div>
              <p className="text-gray-600">16 weeks total</p>
            </div>

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
