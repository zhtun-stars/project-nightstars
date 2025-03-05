<script setup>
import { Fingerprint, SquareArrowOutUpRight } from "lucide-vue-next";
import { msalService } from "~/lib/useAuth";
import { msalInstance, state } from "~/lib/msalConfig";
import { onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { setUserOrRestore } from "~/lib/sessionUtils";
import { useSessionStore } from "~/stores/SessionStore";
import { PAGES } from "~/lib/constants";
const route = useRoute();
const { setUserInfo } = useSessionStore();

const {
  login,
  logout,
  handleRedirect,
  registerAuthorizationHeaderInterceptor,
} = msalService();

const colorMode = useColorMode();
const loading = reactive({ value: true });

const setSession = async () => {
  state.isAuthenticated && (await setUserOrRestore(state.user, setUserInfo));
};

const handleLogin = async () => {
  await login();
  await setSession();
};

const handleLogout = () => {
  logout();
};

const initialize = async () => {
  try {
    await msalInstance.initialize();
    registerAuthorizationHeaderInterceptor(); // Call the initialize function
  } catch (error) {
    console.error("Initialization error", error);
  }
};
onMounted(async () => {
  await initialize();
  await handleRedirect();
  await setSession();
  colorMode.value = "light";
  if (route.query.redirect) navigateTo(route.query.redirect);
  else loading.value = false;
});

definePageMeta({
  name: "Login",
  layout: "login",
  components: [Fingerprint, SquareArrowOutUpRight],
  props: {
    router: {
      type: Object,
    },
  },
});

const goToApp = () => {
  loading.value = true;
  // navigateTo(getClinicalPage(window)); // in case would want to change
  navigateTo(PAGES.clinical);
};

const isAuthenticated = computed(() => state.isAuthenticated);
</script>

<template>
  <ClientOnly>
    <div v-if="loading.value">loading ...</div>
    <div v-else class="overflow-hidden h-[100vh] max-h-[100vh]">
      <video autoplay muted loop id="myVideo" class="w-full">
        <source
          src="https://stars.ca/wp-content/uploads/2023/04/NTF-silent-web-banner.mp4"
          type="video/mp4"
        />
      </video>
    </div>
    <div
      v-if="!loading.value"
      class="h-[500px] rounded-md fixed w-[800px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 \ flex bg-[--star-color] shadow-md"
    >
      <div class="px-11 py-14 flex h-full flex-col gap-12">
        <p class="text-5xl text-[--foreground] font-bold">
          <img
            src="@/assets/STARS-White-RGB.png"
            alt="Stars Logo"
            class="w-[150px]"
          />
        </p>
        <p class="flex-auto flex-grow-1 text-justify px-4 text-white">
          STARS is a lifeline for patients in rural, remote, and indigenous
          communities across Western Canada.
        </p>
        <a
          class="text-white pb-6 px-6"
          target="_blank"
          href="https://stars.ca/who-we-are/our-north-star/"
          >Learn More <SquareArrowOutUpRight class="inline-block"
        /></a>
      </div>
      <div class="min-w-[450px] w-[450px] flex-grow-1 p-11 h-full">
        <div
          class="flex flex-col gap-12 bg-white h-full rounded-md p-11 bg-opacity-80"
        >
          <div class="text-center">
            <Fingerprint
              class="inline-block w-12 h-12 text-[--star-midnight]"
            />
          </div>
          <div class="flex-auto flex-grow-1" v-if="isAuthenticated">
            <p class="text-xl text-center">Hi {{ state.user.name }},</p>
            <p class="text-center text-muted-foreground text-sm pt-4">
              Welcome to the Stars Clinical Application.
            </p>
          </div>
          <div class="flex-auto flex-grow-1" v-else>
            <p class="text-xl text-center">Login with SSO</p>
            <p class="text-center text-muted-foreground text-sm pt-4">
              Use Microsoft SSO for Securer and easier access to your account.
            </p>
          </div>
          <div v-if="isAuthenticated">
            <br />
            <div class="flex flex-col gap-4">
              <Button
                variant=""
                class="w-full bg-[--star-midnight] text-white"
                size="lg"
                @click="goToApp"
                >Go to Application</Button
              >
              <Button
                variant=""
                class="w-full bg-[--star-color] text-white"
                size="lg"
                @click="handleLogout"
                >Logout</Button
              >
            </div>
          </div>
          <div v-else>
            <Button
              variant=""
              class="w-full bg-[--star-color] text-white"
              size="lg"
              @click="handleLogin"
              >Login</Button
            >
          </div>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>
