export default defineOAuthMicrosoftEventHandler({
  config: {
    clientId: process.env.NUXT_OAUTH_MICROSOFT_CLIENT_ID,
    tenant: process.env.NUXT_OAUTH_MICROSOFT_TENANT,
    clientSecret: process.env.NUXT_OAUTH_MICROSOFT_CLIENT_SECRET,
    redirectURL: process.env.NUXT_PUBLIC_MSAL_REDIRECT_URI,
    scope: [process.env.NUXT_PUBLIC_MSAL_SCOPE || "default-scope"],
    authorizationURL: process.env.NUXT_PUBLIC_MSAL_AUTORITY,
    authorizationParams: {
      code_challenge: process.env.NUXT_OAUTH_MICROSOFT_CHALLENGE!,
      code_challenge_method: "S256",
    },
  },
  async onSuccess(event, { user, tokens }) {
    const userSession = {
      user: {
        name: user.displayName,
        id: user.id,
        loggedInDt: new Date().toISOString(),
        tokens,
      },
    };
    console.log("userSession", userSession);
    await setUserSession(event, { userSession });
    return sendRedirect(event, "/clinical");
    // await $fetch(`/api/auth/callback?`);
    // await navigateTo("");
    return;
  },
  onError(event, error) {
    console.error("Error", error);
    // await sendRedirect(event, "/32132131312");
    // await $fetch(`/api/auth/callback?`);
  },
});
