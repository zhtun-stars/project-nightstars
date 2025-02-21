<template>
  <ClientOnly>
    <Tabs
      :default-value="filter.defaultValue as string | number"
      class="w-full flex"
    >
      <TabsList>
        <TabsTrigger
          v-for="(item, index) in filter.selection"
          :key="index"
          :value="item.value"
          @click="value = item.value"
          >{{ item.label }}</TabsTrigger
        >
      </TabsList>
    </Tabs>
  </ClientOnly>
</template>
<script lang="ts">
import Tabs from "~/components/ui/tabs/Tabs.vue";
import TabsList from "~/components/ui/tabs/TabsList.vue";
import TabsTrigger from "~/components/ui/tabs/TabsTrigger.vue";
import type { IFilter } from "~/lib/InfFilters";
export default {
  name: "PrimitiveFilter",
  data(): { value: string | number } {
    return { value: "" };
  },
  props: {
    filter: {
      type: Object as () => IFilter,
      required: true,
    },
  },
  components: {
    Tabs,
    TabsList,
    TabsTrigger,
  },
};
</script>
