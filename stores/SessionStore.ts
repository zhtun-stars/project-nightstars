import { defineStore } from "pinia";
import type { IUserInfo } from "~/lib/interfaces";

export const useSessionStore = defineStore("session", {
  state: () => ({
    username: "",
    roles: {
      ISADMIN: false,
      ISAMC: false,
      ISREVIEWER: false,
      ISTP: false,
    },
    email: "",
    SETTINGS: {
      theme: "light",
    },
  }),
  getters: {
    isAdmin: (state) => state.roles.ISADMIN,
    isAMC: (state) => state.roles.ISAMC,
    isReviewer: (state) => state.roles.ISREVIEWER,
    isTP: (state) => state.roles.ISTP,
    settings: (state) => state.SETTINGS,
    theme: (state) => state.SETTINGS.theme,
    getRoles: (state) => state.roles,
  },
  actions: {
    setValues({
      ISADMIN,
      ISAMC,
      ISREVIEWER,
      ISTP,
    }: {
      ISADMIN: boolean;
      ISAMC: boolean;
      ISREVIEWER: boolean;
      ISTP: boolean;
    }) {
      this.roles.ISTP = ISTP;
      this.roles.ISAMC = ISAMC;
      this.roles.ISREVIEWER = ISREVIEWER;
      this.roles.ISADMIN = ISADMIN;
    },
    setSettings({ theme }: { theme: "light" | "dark" }) {
      this.SETTINGS.theme = theme;
    },
    setUserInfo(userInfo: IUserInfo) {
      this.roles.ISTP = userInfo.roles.ISTP;
      this.roles.ISAMC = userInfo.roles.ISAMC;
      this.roles.ISREVIEWER = userInfo.roles.ISREVIEWER;
      this.roles.ISADMIN = userInfo.roles.ISADMIN;
      this.username = userInfo.UserName;
      this.SETTINGS = userInfo.settings;
      this.email = userInfo.Email;
    },
    setUserName(username: string) {
      this.username = username;
    },
    setTheme(theme: "light" | "dark") {
      this.SETTINGS.theme = theme;
    },
    setRoles(roles: any) {
      this.roles = roles;
    },
  },
});
