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

  // If no code, this is the initial OAuth request - return HTML that redirects to GitHub
  if (!code) {
    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${encodeURIComponent(clientId)}&redirect_uri=${encodeURIComponent(siteUrl + '/api/auth')}&scope=repo`;
    
    console.log('Returning auth page that will redirect to GitHub OAuth:', githubAuthUrl);
    
    // Return HTML page that redirects to GitHub (better for Decap CMS popup handling)
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'text/html',
      } as Record<string, string>,
      body: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>Authenticating...</title>
          <style>
            body {
              font-family: sans-serif;
              display: flex;
              justify-content: center;
              align-items: center;
              min-height: 100vh;
              margin: 0;
              background: #f5f5f5;
            }
            .message {
              text-align: center;
              padding: 2rem;
              background: white;
              border-radius: 8px;
              box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            }
          </style>
        </head>
        <body>
          <div class="message">
            <p>Redirecting to GitHub...</p>
          </div>
          <script>
            // Redirect to GitHub OAuth
            window.location.href = ${JSON.stringify(githubAuthUrl)};
          </script>
        </body>
        </html>
      `,
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

    // Redirect to callback page with the token
    const callbackUrl = `${siteUrl}/admin/auth-callback.html?token=${encodeURIComponent(tokenData.access_token)}`;
    
    return {
      statusCode: 302,
      headers: {
        Location: callbackUrl,
      } as Record<string, string>,
      body: '',
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

