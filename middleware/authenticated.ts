import { msalInstance, state } from "~/lib/msalConfig";
import { msalService } from "~/lib/useAuth";

const { handleRedirect, registerAuthorizationHeaderInterceptor } =
  msalService();

const initialize = async () => {
  try {
    await msalInstance.initialize();
    registerAuthorizationHeaderInterceptor(); // Call the initialize function
    await handleRedirect();
  } catch (error) {
    console.error("Initialization error", error);
  }
};

export default defineNuxtRouteMiddleware(async () => {
  await initialize();
  if (!state.isAuthenticated) {
    return navigateTo("/?redirect=/clinical");
  }
});
