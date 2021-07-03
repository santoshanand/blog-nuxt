<template>
  <!-- <nuxt-content :document="page" class="prose mx-auto" /> -->
  <section>
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
    return { page:res }
  },
  
})
</script>