<template>
  <section class="main-box">Stocks</section>
</template>
<script lang="ts">
import Vue from 'vue'
import {StocksMeta} from '~/utils/meta-tag'
export default Vue.extend({
  head() {
    return StocksMeta()
  },
})
</script>