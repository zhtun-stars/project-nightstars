<template>
  <div class="flex flex-col">
    <FilterInput
      :sorts="sorts"
      @onSort="onSort"
      @onFilter="onFilter"
      @onFilterTextChange="onFilterChange"
      :maxLength="10"
    />
  </div>
  <div class="flex-auto">
    <ClinicalListView :data="sortedData" />
  </div>
</template>

<script lang="ts">
import FilterInput from "~/components/stars/commons/filterInput/FilterInput.vue";
import ClinicalListView from "./ClinicalListView.vue";
import type {
  IClinicalData,
  IFilterSorterColumn,
  ISort,
} from "~/lib/interfaces";
import { SORT_ORDER } from "~/lib/constants";
import { CLINICAL_DATA } from "~/lib/mockdata";

const sorts: IFilterSorterColumn[] = [
  { key: "mission", label: "Mission" },
  { key: "date", label: "Date" },
  { key: "physician", label: "Physician" },
];

export default {
  name: "ClinicalSideList",
  data(): {
    sorts: IFilterSorterColumn[];
    sortValue: ISort;
    data: IClinicalData[];
    filterText: String;
  } {
    return {
      sorts,
      sortValue: {
        key: "",
        order: SORT_ORDER.UNKNOWN,
      } as ISort,
      data: CLINICAL_DATA,
      filterText: "",
    };
  },
  computed: {
    sortedData(): IClinicalData[] {
      return this.data.filter((item) => {
        if (this.filterText === "") return true;
        return item.mission
          .toLowerCase()
          .includes(this.filterText.toLowerCase());
      });

      // sortedData(): IClinicalData[] {
      //   if (this.sorting.order === SORT_ORDER.UNKNOWN) return this.data;
      //   const sortKey = this.sorting.key as keyof IClinicalData;
      //   return this.data.sort((a, b) => {
      //     return typeSort(a[sortKey], b[sortKey]);
      //   });
      // },
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
    onFilter(filter: any) {
      //   console.log(filter);
    },
    onFilterChange(filterText: String) {
      this.filterText = filterText;
    },
  },
};
</script>
