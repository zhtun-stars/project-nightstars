<template>
  <div class="flex flex-row">
    <div>
      <div role="status">
        <LoadingSvg />
      </div>
    </div>
    <div class="pl-4 leading-[30px]">loading ...</div>
  </div>
</template>
<script setup>
import LoadingSvg from "./LoadingSvg.vue";
</script>
