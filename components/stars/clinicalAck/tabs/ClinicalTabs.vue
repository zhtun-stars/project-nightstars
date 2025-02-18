<template>
  <Tabs :default-value="default" class="w-[300px]">
    <TabsList class="grid w-full grid-cols-2">
      <TabsTrigger
        v-for="(tab, index) in tabs"
        :value="tab.value"
        :key="index"
        @click="selectTab(tab.value)"
      >
        {{ tab.label }}
      </TabsTrigger>
    </TabsList>
  </Tabs>
</template>

<script>
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default {
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
