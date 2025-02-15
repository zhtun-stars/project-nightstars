<template>
  <div class="border order-ring border-gray-300 p-2 flex justify-between">
    <div>
      <input
        class="focus:outline-none"
        type="text"
        v-model="filterText"
        @input="onInput"
        placeholder="Search by Mission..."
      />
    </div>
    <div>
      <!-- <Button variant="ghost" size="icon">
            <Filter class="w-4 h-4" />
            <FilterX class="w-4 h-4" />
        </Button> -->
      <SortingPopover :sorts="sorts" @sort="onSort" />
    </div>
  </div>
</template>

<script lang="ts">
import { Button } from "@/components/ui/button";
import { Filter, FilterX } from "lucide-vue-next";
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import SortingPopover from "./SortingPopover.vue";
import type { IFilterSorterColumn, ISort, IFilter } from "@/lib/interfaces";
import { SORT_ORDER } from "~/lib/constants";

interface IFIlterSorter {
  filterText: String;
  sort: ISort;
}

export default {
  data(): IFIlterSorter {
    return {
      filterText: "",
      sort: {
        key: "",
        order: SORT_ORDER.UNKNOWN,
      },
    };
  },
  components: {
    Button,
    Filter,
    FilterX,
    SortingPopover,
    Popover,
    PopoverTrigger,
  },
  emits: { onSort: (sort: ISort) => true, onFilter: (filter: IFilter) => true },
  methods: {
    onInput() {
      // this.$emit('input', this.filterText);
    },
    onSort(sort: ISort) {
      this.sort = sort;
      this.$emit("onSort", sort);
    },
  },
  props: {
    sorts: {
      type: Array<IFilterSorterColumn>,
      default: [],
    },
  },
};
</script>
