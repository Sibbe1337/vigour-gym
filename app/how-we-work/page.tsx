import React from 'react'
import Image from 'next/image'
import Hero from '@/components/Hero'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import { getMethod } from '@/lib/sanity.queries'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How We Work - Evidence-Based Training & BioSignature Analysis | Vigour Gym',
  description: 'Discover our science-based approach to strength training, body composition analysis, and hormonal optimization. Learn about BioSignature methodology and personalized programming at Stockholm\'s premier performance gym.',
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
                    For clients seeking advanced body composition analysis, we offer BioSignature assessment—a sophisticated method that measures subcutaneous body fat at 12 specific sites to identify potential hormonal imbalances and metabolic dysfunction. This data informs targeted interventions through training modifications, nutritional adjustments, supplementation protocols, and lifestyle optimization strategies.
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

      {/* BioSignature Deep Dive */}
      <section id="biosignature" className="section bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-brand-primary text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Advanced Body Composition Analysis
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-ink mb-6 font-display">
            BioSignature Modulation: Understanding Hormonal Patterns Through Body Fat Distribution
          </h2>

          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              BioSignature is a sophisticated body composition analysis method developed by renowned strength coach Charles Poliquin, based on research showing that specific patterns of subcutaneous fat storage correlate with particular hormonal profiles and metabolic imbalances. By measuring body fat at 12 distinct sites using precision calipers, we can identify potential hormonal dysregulation and metabolic dysfunction that may be limiting your progress.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The BioSignature method recognizes that where your body preferentially stores fat provides valuable insights into your endocrine function. For example, excessive subscapular fat (upper back) often indicates insulin resistance, elevated abdominal fat correlates with cortisol dysregulation, triceps and quadriceps sites can indicate suboptimal testosterone or growth hormone status, and suprailiac measurements may suggest blood sugar handling issues.
            </p>
          </div>

          <div className="bg-brand-paper rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-brand-ink mb-6">The BioSignature Assessment Process</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-2 h-2 bg-brand-primary rounded-full mt-2 mr-4"></div>
                <div>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>12-Site Body Fat Measurement:</strong> We use precision Harpenden calipers to measure subcutaneous fat thickness at chin, cheek, pectoral, triceps, subscapular, midaxillary, suprailiac, umbilical, knee, calf, quadriceps, and hamstring sites.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-2 h-2 bg-brand-primary rounded-full mt-2 mr-4"></div>
                <div>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Pattern Analysis:</strong> We analyze the relationships between different site measurements to identify potential hormonal patterns including insulin sensitivity, cortisol regulation, thyroid function, sex hormone balance, and growth hormone status.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-2 h-2 bg-brand-primary rounded-full mt-2 mr-4"></div>
                <div>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Targeted Interventions:</strong> Based on identified patterns, we develop specific recommendations for training modifications, nutritional adjustments, supplementation protocols, sleep optimization, and stress management techniques designed to address the underlying hormonal imbalances.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-2 h-2 bg-brand-primary rounded-full mt-2 mr-4"></div>
                <div>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Progress Tracking:</strong> We perform follow-up measurements every 4-6 weeks to track changes in fat distribution patterns, assess intervention effectiveness, and make protocol adjustments as needed.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-2 h-2 bg-brand-primary rounded-full mt-2 mr-4"></div>
                <div>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Integration with Lab Testing:</strong> For comprehensive hormonal assessment, we often recommend BioSignature in conjunction with blood work through our laboratory partners, providing both real-time body composition data and detailed endocrine panel results.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* BioSignature FAQ */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-brand-ink mb-6">Common Questions About BioSignature</h3>
            <FAQ items={[
              {
                question: "Is BioSignature scientifically validated?",
                answer: "BioSignature is based on observational research and clinical experience rather than controlled trials. It should be viewed as a coaching tool and indicator system rather than a diagnostic medical test. The patterns identified can guide lifestyle interventions, but should not replace medical consultation for hormonal concerns. Many coaches report strong correlations between BioSignature patterns and subsequent lab work, though individual variation exists."
              },
              {
                question: "Who benefits most from BioSignature assessment?",
                answer: "BioSignature is particularly valuable for individuals who have reached a plateau despite consistent training and nutrition compliance, those seeking to optimize hormonal health naturally, athletes looking for performance edges through metabolic optimization, or anyone interested in a deeper understanding of how their physiology responds to training and nutrition interventions. It's suitable for both beginners and advanced trainees."
              },
              {
                question: "How does BioSignature differ from other body composition methods?",
                answer: "Unlike DEXA, InBody, or simple body fat percentage measurements, BioSignature focuses on fat distribution patterns rather than total body fat percentage. This site-specific approach provides actionable information about potential metabolic and hormonal issues that total body composition numbers cannot reveal. A person with 15% body fat but poor distribution may face different optimization strategies than someone with the same percentage but better fat distribution."
              },
              {
                question: "Do I need lab work in addition to BioSignature?",
                answer: "While not required, comprehensive blood panels provide complementary information. BioSignature offers real-time feedback you can track every 4-6 weeks, while lab work provides precise hormonal values. We typically recommend an initial comprehensive blood panel through our laboratory partners to establish baseline values, then use BioSignature for ongoing tracking between blood draws. This combination provides both detailed biochemical data and frequent progress monitoring."
              },
              {
                question: "How quickly can I expect to see changes in BioSignature measurements?",
                answer: "Response varies based on the severity of imbalances and consistency with interventions. Some individuals see measurable improvements in stubborn fat sites within 4-6 weeks of targeted interventions. Significant pattern changes typically require 12-16 weeks of consistent protocol adherence. We generally recommend at least three measurement periods (baseline, 6 weeks, 12 weeks) before making major protocol modifications, as hormonal adaptations require time."
              }
            ]} />
          </div>

          {/* Disclaimer */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded mb-8">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="h-6 w-6 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <h4 className="text-sm font-bold text-yellow-800 mb-2">Important Disclaimer</h4>
                <p className="text-sm text-yellow-700 leading-relaxed">
                  BioSignature assessment and the information derived from it are for educational and coaching purposes only. This is not medical advice, diagnosis, or treatment. The patterns identified may suggest areas for lifestyle optimization but do not constitute medical evaluation of hormonal status. Always consult with qualified healthcare providers for medical concerns, before beginning new supplement protocols, or if you suspect hormonal imbalances. Pregnant or nursing women should not undergo BioSignature assessment or follow BioSignature-derived protocols without physician approval.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a href="/booking" className="btn-primary text-lg">
              Schedule BioSignature Assessment
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
