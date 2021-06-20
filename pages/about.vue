<template>
  <div>About</div>
</template>
<script lang="ts">
import {AboutMeta} from '../utils/meta-tag'
import Vue from 'vue'
export default Vue.extend({
  head() {
    return AboutMeta()
  }
})
</script>