import {
  PublicClientApplication,
  type AccountInfo,
  type RedirectRequest,
} from "@azure/msal-browser";
import { reactive } from "vue";

export const msalConfig = {
  auth: {
    clientId:
      process.env.NUXT_OAUTH_MICROSOFT_CLIENT_ID ||
      useRuntimeConfig().public.NUXT_OAUTH_MICROSOFT_CLIENT_ID,
    authority:
      process.env.NUXT_PUBLIC_MSAL_AUTHORITY ||
      useRuntimeConfig().public.NUXT_PUBLIC_MSAL_AUTHORITY,
    redirectUri:
      process.env.NUXT_PUBLIC_MSAL_REDIRECT_URI ||
      useRuntimeConfig().public.NUXT_PUBLIC_MSAL_REDIRECT_URI, // Replace with your actual redirect URI
    postLogoutUri:
      process.env.NUXT_PUBLIC_MSAL_REDIRECT_URI ||
      useRuntimeConfig().public.NUXT_PUBLIC_MSAL_REDIRECT_URI,
    scopeToken:
      process.env.NUXT_OAUTH_MSAL_SCOPE_TOKEN ||
      useRuntimeConfig().public.NUXT_OAUTH_MSAL_SCOPE_TOKEN,
  },
  cache: {
    cacheLocation: "sessionStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false,
  },
};

export const graphScopes: RedirectRequest = {
  scopes: ["user.read", "openid", "profile"],
};

export const state = reactive<{
  isAuthenticated: boolean;
  user: AccountInfo | null;
  authToken: string | null | undefined;
}>({
  isAuthenticated: false,
  user: null,
  authToken: "",
});

export const msalInstance = new PublicClientApplication(msalConfig);
