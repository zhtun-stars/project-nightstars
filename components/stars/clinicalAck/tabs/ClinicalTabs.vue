<template>
  <ClientOnly>
    <Tabs :default-value="default" class="w-full flex">
      <TabsList class="flex-1">
        <TabsTrigger
          v-for="(tab, index) in tabs"
          :value="tab.value"
          :key="index"
          class="w-full"
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
  data() {
    return {
      selectedTab: this.default,
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
  emits: ["tabChange"],
  methods: {
    selectTab(tab) {
      if (this.selectedTab === tab) return;
      this.selectedTab = tab;
      this.$emit("tabChange", tab);
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
