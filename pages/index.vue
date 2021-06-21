<template>
  <div>
    <div class="pt-6 gap-10 pb-4 justify-center items-center md:flex-row flex flex-col-reverse">
      <div class="left w-full md:w-1/2">
        <h1 class="title-text">I'm Santosh Anand</h1>
        <div class="sub-title-text">A technical architect, backend developer, mobile developer and  meditator. On this site I write about my learning and experience.</div>
        <!-- <div class="pt-4">
          <h3 class="text-sm pt-2 font-medium">santoshanand.jogi@gmail.com</h3>
          <h3 class="text-sm pt-2 font-medium ">New Delhi, India</h3>
        </div> -->
        <SocialIcons class="pt-6"></SocialIcons>
        <div class="flex w-full pt-10 sm:pt-10 md:pt-20 pb-10">
          <button class="cv-btn w-full sm:w-auto">Download CV</button>
        </div>
      </div>
      <div class="right w-full md:w-1/2">
        <div class="w-full p-4 sm:p-6 lg:p-8 bg-gray-100 flex rounded-full"> 
          <div class="w-full p-4 sm:p-6 lg:p-8 bg-gray-200 flex rounded-full">
            <img class="object-fill w-full rounded-full" width="300" height="300" alt="Profile image" src="~/assets/images/avatar-1.jpeg">
          </div>
        </div>
      </div>
    </div>
    
    <services></services>
    <!-- <nuxt-content :document="page" class="prose mx-auto" /> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import serviceItem from '~/components/ServiceItem.vue'

export default Vue.extend({
  components: { serviceItem },
  head() {
    return {
      title: "Santosh Anand",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Home page description'
        },
      ]
    }
  },
  async asyncData(ctx) {
    const res = await ctx.$content('hello').fetch()
    return { page:res }
  }
})
</script>

<style lang="postcss">
  .cv-btn {
    @apply pt-3 pl-8 pb-3 pr-8 bg-gray-900 hover:shadow-2xl transition-all text-white rounded-sm
  }
  .title-text {
    @apply lg:text-5xl md:text-4xl text-3xl md:tracking-normal lg:tracking-wide font-bold text-center sm:text-left
  }
  .sub-title-text {
    @apply md:text-lg lg:text-xl text-sm mt-3 tracking-wider text-gray-600
  }
</style>
