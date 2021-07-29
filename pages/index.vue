<template>
  <section class="main-box">
    <div class="content-box">
      <div class="left w-full md:w-1/2">
        <h1 class="title-text">I'm Santosh Anand</h1>
        <div class="sub-title-text">
          Technical Architect, Backend, Mobile, Web, OpenSource developer and meditator. On this site I write about my learning and experience.
        </div>
        <!-- <div class="pt-4">
          <h3 class="text-sm pt-2 font-medium">santoshanand.jogi@gmail.com</h3>
          <h3 class="text-sm pt-2 font-medium ">New Delhi, India</h3>
        </div> -->
        <SocialIcons class="pt-6"></SocialIcons>
        <div class="flex w-full pt-10 sm:pt-10 md:pt-20 pb-10">
          <a rel="noopener" href="/santosh-resume.pdf" target="__blank" class="btn text-center w-full sm:w-auto">Download CV</a>
        </div>
      </div>
      <div class="right md:w-1/2">
        <div class="rounded-sm flex justify-end items-center">
          <div class="p-4 rounded-sm sm:p-6 lg:p-8 bg-gray-100 flex">
            <img class="rounded-sm" width="360" height="360" alt="Profile image" src="~/assets/images/avatar-1.jpeg" />
          </div>
        </div>
      </div>
    </div>

    <services></services>
    <works></works>
    <!-- <recent-blogs></recent-blogs> -->
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="postcss">
.title-text {
  @apply lg:text-5xl md:text-4xl text-3xl md:tracking-normal lg:tracking-wide font-bold text-center sm:text-left;
}
.sub-title-text {
  @apply md:text-lg lg:text-xl text-sm mt-3 tracking-wider text-gray-600;
}
.content-box {
  @apply pt-6 gap-10 pb-4 justify-center items-center md:flex-row flex flex-col-reverse;
}
</style>
