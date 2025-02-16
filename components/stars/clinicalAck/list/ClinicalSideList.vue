<template>
  <div class="flex flex-col">
    <FilterInput :sorts="sorts" @onSort="onSort" @onFilter="onFilter" />
  </div>
  <div class="flex-auto">
    <ClinicalListView :sorting="sortValue" />
  </div>
</template>

<script lang="ts">
import FilterInput from "~/components/stars/commons/filterInput/FilterInput.vue";
import ClinicalListView from "./ClinicalListView.vue";
import type { IFilterSorterColumn, ISort } from "~/lib/interfaces";
import { SORT_ORDER } from "~/lib/constants";

const sorts: IFilterSorterColumn[] = [
  { key: "mission", label: "Mission" },
  { key: "date", label: "Date" },
  { key: "physician", label: "Physician" },
];

export default {
  name: "ClinicalSideList",
  data(): { sorts: IFilterSorterColumn[]; sortValue: ISort } {
    return {
      sorts,
      sortValue: {
        key: "",
        order: SORT_ORDER.UNKNOWN,
      } as ISort,
    };
  },
  components: {
    FilterInput,
    ClinicalListView,
  },
  methods: {
    onSort(sort: ISort) {
      this.sortValue = sort;
    },
    onFilter(filter: any) {
      //   console.log(filter);
    },
  },
};
</script>
