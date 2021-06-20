<template>
  <button class="text-gray-500 w-10 h-10 relative focus:outline-none bg-white" @click="open = !open">
    <span class="sr-only">Open main menu</span>
    <div class="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
        <span aria-hidden="true" class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out" :class="{'rotate-45': open,' -translate-y-1.5': !open }"></span>
        <span aria-hidden="true" class="block absolute  h-0.5 w-5 bg-current transform transition duration-500 ease-in-out" :class="{'opacity-0': open } "></span>
        <span aria-hidden="true" class="block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out" :class="{'-rotate-45': open, ' translate-y-1.5': !open}"></span>
    </div>
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    isOpen: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  watch: {
    isOpen: function (newValue, oldValue) {
      this.open = newValue;
    }
  },
  data() {
    return {open: this.isOpen}
  },
})
</script>

<style>

</style>