'use client';

import Script from 'next/script';

export default function AdminPage() {
  return (
    <>
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
