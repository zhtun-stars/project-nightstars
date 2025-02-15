<template>
  <div class="flex-1 flex flex-col p-3">
    <div class="flex flex-col max-h-[calc(100vh-100px)] overflow-auto">
      <div class="flex-1">{{ clinicalData.mission }}</div>
      <div class="flex-1">{{ clinicalData.physician }}</div>
      <!-- <div class="flex-1">{{ clinicalData.crews }}</div> -->
    </div>
  </div>
</template>
<script lang="ts">
import type { IClinicalData } from "~/lib/interfaces";

export default {
  name: "ClinicalListItem",
  props: {
    clinicalData: {
      type: Object as () => IClinicalData,
      required: true,
    },
  },
};
</script>
