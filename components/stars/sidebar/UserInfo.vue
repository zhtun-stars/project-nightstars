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
              {{ username }}
            </div>
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent class="w-[200px]">
        <div class="flex flex-col">
          <div class="flex-1 text-center">
            <a href="./">Logout</a>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  </ClientOnly>
</template>
<script>
import { CircleUserRound } from "lucide-vue-next";
import Avatar from "~/components/ui/avatar/Avatar.vue";
import { useSessionStore } from "~/stores/SessionStore";
import { mapActions, mapState } from "pinia";
// import UserService from "~/services/UserService";

export default {
  name: "UserInfo",
  components: {
    Avatar,
    CircleUserRound,
  },
  data() {
    return {
    };
  },
  methods: {
    ...mapActions(useSessionStore, ["setUserInfo"]),
  },
  computed: {
    ...mapState(useSessionStore, ["username"]),
  },
  async mounted() {
  },
};
</script>
