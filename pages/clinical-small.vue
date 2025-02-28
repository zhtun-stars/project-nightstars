<script setup lang="ts">
import ClinicalPageSmall from "@/components/stars/clinicalAck/ClinicalPageSmall.vue";
definePageMeta({
  name: "ClinicalSmall",
  middleware: ["authenticated"],
});
</script>

<template>
  <div>
    <ClinicalPageSmall />
  </div>
</template>
