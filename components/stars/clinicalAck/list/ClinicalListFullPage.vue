<template>
  <div class="flex-auto">
    <ClinicalListView :data="clinicalData" />
  </div>
</template>

<script lang="ts">
import ClinicalListView from "./ClinicalListView.vue";
import type { IClinicalData } from "~/lib/interfaces";
export default {
  name: "ClinicalListFullPage",
  data(): {} {
    return {};
  },
  props: {
    clinicalData: {
      type: Array as PropType<IClinicalData[]>,
      required: true,
    },
  },
  computed: {},
  components: {
    ClinicalListView,
  },
  methods: {},
};
</script>
