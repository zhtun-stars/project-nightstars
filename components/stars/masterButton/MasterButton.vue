<script setup>
import Popover from "~/components/ui/popover/Popover.vue";
import PopoverContent from "~/components/ui/popover/PopoverContent.vue";
import RolesManager from "./RolesManager.vue";
import MissionData from "./MissionData.vue";
</script>
<template>
  <Popover>
    <PopoverTrigger>
      <ClientOnly>
        <Button>Admin</Button>
      </ClientOnly>
    </PopoverTrigger>
    <PopoverContent class="w-[350px]">
      <div class="flex flex-col">
        <div class="text-center text-xs text-muted-foreground">Roles</div>
        <RolesManager />
        <Separator label="Mission Data" />
        <MissionData />
      </div>
    </PopoverContent>
  </Popover>
</template>
