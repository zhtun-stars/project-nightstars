<template>
  <ClientOnly>
    <Tabs
      :default-value="default"
      class="w-full flex max-w-[400px] overflow-y-auto thin-scrollbar-horizontal"
      v-if="tabs.length > 1"
    >
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
    return {};
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
      if (this.default === tab) return;
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
