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

    // If code exists, exchange it for token via proxy
    const proxyUrl = `${siteUrl}/.netlify/functions/github-oauth-proxy?code=${encodeURIComponent(code)}`;
    
    return {
      statusCode: 302,
      headers: {
        Location: proxyUrl,
      } as Record<string, string>,
      body: '',
    };
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

