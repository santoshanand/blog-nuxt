<template>
  <div class="w-full md:w-1/3 px-4 pb-12">
    <div class="h-full bg-white rounded overflow-hidden shadow-sm hover:shadow-md relative smooth">
      <nuxt-link :to="`/blogs/${slug}`" class="no-underline hover:no-underline">
        <img :src="`/santosh-blog/${image}`" height="192" class="h-48 w-full rounded-t rounded-r" />
        <div class="p-6 h-auto md:h-48">
          <p class="text-gray-600 text-xs md:text-sm pb-2"></p>
          <div class="font-bold text-xl text-gray-900 pb-3">{{ title }}</div>
          <div class="text-gray-800 w-full h-28 text-base mb-5 overflow-ellipsis">
            {{ description }}
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {BlogsMeta} from '~/utils/meta-tag'
export default Vue.extend({
  props: ['title', 'description', 'image', 'slug', 'blog'],
  head() {
    return BlogsMeta()
  },
  async asyncData({$content}) {
    const tenPosts = await $content('blogs').sortBy('createdAt', 'desc').limit(5).fetch()
    const nextPage = tenPosts.length === 5
    const posts = nextPage ? tenPosts.slice(0, -1) : tenPosts
    return {nextPage, posts}
  },
})
</script>