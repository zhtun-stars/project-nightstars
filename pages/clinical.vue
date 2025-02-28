<script setup lang="ts">
import ClinicalPage from "@/components/stars/clinicalAck/ClinicalPage.vue";
import ClinicalPageSmall from "~/components/stars/clinicalAck/ClinicalPageSmall.vue";
import { SMALL_SCREENSIZE } from "~/lib/constants";
definePageMeta({
  name: "Clinical",
  middleware: ["authenticated"],
});
const screenWidth = ref<number>(window.innerWidth);

onMounted(() => {
  window.addEventListener("resize", () => {
    screenWidth.value = window.innerWidth;
  });
});
</script>

<template>
  <div>
    <ClinicalPage v-if="screenWidth > SMALL_SCREENSIZE" />
    <ClinicalPageSmall v-else />
  </div>
</template>
