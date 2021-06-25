<template>
  <nuxt-content :document="resume" class="prose mx-auto resume" />
</template>
<style lang="postcss">
  .resume {
    max-width: 80ch !important;
    
  }
  .address p {
    margin-top: 0.2em;
    margin-bottom: .2em;
    @apply text-sm
  }
</style>
<script lang="ts">
import Vue from 'vue'
import { ResumeMeta } from '~/utils/meta-tag'
export default Vue.extend({
  head() {
    return ResumeMeta()
  },
  async asyncData(ctx) {
    const res = await ctx.$content('resume').fetch()
    return { resume:res }
  }
})
</script>