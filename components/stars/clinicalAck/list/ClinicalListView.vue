<template>
  <div class="flex flex-col max-h-[calc(100vh-100px)] overflow-auto">
    <ClinicalListItem
      v-for="(cData, key) in data"
      :key="key"
      :clinicalData="cData"
    />
  </div>
</template>

<script lang="ts">
import type { IClinicalData } from "@/lib/interfaces";
import { CLINICAL_DATA } from "@/lib/mockdata";
import ClinicalListItem from "./ClinicalListItem.vue";

interface IData {
  data: IClinicalData[];
}

export default {
  name: "ClinicalListView",
  data(): IData {
    return {
      data: CLINICAL_DATA as IClinicalData[],
    };
  },
  components: {
    ClinicalListItem,
  },
};
</script>
