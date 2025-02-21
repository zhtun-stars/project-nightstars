<template>date filter</template>
<script lang="ts">
import type { IFilter } from "~/lib/InfFilters";
export default {
  name: "DateFilter",
  props: {
    filter: {
      type: Object as () => IFilter,
      required: true,
    },
  },
};
</script>
