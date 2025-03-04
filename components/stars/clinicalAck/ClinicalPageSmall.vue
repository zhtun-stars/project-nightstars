<template>
  <ClientOnly>
    <div class="flex flex-col">
      <div class="flex flex-row justify-between">
        <div class="w-[500px] pt-2 pl-4">
          <FilterInput
            :defaultFilterText="missionStore.filterText"
            :sorts="sorts"
            @onSort="onSort"
            @onFilter="onFilter"
            @onFilterTextChange="onFilterChange"
            :defaultSort="missionStore.sortValue"
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
        <div
          class="col-span-1"
          v-for="(cData, key) in textFilter(
            missionStore.missions,
            missionStore.filterText
          )"
          :key="key"
        >
          <ClinicalListItem :clinicalData="cData" />
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import ClinicalListItem from "./list/ClinicalListItem.vue";
import ClinicalTabs from "./tabs/ClinicalTabs.vue";
import FilterInput from "../commons/filterInput/FilterInput.vue";
import { SORT_ORDER, SORTING_FROM_FILTER } from "@/lib/constants";
import {
  clinicalFilters,
  sortAndFilterClinicalFilter,
  textFilter,
} from "@/lib/common-functions";
import {
  isAdminTabAvailable,
  isMissionNeedTabAvailable,
  isMyMissionTabAvailable,
  isReviewdMissionTabAvailable,
} from "~/lib/sessionUtils";
import { retrieveMissions } from "~/server/services";
import type { ISort } from "~/lib/interfaces";

const sorts = SORTING_FROM_FILTER;
const missionStore = useMissionStore();
const store = useSessionStore();

const filters = clinicalFilters;

const defaultTab = ref<string>("missions");

const tabChange = (tab: string) => {
  defaultTab.value = tab;
};
const onSort = (sort: ISort) => {
  missionStore.sortValue = sort;
  loadData().then().catch();
};
const onFilter = (filter: any) => {
  console.log("have to fetch with api", filter);
};
const onFilterChange = (text: string) => {
  missionStore.filterText = text;
};

onMounted(() => {
  loadData().then().catch();
});

const loadData = async () => {
  missionStore.missionListStatus = IStatus.loading;
  const resultData = await retrieveMissions(store.username);

  const data = sortAndFilterClinicalFilter(resultData, missionStore.sortValue);

  missionStore.setMissions(data);
  missionStore.missionListStatus = IStatus.idle;
};

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
