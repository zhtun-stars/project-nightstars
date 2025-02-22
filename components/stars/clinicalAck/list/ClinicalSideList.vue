<template>
  <div class="flex flex-col">
    <FilterInput
      :sorts="sorts"
      @onSort="onSort"
      @onFilter="onFilter"
      @onFilterTextChange="onFilterChange"
      :defaultSort="sortValue"
      :maxLength="10"
      :filters="filters"
    />
  </div>
  <div class="flex-auto">
    <ClinicalListView :data="sortedData" />
  </div>
</template>

<script lang="ts">
import FilterInput from "@/components/stars/commons/filterInput/FilterInput.vue";
import ClinicalListView from "./ClinicalListView.vue";
import type {
  IClinicalData,
  IFilterSorterColumn,
  ISort,
} from "~/lib/interfaces";
import { SORT_ORDER } from "@/lib/constants";
import { CLINICAL_DATA } from "@/lib/mockdata";
import {
  clinicalFilters,
  sortAndFilterClinicalFilter,
  typeSort,
} from "@/lib/common-functions";
import type { IFilter } from "~/lib/InfFilters";

const sorts: IFilterSorterColumn[] = [
  { key: "date", label: "Mission Date" },
  { key: "initialReviewedDate", label: "Initial Review Date" },
  { key: "finalReviewedDate", label: "Final Review Date" },
];

export default {
  name: "ClinicalSideList",
  data(): {
    sorts: IFilterSorterColumn[];
    sortValue: ISort;
    data: IClinicalData[];
    filterText: string;
    filters: IFilter[]; // for filter button
    filterValues: IFilter[]; // to filter the list
  } {
    return {
      sorts,
      sortValue: {
        key: sorts[0].key,
        order: SORT_ORDER.ASC,
      } as ISort,
      data: CLINICAL_DATA,
      filterText: "",
      filters: clinicalFilters,
      filterValues: [],
    };
  },
  computed: {
    sortedData(): IClinicalData[] {
      return sortAndFilterClinicalFilter(
        this.data,
        this.filterText,
        this.sortValue
      );
    },
  },
  components: {
    FilterInput,
    ClinicalListView,
  },
  methods: {
    onSort(sort: ISort) {
      this.sortValue = sort;
    },
    onFilter(filter: IFilter[]) {
      console.log("have to fetch with api", filter);
    },
    onFilterChange(filterText: string) {
      this.filterText = filterText;
    },
  },
};
</script>
