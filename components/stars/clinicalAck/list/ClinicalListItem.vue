<template>
  <ClientOnly>
    <div
      class="flex-1 flex flex-col p-3 hover:bg-[--list-color-hover] cursor-pointer odd:bg-[--list-color] rounded-lg mx-1"
    >
      <div class="flex flex-col max-h-[calc(100vh-100px)] overflow-auto">
        <div class="flex-1 flex justify-between">
          <div class="flex-1 flex-grow-1 font-semibold">
            {{ clinicalData.mission }}
          </div>
          <div class="text-xs">{{ missionDate }}</div>
        </div>
        <div class="flex-1 text-sm justify-between flex">
          <div class="flex-1 flex-grow-1">
            {{ clinicalData.physician }}
          </div>
          <div
            class="text-right text-xs pl-2"
            v-if="clinicalData.initialReviewedDate"
          >
            <TextTooltip :tooltip="`Initial reviewed.`">
              <View class="w-4 h-4 inline-block" />
              {{ initialReviewedDate }}
            </TextTooltip>
          </div>
          <div
            class="text-right text-xs pl-2"
            v-if="clinicalData.finalReviewedDate"
          >
            <TextTooltip :tooltip="`Final reviewed.`">
              <FileCheck class="w-4 h-4 inline-block text-[--star-hope]" />
              {{ finalReviewedDate }}
            </TextTooltip>
          </div>
        </div>
        <div class="">
          <div
            v-for="(crew, key) in clinicalData.crews"
            :key="key"
            class="inline-block pr-2"
          >
            <CrewShortName v-if="!isAdmin" :crew="crew" />
            <CrewShortNameBlue v-else-if="crew.reviewDate" :crew="crew" />
            <CrewShortNameRed v-else :crew="crew" />
          </div>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>
<script>
import moment from "moment";

import CrewShortName from "@/components/stars/clinicalAck/list/CrewShortName.vue";
import CrewShortNameBlue from "@/components/stars/clinicalAck/list/CrewShortNameBlue.vue";
import CrewShortNameRed from "@/components/stars/clinicalAck/list/CrewShortNameRed.vue";
import { FileCheck, View } from "lucide-vue-next";
import TextTooltip from "../../commons/TextTooltip.vue";

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
    CrewShortNameBlue,
    CrewShortNameRed,
    FileCheck,
    View,
    TextTooltip,
  },
  methods: {},
  computed: {
    initialReviewedDate() {
      return moment(this.clinicalData.date).format("MMM DD");
    },
    finalReviewedDate() {
      return moment(this.clinicalData.physicianDate).format("MMM DD");
    },
    missionDate() {
      return moment(this.clinicalData.date).format("MMM DD");
    },
    isAdmin() {
      return true;
    },
  },
};
</script>
