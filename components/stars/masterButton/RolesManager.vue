<template>
  <div class="flex flex-row">
    <div class="flex-grow-1 flex-auto">
      <Button size="sm" variant="ghost" @click="handleAdmin">Admin</Button>
    </div>
    <div>
      <Check v-if="roles.ISADMIN" class="w-4" />
    </div>
  </div>
  <div class="flex flex-row">
    <div class="flex-grow-1 flex-auto">
      <Button size="sm" variant="ghost" @click="handleAMC">AMC</Button>
    </div>
    <div>
      <Check v-if="roles.ISAMC" class="w-4" />
    </div>
  </div>
  <div class="flex flex-row">
    <div class="flex-grow-1 flex-auto">
      <Button size="sm" variant="ghost" @click="handleReviewer"
        >Reviewer</Button
      >
    </div>
    <div>
      <Check v-if="roles.ISREVIEWER" class="w-4" />
    </div>
  </div>
  <div class="flex flex-row">
    <div class="flex-grow-1 flex-auto">
      <Button size="sm" variant="ghost" @click="handleTP">TP</Button>
    </div>
    <div>
      <Check v-if="roles.ISTP" class="w-4" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { Check } from "lucide-vue-next";

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
