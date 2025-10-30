import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CommUnity Solutions - Church & Faith-Based Communication Intelligence",
  description: "Premier space for progressive protestant church and faith-based non-profit communication intelligence. Consulting, strategy sessions, and expert guidance.",
};

const blogCategories = [
  {
    slug: 'org-visioning',
    title: 'Org Visioning',
    description: 'Forming organization-wide communication strategies and vision alignment',
    icon: '/icons/org-visioning.jpeg',
  },
  {
    slug: 'fundraising-stewardship',
    title: 'Fundraising & Stewardship',
    description: 'Effective communication strategies for fundraising and stewardship campaigns',
    icon: '💰',
  },
  {
    slug: 'software-tips-tactics',
    title: 'Software Tips & Tactics',
    description: 'Practical guides for church management software and communication tools',
    icon: '/icons/software-tips-tactics.jpeg',
  },
  {
    slug: 'social-media',
    title: 'Social Media',
    description: 'Church and faith-based organization social media strategies and best practices',
    icon: '/icons/social-media.jpeg',
  },
  {
    slug: 'communication-strategies',
    title: 'Communication Strategies',
    description: 'How to prioritize and manage multiple projects and groups within your congregation',
    icon: '/icons/communication-strategies.jpeg',
  },
  {
    slug: 'language-tactics',
    title: 'Language Tactics',
    description: 'Effective language and messaging for faith-based communication',
    icon: '/icons/language-tactics.jpeg',
  },
  {
    slug: 'working-with-ai',
    title: 'Working with AI',
    description: 'Leveraging AI tools for church communication and content creation',
    icon: '/icons/working-with-ai.jpeg',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-accent-50 py-20 lg:py-32">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Communication Intelligence for
              <span className="text-primary-700"> Progressive Churches</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              The premier space for progressive protestant church and faith-based non-profit communication intelligence.
              Transform your organization's communication strategy with expert guidance and proven methodologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services" className="btn-primary">
                Explore Our Services
              </Link>
              <Link href="/blog" className="btn-secondary">
                Read Our Blog
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored solutions to jumpstart and sustain your church's communication strategies and vision
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="card">
              <div className="mb-4">
                <span className="text-4xl">🤝</span>
              </div>
              <h3 className="text-2xl font-semibold mb-3">Retainer-Based Consulting</h3>
              <p className="text-gray-600 mb-4">
                Ongoing partnership for comprehensive communication strategy development and implementation. 
                Get consistent guidance, strategic planning, and support tailored to your organization's unique needs.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Strategic communication planning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Regular strategy reviews and adjustments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Ongoing support and guidance</span>
                </li>
              </ul>
              <Link href="/services#retainer" className="text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                Learn more →
              </Link>
            </div>

            <div className="card">
              <div className="mb-4">
                <span className="text-4xl">🚀</span>
              </div>
              <h3 className="text-2xl font-semibold mb-3">Intensive 1:1 Strategy Sessions</h3>
              <p className="text-gray-600 mb-4">
                Focused, intensive sessions designed to jumpstart your church's communication strategies and vision. 
                Perfect for organizations ready to make significant progress in a short timeframe.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Deep-dive strategy development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Customized action plans</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Immediate implementation guidance</span>
                </li>
              </ul>
              <Link href="/services#intensive" className="text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Categories Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore Our Blog</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert insights on communication intelligence for progressive churches and faith-based organizations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogCategories.map((category) => (
              <Link
                key={category.slug}
                href={`/blog/${category.slug}`}
                className="blog-card group"
              >
                <div className="p-6">
                  <div className="mb-4">
                    {category.icon.startsWith('/') ? (
                      <Image 
                        src={category.icon} 
                        alt={category.title}
                        width={64}
                        height={64}
                        className="rounded-lg object-cover"
                        unoptimized
                      />
                    ) : (
                      <span className="text-4xl">{category.icon}</span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-primary-600 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/blog" className="btn-secondary">
              View All Blog Posts
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-700 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Communication?</h2>
            <p className="text-xl text-primary-100 mb-8">
              Let's work together to create a communication strategy that aligns with your mission and reaches your community effectively.
            </p>
            <Link href="/services#contact" className="btn-primary bg-white text-primary-700 hover:bg-gray-100">
              Get Started Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
