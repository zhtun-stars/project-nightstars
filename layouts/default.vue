<template>
  <SidebarProvider>
    <SidebarPanel />
    <div class="h-full flex-auto flex-grow-1">
      <Navbar />
      <slot></slot>
    </div>
  </SidebarProvider>
</template>
<script>
import SidebarPanel from "@/components/sidebar/SidebarPanel.vue";
import Navbar from "~/components/navbar/Navbar.vue";
import SidebarProvider from "~/components/ui/sidebar/SidebarProvider.vue";
export default {
  components: {
    Navbar,
    SidebarPanel,
  },
};
</script>
