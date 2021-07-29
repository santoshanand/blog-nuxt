<template>
  <footer class="h-16 text-sm bg-black flex text-white justify-center items-center">© Santosh Anand {{ year }}</footer>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      year: new Date().getFullYear(),
    }
  },
})
</script>