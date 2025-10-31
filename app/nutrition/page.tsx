import React from 'react'
import Image from 'next/image'
import Hero from '@/components/Hero'
import CTA from '@/components/CTA'
import { getNutrition } from '@/lib/sanity.queries'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nutrition & Supplementation - Evidence-Based Dietary Guidance | Vigour Gym',
  description: 'Expert nutrition coaching for strength training, body composition, and performance. Learn about macronutrient optimization, supplement protocols, and personalized meal planning in Stockholm.',
}

export const revalidate = 60

export default async function NutritionPage() {
  const nutrition = await getNutrition().catch(() => null)

  return (
    <>
      <Hero
        title="Nutrition & Supplementation"
        subtitle="Evidence-based nutritional strategies to optimize performance, body composition, and long-term health"
      />

      {/* Introduction */}
      <section className="section">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-ink mb-6 font-display">
            Fueling Performance and Transformation Through Strategic Nutrition
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Optimal nutrition is the foundation upon which all training adaptations are built. Without proper nutritional support, even the most sophisticated training program will fail to deliver results. At Vigour Gym, we provide evidence-based nutritional guidance that goes beyond generic meal plans and calorie counting—we help you understand how to fuel your specific physiology, training demands, and body composition goals through strategic macronutrient manipulation, nutrient timing, and targeted supplementation.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our approach to nutrition coaching is individualized, sustainable, and rooted in current nutritional science. We recognize that there is no single "perfect diet" that works for everyone. Your optimal nutritional strategy depends on your metabolic type, training volume and intensity, body composition goals, food preferences, lifestyle constraints, and individual response to different macronutrient distributions.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Images */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/gallery/vigour-10.jpg"
              alt="Nutrition coaching at Vigour Gym"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/gallery/vigour-11.jpg"
              alt="Performance nutrition"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Nutrition Philosophy */}
      <section className="section bg-brand-paper">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-brand-ink mb-12 text-center font-display">
            Our Nutritional Philosophy and Approach
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl p-8">
              <h3 className="text-2xl font-bold text-brand-ink mb-4">Individualization Over Dogma</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We reject rigid dietary dogma and one-size-fits-all meal plans. Whether ketogenic, moderate carbohydrate, high carbohydrate, intermittent fasting, or traditional meal frequency—we use the approach that best supports your individual metabolism, training demands, and adherence capacity. Your optimal diet is the one you can execute consistently while achieving your goals.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We assess your metabolic type through a combination of questionnaires, food response tracking, and body composition analysis to determine your optimal macronutrient distribution. Some individuals thrive on higher fat, lower carbohydrate intakes, while others perform and recover better with higher carbohydrate consumption. We identify your metabolic preferences and design nutrition protocols accordingly.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8">
              <h3 className="text-2xl font-bold text-brand-ink mb-4">Whole Foods Foundation</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                While we use macronutrient targets and caloric frameworks, we emphasize nutrient-dense whole foods as the foundation of any successful nutrition program. Micronutrient adequacy, fiber intake, phytonutrient diversity, and food quality all impact training recovery, hormonal health, immune function, and overall well-being in ways that pure macronutrient tracking cannot capture.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We guide clients toward minimally processed proteins, healthy fat sources, fibrous vegetables, strategic carbohydrate selections, and high-quality supplementation when appropriate. Supplements are exactly that—supplemental to a solid nutritional foundation, not replacements for poor dietary habits.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8">
              <h3 className="text-2xl font-bold text-brand-ink mb-4">Hormonal Optimization</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Food is a powerful hormonal signaling mechanism. The macronutrient composition, meal timing, and food quality of your diet directly influence insulin sensitivity, cortisol patterns, thyroid function, sex hormone production, and growth hormone release. We design nutrition protocols that optimize these hormonal cascades for improved body composition, recovery, and performance.
              </p>
              <p className="text-gray-700 leading-relaxed">
                For clients with identified hormonal imbalances through laboratory testing, we implement targeted nutritional interventions to support hormonal optimization. This may include carbohydrate manipulation for insulin sensitivity, specific fat intake strategies for testosterone production, or targeted micronutrient supplementation for thyroid support.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8">
              <h3 className="text-2xl font-bold text-brand-ink mb-4">Sustainability and Flexibility</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The most effective nutrition plan is one you can maintain long-term. We build sustainable eating patterns that accommodate social occasions, travel, dining out, and life's unpredictability while still supporting your goals. Extreme restriction and perfectionism typically lead to compliance failure and psychological distress around food.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We teach you to make informed choices in various contexts, understand portion management without obsessive tracking, recognize hunger and satiety cues, and develop a healthy relationship with food. Our goal is to build nutritional competence and autonomy, not dependency on rigid meal plans or constant coaching oversight.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nutrition Coaching Process */}
      <section className="section bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-brand-ink mb-8 text-center font-display">
            Our Nutrition Coaching Process
          </h2>

          <div className="space-y-6">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center text-white font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-ink mb-2">Initial Nutritional Assessment</h3>
                <p className="text-gray-700 leading-relaxed">
                  We begin with a comprehensive evaluation of your current dietary habits, food preferences, digestive health, energy levels, meal timing, supplement use, and nutritional knowledge. We assess metabolic type through questionnaires and response tracking. Laboratory testing (when available) provides additional insights into nutrient deficiencies, metabolic markers, and hormonal status.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center text-white font-bold">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-ink mb-2">Personalized Nutrition Plan Development</h3>
                <p className="text-gray-700 leading-relaxed">
                  Based on your assessment, training program, and body composition goals, we create a customized nutrition plan with specific macronutrient targets, meal timing recommendations, food selection guidelines, and supplement protocols. Plans are designed for adherence and sustainability while supporting your training adaptations and body composition objectives.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center text-white font-bold">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-ink mb-2">Implementation and Education</h3>
                <p className="text-gray-700 leading-relaxed">
                  We provide practical guidance on meal preparation, restaurant navigation, portion management, supplement sourcing, and creating sustainable eating patterns. You'll learn the principles behind the recommendations so you can make informed decisions independently. We teach skills, not just prescribe rules.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center text-white font-bold">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-ink mb-2">Ongoing Monitoring and Adjustment</h3>
                <p className="text-gray-700 leading-relaxed">
                  We track your progress through body composition changes, performance metrics, energy levels, recovery quality, and adherence feedback. Plans are adjusted based on your response—what works in theory must be validated through your individual results. We modify macronutrients, meal timing, and supplement protocols as needed to optimize outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        heading="Optimize Your Nutrition Strategy"
        text="Schedule a consultation to discuss your nutritional needs and learn how personalized nutrition planning can accelerate your results"
        buttonText="Book Nutrition Consultation"
        href="/booking"
      />
    </>
  )
}
