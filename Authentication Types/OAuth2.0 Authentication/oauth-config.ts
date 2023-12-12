// oauth-config.ts
import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  issuer: 'https://accounts.google.com',
  redirectUri: window.location.origin + '/login',
  clientId: 'your-client-id', // Replace with your Google OAuth client ID
  responseType: 'token id_token',
  scope: 'openid profile email',
  showDebugInformation: true,
};


// Replace 'your-client-id' with the actual OAuth client ID you obtain from your identity provider (e.g., Google Developer Console).