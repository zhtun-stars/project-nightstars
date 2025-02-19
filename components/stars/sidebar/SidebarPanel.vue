<template>
  <Sidebar>
    <SidebarHeader>
      <div class="flex">
        <div class="flex-grow-1 flex-auto pt-4 text-center">
          <img
            src="@/assets/STARS-Critical-Care-Red-RGB 1.png"
            class="text-[red] w-[150px] inline-block"
          />
        </div>
        <div class="pt-3">
          <SidebarTrigger>
            <PanelRightClose />
          </SidebarTrigger>
        </div>
      </div>
    </SidebarHeader>
    <SidebarContent>
      <!-- <SidebarGroup>
        <SidebarGroupLabel>Testing</SidebarGroupLabel>
      </SidebarGroup> -->
    </SidebarContent>
    <SidebarFooter>Stars @ Ver 0.1</SidebarFooter>
  </Sidebar>
</template>
<script>
import { PanelRightClose } from "lucide-vue-next";
import Sidebar from "../ui/sidebar/Sidebar.vue";
import SidebarContent from "../ui/sidebar/SidebarContent.vue";
import SidebarFooter from "../ui/sidebar/SidebarFooter.vue";
import SidebarHeader from "../ui/sidebar/SidebarHeader.vue";
import SidebarGroup from "../ui/sidebar/SidebarGroup.vue";
import SidebarGroupLabel from "../ui/sidebar/SidebarGroupLabel.vue";

export default {
  name: "SidebarPanel",
  components: {
    PanelRightClose,
  },
};
</script>
