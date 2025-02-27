<template>
  <ClientOnly>
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
  </ClientOnly>
</template>

<script setup>
import ClinicalListItem from "./list/ClinicalListItem.vue";
import ClinicalTabs from "./tabs/ClinicalTabs.vue";
import FilterInput from "../commons/filterInput/FilterInput.vue";
import { SORT_ORDER, SORTING_FROM_FILTER } from "@/lib/constants";
import { CLINICAL_DATA } from "@/lib/mockdata";
import {
  clinicalFilters,
  sortAndFilterClinicalFilter,
} from "@/lib/common-functions";
import {
  isAdminTabAvailable,
  isMissionNeedTabAvailable,
  isMyMissionTabAvailable,
  isReviewdMissionTabAvailable,
} from "~/lib/sessoinUtils";

const sorts =SORTING_FROM_FILTER;

const store = useSessionStore();
const sortValue = reactive({
  key: sorts[0].key,
  order: SORT_ORDER.ASC,
});
const data = CLINICAL_DATA;
const filterText = ref("");

const filters = clinicalFilters;

const defaultTab = ref("missions");

const tabChange = (tab) => {
  defaultTab.value = tab;
};
const onSort = (sort) => {
  sortValue.value = sort;
};
const onFilter = (filter) => {
  console.log("have to fetch with api", filter);
};
const onFilterChange = (text) => {
  filterText.value = text;
};

const sortedData = computed(() => {
  return sortAndFilterClinicalFilter(data, filterText.value, sortValue);
});

const tabs = computed(() => {
  let tabs = [];
  isMyMissionTabAvailable(store.roles) &&
    tabs.push({ label: "My Missions", value: "missions" });
  isReviewdMissionTabAvailable(store.roles) &&
    tabs.push({ label: "Reviewed Missions", value: "reviewed" });
  isMissionNeedTabAvailable(store.roles) &&
    tabs.push({ label: "Missions to Review", value: "needing" });
  isAdminTabAvailable(store.roles) &&
    tabs.push({ label: "Admin View", value: "admin" });
  return tabs;
});
</script>
