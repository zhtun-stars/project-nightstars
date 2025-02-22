<template>
  <div class="flex space-x-2">
    <DateRangePicker :filter="filter" @modelValue="onCalenderChange" />
  </div>
</template>
<script lang="ts">
import type { IFilter } from "@/lib/InfFilters";
import DateRangePicker from "@/components/stars/commons/date-range-picker/DateRangePicker.vue";

export default {
  name: "DateFilter",
  props: {
    filter: {
      type: Object as () => IFilter,
      required: true,
    },
    index: {
      type: Number,
      default: 0,
    },
  },
  components: {
    DateRangePicker,
  },
  emits: ["filterValueChange"],
  methods: {
    onCalenderChange(value: any) {
      this.$emit("filterValueChange", this.index, this.filter, {
        start: value.start.toDate(),
        end: value.end.toDate(),
      });
    },
  },
};
</script>
