<script setup>
import { computed } from "vue";
import { Check } from "lucide-vue-next";
import Popover from "~/components/ui/popover/Popover.vue";
import PopoverContent from "~/components/ui/popover/PopoverContent.vue";

import { useSessionStore } from "~/stores/SessionStore";

const sessionStore = useSessionStore();

const handleAdmin = () => {
  sessionStore.setRoles({
    ...sessionStore.roles,
    ISADMIN: !sessionStore.roles.ISADMIN,
  });
};
const handleAMC = () => {
  sessionStore.setRoles({
    ...sessionStore.roles,
    ISAMC: !sessionStore.roles.ISAMC,
  });
};
const handleReviewer = () => {
  sessionStore.setRoles({
    ...sessionStore.roles,
    ISREVIEWER: !sessionStore.roles.ISREVIEWER,
  });
};
const handleTP = () => {
  sessionStore.setRoles({
    ...sessionStore.roles,
    ISTP: !sessionStore.roles.ISTP,
  });
};

const roles = computed(() => sessionStore.roles);
</script>
<template>
  <Popover>
    <PopoverTrigger>
      <ClientOnly>
        <Button>Admin</Button>
      </ClientOnly>
    </PopoverTrigger>
    <PopoverContent>
      <div class="flex flex-col gap-2">
        <div class="flex flex-row">
          <div class="flex-grow-1 flex-auto">
            <Button variant="ghost" @click="handleAdmin">Admin</Button>
          </div>
          <div>
            <Check v-if="roles.ISADMIN" />
          </div>
        </div>
        <div class="flex flex-row">
          <div class="flex-grow-1 flex-auto">
            <Button variant="ghost" @click="handleAMC">AMC</Button>
          </div>
          <div>
            <Check v-if="roles.ISAMC" />
          </div>
        </div>
        <div class="flex flex-row">
          <div class="flex-grow-1 flex-auto">
            <Button variant="ghost" @click="handleReviewer">Reviewer</Button>
          </div>
          <div>
            <Check v-if="roles.ISREVIEWER" />
          </div>
        </div>
        <div class="flex flex-row">
          <div class="flex-grow-1 flex-auto">
            <Button variant="ghost" @click="handleTP">TP</Button>
          </div>
          <div>
            <Check v-if="roles.ISTP" />
          </div>
        </div>
      </div>
    </PopoverContent>
  </Popover>
</template>
