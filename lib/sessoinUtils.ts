import type { AccountInfo } from "@azure/msal-browser";

export const setUserOrRestore = async (
  user: AccountInfo,
  setUserInfo: Function
) => {
  setUserInfo({
    loginName: user.name,
    settings: { theme: "light" },
    roles: {
      ISADMIN: true,
      ISTP: true,
      ISAMC: true,
      ISREVIEWER: true,
    },
  });
};

// export isAdminTabAvailable = (roles: any) => {
// }