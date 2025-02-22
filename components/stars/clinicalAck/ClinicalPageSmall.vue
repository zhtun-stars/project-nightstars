<template>
  <div class="flex flex-col">
    <div class="flex flex-row justify-between">
      <div class="w-[500px] pt-2 pl-4">
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
      <div class="w-[500px] mr-2">
        <ClinicalTabs
          :default="defaultTab"
          :tabs="tabs"
          @tabChange="tabChange"
        />
      </div>
    </div>
    <div
      class="flex-auto flex-grow-1 grid grid-cols-3 gap-4 px-4 pt-4 overflow-auto h-[calc(100vh-150px)] thin-scrollbar"
    >
      <div class="col-span-1" v-for="(cData, key) in sortedData" :key="key">
        <ClinicalListItem :clinicalData="cData" />
      </div>
    </div>
  </div>
</template>

<script>
import Separator from "@/components/ui/separator/Separator.vue";
import ClinicalListItem from "./list/ClinicalListItem.vue";
import ClinicalTabs from "./tabs/ClinicalTabs.vue";
import FilterInput from "../commons/filterInput/FilterInput.vue";
import { SORT_ORDER } from "@/lib/constants";
import { CLINICAL_DATA } from "@/lib/mockdata";
import { clinicalFilters, sortAndFilterClinicalFilter, typeSort } from "@/lib/common-functions";

const sorts = [
  { key: "date", label: "Mission Date" },
  { key: "initialReviewedDate", label: "Initial Review Date" },
  { key: "finalReviewedDate", label: "Final Review Date" },
];

export default {
  name: "ClinicalPageSmall",
  data() {
    return {
      defaultTab: "missions",
      clinicalAck: {
        title: "Clinical Acknowledgement",
        content: "This is the clinical acknowledgement content",
      },
      sorts,
      sortValue: {
        key: sorts[0].key,
        order: SORT_ORDER.ASC,
      },
      data: CLINICAL_DATA,
      filterText: "",
      filters: clinicalFilters,
    };
  },
  computed: {
    sortedData() {
      return sortAndFilterClinicalFilter(
        this.data,
        this.filterText,
        this.sortValue
      );
    },
    tabs() {
      return [
        { label: "My Missions", value: "missions" },
        { label: "Reviewed Missions", value: "reviewed" },
        { label: "Missions to Review", value: "needing" },
        { label: "Admin View", value: "admin" },
      ];
    },
  },
  components: {
    ClinicalTabs,
    FilterInput,
    ClinicalListItem,
    Separator,
  },
  methods: {
    tabChange(tab) {
      this.defaultTab = tab;
    },
    onSort(sort) {
      this.sortValue = sort;
    },
    onFilter(filter) {
      console.log("have to fetch with api",filter);
    },
    onFilterChange(filterText) {
      this.filterText = filterText;
    },
  },
};
</script>
