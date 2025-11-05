import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CommUnity Solutions - Services",
  description: "Ongoing support and strategic coaching for church communication excellence",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-accent-50 py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: '#2F3EA4' }}>
              Services
            </h1>
            <p className="text-base md:text-lg mb-8 leading-relaxed" style={{ color: '#000000' }}>
              Tailored solutions to jumpstart and sustain your church's communication strategies and vision
            </p>
          </div>
        </div>
      </section>

      {/* Ongoing Consistent Support */}
      <section id="ongoing" className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold" style={{ color: '#2F3EA4' }}>Ongoing Consistent Support</h2>
            </div>
            
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-base md:text-lg leading-relaxed mb-6" style={{ color: '#000000' }}>
                You don't have to do it all alone. I offer consistent, behind-the-scenes support that keeps your communications clear, unified, and mission-aligned. Whether it's writing, design, strategy, or formatting — I help you stay connected with your congregation and your community.
              </p>
              
              <h3 className="text-xl md:text-2xl font-bold mt-8 mb-4" style={{ color: '#2F3EA4' }}>What's Included</h3>
              <ul className="space-y-4 text-sm" style={{ color: '#000000' }}>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 text-xl">✓</span>
                  <div>
                    <strong className="font-bold" style={{ color: '#2F3EA4' }}>Collaborative Communication Planning</strong>
                    <p className="mt-1" style={{ color: '#000000' }}>I'll create a rhythm and structure for your ongoing communications that reflects your mission and values — and keeps you from reinventing the wheel every week.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 text-xl">✓</span>
                  <div>
                    <strong className="font-bold" style={{ color: '#2F3EA4' }}>Monthly Check-Ins & Adjustments</strong>
                    <p className="mt-1" style={{ color: '#000000' }}>Stay on track with regular reviews that help you adjust messaging, timing, and visuals as your ministry evolves.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 text-xl">✓</span>
                  <div>
                    <strong className="font-bold" style={{ color: '#2F3EA4' }}>Encouragement & Guidance</strong>
                    <p className="mt-1" style={{ color: '#000000' }}>Think of it as having a communications partner who understands ministry life — someone to help you stay creative, professional, consistent, and calm.</p>
                  </div>
                </li>
              </ul>

              <h3 className="text-xl md:text-2xl font-bold mt-8 mb-4" style={{ color: '#2F3EA4' }}>Who It's For</h3>
              <p className="text-sm md:text-base" style={{ color: '#000000' }}>
                Perfect for part-time or full-time communications staff, solo pastors, or small congregations who want their message to reach farther — with less stress and more professionalism.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coaching & Strategic Help */}
      <section id="coaching" className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold" style={{ color: '#2F3EA4' }}>Coaching & Strategic Help</h2>
            </div>
            
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-base md:text-lg leading-relaxed mb-6" style={{ color: '#000000' }}>
                Together, we'll clarify your message, strengthen your strategy, and equip your team to tell your congregation's story in a way that connects with your community and reflects your faith.
              </p>
              
              <h3 className="text-xl md:text-2xl font-bold mt-8 mb-4" style={{ color: '#2F3EA4' }}>What's Included</h3>
              <ul className="space-y-4 text-sm" style={{ color: '#000000' }}>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 text-xl">✓</span>
                  <div>
                    <strong className="font-bold" style={{ color: '#2F3EA4' }}>Vision & Strategy Development</strong>
                    <p className="mt-1" style={{ color: '#000000' }}>We'll explore what makes your ministry unique — then craft a plan that helps your communication flow from that identity.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 text-xl">✓</span>
                  <div>
                    <strong className="font-bold" style={{ color: '#2F3EA4' }}>Skill-Building & Coaching</strong>
                    <p className="mt-1" style={{ color: '#000000' }}>Personalized coaching for staff or volunteers who handle communications, helping them grow in confidence and clarity.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 text-xl">✓</span>
                  <div>
                    <strong className="font-bold" style={{ color: '#2F3EA4' }}>Content & Brand Review</strong>
                    <p className="mt-1" style={{ color: '#000000' }}>We'll assess your current communication tools and ensure everything aligns with your values, audience, and goals.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 text-xl">✓</span>
                  <div>
                    <strong className="font-bold" style={{ color: '#2F3EA4' }}>Implementation Support</strong>
                    <p className="mt-1" style={{ color: '#000000' }}>Guidance for putting your new strategy into action — from first steps to sustainable systems.</p>
                  </div>
                </li>
              </ul>

              <h3 className="text-xl md:text-2xl font-bold mt-8 mb-4" style={{ color: '#2F3EA4' }}>Who It's For</h3>
              <p className="text-sm md:text-base" style={{ color: '#000000' }}>
                Ideal for churches with part-time or full-time communication staff, or organizations ready to refine and strengthen their public voice. Coaching & Strategic Help gives you the clarity, tools, and confidence to share your mission more effectively and faithfully.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center" style={{ color: '#2F3EA4' }}>Which Service Is Right for You?</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card">
                <h3 className="text-xl font-bold mb-4" style={{ color: '#2F3EA4' }}>Ongoing Consistent Support</h3>
                <p className="mb-6 text-sm" style={{ color: '#000000' }}>
                  Choose this if you want ongoing partnership and support for developing and maintaining 
                  your communication strategy over time.
                </p>
                <ul className="space-y-2 mb-6 text-sm" style={{ color: '#000000' }}>
                  <li>✓ Collaborative communication planning</li>
                  <li>✓ Regular check-ins and reviews</li>
                  <li>✓ Sustained support and guidance</li>
                  <li>✓ Long-term partnership</li>
                </ul>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-bold mb-4" style={{ color: '#2F3EA4' }}>Coaching & Strategic Help</h3>
                <p className="mb-6 text-sm" style={{ color: '#000000' }}>
                  Choose this if you need focused support to clarify your message and strengthen 
                  your team's communication skills.
                </p>
                <ul className="space-y-2 mb-6 text-sm" style={{ color: '#000000' }}>
                  <li>✓ Vision and strategy development</li>
                  <li>✓ Skill-building coaching sessions</li>
                  <li>✓ Content and brand reviews</li>
                  <li>✓ Implementation guidance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-20 bg-blue-500 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-base md:text-lg mb-8">
              Let's work together to create a communication strategy that aligns with your mission 
              and reaches your community effectively. Contact me to discuss which service is right 
              for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="btn-primary"
              >
                Contact Me
              </Link>
              <Link href="/blog" className="btn-secondary border-white text-white hover:bg-white hover:text-blue-500">
                Explore the Blog
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
