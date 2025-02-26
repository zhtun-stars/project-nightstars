<script setup lang="ts">
import ClinicalPage from "@/components/stars/clinicalAck/ClinicalPage.vue";
definePageMeta({
  name: "Clinical",
  props: {
    router: {
      type: Object,
    },
  },
  middleware: ["authenticated"],
});
</script>

<template>
  <div>
    <ClinicalPage />
  </div>
</template>
