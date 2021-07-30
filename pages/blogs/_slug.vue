<template>
  <section>
    <div class="text-center mb-10 md:mb-20" v-if="article.thumbnail">
      <img v-if="article.thumbnail" class="w-full" :src="article.thumbnail" :alt="article.title" />
    </div>
    <div class="text-center flex flex-col justify-center items-center">
      <h1 class="title">{{ article.title }}</h1>
      <div class="p-2 pr-3 pl-3 bg-gray-100 text-black rounded-md mb-4 inline-block">{{ article.createdAt | formatDate }}</div>
    </div>
    <hr />

    <article class="main-box">
      <nuxt-content :document="article" class="prose sm:prose-lg lg:prose-xl mt-5 max-w-screen-lg mx-auto" />
      <hr class="mt-10 mb-10" />
      <div class="flex justify-between pb-10 max-w-screen-lg mx-auto">
        <NuxtLink v-if="prev" :to="`/blogs/${prev.slug}`" class="btn" :tooltip="article.title"> Prev blog </NuxtLink>
        <span v-else>&nbsp;</span>
        <NuxtLink v-if="next" :to="`/blogs/${next.slug}`" class="btn" :tooltip="article.title"> Next blog </NuxtLink>
        <span v-else>&nbsp;</span>
      </div>
    </article>
  </section>
</template>
<script lang="ts">
import Vue from 'vue'
import {BlogSingleMeta} from '~/utils/meta-tag'
let dataArticle = {title: '', description: ''}
export default Vue.extend({
  head() {
    return BlogSingleMeta(dataArticle.title, dataArticle.description)
  },
  filters: {
    formatDate: (dateStr: string) => new Date(dateStr).toDateString(),
  },
  async asyncData({$content, params}) {
    const article = (await $content('blogs', params.slug).fetch()) as any
    const [prev = null, next = null] = (await $content('blogs').only(['title', 'slug']).sortBy('createdAt', 'asc').surround(params.slug).fetch()) as Array<any>
    dataArticle.title = article['title']
    dataArticle.description = article['description']
    return {
      article,
      prev,
      next,
    }
  },
})
</script>

<style lang="postcss">
</style>