import type { AccountInfo } from "@azure/msal-browser";
import type { Roles } from "./interfaces";
import { EmitFlags } from "typescript";

export const setUserOrRestore = async (
  user: AccountInfo,
  setUserInfo: Function
) => {
  setUserInfo({
    loginName: user.name,
    EmitFlags: user.username,
    settings: { theme: "light" },
    roles: {
      ISADMIN: true,
      ISTP: true,
      ISAMC: true,
      ISREVIEWER: true,
    },
  });
};
export const isAdminTabAvailable = (roles: Roles): boolean => roles.ISADMIN;
export const isMyMissionTabAvailable = (roles: Roles): boolean =>
  roles.ISTP || roles.ISAMC;
export const isReviewdMissionTabAvailable = (roles: Roles): boolean =>
  (roles.ISTP || roles.ISAMC) && roles.ISREVIEWER;
export const isMissionNeedTabAvailable = (roles: Roles): boolean =>
  (roles.ISTP || roles.ISAMC) && roles.ISREVIEWER;
