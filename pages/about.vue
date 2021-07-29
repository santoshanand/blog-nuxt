<template>
  <section class="main-box">
    <div class="text-center flex flex-col justify-center items-center">
      <h1 class="title">About Me</h1>
    </div>
    <hr class="mb-10" />
    <nuxt-content :document="page" class="prose mx-auto mb-20" />
  </section>
</template>
<script lang="ts">
import {AboutMeta} from '../utils/meta-tag'
import Vue from 'vue'
export default Vue.extend({
  head() {
    return AboutMeta()
  },
  async asyncData(ctx) {
    const res = await ctx.$content('about').fetch()
    return {page: res}
  },
})
</script>