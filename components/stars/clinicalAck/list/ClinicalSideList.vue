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
  <div
    v-if="store.missionListStatus === IStatus.loading"
    class="h-[calc(100vh-210px)] text-center flex items-center justify-center"
  >
    <LoadingIcon />
  </div>
  <div
    v-else-if="
      store.missionListStatus === IStatus.idle && store.missions.length == 0
    "
    class="h-[calc(100vh-210px)] text-center flex items-center justify-center"
  >
    <EmptyIcon />
  </div>
  <div
    v-else-if="store.missionListStatus === IStatus.error"
    class="h-[calc(100vh-210px)] text-center flex items-center justify-center"
  >
    <ErrorIcon />
  </div>
  <div v-else class="flex-auto">
    <ClinicalListView />
  </div>
</template>

<script lang="ts" setup>
import FilterInput from "@/components/stars/commons/filterInput/FilterInput.vue";
import ClinicalListView from "./ClinicalListView.vue";
import type { ISort, Mission } from "~/lib/interfaces";
import { SORT_ORDER, SORTING_FROM_FILTER } from "@/lib/constants";
import { CLINICAL_DATA } from "@/lib/mockdata";
import {
  convertData,
  clinicalFilters as filters,
  sortAndFilterClinicalFilter,
} from "@/lib/common-functions";
import type { IFilter } from "~/lib/InfFilters";
import LoadingIcon from "../../commons/LoadingIcon.vue";
import ErrorIcon from "../../commons/ErrorIcon.vue";
import EmptyIcon from "../../commons/EmptyIcon.vue";
import { retrieveMissions } from "~/server/services";

const sorts = SORTING_FROM_FILTER;

const sortValue = ref({
  key: sorts[0].key,
  order: SORT_ORDER.ASC,
} as ISort);
const filterText = ref("");

const store = useMissionStore();
const userStore = useSessionStore();

const sortedData = async () => {
  store.missionListStatus = IStatus.loading;

  const resultData = await retrieveMissions(userStore.username);

  const data = sortAndFilterClinicalFilter(
    resultData,
    filterText.value,
    sortValue.value
  );
  store.setMissions(data);
  store.missionListStatus = IStatus.idle;
};

const onSort = (sort: ISort) => {
  sortValue.value = sort;
  sortedData().then().catch();
};

const onFilter = (filter: IFilter[]) => {
  console.log("have to fetch with api", filter);
};

const onFilterChange = (text: string) => {
  filterText.value = text;
};

onMounted(() => {
  sortedData().then().catch();
});
</script>
