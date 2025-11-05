import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from "next";
import { categoryMetadata } from '@/lib/categories';
import SocialLinks from '@/components/SocialLinks';

export const metadata: Metadata = {
  title: "CommUnity Solutions - Church & Faith-Based Communication Intelligence",
  description: "Premier space for progressive protestant church and faith-based non-profit communication intelligence. Consulting, strategy sessions, and expert guidance.",
};

const blogCategories = Object.entries(categoryMetadata).map(([slug, metadata]) => ({
  slug,
  icon: metadata.icon,
  title: metadata.title,
  description: metadata.description,
}));

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-accent-50 py-20 lg:py-32">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: '#2F3EA4' }}>
              I'm Passionate About Helping Progressive Churches Be Heard
            </h1>
            <p className="text-base md:text-lg mb-8 leading-relaxed" style={{ color: '#000000' }}>
              In a world filled with loud, dogmatic voices and growing skepticism about faith, too many people don't even know that compassionate, justice-seeking congregations like yours exist. I help you cut through the noise with messaging that's relatable, authentic, and true to your mission — so your community's story of hope, inclusion, and love can reach the people who need it most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services" className="btn-primary">
                Explore Services
              </Link>
              <Link href="/blog" className="btn-secondary">
                Read the Blog
              </Link>
              <a href="#founder" className="btn-secondary">
                Meet the Founder
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section id="founder" className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Link href="/about" className="block hover:opacity-90 transition-opacity">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-shrink-0">
                  <img 
                    src="/emily-headshot.jpg" 
                    alt="Emily Cox" 
                    className="w-48 h-48 rounded-full object-cover shadow-lg"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#2F3EA4' }}>
                    Meet Emily Cox, Founder
                  </h2>
                  <p className="text-base leading-relaxed mb-4" style={{ color: '#000000' }}>
                    Meet Emily Cox, the founder of Comm-Unity Solutions LLC. With over a decade of church service and a communication degree from the University of Tulsa, Emily seamlessly integrates professional expertise with a passion for supporting churches. In the post-pandemic world, Emily saw a need to support ministry leaders in the ever-changing communication landscape.
                  </p>
                  <span className="text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                    Read more about Emily →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#2F3EA4' }}>What I Offer</h2>
            <p className="text-base md:text-lg max-w-3xl mx-auto" style={{ color: '#000000' }}>
              Tailored solutions to jumpstart and sustain your church's communication strategies and vision
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="card">
              <h3 className="text-xl font-bold mb-3" style={{ color: '#2F3EA4' }}>Ongoing Consistent Support</h3>
              <p className="mb-4 text-sm" style={{ color: '#000000' }}>
                You don't have to do it all alone. I offer consistent, behind-the-scenes support that keeps your communications clear, unified, and mission-aligned. Whether it's writing, design, strategy, or formatting — I help you stay connected with your congregation and your community.
              </p>
              <ul className="space-y-2 mb-6 text-sm" style={{ color: '#000000' }}>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">✓</span>
                  <span>Collaborative Communication Planning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">✓</span>
                  <span>Monthly Check-Ins & Adjustments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">✓</span>
                  <span>Encouragement & Guidance</span>
                </li>
              </ul>
              <Link href="/services#ongoing" className="text-primary-600 font-semibold hover:text-primary-700 transition-colors text-sm">
                Learn more →
              </Link>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold mb-3" style={{ color: '#2F3EA4' }}>Coaching & Strategic Help</h3>
              <p className="mb-4 text-sm" style={{ color: '#000000' }}>
                Together, we'll clarify your message, strengthen your strategy, and equip your team to tell your congregation's story in a way that connects with your community and reflects your faith.
              </p>
              <ul className="space-y-2 mb-6 text-sm" style={{ color: '#000000' }}>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">✓</span>
                  <span>Vision & Strategy Development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">✓</span>
                  <span>Skill-Building & Coaching</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">✓</span>
                  <span>Content & Brand Review</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">✓</span>
                  <span>Implementation Support</span>
                </li>
              </ul>
              <Link href="/services#coaching" className="text-primary-600 font-semibold hover:text-primary-700 transition-colors text-sm">
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
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#2F3EA4' }}>Explore the Blog</h2>
            <p className="text-base md:text-lg max-w-3xl mx-auto" style={{ color: '#000000' }}>
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
                  <h3 className="text-lg font-bold mb-2" style={{ color: '#2F3EA4' }}>
                    {category.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#000000' }}>
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
      <section className="py-20 bg-blue-500 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Be Heard?</h2>
            <p className="text-base md:text-lg mb-8">
              Let's work together to create a communication strategy that aligns with your mission and reaches your community effectively.
            </p>
            <Link href="/contact" className="btn-primary">
              Get Started Today
            </Link>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <SocialLinks />
        </div>
      </section>
    </div>
  );
}
