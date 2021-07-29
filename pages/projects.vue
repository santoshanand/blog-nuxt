<template>
  <section class="main-box"></section>
</template>
<script lang="ts">
import Vue from 'vue'
import {ProjectsMeta} from '~/utils/meta-tag'
export default Vue.extend({
  head() {
    return ProjectsMeta()
  },
})
</script>