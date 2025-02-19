import { defineStore } from "pinia";

export const useSessionStore = defineStore("session", {
  state: () => ({
    ISADMIN: false,
    ISAMC: false,
    ISREVIEWER: false,
    ISTP: false,
    SETTINGS: {
        theme: 'light',
    },
  }),
  getters: {
    isAdmin: (state) => state.ISADMIN,
    isAMC: (state) => state.ISAMC,
    isReviewer: (state) => state.ISREVIEWER,
    isTP: (state) => state.ISTP,
    settings: (state) => state.SETTINGS,
  },
  actions: {
    setValues({ ISADMIN, ISAMC, ISREVIEWER, ISTP }) {
      this.ISTP = ISTP;
      this.ISAMC = ISAMC;
      this.ISREVIEWER = ISREVIEWER;
      this.ISADMIN = ISADMIN;
    },
    setSettings({ theme }) {
      this.SETTINGS.theme = theme;
    }
  },
});
