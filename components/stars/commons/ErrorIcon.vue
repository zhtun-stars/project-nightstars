<template>
  <div class="flex flex-row border shadow-sm rounded-md p-4">
    <div class="text-[--star-color]">
      <TriangleAlert />
    </div>
    <div class="pl-4 leading-[30px]">Unable to load data.</div>
  </div>
</template>
<script setup>
import { TriangleAlert } from "lucide-vue-next";
</script>
