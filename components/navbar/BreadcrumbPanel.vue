<template>
  <Breadcrumb class="pt-4 pl-4">
    <BreadcrumbList>
      <BreadcrumbItem><House class="h-4 w-4" /></BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>Clinical QA</BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
</template>

<script lang="ts">
import { House } from "lucide-vue-next";
import Breadcrumb from "../ui/breadcrumb/Breadcrumb.vue";
import BreadcrumbItem from "../ui/breadcrumb/BreadcrumbItem.vue";
import BreadcrumbList from "../ui/breadcrumb/BreadcrumbList.vue";
import BreadcrumbSeparator from "../ui/breadcrumb/BreadcrumbSeparator.vue";

export default {
  name: "BreadcrumbPanel",
  components: {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbSeparator,
    House,
  },
};
</script>
