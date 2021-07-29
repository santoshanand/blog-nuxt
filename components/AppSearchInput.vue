<template>
  <div>
    <input v-model="searchQuery" type="search" class="h-8 pr-3 pl-3 rounded-3xl border border-solid mr-4" autocomplete="off" placeholder="Search" />
    <ul v-if="blogs.length" class="z-50 p-4 absolute rounded-lg bg-gray-50">
      <li v-for="blog of blogs" :key="blog.slug" @click="searchQuery = ''">
        <NuxtLink class="m-btn" :to="`/blogs/${blog.slug}`">
          {{ blog.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      blogs: [],
    }
  },
  watch: {
    async searchQuery(searchQuery) {
      if (!searchQuery) {
        this.blogs = []
        return
      }
      this.blogs = await this.$content('blogs').limit(6).search(searchQuery).fetch()
    },
  },
}
</script>

<style lang="postcss">
.m-btn {
  @apply block px-4 py-2 mt-2 text-sm bg-transparent rounded-lg md:mt-0 hover:text-black focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200;
}
</style>