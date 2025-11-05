'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

export default function AdminPage() {
  const [cmsLoaded, setCmsLoaded] = useState(false);
  
  useEffect(() => {
    console.log('Admin page mounted');
    
    // Listen for OAuth callback messages from the popup
    const handleMessage = (event: MessageEvent) => {
      // Verify the message is from our domain
      if (event.origin !== window.location.origin) {
        console.log('Message from different origin, ignoring:', event.origin);
        return;
      }
      
      console.log('Admin page received message:', event.data);
      
      // Check if it's an authorization message (Decap CMS format)
      if (event.data && typeof event.data === 'object' && event.data.type === 'authorization') {
        console.log('OAuth success message received! Decap CMS should now authenticate automatically.');
        console.log('Message data:', event.data.data);
        
        // Decap CMS will handle this message automatically
        // The message format is: { type: 'authorization', provider: 'github', data: { token, ... } }
      }
    };
    
    window.addEventListener('message', handleMessage);
    
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
