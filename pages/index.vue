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
            <img class="object-fill w-full rounded-full" src="~/assets/images/avatar-1.jpeg">
          </div>
        </div>
      </div>
    </div>
    
    <section class="text-gray-600 body-font">
      <div class="container py-10 mx-auto">
        <div class="flex flex-col w-full mb-10">
          <h1 class="sm:text-3xl text-2xl uppercase font-medium title-font text-gray-900">What I'm Doing</h1>
        </div>
        <div class="flex flex-wrap -m-4">
          <project-item>
            <template #icon>
              <h1>01</h1>
            </template>
            <template #title>
              Backend Development
            </template>
            <template #description>
              Used various languages like <b>Go Lang, Node.js, .Net Core</b> etc. to develop application backend. 
            </template>
          </project-item>
          <project-item>
            <template #icon>
              <h1>02</h1>
            </template>
            <template #title>
              Mobile Development
            </template>
            <template #description>
              Developed multiple mobile applications using <b>Google Flutter, Android, PhoneGap, Ionic</b> etc. 
            </template>
          </project-item>
          <project-item>
            <template #icon>
              <h1>03</h1>
            </template>
            <template #title>
              Frontend Development
            </template>
            <template #description>
              Worked on multiple frontend technologies like <b>Angular, Svelte Kit, Vue.js, Nuxt.js</b> with bootstrap, tailwind css etc.
            </template>
          </project-item>
          <project-item>
            <template #icon>
              <h1>04</h1>
            </template>
            <template #title>
              Object Relationship Model
            </template>
            <template #description>
              Used multiple ORM's with different different technology; for example <b>.Net Core</b> with <b>Entity</b>,with <b>TypeORM</b> and <b>Go with GORM</b>.
            </template>
          </project-item>
          <project-item>
            <template #icon>
              <h1>05</h1>
            </template>
            <template #title>
              Application Optimization
            </template>
            <template #description>
              Improved many application including backend, fronend and mobile using verious techniques. Also upgraded lagacy application to trending technology. 
            </template>
          </project-item>
          <project-item>
            <template #icon>
              <h1>06</h1>
            </template>
            <template #title>
              Solution Provider
            </template>
            <template #description>
              Provided best solution to clients for their project requirement. Ability to choose frameworks based on project needs.
            </template>
          </project-item>
        </div>
      </div>
    </section>
    <!-- <nuxt-content :document="page" class="prose mx-auto" /> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ProjectItem from '~/components/ProjectItem.vue'

export default Vue.extend({
  components: { ProjectItem },
  head() {
    return {
      title: "Santosh Anand",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Home page description'
        }
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
