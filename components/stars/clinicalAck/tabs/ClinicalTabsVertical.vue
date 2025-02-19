<template>
  <ClientOnly>
    <Tabs :default-value="default" class="">
      <TabsList class="grid w-full grid-cols-1">
        <TabsTrigger
          v-for="(tab, index) in tabs"
          :value="tab.value"
          :key="index"
          class="w-full h-full [writing-mode:vertical-lr] *:transform rotate-180 px-2 py-4"
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
