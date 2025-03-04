<template>
  <ClientOnly>
    <Popover>
      <PopoverTrigger>
        <div class="flex">
          <div class="-mt-1">
            <Avatar>
              <AvatarFallback>
                <CircleUserRound />
              </AvatarFallback>
            </Avatar>
          </div>
          <div class="flex-auto flex-grow-1 text-[--foreground] -mt-2">
            <div class="font-bold text-md leading-[48px] pr-2">
              {{ fullname }}
            </div>
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent class="w-[200px]">
        <div class="flex flex-col">
          <div class="flex-1 text-center">
            <Button variant="link" @click="logout">Logout</Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  </ClientOnly>
</template>
<script setup lang="ts">
import { CircleUserRound } from "lucide-vue-next";
import Avatar from "~/components/ui/avatar/Avatar.vue";
import { useSessionStore } from "~/stores/SessionStore";
import { PAGES } from "~/lib/constants";


const logout = () => {
  navigateTo(PAGES.logout);
}
const store = useSessionStore();
const fullname = computed(()=> store.fullName);
</script>
