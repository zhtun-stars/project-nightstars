<template>
  <header
    class="w-full h-12 px-4 sticky top-0 z-50 shadow-md bg-[--navbar-background] flex gap-2"
  >
    <div class="pt-3">
      <img src="@/assets/STARS-Critical-Care-Red-RGB 1.svg" class="w-[100px]" />
    </div>
    <div
      class="flex-auto flex-grow-1 leading-[48px] text-[--foreground] font-bold text-md"
    >
      Critical QA
    </div>
    <div class="pt-2">
      <UserInfo @logout="logout" />
    </div>
    <div class="pt-2">
      <ThemeModeSwitch />
    </div>
  </header>
  <BreadcrumbPanel />
</template>

<script setup>
import { PanelRightOpen } from "lucide-vue-next";
// import SidebarTrigger from "../ui/sidebar/SidebarTrigger.vue";
import BreadcrumbPanel from "./BreadcrumbPanel.vue";
import ThemeModeSwitch from "../ThemeModeSwitch.vue";
import UserInfo from "../sidebar/UserInfo.vue";

const { user, clear: clearSession } = useUserSession();

// BreadcrumbPanel,
//     PanelRightOpen,
//     ThemeModeSwitch,
//     UserInfo,

const logout = async () => {
  await clearSession();
  await navigateTo("/");
};
</script>
