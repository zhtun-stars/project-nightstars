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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Moon, Sun } from "lucide-vue-next";

const colorMode = useColorMode();

definePageMeta({
  components: [
    Button,
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    Moon,
    Sun,
  ],
});
</script>
<script>
export default {
  name: "ThemeModeSwitch",
  components: {
    Button,
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,

    Moon,
    Sun,
  },
  methods: {
    changeMode() {
      this.$colorMode.preference =
        this.$colorMode.preference === "dark" ? "light" : "dark";
    },
  },
};
</script>
