<script setup>
import { msalService } from "~/lib/useAuth";
import { msalInstance } from "~/lib/msalConfig";
import { onMounted } from "vue";

const {
  logout,
  handleRedirect,
  registerAuthorizationHeaderInterceptor,
} = msalService();

const initialize = async () => {
  try {
    await msalInstance.initialize();
    registerAuthorizationHeaderInterceptor(); // Call the initialize function
  } catch (error) {
    console.error("Initialization error", error);
  }
};
onMounted(async () => {
  await initialize();
  await handleRedirect();
  logout();
});

definePageMeta({
  name: "Logout",
  layout: "login",
  props: {
    router: {
      type: Object,
    },
  },
});
</script>

<template>logging out ...</template>
