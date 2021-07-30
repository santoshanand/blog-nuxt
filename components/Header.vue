<template>
  <header class="text-gray-600 body-font shadow-sm">
    <div class="box">
      <div class="flex items-center sm:w-auto w-full justify-between">
        <NuxtLink to="/" class="hero-link">
          <span class="ml-3 text-xl font-bold">Santosh Anand</span>
        </NuxtLink>
        <div class="sm:hidden" @click="open = !open">
          <CloseButton :isOpen="open"></CloseButton>
        </div>
      </div>
      <nav class="nav-box">
        <app-search-input />
        <NuxtLink to="/" class="nav-link">Home</NuxtLink>
        <NuxtLink to="/blogs" class="nav-link">Blogs</NuxtLink>
        <!-- <NuxtLink to="/projects" class="nav-link">Projects</NuxtLink> -->
        <!-- <NuxtLink to="/stocks" class="nav-link">Stocks</NuxtLink> -->
        <!-- <NuxtLink to="/resume" class="nav-link">Resume</NuxtLink> -->
        <NuxtLink to="/about" class="nav-link">About Me</NuxtLink>
      </nav>
      <nav class="flex sm:hidden" @click="open = false">
        <div :class="open ? '' : 'hidden'" class="mobile-link animated">
          <div class="mobile-div">
            <NuxtLink to="/" class="m-btn">Home</NuxtLink>
            <NuxtLink to="/blogs" class="m-btn">Blogs</NuxtLink>
            <!-- <Nuxt-Link to="/projects" class="m-btn">Projects</Nuxt-Link> -->
            <!-- <Nuxt-Link to="/stocks" class="m-btn">Stocks</Nuxt-Link> -->
            <!-- <Nuxt-Link to="/resume" class="m-btn">Resume</Nuxt-Link> -->
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
  watch: {
    $route(to, from) {
      this.currentPath = to.path
    },
  },
  data() {
    return {
      open: false,
      currentPath: '/',
    }
  },
})
</script>

<style lang="postcss">
.m-btn {
  @apply block px-4 py-2 mt-2 text-sm bg-transparent rounded-sm md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200;
}
.nuxt-link-exact-active {
  @apply text-black;
}
.box {
  @apply container mx-auto  flex flex-wrap  pt-5  pb-5  pr-4  pl-4  md:pr-8  md:pl-8  flex-col  md:flex-row  items-start  md:items-center;
}
.nav-box {
  @apply md:ml-auto hidden flex-wrap items-center text-base justify-center sm:flex;
}
.nav-link {
  @apply mr-5 cursor-pointer hover:text-gray-900;
}
.hero-link {
  @appy flex title-font font-medium items-center text-gray-900 md:mb-0;
}
.mobile-link {
  @apply absolute z-50 right-0 w-full mt-2 origin-top-right rounded-md shadow-lg;
}
.mobile-div {
  @apply px-2 pb-4 bg-white rounded-md shadow;
}
</style>