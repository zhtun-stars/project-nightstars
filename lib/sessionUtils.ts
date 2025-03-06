import type { AccountInfo } from "@azure/msal-browser";
import type { IUserInfo, Roles, UserDetail } from "./interfaces";
import { EmitFlags } from "typescript";

export const setUserOrRestore = async (
  user: AccountInfo,
  userDetails: UserDetail,
  setUserInfo: (user: IUserInfo) => void
) => {
  setUserInfo({
    FullName: userDetails.fullName,
    FirstName: userDetails.firstName,
    LastName: userDetails.lastName,
    Email: user.username,
    UserName: user.username.split("@")[0],
    settings: { theme: "light" },
    roles: {
      ISADMIN: true,
      ISTP: true,
      ISAMC: userDetails.isAMC,
      ISREVIEWER: userDetails.isReviewer,
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
