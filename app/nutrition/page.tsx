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
                For clients with identified hormonal imbalances through BioSignature or laboratory testing, we implement targeted nutritional interventions to support hormonal optimization. This may include carbohydrate manipulation for insulin sensitivity, specific fat intake strategies for testosterone production, or targeted micronutrient supplementation for thyroid support.
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

      {/* Supplementation */}
      <section className="section bg-brand-paper">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-brand-ink mb-8 text-center font-display">
            Evidence-Based Supplementation Protocols
          </h2>

          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            Supplements cannot compensate for poor nutrition, but strategic supplementation can address micronutrient deficiencies, support optimal hormonal function, enhance training performance, and accelerate recovery when used appropriately. We recommend supplements based on individual needs, laboratory testing when available, and current scientific evidence.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Foundational Supplements */}
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-bold text-brand-ink mb-4">Omega-3 Fatty Acids (EPA/DHA)</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                <strong>Purpose:</strong> Anti-inflammatory effects, cardiovascular health, brain function, insulin sensitivity, muscle protein synthesis signaling.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                <strong>Dosing:</strong> 2-4 grams combined EPA/DHA daily from high-quality fish oil. Higher doses may be warranted for inflammatory conditions or during intense training phases.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong>Timing:</strong> Can be split across meals or taken with largest meal for improved absorption. Quality matters significantly—choose molecularly distilled, third-party tested products.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-bold text-brand-ink mb-4">Vitamin D3</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                <strong>Purpose:</strong> Bone health, immune function, testosterone production, insulin sensitivity, muscle function, mood regulation.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                <strong>Dosing:</strong> 2000-5000 IU daily for most individuals, adjusted based on blood levels (optimal range 50-80 ng/mL). Scandinavian residents are particularly prone to deficiency due to limited sun exposure.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong>Timing:</strong> Take with fat-containing meal for improved absorption. Consider co-supplementation with vitamin K2 (MK-7) for optimal calcium metabolism.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-bold text-brand-ink mb-4">Magnesium</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                <strong>Purpose:</strong> Over 300 enzymatic reactions, sleep quality, muscle relaxation, stress response, glucose metabolism, protein synthesis.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                <strong>Dosing:</strong> 400-600mg elemental magnesium from highly bioavailable forms (bisglycinate, threonate, or malate). Avoid magnesium oxide which has poor absorption.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong>Timing:</strong> Evening dosing can support sleep quality. Magnesium bisglycinate is particularly effective for sleep and recovery enhancement.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-bold text-brand-ink mb-4">Zinc</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                <strong>Purpose:</strong> Testosterone production, immune function, protein synthesis, wound healing, thyroid function. Training increases zinc losses.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                <strong>Dosing:</strong> 15-30mg elemental zinc daily from chelated forms (picolinate or bisglycinate). Higher doses (up to 50mg) may be used short-term for immune support.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong>Timing:</strong> Away from calcium and iron for optimal absorption. Long-term supplementation should include copper (zinc:copper ratio of 10:1) to prevent imbalances.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-bold text-brand-ink mb-4">Creatine Monohydrate</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                <strong>Purpose:</strong> ATP regeneration, muscle strength and power, muscle mass, cognitive function, neuroprotection. Most researched performance supplement.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                <strong>Dosing:</strong> 5 grams daily, consistently. Loading phases are optional (20g/day for 5 days) but not necessary for long-term saturation. Approximately 70-80% of individuals are "responders."
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong>Timing:</strong> Timing is largely irrelevant due to saturation effect. Can be taken with carbohydrates post-workout for potentially improved uptake, but daily consistency matters most.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-bold text-brand-ink mb-4">Protein Powder</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                <strong>Purpose:</strong> Convenient protein source to meet daily targets, post-workout recovery, between-meal protein feedings. Not superior to whole food protein but highly practical.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                <strong>Dosing:</strong> 25-50 grams per serving based on total daily protein needs. Whey protein (isolate or concentrate) is ideal for fast absorption. Plant-based options (pea, rice blend) for dairy-sensitive individuals.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong>Timing:</strong> Post-workout is common but not critical. Can be used as convenient protein source at any meal or snack. Choose products with minimal additives and third-party testing (Informed Sport, NSF Certified for Sport).
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-bold text-brand-ink mb-4">Vitamin B-Complex</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                <strong>Purpose:</strong> Energy metabolism, neurotransmitter synthesis, stress response, red blood cell formation. B vitamins are water-soluble and not stored long-term.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                <strong>Dosing:</strong> High-quality B-complex with methylated forms of B12 and folate (methylcobalamin and methylfolate) for optimal utilization. Look for products with all 8 B vitamins in balanced ratios.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong>Timing:</strong> Morning with breakfast to support energy metabolism throughout the day. May cause neon yellow urine (harmless riboflavin excretion).
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-bold text-brand-ink mb-4">Digestive Enzymes & Probiotics</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                <strong>Purpose:</strong> Improved nutrient digestion and absorption, gut health optimization, immune function, reduced bloating and digestive discomfort.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                <strong>Dosing:</strong> Broad-spectrum digestive enzyme with meals high in protein and fiber. Multi-strain probiotic (10-50 billion CFU) with clinically researched strains.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong>Timing:</strong> Digestive enzymes with meals. Probiotics on empty stomach or with small meal. Quality and strain specificity matter significantly for probiotics.
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
