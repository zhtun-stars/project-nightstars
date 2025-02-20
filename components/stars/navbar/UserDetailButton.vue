<template>
  <ClientOnly>
    <Popover>
      <PopoverTrigger>
        <Avatar>
          <AvatarFallback>
            <CircleUserRound />
          </AvatarFallback>
        </Avatar>
        Text
      </PopoverTrigger>
      <PopoverContent class="w-80">
        <div class="flex flex-col gap-2">
          <div class="flex gap-2">
            <Avatar>
              <AvatarFallback>
                <CircleUserRound />
              </AvatarFallback>
            </Avatar>
            <div>
              <p class="font-bold">User Name</p>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  </ClientOnly>
</template>
<script>
import { ClientOnly } from "#components";
import { CircleUserRound } from "lucide-vue-next";
import Avatar from "@/components/ui/avatar/Avatar.vue";
import AvatarFallback from "@/components/ui/avatar/AvatarFallback.vue";

export default {
  name: "UserDetailButton",
  components: {
    Avatar,
    AvatarFallback,
    CircleUserRound,
    ClientOnly,
  },
};
</script>
