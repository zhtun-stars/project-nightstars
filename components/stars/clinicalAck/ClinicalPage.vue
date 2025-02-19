<template>
  <div class="flex flex-row">
    <div class="h-[600px] pt-14 pl-2">
      <ClinicalTabsVertical default="missions" :tabs="tabs" />
    </div>
    <div class="flex-auto flex-grow-1 flex flex-col">
      <div class="w-[500px] pt-2 pl-4">
        <ClinicalTabs default="missions" :tabs="tabs" />
      </div>
      <div class="flex-auto flex-grow-1">
        <div class="flex pt-2 px-4 flex-grow-1 flex-auto h-[calc(100vh-100px)]">
          <div class="max-w-[300px] w-[300px]">
            <ClinicalSideList />
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
  </div>
</template>

<script>
import Separator from "~/components/ui/separator/Separator.vue";
import ClinicalDetail from "./detail/ClinicalDetail.vue";
import ClinicalSideList from "./list/ClinicalSideList.vue";
import ClinicalTabs from "./tabs/ClinicalTabs.vue";
import ClinicalTabsVertical from "./tabs/ClinicalTabsVertical.vue";

export default {
  name: "ClinicalPage",
  data() {
    return {
      clinicalAck: {
        title: "Clinical Acknowledgement",
        content: "This is the clinical acknowledgement content",
      },
    };
  },
  computed: {
    tabs() {
      return [
        { label: "My Missions", value: "missions" },
        { label: "Reviewed Missions", value: "reviewed" },
        { label: "Missions to Review", value: "needing" },
      ];
    },
  },
  components: {
    ClinicalDetail,
    ClinicalSideList,
    ClinicalTabs,
    ClinicalTabsVertical,
    Separator,
  },
};
</script>
