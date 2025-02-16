<template>
  <span class="text-sm">
    {{ shortName }}
  </span>
</template>
<script>
export default {
  name: "CrewShortName",
  props: {
    crew: {
      type: Object,
      required: true,
    },
  },
  computed: {
    shortName() {
      //   return this.crew.name
      //     .split(" ")
      //     .map((n) => n[0])
      //     .join("");
      return this.crew.name.length > 10
        ? this.crew.name.substring(0, 9) + '...'
        : this.crew.name;
    },
  },
};
</script>
