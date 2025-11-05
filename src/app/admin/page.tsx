'use client';

import Script from 'next/script';
import { useEffect } from 'react';

export default function AdminPage() {
  useEffect(() => {
    // Listen for OAuth messages from popup
    const handleMessage = (event: MessageEvent) => {
      console.log('Admin page received message:', event);
      console.log('Message data:', event.data);
      console.log('Message origin:', event.origin);
      
      // Log if it's an authorization message
      if (typeof event.data === 'string' && event.data.includes('authorization:github:success')) {
        console.log('✅ OAuth authorization message detected!');
      }
    };
    
    window.addEventListener('message', handleMessage);
    console.log('Admin page: Message listener added');
    
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);
  
  return (
    <>
      <Script 
        src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"
        strategy="afterInteractive"
        onLoad={() => {
          console.log('Decap CMS script loaded');
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
