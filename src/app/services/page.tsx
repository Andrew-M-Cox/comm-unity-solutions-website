import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CommUnity Solutions - Services",
  description: "Retainer-based consulting and intensive 1:1 strategy sessions for church communication intelligence",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-accent-50 py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Tailored solutions to jumpstart and sustain your church's communication strategies and vision
            </p>
          </div>
        </div>
      </section>

      {/* Retainer-Based Consulting */}
      <section id="retainer" className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-5xl">🤝</span>
              <h2 className="text-4xl font-bold text-gray-900">Retainer-Based Consulting</h2>
            </div>
            
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-gray-600 leading-relaxed">
                For churches and faith-based organizations seeking ongoing partnership and comprehensive 
                communication strategy development, our retainer-based consulting offers consistent guidance, 
                strategic planning, and support tailored to your unique needs.
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">What's Included</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">✓</span>
                  <div>
                    <strong className="text-gray-900">Strategic Communication Planning</strong>
                    <p className="text-gray-600">Develop comprehensive communication strategies aligned with your mission, vision, and values. We'll work with you to create a unified approach that guides all your communication efforts.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">✓</span>
                  <div>
                    <strong className="text-gray-900">Regular Strategy Reviews and Adjustments</strong>
                    <p className="text-gray-600">Monthly or quarterly check-ins to review progress, assess effectiveness, and adjust strategies based on evolving needs and opportunities.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">✓</span>
                  <div>
                    <strong className="text-gray-900">Ongoing Support and Guidance</strong>
                    <p className="text-gray-600">Access to expert guidance when you need it. Whether you're facing a communication challenge or seizing an opportunity, we're here to help.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">✓</span>
                  <div>
                    <strong className="text-gray-900">Content Review and Feedback</strong>
                    <p className="text-gray-600">Review and provide feedback on key communications to ensure consistency, effectiveness, and alignment with your strategy.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">✓</span>
                  <div>
                    <strong className="text-gray-900">Team Training and Capacity Building</strong>
                    <p className="text-gray-600">Work with your team to build communication skills and capacity, ensuring your organization can sustain effective communication long-term.</p>
                  </div>
                </li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Who It's For</h3>
              <p className="text-gray-700">
                This service is ideal for churches and faith-based organizations that want consistent, 
                ongoing support in developing and maintaining effective communication strategies. Whether 
                you're looking to build internal capacity or need expert guidance for complex communication 
                challenges, retainer-based consulting provides the sustained partnership you need.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intensive 1:1 Strategy Sessions */}
      <section id="intensive" className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-5xl">🚀</span>
              <h2 className="text-4xl font-bold text-gray-900">Intensive 1:1 Strategy Sessions</h2>
            </div>
            
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-gray-600 leading-relaxed">
                Sometimes you need focused, intensive support to jumpstart your communication strategies 
                and vision. Our intensive 1:1 strategy sessions are designed for organizations ready to 
                make significant progress in a short timeframe.
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">What's Included</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">✓</span>
                  <div>
                    <strong className="text-gray-900">Deep-Dive Strategy Development</strong>
                    <p className="text-gray-600">Intensive sessions focused on developing comprehensive communication strategies. We'll dive deep into your organization's needs, challenges, and opportunities.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">✓</span>
                  <div>
                    <strong className="text-gray-900">Customized Action Plans</strong>
                    <p className="text-gray-600">Receive detailed, actionable plans tailored to your specific situation. Each plan includes clear steps, timelines, and success metrics.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">✓</span>
                  <div>
                    <strong className="text-gray-900">Immediate Implementation Guidance</strong>
                    <p className="text-gray-600">Get hands-on support as you begin implementing your strategy. We'll help you navigate the first steps and address early challenges.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">✓</span>
                  <div>
                    <strong className="text-gray-900">Communication Vision Development</strong>
                    <p className="text-gray-600">Work together to articulate a clear communication vision that aligns with your mission and guides all your communication efforts.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">✓</span>
                  <div>
                    <strong className="text-gray-900">Resource Toolkit</strong>
                    <p className="text-gray-600">Access to templates, frameworks, and resources you can use immediately and adapt for your organization's needs.</p>
                  </div>
                </li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Who It's For</h3>
              <p className="text-gray-700">
                Intensive sessions are perfect for churches and organizations that need a jumpstart on 
                their communication strategy. Whether you're launching a new initiative, facing a major 
                communication challenge, or ready to take your communication to the next level, these 
                focused sessions provide the momentum and direction you need.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Which Service Is Right for You?</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card">
                <h3 className="text-2xl font-semibold mb-4">Retainer-Based Consulting</h3>
                <p className="text-gray-600 mb-6">
                  Choose this if you want ongoing partnership and support for developing and maintaining 
                  your communication strategy over time.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Ongoing strategic guidance</li>
                  <li>✓ Regular check-ins and reviews</li>
                  <li>✓ Sustained capacity building</li>
                  <li>✓ Long-term partnership</li>
                </ul>
              </div>
              
              <div className="card">
                <h3 className="text-2xl font-semibold mb-4">Intensive Strategy Sessions</h3>
                <p className="text-gray-600 mb-6">
                  Choose this if you need focused, intensive support to jumpstart your communication 
                  strategy and vision.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Deep-dive strategy development</li>
                  <li>✓ Customized action plans</li>
                  <li>✓ Immediate implementation guidance</li>
                  <li>✓ Intensive, focused support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-20 bg-primary-700 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-primary-100 mb-8">
              Let's work together to create a communication strategy that aligns with your mission 
              and reaches your community effectively. Contact us to discuss which service is right 
              for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:hello@comm-unitysolutions.com" 
                className="btn-primary bg-white text-primary-700 hover:bg-gray-100"
              >
                Email Us
              </a>
              <Link href="/blog" className="btn-secondary border-white text-white hover:bg-white hover:text-primary-700">
                Explore Our Blog
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
