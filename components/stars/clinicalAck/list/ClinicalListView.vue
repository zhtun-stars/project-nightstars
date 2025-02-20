<template>
  <div class="flex flex-col max-h-[calc(100vh-210px)] overflow-auto gap-2 thin-scrollbar">
    <ClinicalListItem
      v-for="(cData, key) in data"
      :key="key"
      :clinicalData="cData"
    />
  </div>
</template>

<script>
import ClinicalListItem from "./ClinicalListItem.vue";

export default {
  name: "ClinicalListView",
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      listData: this.data,
    };
  },
  components: {
    ClinicalListItem,
  },
  computed: {
  },
};
</script>
<style lang="scss" scoped>

</style>
