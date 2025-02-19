<template>
  <ClientOnly>
    <div class="float-right">
      <Popover>
        <PopoverTrigger>
          <Button variant="outline" class="relative" size="icon">
            <MessageSquareMore />
            <span
              class="absolute -top-2 -right-2 rounded-full bg-[--star-color] w-4 h-4 lading-[16px] text-xs block text-[--foreground]"
              >{{ commentsCount }}</span
            >
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <div class="p-4">
            <div class="flex items-center justify-between">
              <div class="text-lg font-bold">Comments</div>
              <div class="text-sm text-muted-foreground">
                {{ commentsCount }}
              </div>
            </div>
            <div class="grid gap-2">
              <template v-for="(comment, index) in data" :key="index">
                <div
                  class="flex justify-between space-x-4 [&:not(:nth-last-child(-n+1))]:border-b border-gray-300 pb-2"
                >
                  <div class="space-y-1">
                    <h4
                      :class="[
                        'text-sm',
                        'font-semibold',
                        `text-${index % 2 === 1 ? 'right' : 'left'}`,
                      ]"
                    >
                      @vuejs
                    </h4>
                    <p class="text-sm">
                      Progressive JavaScript framework for building modern web
                      interfaces.
                    </p>
                    <div class="flex items-center pt-2">
                      <CalendarDays class="mr-2 h-4 w-4 opacity-70" />
                      <span class="text-xs text-muted-foreground">
                        Joined January 2014
                      </span>
                    </div>
                  </div>
                </div>
              </template>
            </div>
          </div></PopoverContent
        >
      </Popover>
    </div>
  </ClientOnly>
</template>
<script>
import { COMMENTS } from "@/lib/mockdata";
import { CalendarDays, MessageSquareMore } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default {
  name: "CommentWithView",
  data() {
    return {
      data: COMMENTS,
    };
  },
  components: {
    CalendarDays,
    MessageSquareMore,
    Popover,
    PopoverContent,
    PopoverTrigger,
  },
  computed: {
    commentsCount() {
      return this.data.length;
    },
  },
};
</script>
