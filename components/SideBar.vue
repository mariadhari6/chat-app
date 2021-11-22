<template>
  <div
    class="bg-white border md:flex lg:flex-row md:gap-0"
    @click="closeSetting()"
  >
    <div
      class="
        absolute
        bottom-20
        left-7
        duration-1000
        ease-linear
        transform
        -translate-y-1
        transition-transform
      "
      v-if="setting"
    >
      <div class="flex flex-col bg-white shadow-3xl z-50">
        <div class="flex flex-col w-56 px-4 py-4 gap-5 -mb-4 text-xl">
          <a href="" @click.prevent="" class="hover:text-purple-primary"
            >Logout</a
          >
          <a href="" @click.prevent="" class="hover:text-purple-primary"
            >Account</a
          >
        </div>
        <div
          class="
            h-5
            w-5
            bg-white
            transform
            -rotate-45
            translate-y-2 translate-x-1
          "
        ></div>
      </div>
    </div>
    <div
      class="
        hidden
        lg:flex
        bg-gray-50
        flex-col
        md:justify-between
        items-center
        py-4
        px-2
      "
    >
      <div class="items-center flex flex-col">
        <button
          class="
            bg-purple-primary
            text-white text-xl
            font-asap font-bold
            py-3
            px-5
            rounded-xl
          "
        >
          Q
        </button>
        <div class="flex flex-col gap-4 mt-8">
          <nuxt-link to="/" class="hover:text-purple-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </nuxt-link>
          <nuxt-link to="/" class="hover:text-purple-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
              /></svg
          ></nuxt-link>
          <nuxt-link to="/" class="hover:text-purple-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
              /></svg
          ></nuxt-link>
          <nuxt-link to="/" class="hover:text-purple-primary"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              /></svg
          ></nuxt-link>
          <nuxt-link to="/" class="hover:text-purple-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              /></svg
          ></nuxt-link>
        </div>
      </div>
      <button class="hover:text-purple-primary" @click="setting = !setting">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </button>
    </div>
    <friends class="flex flex-col justify-start font-poppins overflow-x-hidden">
    </friends>
  </div>
</template>

<script>
import Friends from "./Friends..vue";
import VueScreenSize from "vue-screen-size";
export default {
  components: { Friends },
  data() {
    return {
      setting: false,
      width: this.$vssWidth,
    };
  },
  mixins: [VueScreenSize.VueScreenSizeMixin],
  methods: {
    closeSetting() {
      this.width = this.$vssWidth;
      if (this.width < 1024) {
        this.setting = false;
      }
    },
  },
};
</script>
