<template>
  <Popover>
    <PopoverTrigger as-child>
      <Button variant="ghost">
        <ArrowUpAZ v-if="sort.order === SORT_ORDER.ASC" class="w-4 h-4" />
        <ArrowDownAZ
          v-else-if="sort.order === SORT_ORDER.DESC"
          class="w-4 h-4"
        />
        <SlidersHorizontal v-else class="w-4 h-4" />
      </Button>
    </PopoverTrigger>
    <PopoverContent class="w-80">
      <div class="grid gap-4">
        <div class="space-y-2">
          <h4 class="font-medium leading-none">Sort by</h4>
          <p class="text-sm text-muted-foreground">
            You can sort by one of the following options.
          </p>
        </div>
        <div class="grid gap-2">
          <template v-for="(sortItem, index) in sorts" :key="index">
            <Button
              variant="ghost"
              class="flex items-center justify-between"
              @click="sortIt(sortItem)"
            >
              <span>{{ sortItem.label }}</span>
              <template v-if="sortItem.key === sort.key">
                <ArrowUpAZ
                  v-if="sort.order === SORT_ORDER.ASC"
                  class="w-4 h-4"
                />
                <ArrowDownAZ
                  v-else-if="sort.order === SORT_ORDER.DESC"
                  class="w-4 h-4"
                />
              </template>
            </Button>
          </template>
        </div>
      </div>
    </PopoverContent>
  </Popover>
</template>

<script lang="ts">
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ArrowUpAZ, ArrowDownAZ, SlidersHorizontal } from "lucide-vue-next";
import type { IFilterSorterColumn, ISort } from "@/lib/interfaces";
import { SORT_ORDER } from "~/lib/constants";

export default {
  name: "SortingPopover",
  data(): { sort: ISort } {
    return {
      sort: this.defaultSort,
    };
  },
  computed: {
    SORT_ORDER() {
      return SORT_ORDER;
    },
  },
  emits: { sort: (sort: ISort) => true },
  components: {
    Popover,
    PopoverContent,
    PopoverTrigger,
    ArrowUpAZ,
    ArrowDownAZ,
    SlidersHorizontal,
  },
  props: {
    sorts: {
      type: Array<IFilterSorterColumn>,
      default: [],
    },
    defaultSort: {
      type: Object as () => ISort,
      default: { key: "", order: SORT_ORDER.UNKNOWN },
    },
  },
  methods: {
    sortIt(sort: IFilterSorterColumn) {
      if (this.sort.key === sort.key) {
        switch (this.sort.order) {
          case SORT_ORDER.ASC:
            this.sort.order = SORT_ORDER.DESC;
            break;
          case SORT_ORDER.DESC:
            this.sort.order = SORT_ORDER.UNKNOWN;
            break;
          default:
            this.sort.order = SORT_ORDER.ASC;
            break;
        }
      } else {
        this.sort.key = sort.key;
        this.sort.order = SORT_ORDER.ASC;
      }
      this.$emit("sort", this.sort);
    },
  },
};
</script>
