<template>
  <div class="flex flex-col">
    <FilterInput
      :sorts="sorts"
      @onSort="onSort"
      @onFilter="onFilter"
      @onFilterTextChange="onFilterChange"
      :defaultSort="sortValue"
      :maxLength="10"
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
import { typeSort } from "~/lib/utils";

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
  } {
    return {
      sorts,
      sortValue: {
        key: sorts[0].key,
        order: SORT_ORDER.ASC,
      } as ISort,
      data: CLINICAL_DATA,
      filterText: "",
    };
  },
  computed: {
    sortedData(): IClinicalData[] {
      const result = this.data
        .filter((item) => {
          if (this.filterText === "") return true;
          return item.mission
            .toLowerCase()
            .includes(this.filterText.toLowerCase());
        })
        .sort((a, b) => {
          if (
            this.sortValue.key === "" ||
            this.sortValue.order === SORT_ORDER.UNKNOWN
          )
            return 0;
          else
            return typeSort(
              a[this.sortValue.key as keyof IClinicalData],
              b[this.sortValue.key as keyof IClinicalData]
            );
        });
      if (this.sortValue.order === SORT_ORDER.DESC) {
        return result.reverse();
      }
      return result;
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
    onFilter(filter: any) {},
    onFilterChange(filterText: string) {
      this.filterText = filterText;
    },
  },
};
</script>
