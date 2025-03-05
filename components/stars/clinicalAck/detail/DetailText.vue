<template>
  <div class="text-wrap w-full max-w-full">{{ index }} - {{ item }}</div>
</template>
<script setup lang="ts">
const { item, index } = defineProps<{ item: string; index: number }>();
</script>
