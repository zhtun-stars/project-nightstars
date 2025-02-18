<template>
  <div class="flex flex-col">
    <ClinicalTabs :default="defaultTab" :tabs="tabs" />
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
import ClinicalTabs from "../tabs/ClinicalTabs.vue";

const sorts: IFilterSorterColumn[] = [
  { key: "mission", label: "Mission" },
  { key: "date", label: "Date" },
  { key: "physician", label: "Physician" },
];

interface ITab {
  label: string;
  value: string;
}

export default {
  name: "ClinicalSideList",
  data(): { sorts: IFilterSorterColumn[]; sortValue: ISort, defaultTab: string } {
    return {
      sorts,
      sortValue: {
        key: "",
        order: SORT_ORDER.UNKNOWN,
      } as ISort,
      defaultTab:'All'
    };
  },
  computed: {
    tabs(): ITab[] {
      return [
        { label: "All", value: "All" },
        { label: "calgary", value: "Calgary" },
      ];
    }
  },
  components: {
    FilterInput,
    ClinicalListView,
    ClinicalTabs,
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
