import { defineStore } from "pinia";
import type { Mission } from "~/lib/interfaces";

export type IMissionSession = {
  currentMission?: Mission;
  missions: Mission[];
  missionListStatus: IStatus;
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
  }),
  getters: {},
  actions: {
    setMissions(missions: Mission[]) {
      this.missions = [...missions];
    },
  },
});
