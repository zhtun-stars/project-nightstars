import axios from "axios";
import { msalInstance, state, msalConfig } from "./msalConfig";
import { PublicClientApplication } from "@azure/msal-browser";

export function msalService() {
  const initialize = async () => {
    try {
      await msalInstance.initialize();
    } catch (error) {
      console.error("Initialization error", error);
    }
  };

  const login = async () => {
    try {
      if (!msalInstance) {
        throw new Error(
          "MSAL not initialized. Call initializeMsal() before using MSAL API."
        );
      }
      await msalInstance.loginRedirect();
      state.isAuthenticated = true;
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const logout = () => {
    if (!msalInstance) {
      throw new Error(
        "MSAL not initialized. Call initializeMsal() before using MSAL API."
      );
    }
    msalInstance.logoutRedirect();
    state.isAuthenticated = false;
    state.user = null;
  };
  const currentUser = () => {
    let account = null;

    account = msalInstance.getActiveAccount();
    if (account === null) account = msalInstance.getAllAccounts()[0];

    return account;
  };
  const handleRedirect = async () => {
    try {
      await msalInstance.handleRedirectPromise();
      state.isAuthenticated = msalInstance.getAllAccounts().length > 0;
      state.user = msalInstance.getAllAccounts()[0];
    } catch (error) {
      console.error("Redirect error:", error);
    }
  };
  const getToken = async () => {
    const msalInstance = new PublicClientApplication(msalConfig);
    await msalInstance.initialize();
    const account = currentUser();
    const request = {
      scopes: [msalConfig.auth.scopeToken as string], // Add the scopes you need
      account: account,
      forceRefresh: true,
      loginHint: account.username,
      refreshTokenExpirationOffsetSeconds: 60,
    };

    try {
      if (account) {
        // Try to acquire token silently
        const response = await msalInstance.acquireTokenSilent(request);
        return response.accessToken;
      } else {
        // If no account is found, user might not be signed in
        console.error("No account found, user might not be signed in");
      }
    } catch (error) {
      console.error("Error acquiring token in gettoken:", error);
      return null;
      //await msalInstance.acquireTokenPopup(request);
    }
  };
  const registerAuthorizationHeaderInterceptor = () => {
    axios.interceptors.request.use(async (config) => {
      const accessToken = await getToken();
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
        axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
      }
      return config;
    });
  };
  return {
    initialize,
    login,
    logout,
    handleRedirect,
    getToken,
    registerAuthorizationHeaderInterceptor,
  };
}
