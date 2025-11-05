'use client';

import Script from 'next/script';
import { useEffect } from 'react';

export default function AdminPage() {
  useEffect(() => {
    console.log('Decap CMS admin page loaded');
  }, []);
  
  return (
    <>
      <Script 
        src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"
        strategy="afterInteractive"
        onLoad={() => {
          console.log('Decap CMS script loaded successfully');
          
          // Log localStorage state after Decap CMS loads
          const storedUser = localStorage.getItem('netlify-cms-user');
          if (storedUser) {
            console.log('Decap CMS should auto-authenticate with stored token');
          }
        }}
      />
      <div id="nc-root"></div>
      <style jsx global>{`
        html,
        body {
          margin: 0;
          padding: 0;
          width: 100%;
        }
        #nc-root {
          min-height: 100vh;
        }
      `}</style>
    </>
  );
}
