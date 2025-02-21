<template>
  <div
    class="border order-ring border-gray-300 p-2 flex justify-between h-[48px] leading-[30px] mb-2"
  >
    <div class="flex-auto flex-grow-1">
      <input
        class="focus:outline-none bg-inherit"
        type="text"
        v-model="filterText"
        @input="onInput"
        placeholder="Search by Mission..."
        :maxlength="maxLength"
      />
    </div>
    <div>
      <FilterButton />
    </div>
    <div>
      <SortingPopover :sorts="sorts" @sort="onSort" :defaultSort="sort" />
    </div>
  </div>
</template>

<script lang="ts">
import { Button } from "@/components/ui/button";
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import SortingPopover from "./SortingPopover.vue";
import type { IFilterSorterColumn, ISort, IFilter } from "@/lib/interfaces";
import { SORT_ORDER } from "~/lib/constants";
import FilterButton from "../filter-item/FilterButton.vue";

interface IFIlterSorter {
  filterText: string;
  sort: ISort;
  debouncer: NodeJS.Timeout | null;
}

export default {
  data(): IFIlterSorter {
    return {
      filterText: "",
      sort: this.defaultSort,
      debouncer: null,
    };
  },
  components: {
    Button,
    FilterButton,
    SortingPopover,
    Popover,
    PopoverTrigger,
  },
  emits: {
    onSort: (sort: ISort) => true,
    onFilter: (filter: IFilter) => true,
    onFilterTextChange: (filterText: string) => true,
  },
  methods: {
    onInput() {
      if (this.debouncer) {
        clearTimeout(this.debouncer);
      }
      this.debouncer = setTimeout(() => {
        this.$emit("onFilterTextChange", this.filterText);
      }, 300);
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
    maxLength: {
      type: Number,
      default: 20,
    },
    defaultSort: {
      type: Object as () => ISort,
      default: () => ({
        key: "",
        order: SORT_ORDER.UNKNOWN,
      }),
    },
  },
};
</script>
