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

  // Handle the OAuth callback from GitHub
  if (event.httpMethod === 'GET') {
    const { code } = event.queryStringParameters || {};
    
    if (!code) {
      return {
        statusCode: 400,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      } as Record<string, string>,
        body: JSON.stringify({ error: 'Missing authorization code' }),
      };
    }

    // Get GitHub Client ID from environment
    const clientId = process.env.GITHUB_CLIENT_ID;
    
    if (!clientId) {
      return {
        statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      } as Record<string, string>,
        body: JSON.stringify({ error: 'Server configuration error' }),
      };
    }

    // Get the site URL (for redirect)
    const siteUrl = process.env.URL || event.headers['x-forwarded-proto'] + '://' + event.headers.host;
    
    // Redirect to the OAuth proxy
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

