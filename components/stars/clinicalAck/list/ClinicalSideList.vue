<template>
  <div class="flex flex-col">
    <div class="mb-2">
      <slot></slot>
    </div>
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

<script lang="ts" setup>
import FilterInput from "@/components/stars/commons/filterInput/FilterInput.vue";
import ClinicalListView from "./ClinicalListView.vue";
import type {
  IClinicalData,
  IFilterSorterColumn,
  ISort,
} from "~/lib/interfaces";
import { SORT_ORDER, SORTING_FROM_FILTER } from "@/lib/constants";
import { CLINICAL_DATA } from "@/lib/mockdata";
import {
  clinicalFilters as filters,
  sortAndFilterClinicalFilter,
  typeSort,
} from "@/lib/common-functions";
import type { IFilter } from "~/lib/InfFilters";

const sorts = SORTING_FROM_FILTER;

const sortValue = ref({
  key: sorts[0].key,
  order: SORT_ORDER.ASC,
} as ISort);
const filterText = ref("");

const data = CLINICAL_DATA;

const sortedData = computed(() => {
  return sortAndFilterClinicalFilter(data, filterText.value, sortValue.value);
});

const onSort = (sort: ISort) => {
  sortValue.value = sort;
};

const onFilter = (filter: IFilter[]) => {
  console.log("have to fetch with api", filter);
};

const onFilterChange = (text: string) => {
  filterText.value = text;
};
</script>
