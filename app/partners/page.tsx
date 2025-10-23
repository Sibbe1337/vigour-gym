import React from 'react'
import Hero from '@/components/Hero'
import PartnerLogo from '@/components/PartnerLogo'
import { getPartners } from '@/lib/sanity.queries'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Partners & Member Discounts - Exclusive Benefits | Vigour Gym',
  description: 'Access exclusive member discounts on functional medicine testing, laboratory services, premium supplements, and performance gear through our trusted partners including Funmed, Werlabs, and Björn Borg.',
}

export const revalidate = 60

export default async function PartnersPage() {
  const partners = await getPartners().catch(() => [])

  return (
    <>
      <Hero
        title="Our Trusted Partners"
        subtitle="Access exclusive member benefits, discounts, and premium services through our carefully selected partner network"
      />

      {/* Introduction */}
      <section className="section">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-ink mb-6 font-display">
            Strategic Partnerships for Enhanced Results
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At Vigour Gym, we believe in providing our members with comprehensive support that extends beyond the training floor. We've established strategic partnerships with leading companies in functional medicine, laboratory testing, premium supplementation, and performance apparel to ensure you have access to the highest quality products and services that complement your training and body composition goals.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our partner selection is rigorous and intentional. We only collaborate with organizations that share our commitment to evidence-based practices, product quality, and genuine customer value. Each partnership has been carefully evaluated to ensure it provides meaningful benefits to our members, whether through exclusive discounts, priority access, or specialized services tailored to serious training populations.
            </p>
          </div>
        </div>
      </section>

      {/* Member Benefits Overview */}
      <section className="section bg-brand-paper">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-brand-ink mb-8 text-center font-display">
            Exclusive Member Benefits
          </h2>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            As a Vigour Gym member, you gain immediate access to exclusive discounts and premium services across our entire partner network. These benefits are designed to reduce the financial barriers to optimizing your health, performance, and recovery.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-brand-primary mb-2">10-25%</div>
              <h3 className="font-bold text-brand-ink mb-2">Supplement Discounts</h3>
              <p className="text-sm text-gray-600">
                Save on premium supplements from functional medicine-grade manufacturers
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-brand-primary mb-2">15-20%</div>
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
              Contact our front desk or your coach to receive your unique member discount codes and partner access information. Most discounts are automatically applied at checkout using your member code, while some partners require verification of active membership. Detailed instructions for each partner are provided in your member welcome packet.
            </p>
          </div>
        </div>
      </section>

      {/* Funmed Partnership */}
      <section className="section bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="inline-block bg-brand-primary text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                Premium Supplements Partner
              </div>
              <h2 className="text-3xl font-bold text-brand-ink mb-4 font-display">Funmed</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Funmed is Sweden's leading supplier of functional medicine-grade supplements, offering pharmaceutical-quality products that meet the rigorous standards required by health professionals. Unlike mass-market supplements with questionable quality control, Funmed products undergo extensive third-party testing, use superior raw material forms, and provide transparent sourcing and manufacturing information.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Their product range includes premium omega-3 fish oils, bioavailable mineral formulations, methylated B-vitamins, adaptogenic herbs, specialized digestive support, and targeted formulations for hormonal optimization. All products are free from unnecessary fillers, artificial colors, and low-quality excipients commonly found in consumer-grade supplements.
              </p>

              <div className="bg-brand-paper rounded-lg p-6 mb-6">
                <h3 className="font-bold text-brand-ink mb-3 text-lg">Member Benefits:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-brand-primary mr-2 font-bold">•</span>
                    <span><strong>15-20% discount</strong> on all Funmed products with member code</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-primary mr-2 font-bold">•</span>
                    <span><strong>Free shipping</strong> on orders over 500 SEK for Vigour members</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-primary mr-2 font-bold">•</span>
                    <span><strong>Priority access</strong> to new product releases and limited inventory</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-primary mr-2 font-bold">•</span>
                    <span><strong>Extended return policy</strong> (60 days vs. standard 30 days)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-primary mr-2 font-bold">•</span>
                    <span><strong>Personalized supplement consultations</strong> available through referral</span>
                  </li>
                </ul>
              </div>

              <a
                href="https://www.funmed.se"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block"
              >
                Visit Funmed →
              </a>
            </div>

            <div className="bg-brand-paper rounded-xl p-8">
              <h3 className="text-xl font-bold text-brand-ink mb-4">Recommended Funmed Products</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-brand-primary pl-4">
                  <h4 className="font-bold text-brand-ink mb-1">Omega-3 Premium</h4>
                  <p className="text-sm text-gray-700">High-potency molecularly distilled fish oil with optimal EPA/DHA ratio. Third-party tested for purity and heavy metals.</p>
                </div>
                <div className="border-l-4 border-brand-primary pl-4">
                  <h4 className="font-bold text-brand-ink mb-1">Magnesium Bisglycinate</h4>
                  <p className="text-sm text-gray-700">Highly bioavailable chelated magnesium for sleep, recovery, and muscle relaxation. No digestive discomfort.</p>
                </div>
                <div className="border-l-4 border-brand-primary pl-4">
                  <h4 className="font-bold text-brand-ink mb-1">Zinc Picolinate</h4>
                  <p className="text-sm text-gray-700">Superior zinc absorption for immune function and testosterone support. Includes copper for proper mineral balance.</p>
                </div>
                <div className="border-l-4 border-brand-primary pl-4">
                  <h4 className="font-bold text-brand-ink mb-1">Vitamin D3 + K2</h4>
                  <p className="text-sm text-gray-700">Optimal dose D3 with vitamin K2 (MK-7) for bone health and calcium metabolism. Critical for Scandinavian residents.</p>
                </div>
                <div className="border-l-4 border-brand-primary pl-4">
                  <h4 className="font-bold text-brand-ink mb-1">Methyl B-Complex</h4>
                  <p className="text-sm text-gray-700">Methylated B-vitamins for optimal absorption and utilization. Supports energy metabolism and stress response.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Werlabs Partnership */}
      <section className="section bg-brand-paper">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1">
              <div className="bg-white rounded-xl p-8">
                <h3 className="text-xl font-bold text-brand-ink mb-4">Essential Health Panels for Athletes</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-brand-primary pl-4">
                    <h4 className="font-bold text-brand-ink mb-1">Comprehensive Health Check</h4>
                    <p className="text-sm text-gray-700">Complete metabolic panel, lipids, thyroid function, vitamins, minerals, and inflammation markers. Ideal baseline assessment.</p>
                  </div>
                  <div className="border-l-4 border-brand-primary pl-4">
                    <h4 className="font-bold text-brand-ink mb-1">Hormone Panel (Male/Female)</h4>
                    <p className="text-sm text-gray-700">Total and free testosterone, estradiol, SHBG, cortisol, DHEA, LH, FSH, and thyroid markers. Essential for optimization.</p>
                  </div>
                  <div className="border-l-4 border-brand-primary pl-4">
                    <h4 className="font-bold text-brand-ink mb-1">Performance Panel</h4>
                    <p className="text-sm text-gray-700">Iron status, vitamin D, B12, folate, magnesium, and key recovery markers. Identifies common deficiencies in athletes.</p>
                  </div>
                  <div className="border-l-4 border-brand-primary pl-4">
                    <h4 className="font-bold text-brand-ink mb-1">Advanced Metabolic Panel</h4>
                    <p className="text-sm text-gray-700">Insulin, HbA1c, advanced lipid panel, liver enzymes, and kidney function. Assesses metabolic health and insulin sensitivity.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="inline-block bg-brand-primary text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                Laboratory Testing Partner
              </div>
              <h2 className="text-3xl font-bold text-brand-ink mb-4 font-display">Werlabs</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Werlabs is Scandinavia's leading digital health company, providing comprehensive blood testing services with medical-grade accuracy, convenient home sampling options, and clear digital results. Their platform makes it simple to monitor your health markers, track changes over time, and share results with healthcare providers or coaches.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                For serious athletes and individuals optimizing body composition, regular blood work is essential. Werlabs offers specialized panels for hormone analysis, metabolic function, micronutrient status, inflammation markers, and cardiovascular health—all critical data points for informed decision-making about training, nutrition, and supplementation protocols.
              </p>

              <div className="bg-brand-paper rounded-lg p-6 mb-6">
                <h3 className="font-bold text-brand-ink mb-3 text-lg">Member Benefits:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-brand-primary mr-2 font-bold">•</span>
                    <span><strong>15% discount</strong> on all test panels with member code</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-primary mr-2 font-bold">•</span>
                    <span><strong>Free home sampling kits</strong> with pre-paid return shipping</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-primary mr-2 font-bold">•</span>
                    <span><strong>Priority processing</strong> with results typically within 48 hours</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-primary mr-2 font-bold">•</span>
                    <span><strong>Quarterly testing packages</strong> at reduced rates for ongoing monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-primary mr-2 font-bold">•</span>
                    <span><strong>Coach interpretation support</strong> - share results with your Vigour coach for actionable insights</span>
                  </li>
                </ul>
              </div>

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
        </div>
      </section>

      {/* Björn Borg Partnership */}
      <section className="section bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-brand-primary text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                Performance Apparel Partner
              </div>
              <h2 className="text-3xl font-bold text-brand-ink mb-4 font-display">Björn Borg</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Björn Borg combines Scandinavian design aesthetics with high-performance athletic functionality. Their training apparel is engineered for the demands of serious strength training—durable fabrics, strategic ventilation, freedom of movement, and moisture management that performs under heavy loading conditions.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                From technical training shorts and breathable tops to compression garments and lifestyle athletic wear, Björn Borg provides the quality and functionality serious athletes demand. Their products are designed and tested by athletes for athletes, ensuring practical features that enhance training performance and comfort.
              </p>

              <div className="bg-brand-paper rounded-lg p-6 mb-6">
                <h3 className="font-bold text-brand-ink mb-3 text-lg">Member Benefits:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-brand-primary mr-2 font-bold">•</span>
                    <span><strong>20% discount</strong> on all training apparel and accessories</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-primary mr-2 font-bold">•</span>
                    <span><strong>Exclusive early access</strong> to new collection releases</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-primary mr-2 font-bold">•</span>
                    <span><strong>Free exchanges</strong> on sizing for first-time purchases</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-primary mr-2 font-bold">•</span>
                    <span><strong>Seasonal promotions</strong> with additional member-only discounts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-primary mr-2 font-bold">•</span>
                    <span><strong>Complimentary shipping</strong> on orders over 500 SEK</span>
                  </li>
                </ul>
              </div>

              <a
                href="https://www.bjornborg.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block"
              >
                Visit Björn Borg →
              </a>
            </div>

            <div className="bg-brand-paper rounded-xl p-8">
              <h3 className="text-xl font-bold text-brand-ink mb-4">Recommended Training Gear</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-brand-primary pl-4">
                  <h4 className="font-bold text-brand-ink mb-1">Performance Training Shorts</h4>
                  <p className="text-sm text-gray-700">Engineered for heavy squatting and dynamic movements. Reinforced seams, stretch panels, and moisture-wicking fabric.</p>
                </div>
                <div className="border-l-4 border-brand-primary pl-4">
                  <h4 className="font-bold text-brand-ink mb-1">Technical Training Tops</h4>
                  <p className="text-sm text-gray-700">Breathable, anti-odor fabric with strategic ventilation zones. Designed for intense training sessions.</p>
                </div>
                <div className="border-l-4 border-brand-primary pl-4">
                  <h4 className="font-bold text-brand-ink mb-1">Compression Wear</h4>
                  <p className="text-sm text-gray-700">Graduated compression for improved circulation and recovery. Ideal for long training sessions and post-workout.</p>
                </div>
                <div className="border-l-4 border-brand-primary pl-4">
                  <h4 className="font-bold text-brand-ink mb-1">Training Accessories</h4>
                  <p className="text-sm text-gray-700">Gym bags, lifting straps, wrist wraps, and other training essentials designed for durability and function.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Partner */}
      <section className="section bg-brand-paper">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-brand-ink mb-8 text-center font-display">
            Why These Partnerships Matter
          </h2>

          <div className="space-y-6 mb-12">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-bold text-brand-ink mb-3">Quality Assurance</h3>
              <p className="text-gray-700 leading-relaxed">
                The supplement and health testing industries are rife with low-quality products, misleading marketing, and inadequate quality control. By partnering with premium suppliers like Funmed and Werlabs, we ensure our members have access to pharmaceutical-grade supplements and medical-grade testing that we trust and use ourselves.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-bold text-brand-ink mb-3">Cost Reduction</h3>
              <p className="text-gray-700 leading-relaxed">
                Optimizing your health, performance, and body composition requires investment in quality nutrition, targeted supplementation, and periodic laboratory testing. Our member discounts significantly reduce these costs, making premium health optimization more accessible while maintaining uncompromising quality standards.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-bold text-brand-ink mb-3">Integrated Support System</h3>
              <p className="text-gray-700 leading-relaxed">
                These partnerships create an integrated support ecosystem around your training. Your coach can recommend specific Funmed supplements based on your BioSignature results, suggest targeted Werlabs panels to investigate specific concerns, and help you interpret laboratory data to inform training and nutrition adjustments. This coordinated approach delivers superior results compared to fragmented, disconnected services.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-bold text-brand-ink mb-3">Evidence-Based Alignment</h3>
              <p className="text-gray-700 leading-relaxed">
                All our partners share our commitment to evidence-based practices, transparent business operations, and genuine value delivery. We've vetted their product quality, customer service standards, and ethical business practices to ensure they align with the Vigour Gym philosophy of integrity, quality, and client-first service.
              </p>
            </div>
          </div>

          <div className="bg-brand-primary text-white rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-3">Questions About Partner Benefits?</h3>
            <p className="text-brand-paper mb-6">
              Contact our team to learn more about accessing your member discounts, product recommendations for your specific goals, or guidance on selecting appropriate laboratory testing panels.
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
