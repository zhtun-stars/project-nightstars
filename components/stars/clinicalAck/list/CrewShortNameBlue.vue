<template>
  <span class="text-sm bg-[--star-hope] text-[--star-midnight] rounded-full px-2">
    {{ shortName }}
  </span>
</template>
<script>
import { shortTheName } from '@/lib/common-functions';

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
