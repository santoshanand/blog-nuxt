<template>
<header class="text-gray-600 body-font shadow-sm">
  <div class="container mx-auto flex flex-wrap pt-5 pb-5 pr-4 pl-4 md:pr-8 md:pl-8 flex-col md:flex-row items-start md:items-center">
    <div class="flex items-stretch sm:w-auto w-full justify-between">
      <NuxtLink to="/" class="flex title-font font-medium items-center text-gray-900 md:mb-0">
        <span class="ml-3 text-xl">Santosh Anand</span>
      </NuxtLink>
      <div class="sm:hidden" @click="open = !open">
        <CloseButton :isOpen="open"></CloseButton>
      </div>
    </div>
    <nav class="md:ml-auto hidden flex-wrap items-center text-base justify-center sm:flex">
      <NuxtLink to="/" class="mr-5 cursor-pointer hover:text-gray-900">Home</NuxtLink>
      <NuxtLink to="/blogs" class="mr-5 cursor-pointer hover:text-gray-900">Blogs</NuxtLink>
      <NuxtLink to="/projects" class="mr-5 cursor-pointer hover:text-gray-900">Projects</NuxtLink>
      <NuxtLink to="/stocks" class="mr-5 cursor-pointer hover:text-gray-900">Stocks</NuxtLink>
      <NuxtLink to="/resume" class="mr-5 cursor-pointer hover:text-gray-900">Resume</NuxtLink>
      <NuxtLink to="/about" class="mr-5 cursor-pointer hover:text-gray-900">About Me</NuxtLink>
    </nav>
    <nav class="flex sm:hidden" @click="open = false">
      <div :class="open ? '' : 'hidden'" class="absolute animated fadeInUp right-0 w-full mt-2 origin-top-right rounded-md shadow-lg">
        <div class="px-2 pb-4 bg-white rounded-md shadow dark-mode:bg-gray-800">
          <NuxtLink to="/" class="m-btn">Home</NuxtLink>
          <NuxtLink to="/blogs" class="m-btn">Blogs</NuxtLink>
          <Nuxt-Link to="/projects" class="m-btn">Projects</Nuxt-Link>
          <Nuxt-Link to="/stocks" class="m-btn">Stocks</Nuxt-Link>
          <Nuxt-Link to="/resume" class="m-btn">Resume</Nuxt-Link>
          <Nuxt-Link to="/about" class="m-btn">About</Nuxt-Link>
        </div>
      </div>
    </nav>
  </div>
</header>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {open: false}
  }
})
</script>

<style lang="postcss">
  .m-btn {
    @apply block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-sm md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200
  }
</style>