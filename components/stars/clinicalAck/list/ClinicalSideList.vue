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
import type { IClinicalData, ISort } from "~/lib/interfaces";
import { SORT_ORDER, SORTING_FROM_FILTER } from "@/lib/constants";
import { CLINICAL_DATA } from "@/lib/mockdata";
import {
  clinicalFilters as filters,
  sortAndFilterClinicalFilter,
} from "@/lib/common-functions";
import type { IFilter } from "~/lib/InfFilters";
import LoadingIcon from "../../commons/LoadingIcon.vue";
import ErrorIcon from "../../commons/ErrorIcon.vue";
import EmptyIcon from "../../commons/EmptyIcon.vue";

const sorts = SORTING_FROM_FILTER;

const sortValue = ref({
  key: sorts[0].key,
  order: SORT_ORDER.ASC,
} as ISort);
const filterText = ref("");

const data = CLINICAL_DATA;

const store = useMissionStore();

const sortedData = () => {
  IStatus.loading;
  const data = sortAndFilterClinicalFilter(
    CLINICAL_DATA,
    filterText.value,
    sortValue.value
  ).map((item: IClinicalData, index: number) => ({
    PCRID: index,
    EventID: index,
    EventUnitID: index,
    InitialReviewDate: item.initialReviewedDate,
    FinalReviewDate: item.finalReviewedDate,
    FinalReviewBy: item.finalReviewer,
    InitialReviewBy: item.initialReviewer,
    CrewID: index,
    LastName: "Doe",
    FirstName: "John",
    PositionID: index,
    Position: "EMT",
    LoginID: "johndoe",
    EventDate: item.date,
    HasRead: false,
    InitialReviewerID: item.initialReviewedDate ? 1 : 0,
    FinalReviewerID: item.finalReviewedDate ? 1 : 0,
    BaseID: 1,
    MissionBase: item.baseName,
    FuLLName: item.physician,
    EventNumber: item.mission,
  }));
  store.setMissions(data);
  store.missionListStatus = IStatus.idle;
};

const onSort = (sort: ISort) => {
  sortValue.value = sort;
  sortedData();
};

const onFilter = (filter: IFilter[]) => {
  console.log("have to fetch with api", filter);
};

const onFilterChange = (text: string) => {
  filterText.value = text;
};

onMounted(() => {
  sortedData();
});
</script>
