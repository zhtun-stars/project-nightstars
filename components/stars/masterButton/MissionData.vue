<template>
  <div class="mt-4">
    <Tabs
      :default-value="status"
      class="w-full flex max-w-[400px] overflow-y-auto thin-scrollbar-horizontal"
    >
      <TabsList class="flex-1">
        <TabsTrigger
          value="EMPTY"
          class="w-full flex flex-col"
          @click="selectTab('EMPTY')"
        >
          <div class="flex-1 text-center">
            <HardDrive class="inline-block" />
          </div>
          <div class="flex-1 text-center">Empty</div>
        </TabsTrigger>
        <TabsTrigger
          :value="IStatus.loading"
          class="w-full flex flex-col"
          @click="selectTab(IStatus.loading)"
        >
          <div class="flex-1 text-center">
            <LoadingSvg class="inline-block" />
          </div>
          <div class="flex-1 text-center">Loading</div>
        </TabsTrigger>
        <TabsTrigger
          :value="IStatus.error"
          class="w-full flex flex-col"
          @click="selectTab(IStatus.error)"
        >
          <div class="flex-1 text-center">
            <TriangleAlert class="inline-block" />
          </div>
          <div class="flex-1 text-center">Error</div>
        </TabsTrigger>
        <TabsTrigger
          :value="IStatus.idle"
          class="w-full flex flex-col"
          @click="selectTab(IStatus.idle)"
        >
          <div class="flex-1 text-center">
            <Grid class="inline-block" />
          </div>
          <div class="flex-1 text-center">Loaded</div>
        </TabsTrigger>
      </TabsList>
    </Tabs>
  </div>
</template>
<script lang="ts" setup>
import { Grid, HardDrive, TriangleAlert } from "lucide-vue-next";
import LoadingSvg from "../commons/LoadingSvg.vue";
import { retrieveMissions } from "~/server/services";
import { sortAndFilterClinicalFilter } from "~/lib/common-functions";
import { IStatus } from "~/stores/missionStore";

const store = useMissionStore();
const sessionStore = useSessionStore();
const status = ref<IStatus | "EMPTY">(store.missionListStatus);

const selectTab = (value: IStatus | "EMPTY") => {
  if (status.value === value) {
    return;
  } else {
    status.value = value;
    switch (status.value) {
      case IStatus.loading:
        store.missionListStatus = IStatus.loading;
        break;
      case IStatus.error:
        store.missionListStatus = IStatus.error;
        break;
      case IStatus.idle:
        store.missionListStatus = IStatus.idle;
        loadData().then().catch();
        break;
      case "EMPTY":
        store.missionListStatus = IStatus.idle;
        store.setMissions([]);
        break;
      default:
        store.missionListStatus = IStatus.idle;
        loadData().then().catch();
        break;
    }
  }
};

const loadData = async () => {
  store.missionListStatus = IStatus.loading;
  const resultData = await retrieveMissions(sessionStore.username);

  const data = sortAndFilterClinicalFilter(resultData, store.sortValue);

  store.setMissions(data);
  store.missionListStatus = IStatus.idle;
};
</script>
