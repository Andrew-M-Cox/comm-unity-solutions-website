'use client';

import Script from 'next/script';
import { useEffect } from 'react';

declare global {
  interface Window {
    netlifyIdentity?: {
      on: (event: string, callback: (user: any) => void) => void;
      open: () => void;
      close: () => void;
    };
  }
}

export default function AdminPage() {
  useEffect(() => {
    // Initialize Netlify Identity widget
    if (typeof window !== 'undefined' && window.netlifyIdentity) {
      window.netlifyIdentity.on('init', (user: any) => {
        if (!user) {
          window.netlifyIdentity?.on('login', () => {
            document.location.href = '/admin/';
          });
        }
      });
    }
  }, []);

  return (
    <>
      <Script 
        src="https://identity.netlify.com/v1/netlify-identity-widget.js"
        strategy="afterInteractive"
      />
      <Script 
        src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"
        strategy="afterInteractive"
      />
      <div id="nc-root"></div>
      <style jsx global>{`
        html,
        body {
          margin: 0;
          padding: 0;
          height: 100%;
        }
        #nc-root {
          min-height: 100vh;
        }
      `}</style>
    </>
  );
}
