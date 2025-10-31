import type { Handler } from '@netlify/functions';

export const handler: Handler = async (event, context) => {
  // Handle CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      } as Record<string, string>,
      body: '',
    };
  }

  // Handle GET requests
  if (event.httpMethod === 'GET') {
    const { code } = event.queryStringParameters || {};
    const clientId = process.env.GITHUB_CLIENT_ID;
    const clientSecret = process.env.GITHUB_CLIENT_SECRET;
    
    if (!clientId || !clientSecret) {
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
    if (!code) {
      const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${encodeURIComponent(clientId)}&redirect_uri=${encodeURIComponent(siteUrl + '/api/auth')}&scope=repo`;
      
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

      // Return the access token to Decap CMS
      return {
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        } as Record<string, string>,
        body: JSON.stringify({
          token: tokenData.access_token,
        }),
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
  }

  return {
    statusCode: 405,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    } as Record<string, string>,
    body: JSON.stringify({ error: 'Method not allowed' }),
  };
};

