<template>
  <div
    class="flex flex-col max-h-[calc(100vh-210px)] overflow-auto gap-4 thin-scrollbar"
  >
    <ClinicalListItem
      v-for="(cData, key) in textFilter(store.missions, store.filterText)"
      :key="key"
      :clinicalData="cData"
    />
  </div>
</template>

<script setup>
import { textFilter } from "~/lib/common-functions";
import ClinicalListItem from "./ClinicalListItem.vue";
const store = useMissionStore();
</script>
<style lang="scss" scoped></style>
