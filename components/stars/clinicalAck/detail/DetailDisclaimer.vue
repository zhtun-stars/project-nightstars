<template>
  <div class="text-wrap w-full max-w-full">
    {{ item }}
  </div>
</template>
<script setup lang="ts">
const { item } = defineProps<{ item: string }>();
</script>
