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
        body,
        #__next {
          margin: 0;
          padding: 0;
          height: 100%;
          width: 100%;
          overflow: hidden;
        }
        #nc-root {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          overflow: auto;
        }
      `}</style>
    </>
  );
}
