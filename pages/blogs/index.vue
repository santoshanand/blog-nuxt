<template>
  <div class="main-box">
    <div class="text-center">
      <h1 class="title">Blogs</h1>
    </div>
    <section class="flex flex-row flex-wrap -m-2">
      <blog-item
        v-for="post in posts"
        :key="post.slug"
        :blog="post"
        :slug="post.slug"
        :image="post.thumbnail"
        :description="post.description"
        :title="post.title"
      />
    </section>
    <!-- <section id="next" v-if="nextPage">
      <nuxt-link to="page/2"> Next page </nuxt-link>
    </section> -->
    <hr class="mt-10 mb-10" />
    <div class="flex justify-between pb-10 mx-auto">
      <span></span>
      <nuxt-link class="btn" to="page/2"> Next page </nuxt-link>
    </div>
    <!-- <NuxtLink v-if="prev" :to="{name: 'blog-slug', params: {slug: prev.slug}}">
      {{ prev.title }}
    </NuxtLink>

    <NuxtLink v-if="next" :to="{name: 'blog-slug', params: {slug: next.slug}}">
      {{ next.title }}
    </NuxtLink> -->
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import {BlogsMeta} from '~/utils/meta-tag'
import {config} from '../../utils/constants'
export default Vue.extend({
  head() {
    return BlogsMeta()
  },
  async asyncData({$content}) {
    const tempPosts = await $content('blogs').sortBy('createdAt', 'desc').limit(config.pageSize).fetch()
    const nextPage = tempPosts.length === config.pageSize
    const posts = nextPage ? tempPosts.slice(0, -1) : tempPosts
    return {nextPage, posts}
  },
})
</script>