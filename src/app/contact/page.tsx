import type { Metadata } from "next";
import SocialLinks from '@/components/SocialLinks';

export const metadata: Metadata = {
  title: "Contact - CommUnity Solutions",
  description: "Get in touch with CommUnity Solutions for church communication support",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary-50 via-white to-accent-50 py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center" style={{ color: '#2F3EA4' }}>
              Get In Touch
            </h1>
            <p className="text-base md:text-lg mb-12 text-center leading-relaxed" style={{ color: '#000000' }}>
              Ready to start the conversation? Fill out the form below and I'll get back to you within 1-2 business days.
            </p>

            <form 
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              action="/contact/success"
              className="card space-y-6"
            >
              {/* Netlify form detection */}
              <input type="hidden" name="form-name" value="contact" />
              
              {/* Honeypot for spam protection */}
              <p className="hidden">
                <label>
                  Don't fill this out if you're human: <input name="bot-field" />
                </label>
              </p>

              {/* Name field */}
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-sm font-semibold mb-2"
                  style={{ color: '#2F3EA4' }}
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  placeholder="Your name"
                />
              </div>

              {/* Email field */}
              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm font-semibold mb-2"
                  style={{ color: '#2F3EA4' }}
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Church/Organization field */}
              <div>
                <label 
                  htmlFor="organization" 
                  className="block text-sm font-semibold mb-2"
                  style={{ color: '#2F3EA4' }}
                >
                  Church/Organization
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  placeholder="Your church or organization name"
                />
              </div>

              {/* Subject field */}
              <div>
                <label 
                  htmlFor="subject" 
                  className="block text-sm font-semibold mb-2"
                  style={{ color: '#2F3EA4' }}
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  placeholder="What can I help you with?"
                />
              </div>

              {/* Message field */}
              <div>
                <label 
                  htmlFor="message" 
                  className="block text-sm font-semibold mb-2"
                  style={{ color: '#2F3EA4' }}
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-y"
                  placeholder="Tell me about your church's communication needs..."
                />
              </div>

              {/* Submit button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="btn-primary w-full sm:w-auto px-8"
                >
                  Send Message
                </button>
              </div>

              <p className="text-sm text-center" style={{ color: '#666666' }}>
                * Required fields
              </p>
            </form>

            <div className="mt-12 text-center">
              <p className="text-base mb-4" style={{ color: '#000000' }}>
                Prefer to email directly?
              </p>
              <a 
                href="mailto:cmmntsolutions@gmail.com"
                className="text-primary-600 font-semibold hover:text-primary-700 transition-colors"
              >
                cmmntsolutions@gmail.com
              </a>
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

