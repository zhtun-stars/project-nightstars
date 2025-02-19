<template>
  <ClientOnly>
    <Tabs :default-value="default" class="h-full">
      <TabsList class="grid h-full w-full grid-cols-1">
        <TabsTrigger
          v-for="(tab, index) in tabs"
          :value="tab.value"
          :key="index"
          class="w-full h-full [writing-mode:vertical-lr] *:transform rotate-180"
          @click="selectTab(tab.value)"
        >
          {{ tab.label }}
        </TabsTrigger>
      </TabsList>
    </Tabs>
  </ClientOnly>
</template>

<script>
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default {
  name: "ClinicalTabsVertical",
  data() {
    return {
      selectedTab: "reviews",
    };
  },
  props: {
    tabs: {
      type: Array,
      required: true,
    },
    default: {
      type: String,
      required: true,
    },
  },
  methods: {
    selectTab(tab) {
      if (this.selectedTab === tab) return;
      this.selectedTab = tab;
    },
  },
  computed: {},
  components: {
    Tabs,
    TabsList,
    TabsTrigger,
  },
};
</script>

<style scoped>
.clinical-tabs {
  /* Add your styles here */
}
</style>
