<template>
  <ClientOnly>
    <div
      class="flex-1 flex flex-col p-3 hover:bg-[--list-color-hover] cursor-pointer odd:bg-[--list-color] rounded-lg mx-1"
    >
      <div class="flex flex-col max-h-[calc(100vh-100px)] overflow-auto">
        <div class="flex-1 flex justify-between">
          <div class="flex-1 font-semibold">
            {{ clinicalData.mission }}
          </div>
          <div
            class="flex-1 text-right text-xs"
            v-if="clinicalData.peerReviewed"
          >
            <TextTooltip :tooltip="'Peer reviewed it.'">
              <View class="w-4 h-4 inline-block text-[--star-midnight]" />
              {{ formatDate }}
            </TextTooltip>
          </div>
          <div class="flex-1 text-right text-xs">
            <TextTooltip tooltip="You acknowledged it.">
              <FileCheck class="w-4 h-4 inline-block text-[--star-hope]" />
            </TextTooltip>
            {{ shortDate }}
          </div>
        </div>
        <div class="flex-1 text-sm justify-between flex">
          <div class="flex-1">
            {{ clinicalData.physician }}
          </div>
          <div class="flex-1 text-right text-xs">
            {{ physicianReviewDate }}
          </div>
        </div>
        <div class="flex">
          <div
            v-for="(crew, key) in clinicalData.crews"
            :key="key"
            class="flex-1"
          >
            <CrewShortName :crew="crew" />
          </div>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>
<script>
import moment from "moment";

import CrewShortName from "@/components/stars/clinicalAck/list/CrewShortName.vue";
import { FileCheck, View } from "lucide-vue-next";
import TextTooltip from "../../commons/TextTooltip.vue";
import { formatDate } from "~/lib/utils";

export default {
  name: "ClinicalListItem",
  props: {
    clinicalData: {
      type: Object,
      required: true,
    },
  },
  components: {
    CrewShortName,
    FileCheck,
    View,
    TextTooltip,
  },
  computed: {
    shortDate() {
      return moment(this.clinicalData.date).format("MMM DD");
    },
    physicianReviewDate() {
      return moment(this.clinicalData.physicianDate).format("MMM DD");
    },
    formatDate() {
      return moment(this.clinicalData.physicianDate).format("MMM DD");
    },
  },
};
</script>
