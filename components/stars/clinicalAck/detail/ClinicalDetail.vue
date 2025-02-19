<template>
  <div class="flex flex-col h-full">
    <div class="flex flex-row">
      <div class="flex-1 font-bold text-xl">Mission</div>
      <div class="flex-1">
      </div>
    </div>
    <div class="">
      <Separator />
    </div>
    <div class="flex-auto flex-grow">bigbody</div>
    <div class="">
      <Separator />
    </div>
    <div class="text-center pt-1">
      <Button variant="secondary" size="lg">Acknowledge</Button>
      <CommentWithView />
    </div>
  </div>
</template>

<script>
import { MessageSquareMore } from "lucide-vue-next";
import ClinicalTabs from "../tabs/ClinicalTabs.vue";
import { Button } from "@/components/ui/button";
import CommentWithView from "./CommentWithView.vue";

export default {
  name: "ClinicalDetail",
  data() {
    return {
      // Add your component data here
    };
  },
  methods: {
    // Add your component methods here
  },
  mounted() {
    // Add your mounted logic here
  },
  components: {
    ClinicalTabs,
    Button,
    CommentWithView,
    MessageSquareMore,
  },
};
</script>

<style scoped>
.clinical-detail {
  /* Add your styles here */
}
</style>
