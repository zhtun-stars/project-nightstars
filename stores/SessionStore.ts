import { defineStore } from "pinia";
import type { IUserInfo } from "~/lib/interfaces";

export const useSessionStore = defineStore("session", {
  state: () => ({
    ISADMIN: false,
    ISAMC: false,
    ISREVIEWER: false,
    ISTP: false,
    SETTINGS: {
        theme: 'light',
    },
    username: "",
  }),
  getters: {
    isAdmin: (state) => state.ISADMIN,
    isAMC: (state) => state.ISAMC,
    isReviewer: (state) => state.ISREVIEWER,
    isTP: (state) => state.ISTP,
    settings: (state) => state.SETTINGS,
  },
  actions: {
    setValues({ ISADMIN, ISAMC, ISREVIEWER, ISTP }: { ISADMIN: boolean; ISAMC: boolean; ISREVIEWER: boolean; ISTP: boolean }) {
      this.ISTP = ISTP;
      this.ISAMC = ISAMC;
      this.ISREVIEWER = ISREVIEWER;
      this.ISADMIN = ISADMIN;
    },
    setSettings({ theme }: {theme: 'light' | 'dark'}) {
      this.SETTINGS.theme = theme;
    },
    setUserInfo(userInfo: IUserInfo) {
      this.setValues(userInfo.roles);
      this.username = userInfo.loginName;
      this.SETTINGS = userInfo.settings
    }
  },
});
