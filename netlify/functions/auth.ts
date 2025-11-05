import type { Handler } from '@netlify/functions';

export const handler: Handler = async (event, context) => {
  // Handle CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      } as Record<string, string>,
      body: '',
    };
  }

  // Handle GET and POST requests (Decap CMS might use either)
  const isGet = event.httpMethod === 'GET';
  const isPost = event.httpMethod === 'POST';
  
  if (!isGet && !isPost) {
    return {
      statusCode: 405,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      } as Record<string, string>,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  // Get code from query string (GET) or body (POST)
  const code = isGet 
    ? (event.queryStringParameters || {}).code
    : (event.body ? JSON.parse(event.body).code : null) || (event.queryStringParameters || {}).code;
    
  const clientId = process.env.GITHUB_CLIENT_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET;
  
  // Log for debugging (remove in production if needed)
  console.log('Auth endpoint called:', {
    method: event.httpMethod,
    hasCode: !!code,
    path: event.path,
    query: event.queryStringParameters,
  });
  
  if (!clientId || !clientSecret) {
    console.error('Missing GitHub OAuth credentials');
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      } as Record<string, string>,
      body: JSON.stringify({ error: 'Server configuration error' }),
    };
  }

  // Get the site URL
  const siteUrl = process.env.URL || 
    (event.headers['x-forwarded-proto'] || 'https') + '://' + event.headers.host;

  // If no code, this is the initial OAuth request - redirect to GitHub
  // Use 302 redirect which should work for window.open/popup
  if (!code) {
    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${encodeURIComponent(clientId)}&redirect_uri=${encodeURIComponent(siteUrl + '/api/auth')}&scope=repo`;
    
    console.log('Redirecting to GitHub OAuth:', githubAuthUrl);
    
    // Return 302 redirect - Decap CMS should open this in a popup/window
    return {
      statusCode: 302,
      headers: {
        Location: githubAuthUrl,
      } as Record<string, string>,
      body: '',
    };
  }

  // If code exists, exchange it for token directly
  try {
    const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code: code,
      }),
    });

    if (!tokenResponse.ok) {
      const errorText = await tokenResponse.text();
      console.error('GitHub OAuth error:', errorText);
      return {
        statusCode: 400,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        } as Record<string, string>,
        body: JSON.stringify({ error: 'Failed to exchange code for token' }),
      };
    }

    const tokenData = await tokenResponse.json();

    if (tokenData.error) {
      return {
        statusCode: 400,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        } as Record<string, string>,
        body: JSON.stringify({ 
          error: tokenData.error_description || tokenData.error 
        }),
      };
    }

    // Return an HTML page that sends the token to the popup window via postMessage
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Authenticating...</title>
        </head>
        <body>
          <script>
            (function() {
              const data = {
                token: "${tokenData.access_token}",
                provider: "github"
              };
              
              // Send message to opener window
              if (window.opener) {
                window.opener.postMessage(
                  "authorization:github:success:" + JSON.stringify(data),
                  "*"
                );
                
                // Also listen for any messages from opener
                window.addEventListener("message", function(e) {
                  console.log("Popup received message:", e);
                }, false);
              }
              
              // Auto-close after a short delay
              setTimeout(function() {
                window.close();
              }, 1000);
            })();
          </script>
          <p>Authenticating... This window will close automatically.</p>
        </body>
      </html>
    `;
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'text/html',
      } as Record<string, string>,
      body: html,
    };
  } catch (error) {
    console.error('OAuth error:', error);
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      } as Record<string, string>,
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
};

