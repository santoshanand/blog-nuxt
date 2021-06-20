<template>
  <div>Resume</div>
</template>
<script lang="ts">
import Vue from 'vue'
import { ResumeMeta } from '~/utils/meta-tag'
export default Vue.extend({
  head() {
    return ResumeMeta()
  }
})
</script>