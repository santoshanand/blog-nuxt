<template>
  <div class="p-4 sm:w-1/2 lg:w-1/3">
    <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
      <div class="flex items-center mb-3">
        <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-gray-900 text-white flex-shrink-0">
          <slot name="icon">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </slot>
        </div>
        <h2 class="text-gray-900 text-lg title-font font-medium">
          <slot name="title"></slot>
        </h2>
      </div>
      <div class="flex-grow">
        <p class="leading-relaxed text-base">
          <slot name="description"></slot>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
})
</script>

<style>

</style>