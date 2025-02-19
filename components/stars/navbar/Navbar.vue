<template>
  <header
    class="w-full h-12 px-4 sticky top-0 z-50 shadow-md bg-[--background] flex gap-2"
  >
    <!--
    <div class="leading-[48px]">
      
        not required yet because we only have 1 sidebar
      <SidebarTrigger>
        <PanelRightOpen />
      </SidebarTrigger>
    </div> -->
    <div class="pt-3">
      <img src="@/assets/STARS-Critical-Care-Red-RGB 1.svg" class="w-[100px]" />
    </div>
    <div
      class="flex-auto flex-grow-1 leading-[48px] text-[--foreground] font-bold text-md"
    >
      Critical QA
    </div>
    <div>
      <ThemeModeSwitch />
    </div>
  </header>
  <BreadcrumbPanel />
</template>

<script>
import { PanelRightOpen } from "lucide-vue-next";
// import SidebarTrigger from "../ui/sidebar/SidebarTrigger.vue";
import BreadcrumbPanel from "./BreadcrumbPanel.vue";
import ThemeModeSwitch from "../ThemeModeSwitch.vue";

export default {
  name: "Navbar",
  components: {
    BreadcrumbPanel,
    PanelRightOpen,
    ThemeModeSwitch,
    // SidebarTrigger,
  },
};
</script>
