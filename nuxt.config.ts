// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxtjs/color-mode",
    "@pinia/nuxt",
    "nuxt-auth-utils",
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
    oauth: {
      microsoft: {
        clientId: "b32ba294-1f77-4495-a4ae-cd77c4f956d7",
        clientSecret: "7e1022b67fd044f39d831374c8a0464e",
        tenant: "2c328435-0e3a-4286-967d-5977dab65b8a",
      },
    },
  },
});
