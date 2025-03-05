<template>
  <ClientOnly>
    <Popover>
      <PopoverTrigger>
        <Button variant="ghost" class="w-full" size="sm">
          <Filter />
        </Button>
      </PopoverTrigger>
      <PopoverContent class="w-[400px] mt-2">
        <div class="flex flex-col gap-4">
          <div v-for="(filter, index) in filters" :key="filter.key">
            <label class="text-sm font-semibold">{{ filter.label }}:</label>
            <DateFilter
              :filter="filter"
              v-if="filter.type == 'dates'"
              @filterValueChange="onFilter"
              :index="index"
            />
            <PrimitiveFilter
              :filter="filter"
              v-else
              @filterValueChange="onFilter"
              :index="index"
            />
          </div>
        </div>
        <PopoverClose asChild>
          <div class="flex justify-center pt-4">
            <Button @click="onSubmit">Close</Button>
          </div>
        </PopoverClose>
      </PopoverContent>
    </Popover>
  </ClientOnly>
</template>
<script lang="ts">
import { Filter, FilterX } from "lucide-vue-next";
import { dateFilter, stringFilter, type IFilter } from "@/lib/InfFilters";
import DateFilter from "../filter-item/DateFilter.vue";
import PrimitiveFilter from "../filter-item/PrimitiveFilter.vue";
import { PopoverClose } from "radix-vue";

export default {
  name: "FilterButton",
  data(): { filterValues: IFilter[] } {
    return {
      filterValues: this.filters,
    };
  },
  props: {
    filters: {
      type: Array as () => IFilter[],
      required: true,
    },
  },
  components: {
    DateFilter,
    Filter,
    FilterX,
    PopoverClose,
    PrimitiveFilter,
  },
  emits: {
    onFilter: (filters: IFilter[]) => true,
  },
  methods: {
    onFilter(
      index: number,
      filter: IFilter,
      value: string | number | { startDate: Date; endDate: Date }
    ) {
      filter.value = value;
      this.filterValues[index] = filter;
    },
    resetFilter() {},
    onSubmit() {
      this.$emit("onFilter", this.filterValues);
    },
  },
};
</script>
