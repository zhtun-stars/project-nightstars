<template>
  <div class="flex flex-col max-h-[calc(100vh-100px)] overflow-auto gap-1 thin-scrollbar">
    <ClinicalListItem
      v-for="(cData, key) in data"
      :key="key"
      :clinicalData="cData"
    />
  </div>
</template>

<script>
import { CLINICAL_DATA } from "@/lib/mockdata";
import ClinicalListItem from "./ClinicalListItem.vue";
import { SORT_ORDER } from "~/lib/constants";
import { typeSort } from "~/lib/utils";

export default {
  name: "ClinicalListView",
  props: {
    // sorting: {
    //   type: Object as () => ISort,
    //   required: true,
    // },
  },
  data() {
    return {
      data: CLINICAL_DATA,
    };
  },
  components: {
    ClinicalListItem,
  },
  computed: {
    // sortedData(): IClinicalData[] {
    //   if (this.sorting.order === SORT_ORDER.UNKNOWN) return this.data;
    //   const sortKey = this.sorting.key as keyof IClinicalData;
    //   return this.data.sort((a, b) => {
    //     return typeSort(a[sortKey], b[sortKey]);
    //   });
    // },
  },
};
</script>
<style lang="scss" scoped>

</style>
