// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxtjs/color-mode",
    "@pinia/nuxt"
  ],
  shadcn: {
    prefix: "",
    componentDir: "./components/ui",
  },
  pinia: {
    storesDirs: ["./stores/**"],
  },
  app: {},
  runtimeConfig: {
    public: {
      NUXT_PUBLIC_MSAL_REDIRECT_URI: process.env.NUXT_PUBLIC_MSAL_REDIRECT_URI,
      NUXT_OAUTH_MICROSOFT_CLIENT_ID:
        process.env.NUXT_OAUTH_MICROSOFT_CLIENT_ID,
      NUXT_PUBLIC_MSAL_AUTHORITY: process.env.NUXT_PUBLIC_MSAL_AUTHORITY,
      NUXT_OAUTH_MSAL_SCOPE: process.env.NUXT_OAUTH_MSAL_SCOPE,
      NUXT_OAUTH_MSAL_SCOPE_TOKEN: process.env.NUXT_OAUTH_MSAL_SCOPE_TOKEN,
    },
  },
});
