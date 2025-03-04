<template>
  <ClientOnly>
    <div
      :class="`flex-1 flex flex-col p-3 hover:bg-[--list-color-hover] cursor-pointer odd:bg-[--list-color] rounded-lg mx-1 shadow-md`"
    >
      <div class="">
        <div class="flex-1 relative">
          <div class="font-semibold">
            {{ clinicalData.EventNumber }}
          </div>
          <div :class="`pr-2 flex absolute px-2 ${background}`">
            <TriangleAlert
              class="w-4 text-[--star-color]"
              v-if="background !== 'normal'"
            />
            <div class="font-semibold pl-2">{{ missionDate }}</div>
          </div>
        </div>
        <div class="flex-1 text-sm justify-between flex pb-2">
          <div class="flex-auto flex-grow-1">
            {{ clinicalData.FuLLName }}
          </div>
          <div class="text-right text-xs pl-2 flex-1">
            <TextTooltip :tooltip="`Final reviewed.`" v-if="finalReviewedDate">
              <FileCheck class="w-4 h-4 inline-block text-[--star-hope]" />
              {{ finalReviewedDate }}
            </TextTooltip>
          </div>
          <div class="text-right text-xs pl-2 flex-1">
            <TextTooltip
              :tooltip="`Initial reviewed.`"
              v-if="clinicalData.InitialReviewDate"
            >
              <View class="w-4 h-4 inline-block" />
              {{ initialReviewedDate }}
            </TextTooltip>
          </div>
        </div>
        <div class="bg-[--list-highlight] bg-opacity-30 rounded-full px-2 py-1">
          <div class="inline-block pr-2">
            <CrewShortName v-if="!ISADMIN" :crew="initialReviewer" />
            <CrewShortNameBlue
              v-else-if="clinicalData.InitialReviewDate"
              :crew="initialReviewer"
            />
            <CrewShortNameRed v-else :crew="initialReviewer" />
          </div>
          <div class="inline-block pr-2">
            <CrewShortName v-if="!ISADMIN" :crew="finalReviewer" />
            <CrewShortNameBlue
              v-else-if="clinicalData.FinalReviewDate"
              :crew="finalReviewer"
            />
            <CrewShortNameRed v-else :crew="finalReviewer" />
          </div>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>
<script lang="ts" setup>
import moment from "moment";

import CrewShortName from "@/components/stars/clinicalAck/list/CrewShortName.vue";
import CrewShortNameBlue from "@/components/stars/clinicalAck/list/CrewShortNameBlue.vue";
import CrewShortNameRed from "@/components/stars/clinicalAck/list/CrewShortNameRed.vue";
import { FileCheck, TriangleAlert, View } from "lucide-vue-next";
import TextTooltip from "../../commons/TextTooltip.vue";
import type { Mission } from "~/lib/interfaces";

const { clinicalData } = defineProps<{
  clinicalData: Mission;
}>();

const {
  roles: { ISADMIN },
}: { roles: { ISADMIN: boolean } } = useSessionStore();

const initialReviewedDate = computed((): string => {
  return clinicalData.InitialReviewDate
    ? moment(clinicalData.InitialReviewDate).format("MMM DD")
    : "";
});
const finalReviewedDate = computed((): string => {
  return clinicalData.FinalReviewDate
    ? moment(clinicalData.FinalReviewDate).format("MMM DD")
    : "";
});
const missionDate = computed((): string => {
  return clinicalData.EventDate
    ? moment(clinicalData.EventDate).format("MMM DD")
    : "";
});

const initialReviewer = computed(() => ({
  name: clinicalData.InitialReviewBy,
  reviewDate: clinicalData.InitialReviewDate,
}));
const finalReviewer = computed(() => ({
  name: clinicalData.FinalReviewBy,
  reviewDate: clinicalData.FinalReviewDate,
}));

const background = computed((): "normal" | "overdueI" | "overdueF" => {
  if (
    !clinicalData.FinalReviewDate &&
    moment().diff(moment(clinicalData.EventDate), "days") > 45
  ) {
    return "overdueF";
  } else if (
    !clinicalData.InitialReviewDate &&
    moment().diff(moment(clinicalData.EventDate), "days") > 30
  ) {
    return "overdueI";
  }
  return "normal";
});
</script>
<style lang="scss" scoped>
$border-radius: 8px; // option 1
// $border-radius: 15px; // option 2
.overdueF,
.overdueI,
.normal {
  /* Option 1 */
  -webkit-border-top-right-radius: $border-radius;
  -webkit-border-bottom-left-radius: $border-radius;
  -moz-border-radius-topright: $border-radius;
  -moz-border-radius-bottomleft: $border-radius;
  border-top-right-radius: $border-radius;
  border-bottom-left-radius: $border-radius;
  right: -12px;
  margin-top: -36px;

  /* Option 2 */
  // right: 0px;
  // margin-top: -24px;

  // -webkit-border-radius: $border-radius;
  // -moz-border-radius: $border-radius;
  // border-radius: $border-radius;
}
.overdueI {
  background-color: #f2080866 !important;
  color: white;
}
.overdueF {
  background-color: #f20808aa !important;
  color: white;
}
</style>
