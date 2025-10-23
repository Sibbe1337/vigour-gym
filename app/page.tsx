import React from 'react'
import Hero from '@/components/Hero'
import TrainerCard from '@/components/TrainerCard'
import PartnerLogo from '@/components/PartnerLogo'
import CTA from '@/components/CTA'
import GalleryGrid from '@/components/GalleryGrid'
import { getTrainers, getMethod, getNutrition, getPartners } from '@/lib/sanity.queries'

export const revalidate = 60

export default async function HomePage() {
  const [trainers, method, nutrition, partners] = await Promise.all([
    getTrainers().catch(() => []),
    getMethod().catch(() => null),
    getNutrition().catch(() => null),
    getPartners().catch(() => []),
  ])

  return (
    <>
      <Hero
        title="Stockholm's Premier Strength & Conditioning Gym"
        subtitle="Evidence-based training, personalized nutrition, and advanced body composition analysis. Transform your physique with expert coaching and world-class facilities."
        ctaPrimary={{ text: 'Book Free Consultation', href: '/booking' }}
        ctaSecondary={{ text: 'Explore Our Methods', href: '/how-we-work' }}
        backgroundImage="/gallery/vigour-1.jpg"
      />

      {/* Quick Visual Identity Section */}
      <section className="py-0 -mt-16 sm:-mt-20 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-primary mb-2">💪</div>
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-brand-ink mb-1">Strength Training</h3>
              <p className="text-xs sm:text-sm text-gray-600">Expert Programming</p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-primary mb-2">🥗</div>
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-brand-ink mb-1">Nutrition</h3>
              <p className="text-xs sm:text-sm text-gray-600">Personalized Plans</p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-primary mb-2">📊</div>
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-brand-ink mb-1">BioSignature</h3>
              <p className="text-xs sm:text-sm text-gray-600">Body Composition</p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="section bg-white">
        <h2 className="section-title text-center">How We Work</h2>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 text-center max-w-2xl mx-auto mb-10 sm:mb-12 md:mb-16 leading-relaxed">
          Evidence-based training. Personalized coaching. Real results.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 tracking-tight">Assessment</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Comprehensive evaluation including BioSignature body composition analysis.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 tracking-tight">Programming</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Customized training and nutrition tailored to your unique physiology.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 tracking-tight">Coaching</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Ongoing support with regular check-ins and program adjustments.
            </p>
          </div>
        </div>
        <div className="text-center mt-8 sm:mt-10 md:mt-12">
          <a href="/how-we-work" className="btn-primary">
            Explore Our Methodology
          </a>
        </div>
      </section>

      {/* BioSignature Teaser */}
      <section className="section bg-brand-paper">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-brand-primary text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
            Advanced Body Composition Analysis
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-ink mb-4 font-display">
            BioSignature Modulation
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Discover how your body fat distribution patterns can reveal hormonal imbalances and metabolic dysfunction. BioSignature is a revolutionary method developed by renowned strength coach Charles Poliquin that uses 12-site body fat measurements to identify hormonal patterns and guide targeted interventions through nutrition, supplementation, and lifestyle optimization.
          </p>
          <a href="/how-we-work#biosignature" className="btn-secondary">
            Learn More About BioSignature
          </a>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section bg-white">
        <h2 className="section-title text-center">Our Facility</h2>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 text-center max-w-2xl mx-auto mb-10 sm:mb-12 md:mb-16 leading-relaxed">
          Professional equipment. Expert coaching. Results-driven environment.
        </p>
        <GalleryGrid />
      </section>

      {/* Trainers Section */}
      {trainers.length > 0 ? (
        <section className="section bg-white">
          <h2 className="section-title text-center">Meet Our Expert Coaches</h2>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
            Our team of certified strength coaches, nutrition specialists, and BioSignature practitioners brings decades of combined experience helping clients achieve extraordinary results through science-based programming and individualized attention.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.slice(0, 3).map((trainer: any) => (
              <TrainerCard
                key={trainer._id}
                name={trainer.name}
                photoUrl={trainer.photoUrl}
              />
            ))}
          </div>
          {trainers.length > 3 && (
            <div className="text-center mt-12">
              <a href="/trainers" className="btn-secondary">
                View All Coaches
              </a>
            </div>
          )}
        </section>
      ) : (
        <section className="section bg-white">
          <h2 className="section-title text-center">Expert Coaching Team</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-700 mb-8">
              Our team of certified coaches brings expertise in strength training, nutrition science, hormonal optimization, and body composition analysis. We're committed to delivering results through evidence-based methods and personalized attention.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-brand-paper p-6 rounded-lg">
                <h3 className="font-bold mb-2 text-brand-primary text-lg">Strength Specialists</h3>
                <p className="text-sm text-gray-600">Expert programming for maximum strength gains</p>
              </div>
              <div className="bg-brand-paper p-6 rounded-lg">
                <h3 className="font-bold mb-2 text-brand-primary text-lg">BioSignature Certified</h3>
                <p className="text-sm text-gray-600">Advanced body composition analysis</p>
              </div>
              <div className="bg-brand-paper p-6 rounded-lg">
                <h3 className="font-bold mb-2 text-brand-primary text-lg">Nutrition Experts</h3>
                <p className="text-sm text-gray-600">Science-based nutritional guidance</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Nutrition Teaser */}
      <section className="section bg-brand-paper">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title">Nutrition & Supplementation</h2>
          <p className="text-lg text-gray-700 mb-8">
            Optimal nutrition is the foundation of transformation. We provide evidence-based nutritional guidance tailored to your metabolic type, training goals, and lifestyle. From macro programming to targeted supplementation protocols, we help you fuel performance and optimize body composition through strategic nutrition.
          </p>
          <a href="/nutrition" className="btn-primary">
            Explore Nutrition Services
          </a>
        </div>
      </section>

      {/* Partners Section */}
      {partners.length > 0 && (
        <section className="section bg-white">
          <h2 className="section-title text-center">Trusted Partners</h2>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
            We collaborate with leading companies in functional medicine, laboratory testing, and performance nutrition to provide you with access to the highest quality products and services.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {partners.slice(0, 4).map((partner: any) => (
              <PartnerLogo
                key={partner._id}
                name={partner.name}
                logoUrl={partner.logoUrl}
                url={partner.url}
                description={partner.description}
              />
            ))}
          </div>
          {partners.length > 4 && (
            <div className="text-center mt-12">
              <a href="/partners" className="btn-secondary">
                View All Partners
              </a>
            </div>
          )}
        </section>
      )}

      {/* CTA Section */}
      <CTA
        heading="Ready to Start Your Transformation?"
        text="Book a complimentary 15-minute consultation and discover how our evidence-based approach can help you achieve your goals"
        buttonText="Schedule Free Consultation"
        href="/booking"
      />
    </>
  )
}
