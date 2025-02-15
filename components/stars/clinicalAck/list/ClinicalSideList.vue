<template>
  <div class="flex flex-col">
    <FilterInput :sorts="sorts" @onSort="onSort" @onFilter="onFilter" />
  </div>
  <div class="flex-auto">
    <ClinicalListView />
  </div>
</template>

<script>
import FilterInput from "~/components/stars/commons/filterInput/FilterInput.vue";
import ClinicalListView from "./ClinicalListView.vue";

const sorts = [
  { key: "mission", label: "Mission" },
  { key: "date", label: "Date" },
  { key: "physician", label: "Physician" },
];

export default {
  name: "ClinicalSideList",
  data() {
    return {
      sorts,
    };
  },
  components: {
    FilterInput,
    ClinicalListView,
  },
  methods: {
    onSort(sort) {
      //   console.log(sort);
    },
    onFilter(filter) {
      //   console.log(filter);
    },
  },
};
</script>
