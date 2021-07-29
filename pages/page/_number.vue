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

    <hr class="mt-10 mb-10" />
    <div class="flex justify-between pb-10 mx-auto">
      <nuxt-link :to="prevLink" class="btn">Prev page</nuxt-link>
      <nuxt-link class="btn" v-if="nextPage" :to="`/page/${pageNo + 1}`">Next page</nuxt-link>
    </div>
  </div>
</template>
<script >
import Vue from 'vue'
import {BlogsMeta} from '~/utils/meta-tag'
import {config} from '../../utils/constants'
export default Vue.extend({
  head() {
    return BlogsMeta()
  },
  computed: {
    prevLink() {
      return this.pageNo === 2 ? '/blogs' : `/page/${this.pageNo - 1}`
    },
  },
  async asyncData({$content, params, error}) {
    const pageNo = parseInt(params.number)
    const tenPosts = await $content('blogs')
      .sortBy('createdAt', 'desc')
      .limit(config.pageSize)
      .skip((config.pageSize - 1) * (pageNo - 1))
      .fetch()

    if (!tenPosts.length) {
      return error({statusCode: 404, message: 'No posts found!'})
    }

    const nextPage = tenPosts.length === config.pageSize
    const posts = nextPage ? tenPosts.slice(0, -1) : tenPosts

    return {nextPage, posts, pageNo}
  },
})
</script>