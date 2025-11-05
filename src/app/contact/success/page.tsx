import type { Metadata } from "next";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Message Sent - CommUnity Solutions",
  description: "Thank you for contacting CommUnity Solutions",
};

export default function ContactSuccessPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary-50 via-white to-accent-50 py-20 min-h-[70vh] flex items-center">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <svg 
                className="w-20 h-20 mx-auto text-primary-500" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                />
              </svg>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: '#2F3EA4' }}>
              Message Received!
            </h1>
            
            <p className="text-base md:text-lg mb-8 leading-relaxed" style={{ color: '#000000' }}>
              Thank you for reaching out. I've received your message and will get back to you within 1-2 business days.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/" className="btn-primary">
                Back to Home
              </Link>
              <Link href="/blog" className="btn-secondary">
                Read the Blog
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

