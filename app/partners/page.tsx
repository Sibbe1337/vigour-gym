import React from 'react'
import Hero from '@/components/Hero'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Partners - Laboratory Testing & Services | Vigour Gym',
  description: 'Access laboratory testing services through our trusted partners including Funmed and Werlabs.',
}

export const revalidate = 60

export default async function PartnersPage() {
  return (
    <>
      <Hero
        title="Our Trusted Partners"
        subtitle="Access comprehensive laboratory testing and functional medicine services through our carefully selected partner network"
      />

      {/* Hotel & Club Partners */}
      <section className="section bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="inline-block bg-brand-primary text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
            Hotel & Club Partners
          </div>
          <h2 className="text-3xl font-bold text-brand-ink mb-6 font-display">Hotel & Club Partners</h2>

          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              At Vigour, we serve as the dedicated personal trainers for Club Dahlia, working closely with their members to deliver an elevated coaching experience.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We also provide discreet, high-level training and coaching for guests of <strong>Hotel Villa Dagmar</strong>, <strong>Hotel Villa Dahlia</strong> and <strong>Hotel Diplomat</strong>, available upon request during their stay.
            </p>
          </div>
          
          {/* Gym Image */}
          <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden ring-1 ring-black/[0.04]">
            <Image
              src="/gallery/vigour-gym-interior.jpg"
              alt="Vigour Gym interior at Club Dahlia"
              fill
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
            />
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section bg-brand-paper">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-ink mb-6 font-display">
            Strategic Partnerships for Enhanced Results
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At Vigour Gym, we believe in providing our members with comprehensive support that extends beyond the training floor. We've established strategic partnerships with leading companies in functional medicine and laboratory testing to ensure you have access to the highest quality services that complement your training and body composition goals.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our partner selection is rigorous and intentional. We only collaborate with organizations that share our commitment to evidence-based practices, service quality, and genuine customer value.
            </p>
          </div>
        </div>
      </section>

      {/* Member Benefits Overview */}
      <section className="section bg-brand-paper">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-brand-ink mb-8 text-center font-display">
            Member Benefits
          </h2>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            As a Vigour Gym member, you gain access to exclusive discounts on laboratory testing services through our partner network.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-3xl mx-auto">
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-brand-primary mb-2">10%</div>
              <h3 className="font-bold text-brand-ink mb-2">Lab Testing Savings</h3>
              <p className="text-sm text-gray-600">
                Reduced rates on comprehensive blood panels and specialized testing
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-brand-primary mb-2">Priority</div>
              <h3 className="font-bold text-brand-ink mb-2">Access & Support</h3>
              <p className="text-sm text-gray-600">
                Expedited scheduling and dedicated customer support through partners
              </p>
            </div>
          </div>

          <div className="bg-brand-primary text-white rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-3">How to Access Your Member Discounts</h3>
            <p className="text-brand-paper mb-4 leading-relaxed">
              Contact your coach to receive your unique member discount codes and partner access information.
            </p>
          </div>
        </div>
      </section>

      {/* Funmed Partnership */}
      <section className="section bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <div className="inline-block bg-brand-primary text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
              Laboratory Testing Partner
            </div>
            <h2 className="text-3xl font-bold text-brand-ink mb-4 font-display">Funmed</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Funmed offers comprehensive laboratory testing including blood work, stool samples, urine analysis, breath testing, and more. Their extensive selection of in-depth tests combined with medical consultations from their doctors provides you with detailed insights into your health.
            </p>

            <a
              href="https://www.funmed.se"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              Visit Funmed →
            </a>
          </div>
        </div>
      </section>

      {/* Werlabs Partnership */}
      <section className="section bg-brand-paper">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <div className="inline-block bg-brand-primary text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
              Laboratory Testing Partner
            </div>
            <h2 className="text-3xl font-bold text-brand-ink mb-4 font-display">Werlabs</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Werlabs is Scandinavia's leading digital health company, providing comprehensive blood testing services with medical-grade accuracy, convenient home sampling options, and clear digital results.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              For serious athletes and individuals optimizing body composition, regular blood work is essential. Werlabs offers specialized panels for hormone analysis, metabolic function, micronutrient status, inflammation markers, and cardiovascular health.
            </p>

            <a
              href="https://www.werlabs.se"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              Visit Werlabs →
            </a>
          </div>
        </div>
      </section>

      {/* Björn Borg Partnership */}
      <section className="section bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <div className="inline-block bg-brand-primary text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
              Performance Apparel Partner
            </div>
            <h2 className="text-3xl font-bold text-brand-ink mb-4 font-display">Björn Borg</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Björn Borg combines Scandinavian design aesthetics with high-performance athletic functionality. Their training apparel is engineered for the demands of serious strength training—durable fabrics, strategic ventilation, and freedom of movement.
            </p>

            <a
              href="https://www.bjornborg.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              Visit Björn Borg →
            </a>
          </div>
        </div>
      </section>

      {/* Why We Partner */}
      <section className="section bg-brand-paper">
        <div className="max-w-4xl mx-auto">
          <div className="bg-brand-primary text-white rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-3">Questions About Partner Benefits?</h3>
            <p className="text-brand-paper mb-6">
              Contact our team to learn more about accessing your member discounts or guidance on selecting appropriate laboratory testing panels.
            </p>
            <a href="/contact" className="bg-white text-brand-primary rounded-lg px-8 py-3 font-bold hover:bg-brand-paper transition-all inline-block">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
