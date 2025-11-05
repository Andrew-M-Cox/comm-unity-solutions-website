'use client';

import Script from 'next/script';
import { useEffect } from 'react';

export default function AdminPage() {
  useEffect(() => {
    console.log('Admin page mounted');
    
    // Check if we have a token in localStorage (from OAuth callback)
    const storedUser = localStorage.getItem('netlify-cms-user');
    if (storedUser) {
      console.log('Found stored user in localStorage:', storedUser);
    } else {
      console.log('No stored user found in localStorage');
    }
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
          height: 100%;
        }
        #nc-root {
          min-height: 100vh;
        }
      `}</style>
    </>
  );
}
