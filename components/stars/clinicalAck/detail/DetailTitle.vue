<template>
  <div class="font-bold py-4">
    {{ index }} - {{ item }}
    <!-- {{ index }} - {{ item.replaceAll("***", "") }} -->
  </div>
</template>
<script setup lang="ts">
const { item, index } = defineProps<{ item: string; index: number }>();
</script>
