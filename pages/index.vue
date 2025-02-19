<template>
  <ClientOnly>
    <div class="overflow-hidden h-[100vh] max-h-[100vh]">
      <video autoplay muted loop id="myVideo" class="w-full">
        <source
          src="https://stars.ca/wp-content/uploads/2023/04/NTF-silent-web-banner.mp4"
          type="video/mp4"
        />
      </video>
    </div>
    <div
      class="h-[500px] rounded-md fixed w-[800px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 \ flex bg-[--star-color] shadow-md"
    >
      <div class="flex-1 px-11 py-14 flex h-full flex-col gap-12">
        <p class="text-5xl text-[--foreground] font-bold">
          <img
            src="@/assets/STARS-White-RGB.png"
            alt="Stars Logo"
            class="w-[150px]"
          />
        </p>
        <p class="flex-auto flex-grow-1 text-[--foreground] text-justify px-6">
          STARS is a lifeline for patients in rural, remote, and indigenous
          communities across Western Canada.
        </p>
        <a
          class="text-[--foreground] pb-6 px-6"
          target="_blank"
          href="https://stars.ca/who-we-are/our-north-star/"
          >Learn More <SquareArrowOutUpRight class="inline-block"
        /></a>
      </div>
      <div class="flex-1 p-11 h-full">
        <div
          class="flex flex-col gap-12 bg-white h-full rounded-md p-11 bg-opacity-80"
        >
          <div class="text-center">
            <Fingerprint
              class="inline-block w-12 h-12 text-[--star-midnight]"
            />
          </div>
          <div class="flex-auto flex-grow-1">
            <p class="text-xl text-center">Login with SSO</p>
            <p class="text-center text-muted-foreground text-sm pt-4">
              Use Microsoft SSO for Securer and easier access to your account.
            </p>
          </div>
          <div>
            <Button
              variant=""
              class="w-full bg-[--star-color]"
              size="lg"
              @click="login"
              >Login</Button
            >
          </div>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>
<script setup>
import { Cross, Fingerprint, SquareArrowOutUpRight } from "lucide-vue-next";
definePageMeta({
  layout: "login",
  components: [Fingerprint, SquareArrowOutUpRight],
});
</script>

<script>
export default {
  name: "Login",
  props: {
    // router: {
    //   type: Object,
    // },
  },
  components: {
    Cross,
    Fingerprint,
    SquareArrowOutUpRight,
  },
  methods: {
    login() {
      this.$router.push("/clinical");
    },
  },
};
</script>
