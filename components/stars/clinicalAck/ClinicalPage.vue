<template>
  <div class="flex flex-row">
    <div class="pt-14 pl-2">
      <ClinicalTabsVertical
        :default="defaultTab"
        :tabs="tabs"
        @tabChange="tabChange"
      />
    </div>
    <div class="flex-auto flex-grow-1 flex flex-col">
      <div class="w-[500px] pt-2 pl-4">
        <ClinicalTabs
          :default="defaultTab"
          :tabs="tabs"
          @tabChange="tabChange"
        />
      </div>
      <div class="flex-auto flex-grow-1">
        <div class="flex pt-2 px-4 flex-grow-1 flex-auto h-[calc(100vh-140px)]">
          <div class="max-w-[400px] w-[400px]">
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
      defaultTab: "missions",
    };
  },
  computed: {
    tabs() {
      return [
        { label: "My Missions", value: "missions" },
        { label: "Reviewed Missions", value: "reviewed" },
        { label: "Missions to Review", value: "needing" },
        { label: "Admin View", value: "admin" },
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
  methods: {
    tabChange(tab) {
      this.defaultTab = tab;
    },
  },
};
</script>
