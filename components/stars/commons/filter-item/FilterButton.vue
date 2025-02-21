<template>
  <ClientOnly>
    <Popover>
      <PopoverTrigger>
        <Button variant="ghost" class="w-full" size="sm" @click="onFilter">
          <Filter />
        </Button>
      </PopoverTrigger>
      <PopoverContent class="w-[400px] mt-2">
        <div class="flex flex-col gap-4">
          <div v-for="(filter, index) in filters" :key="filter.key">
            <label class="text-sm">{{ filter.label }}:</label>
            <DateFilter :filter="filter" v-if="filter.type == 'dates'" />
            <PrimitiveFilter :filter="filter" v-else />
          </div>
          <div class="flex-1 text-center">
            <Separator class="my-2" />
            <Button size="sm" @click="applyFilter"> Apply </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  </ClientOnly>
</template>
<script lang="ts">
import { Filter, FilterX } from "lucide-vue-next";
import { dateFilter, stringFilter, type IFilter } from "@/lib/InfFilters";
import DateFilter from "../filter-item/DateFilter.vue";
import PrimitiveFilter from "../filter-item/PrimitiveFilter.vue";
import moment from "moment";
export default {
  name: "FilterButton",
  data(): { filters: IFilter[] } {
    const dateRanges = {
      startDate: moment().subtract(3, "M").toDate(),
      endDate: new Date(),
    };
    return {
      filters: [
        {
          type: "dates",
          key: "initialReviewedDate",
          label: "Initial Reviewed Date",
          value: dateRanges,
          defaultValue: dateRanges,
          filter: dateFilter,
        },
        {
          type: "dates",
          key: "finalReviewedDate",
          label: "Final Reviewed Date",
          value: dateRanges,
          defaultValue: dateRanges,
          filter: dateFilter,
        },
        {
          type: "string",
          key: "base",
          label: "Base",
          value: "all",
          defaultValue: "all",
          selection: [
            { label: "All", value: "all" },
            { label: "Calgary", value: "calgary" },
            { label: "Edmonton", value: "edmonton" },
            { label: "Saskatchewan", value: "saskatchewan" },
          ],
          filter: stringFilter,
        },
        {
          type: "string",
          key: "status",
          label: "Status",
          value: "all",
          defaultValue: "all",
          selection: [
            { label: "All", value: "all" },
            { label: "Inital Reviewed", value: "Inital Reviewed" },
            { label: "Final Reviewed", value: "Final Reviewed" },
          ],
          filter: () => true,
        },
      ],
    };
  },
  components: {
    Filter,
    FilterX,
    DateFilter,
    PrimitiveFilter,
  },
  methods: {
    onFilter() {
      console.log("Filtering");
    },
    applyFilter() {
      console.log("Applying Filter");
    },
    resetFilter() {},
  },
};
</script>
