<template>
  <div class="flex-auto flex-grow-1 flex flex-col">
    <div class="flex-auto flex-grow-1">
      <div class="flex pt-2 px-4 flex-grow-1 flex-auto h-[calc(100vh-90px)]">
        <div class="max-w-[400px] w-[400px]">
          <ClinicalSideList>
            <ClinicalTabs
              :default="defaultTab"
              :tabs="tabs"
              @tabChange="tabChange"
            />
          </ClinicalSideList>
        </div>
        <div class="px-4">
          <Separator orientation="vertical" />
        </div>
        <div class="flex-1">
          <ClinicalDetail />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Separator from "~/components/ui/separator/Separator.vue";
import ClinicalDetail from "./detail/ClinicalDetail.vue";
import ClinicalSideList from "./list/ClinicalSideList.vue";
import ClinicalTabs from "./tabs/ClinicalTabs.vue";
import { ref, computed } from "vue";
import {
  isAdminTabAvailable,
  isMissionNeedTabAvailable,
  isMyMissionTabAvailable,
  isReviewdMissionTabAvailable,
} from "~/lib/sessoinUtils";

const store = useSessionStore();

const defaultTab = ref("missions");
const tabs = computed(() => {
  let tabs = [];
  isMyMissionTabAvailable(store.roles) &&
    tabs.push({ label: "My Missions", value: "missions" });
  isReviewdMissionTabAvailable(store.roles) &&
    tabs.push({ label: "Reviewed Missions", value: "reviewed" });
  isMissionNeedTabAvailable(store.roles) &&
    tabs.push({ label: "Missions to Review", value: "needing" });
  isAdminTabAvailable(store.roles) &&
    tabs.push({ label: "Admin View", value: "admin" });
  return tabs;
});

const tabChange = (tab) => {
  defaultTab.value = tab;
};

// export default {
//   name: "ClinicalPage",
//   data() {
//     return {
//       defaultTab: "missions",
//     };
//   },
//   computed: {
//     tabs() {
//       let tabs = [];
//       tabs.push({ label: "My Missions", value: "missions" });
//       tabs.push({ label: "Reviewed Missions", value: "reviewed" });
//       tabs.push({ label: "Missions to Review", value: "needing" });
//       if()
//       tabs.push({ label: "Admin View", value: "admin" });
//       return tabs;
//     },
//   },
//   components: {
//     ClinicalDetail,
//     ClinicalSideList,
//     ClinicalTabs,
//     ClinicalTabsVertical,
//     Separator,
//   },
//   methods: {
//     tabChange(tab) {
//       this.defaultTab = tab;
//     },
//   },
// };
</script>
