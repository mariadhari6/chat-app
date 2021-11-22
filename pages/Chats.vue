<template>
  <div class="grid grid-flow-col grid-cols-12 overflow-hidden h-screen">
    <side-bar
      class="hidden md:col-span-5 lg:col-span-3 md:block lg:h-screen"
    ></side-bar>

    <chatting
      class="col-span-12 font-metropolis lg:col-span-7 border-r"
    ></chatting>
    <directory class="hidden lg:col-span-2 lg:block font-poppins"></directory>
  </div>
</template>

<script>
import Chatting from "~/components/Chatting.vue";
import Directory from "~/components/Directory.vue";
export default {
  components: { Chatting, Directory },
};
</script>
