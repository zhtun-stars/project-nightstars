<template>
  <span class="text-sm text-white bg-[--star-color] rounded-full px-2">
    {{ shortName }}
  </span>
</template>
<script>
import { shortTheName } from "@/lib/common-functions";

export default {
  name: "CrewShortNameRed",
  props: {
    crew: {
      type: Object,
      required: true,
    },
  },
  computed: {
    shortName() {
      return shortTheName(this.crew.name);
    },
  },
};
</script>
