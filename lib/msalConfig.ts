import {
  PublicClientApplication,
  type AccountInfo,
  type RedirectRequest,
} from "@azure/msal-browser";
import { reactive } from "vue";

export const msalConfig = {
  auth: {
    clientId: process.env.NUXT_OAUTH_MICROSOFT_CLIENT_ID!,
    authority: process.env.NUXT_PUBLIC_MSAL_AUTHORITY!,
    redirectUri: process.env.NUXT_PUBLIC_MSAL_REDIRECT_URI!, // Replace with your actual redirect URI
    postLogoutUri: process.env.NUXT_PUBLIC_MSAL_REDIRECT_URI!,
  },
  cache: {
    cacheLocation: "sessionStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false,
  },
};

console.log(msalConfig);
export const graphScopes: RedirectRequest = {
  scopes: ["user.read", "openid", "profile"],
};
export const state = reactive({
  isAuthenticated: false,
  user: null as AccountInfo | null,
});

export const msalInstance = new PublicClientApplication(msalConfig);
