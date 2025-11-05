import type { Metadata } from "next";
import SocialLinks from '@/components/SocialLinks';

export const metadata: Metadata = {
  title: "About - CommUnity Solutions",
  description: "Learn more about Emily Cox and CommUnity Solutions",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary-50 via-white to-accent-50 py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
              <div className="flex-shrink-0">
                <img 
                  src="/emily-headshot.jpg" 
                  alt="Emily Cox" 
                  className="w-64 h-64 rounded-lg object-cover shadow-xl"
                />
              </div>
              <div className="flex-1">
                <h1 
                  className="text-[36px] font-[var(--font-poppins)] mb-6 leading-tight"
                  style={{ 
                    fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                    color: '#2F3EA4',
                    fontWeight: 400
                  }}
                >
                  Emily Cox, Founder
                </h1>
                <div 
                  className="text-[15px] leading-relaxed space-y-4"
                  style={{ 
                    fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                    color: '#333333',
                    fontWeight: 400
                  }}
                >
                  <p>
                    Meet Emily Cox, the founder of Comm-Unity Solutions LLC. With over a decade of church service and a communication degree from the University of Tulsa, Emily seamlessly integrates professional expertise with a passion for supporting churches. In the post-pandemic world, Emily saw a need to support ministry leaders in the ever-changing communication landscape.
                  </p>
                  <p>
                    Her mission was clear: empower faith-based organizations to navigate the evolving landscape of communication effectively and help ministry leaders get back to the work they love. She established Comm-Unity Solutions to offer tailored communication solutions from someone who understands church language and organizational needs. With a commitment to elevating your mission and giving voice to your vision, Emily ensures that every church and non-profit she serves thrives in today's fast-paced world.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="mt-12">
              <SocialLinks />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
