import React from 'react'
import Image from 'next/image'
import Hero from '@/components/Hero'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import { getMethod } from '@/lib/sanity.queries'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How We Work - Evidence-Based Training & Body Composition Analysis | Vigour Gym',
  description: 'Discover our science-based approach to strength training, body composition analysis, and hormonal optimization. Learn about our body fat measurement methodology and personalized programming at Stockholm\'s premier performance gym.',
}

export const revalidate = 60

export default async function HowWeWorkPage() {
  const method = await getMethod().catch(() => null)

  return (
    <>
      <Hero
        title="Our Evidence-Based Methodology"
        subtitle="Science-driven training protocols, advanced body composition analysis, and individualized programming for sustainable transformation"
      />

      {/* Introduction Section */}
      <section className="section">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-ink mb-6 font-display">
            The Vigour Approach to Strength Training and Body Transformation
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At Vigour Gym, we reject cookie-cutter programs and generic fitness advice. Our methodology is built on three foundational pillars: evidence-based exercise science, precise body composition analysis, and individualized program design. We combine decades of practical coaching experience with the latest research in exercise physiology, endocrinology, and nutrition science to deliver measurable, sustainable results.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Whether your goal is building strength, optimizing body composition, improving athletic performance, or enhancing overall health and longevity, our systematic approach ensures every training session, nutrition intervention, and lifestyle modification is strategically aligned with your specific physiology and objectives.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Image */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/gallery/vigour-9.jpg"
            alt="Professional training at Vigour Gym"
            fill
            className="object-cover"
            sizes="(max-width: 1280px) 100vw, 1280px"
            priority
          />
        </div>
      </section>

      {/* The Three Pillars */}
      <section className="section bg-brand-paper">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-brand-ink mb-12 text-center font-display">
            The Three Pillars of Our Training System
          </h2>

          <div className="space-y-12">
            {/* Pillar 1 */}
            <div className="bg-white rounded-xl p-8 md:p-10">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-brand-ink mb-4">Comprehensive Assessment and Analysis</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Every client begins with an in-depth evaluation that goes far beyond basic measurements. We assess your movement quality, strength levels across multiple planes, training history, injury background, lifestyle factors, stress levels, sleep quality, and nutritional habits. This comprehensive picture allows us to identify limiting factors, asymmetries, and opportunities for optimization.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    For clients seeking advanced body composition analysis, we offer Vigour's body fat measurement—a method that measures subcutaneous body fat at 14 specific sites to identify potential hormonal imbalances and metabolic dysfunction. This data informs targeted interventions through training modifications, nutritional adjustments, supplementation protocols, and lifestyle optimization strategies.
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white rounded-xl p-8 md:p-10">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-brand-ink mb-4">Individualized Program Design</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Based on your assessment results, we design a fully customized training program that addresses your specific needs, goals, and constraints. Our programming draws from multiple evidence-based methodologies including Poliquin principles, conjugate periodization, undulating periodization, and biomechanics-focused technique refinement.
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Each program includes precise exercise selection, loading parameters, tempo prescriptions, rest intervals, and training frequency—all calibrated to your current capacity and progressive adaptation. We program for optimal hormonal response, neural adaptation, and metabolic efficiency while managing fatigue and recovery demands.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Nutrition protocols are equally personalized, accounting for your metabolic type, training goals, food preferences, and lifestyle. We provide specific macronutrient targets, meal timing strategies, supplement recommendations, and hydration guidelines—all designed to support your training adaptations and body composition objectives.
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white rounded-xl p-8 md:p-10">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-brand-ink mb-4">Ongoing Coaching and Program Evolution</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Sustainable transformation requires consistent execution and intelligent adaptation. We provide regular check-ins, detailed progress tracking, and systematic program adjustments based on your response to training. Our coaches monitor strength progressions, body composition changes, recovery indicators, and subjective feedback to optimize your programming in real-time.
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Through ongoing education, we help you understand the principles behind your program, develop training intuition, and build long-term self-efficacy. You'll learn to recognize productive training stress versus counterproductive overreaching, understand how nutrition timing affects performance and recovery, and develop the knowledge to maintain your results independently.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    We also provide accountability, motivation, and problem-solving support when life circumstances challenge your consistency. Whether navigating travel, managing stress, dealing with minor injuries, or adjusting to schedule changes, we help you maintain forward momentum through all conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Body Fat Measurement Deep Dive */}
      <section id="body-fat-measurement" className="section bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-brand-primary text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Advanced Body Composition Analysis
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-ink mb-6 font-display">
            Vigour's Body Fat Measurement
          </h2>

          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              A method that measures subcutaneous body fat at 14 specific sites to identify potential hormonal imbalances and metabolic dysfunction. This data informs targeted interventions through training modifications, nutritional adjustments, supplementation protocols and lifestyle optimization strategies.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We often recommend specific types of blood work through our laboratory partners, providing both real-time body composition data and detailed endocrine panel results.
            </p>
          </div>

          <div className="text-center mt-8">
            <a href="/booking" className="btn-primary text-lg">
              Schedule Body Fat Assessment
            </a>
          </div>
        </div>
      </section>

      {/* Training Methodologies */}
      <section className="section bg-brand-paper">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-brand-ink mb-8 text-center font-display">
            Our Training Methodologies and Programming Principles
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-bold text-brand-ink mb-3">Structural Balance Assessment</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                We evaluate strength ratios between opposing muscle groups and movement patterns to identify weaknesses, asymmetries, and injury risks. Programs are designed to address imbalances before pursuing maximal strength development.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-bold text-brand-ink mb-3">Tempo Prescription</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                We use specific tempo prescriptions (eccentric, pause, concentric phases) to target different adaptations: hypertrophy, strength, power, or technique refinement. Tempo manipulation is a critical variable often overlooked in conventional programming.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-bold text-brand-ink mb-3">Periodization Models</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                We employ various periodization schemes including linear, undulating, and conjugate methods depending on training goals, experience level, and response patterns. Programs are structured in mesocycles with strategic deload weeks for optimal adaptation.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-bold text-brand-ink mb-3">Exercise Selection Strategy</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Exercise selection is based on your biomechanics, injury history, equipment access, and training goals. We prioritize movement quality and individual response over adherence to arbitrary "best exercises" lists.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-bold text-brand-ink mb-3">Recovery Management</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Training frequency and volume are calibrated to your recovery capacity, influenced by sleep quality, nutrition, stress levels, and training age. We monitor fatigue markers and adjust intensity to prevent overtraining and optimize adaptation.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-bold text-brand-ink mb-3">Nutritional Periodization</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Macronutrient distribution and caloric intake are adjusted based on training phase, body composition goals, and individual response. We manipulate carbohydrate timing and total intake strategically to support training intensity while managing body composition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recovery and Restoration */}
      <section className="section bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-ink mb-6 font-display text-center">
            Recovery and Restoration
          </h2>
          <p className="text-lg text-gray-700 text-center mb-12 leading-relaxed">
            Because progress doesn't just happen in the gym — it happens when you recover.
          </p>

          <div className="space-y-8">
            {/* Infrared Saunas */}
            <div className="bg-brand-paper rounded-xl p-8">
              <h3 className="text-2xl font-bold text-brand-ink mb-4">Infrared Saunas</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Unwind in our infrared saunas, located in the locker rooms, and experience deep, restorative heat that promotes muscle recovery, detoxification, and relaxation.
              </p>
            </div>

            {/* Recovery Room */}
            <div className="bg-brand-paper rounded-xl p-8">
              <h3 className="text-2xl font-bold text-brand-ink mb-4">Recovery Room</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Step into our dedicated Recovery Room, a calm space for breath work, yoga, meditation, and stretching — perfect for resetting your body, restoring focus, and finding stillness after intense training.
              </p>
            </div>

            {/* Massage */}
            <div className="bg-brand-paper rounded-xl p-8">
              <h3 className="text-2xl font-bold text-brand-ink mb-4">Massage Therapy</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Professional massage therapy services available to support your recovery, reduce muscle tension, and enhance overall well-being.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTA
        heading="Experience the Vigour Difference"
        text="Schedule a complimentary consultation to discuss your goals and learn how our evidence-based approach can accelerate your progress"
        buttonText="Book Free Consultation"
        href="/booking"
      />
    </>
  )
}
