<template>
  <ClientOnly>
    <Button variant="outline" @click="changeMode">
      <Moon v-if="colorMode.value === 'dark'" />
      <Sun v-else />
    </Button>
  </ClientOnly>
</template>

<script setup>
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-vue-next";
import { useSessionStore } from "~/stores/SessionStore";

const { theme, setTheme } = useSessionStore();
const colorMode = useColorMode();

onMounted(() => {
  
});

function changeMode() {
  colorMode.value = colorMode.value === "dark" ? "light" : "dark";
  console.log(colorMode.value)
  setTheme(colorMode.value);
}
</script>
