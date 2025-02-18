<template>
  <div class="flex pt-6 px-4 flex-grow-1 flex-auto h-[calc(100vh)]">
    <div class="max-w-[300px] w-[300px]">
      <ClinicalSideList />
    </div>
    <div class="px-4">
      <Separator orientation="vertical" />
    </div>
    <div class="flex-1">
      <ClinicalDetail />
    </div>
  </div>
</template>

<script>
import Separator from "~/components/ui/separator/Separator.vue";
import ClinicalDetail from "./detail/ClinicalDetail.vue";
import ClinicalSideList from "./list/ClinicalSideList.vue";

export default {
  name: "ClinicalPage",
  data() {
    return {
      clinicalAck: {
        title: "Clinical Acknowledgement",
        content: "This is the clinical acknowledgement content",
      },
    };
  },
  components: {
    ClinicalSideList,
    ClinicalDetail,
    Separator,
  },
};
</script>
