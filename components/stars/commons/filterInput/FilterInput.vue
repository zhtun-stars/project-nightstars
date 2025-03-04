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
      <FilterButton :filters="filters" @onFilter="onFilter" />
    </div>
    <div>
      <SortingPopover :sorts="sorts" @sort="onSort" :defaultSort="sort" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import SortingPopover from "./SortingPopover.vue";
import type { IFilterSorterColumn, ISort } from "@/lib/interfaces";
import { SORT_ORDER } from "~/lib/constants";
import FilterButton from "../filter-item/FilterButton.vue";
import type { IFilter } from "~/lib/InfFilters";

const props = defineProps({
  sorts: {
    type: Array<IFilterSorterColumn>,
    default: () => [],
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
  filters: {
    type: Array<IFilter>,
    default: () => [],
  },
});

const emit = defineEmits<{
  (e: "onSort", isort: ISort): void;
  (e: "onFilter", filters: IFilter[]): void;
  (e: "onFilterTextChange", filterText: string): void;
}>();

const filterText = ref("");
const sort = ref(props.defaultSort);
let debouncer: NodeJS.Timeout | null = null;

function onInput() {
  if (debouncer) {
    clearTimeout(debouncer);
  }
  debouncer = setTimeout(() => {
    emit("onFilterTextChange", filterText.value);
  }, 300);
}

function onSort(isort: ISort) {
  sort.value = isort;
  emit("onSort", isort);
}

function onFilter(filters: IFilter[]) {
  emit("onFilter", filters);
}
</script>
