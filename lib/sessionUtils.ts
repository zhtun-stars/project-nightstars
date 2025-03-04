import type { AccountInfo } from "@azure/msal-browser";
import type { IUserInfo, Roles } from "./interfaces";
import { EmitFlags } from "typescript";

export const setUserOrRestore = async (
  user: AccountInfo,
  setUserInfo: (user: IUserInfo) => void
) => {
  setUserInfo({
    FullName: user.name || '',
    FirstName: '',
    LastName: '',
    Email: user.username,
    UserName: user.username.split("@")[0],
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
