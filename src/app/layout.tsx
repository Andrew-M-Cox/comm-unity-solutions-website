'use client';

import { Poppins } from "next/font/google";
import { usePathname } from "next/navigation";
import "./globals.css";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith('/admin');

  return (
    <html lang="en">
      <head>
        <title>CommUnity Solutions - Church & Faith-Based Communication Intelligence</title>
        <meta name="description" content="Premier space for progressive protestant church and faith-based non-profit communication intelligence. Consulting, strategy sessions, and expert guidance." />
        <meta name="keywords" content="church communication, faith-based nonprofits, church strategy, nonprofit communication, church marketing" />
      </head>
      <body className={poppins.variable}>
        {!isAdminRoute && <Navbar />}
        <main className={isAdminRoute ? '' : 'min-h-screen'}>
          {children}
        </main>
        {!isAdminRoute && <footer className="bg-gray-900 text-white py-12">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
              <div>
                <h3 className="text-lg font-bold mb-4" style={{ color: '#8ae9d8' }}>CommUnity Solutions</h3>
                <p className="text-gray-400">
                  Helping progressive churches be heard with authentic, relatable messaging.
                </p>
              </div>
              <div>
                <h4 className="text-base font-bold mb-4" style={{ color: '#8ae9d8' }}>Services</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="/services#ongoing" className="hover:text-white transition-colors">Ongoing Consistent Support</a></li>
                  <li><a href="/services#coaching" className="hover:text-white transition-colors">Coaching & Strategic Help</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-base font-bold mb-4" style={{ color: '#8ae9d8' }}>Connect</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
                  <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
                  <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
              <p>&copy; {new Date().getFullYear()} CommUnity Solutions. All rights reserved.</p>
            </div>
          </div>
        </footer>}
      </body>
    </html>
  );
}
