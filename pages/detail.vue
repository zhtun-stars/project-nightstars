<template>
  <div class="h-[100vh] w-[600px] max-w-[600px] flex flex-col">
    <div class="flex-1">
      <DetailDisclaimer :item="parse[0]" />
    </div>
    <div class="flex-1">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
    <div class="flex-1 flex flex-row">
      <div class="flex-1">
        <template v-for="(item, index) of parse">
          <DetailTitle
            :item="item"
            :index="index"
            v-if="item.startsWith('***')"
          />
          <DetailText :item="item" v-else :index="index" />
          <br />
        </template>
      </div>
      <div class="flex-1">
        <template v-for="(item, index) of result">
          <DetailTitle
            :item="item"
            :index="index"
            v-if="item.startsWith('***')"
          />
          <DetailText :item="item" v-else :index="index" />
          <br />
        </template>
      </div>
    </div>
  </div>
</template>
<script setup lang="tsx">
import DetailTitle from "~/components/stars/clinicalAck/detail/DetailTitle.vue";
import text from "./text.json";
import DetailDisclaimer from "~/components/stars/clinicalAck/detail/DetailDisclaimer.vue";
import DetailText from "~/components/stars/clinicalAck/detail/DetailText.vue";
import { retrieveUser } from "~/server/services";

const result = ref<string[]>([]);
let { text: remain } = text;
let res = reactive<string[]>(
  remain.split("    ").map((item) => item.trim().trimStart())
);
result.value = [...res];

const parse = computed((): string[] => {
  // lines 3 was separated apart from line 2.
  // Added this as an extra precaution but all records are the same.
  // to join back the separated lines.
  for (let line = 3; line < res.length; line++) {
    if (!res[line].startsWith("***")) {
      res = res.with(line - 1, `${res[line - 1]}  ${res.splice(line, 1)[0]}`);
    }
  }

  // line 3 *** DOC... ARKS *** Initial
  // it should have separated two lines but it didn't.
  if (res[3].startsWith("***") && !res[3].endsWith("***")) {
    let extra = res[3].split(" ***");
    res = res.with(3, extra[0]);
    res = res.with(4, `${extra[1]} ${res[4]}`);
  }
  return res;
});

import { msalService } from "~/lib/useAuth";
import { msalInstance, state } from "~/lib/msalConfig";
const {
  getToken,
  handleRedirect,
  registerAuthorizationHeaderInterceptor,
} = msalService();

const initialize = async () => {
  try {
    await msalInstance.initialize();
    registerAuthorizationHeaderInterceptor(); // Call the initialize function
  } catch (error) {
    console.error("Initialization error", error);
  }
};

onMounted(async () => {
  await initialize();
  await handleRedirect();
  

  try {
    const token = await getToken();
    console.log("token", token);
    const res = await retrieveUser("zhtun");
    console.log("user", res);
  } catch (error) {
    console.error(error);
  }
});
</script>
