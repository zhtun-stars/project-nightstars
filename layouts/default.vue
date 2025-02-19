<template>
  <!-- <SidebarProvider> -->
  <!-- <SidebarPanel /> -->
  <div class="h-full flex-auto flex-grow-1">
    <Navbar />
    <slot></slot>
  </div>
  <!-- </SidebarProvider> -->
</template>
<script>
import Navbar from "@/components/stars/navbar/Navbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>
