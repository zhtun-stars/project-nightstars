<template>
  <ClientOnly>
    <Button variant="outline" @click="changeMode()">
      <Moon v-if="colorMode.preference === 'dark'" />
      <Sun v-else />
    </Button>
  </ClientOnly>
</template>

<script setup>
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-vue-next";
import { useColorMode } from '@vueuse/core';

const colorMode = useColorMode();

function changeMode() {
  colorMode.value = colorMode.value === "dark" ? "light" : "dark";
}
</script>
