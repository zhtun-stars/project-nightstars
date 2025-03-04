import { defineStore } from "pinia";
import { SORT_ORDER, SORTING_FROM_FILTER } from "~/lib/constants";
import type { ISort, Mission } from "~/lib/interfaces";

export type IMissionSession = {
  currentMission?: Mission;
  missions: Mission[];
  missionListStatus: IStatus;
  filterText: string;
  sortValue: ISort;
};

export enum IStatus {
  loading = "LOADING",
  error = "ERROR",
  idle = "IDLE",
}

export const useMissionStore = defineStore("mission", {
  state: (): IMissionSession => ({
    missions: [],
    missionListStatus: IStatus.idle,
    filterText: "",
    sortValue: {
      key: SORTING_FROM_FILTER[0].key,
      order: SORT_ORDER.ASC,
    },
  }),
  getters: {},
  actions: {
    setMissions(missions: Mission[]) {
      this.missions = [...missions];
    },
  },
});
