<template>
  <div>
    <Header />
    <!-- <div class="container mx-auto pt-4 pr-6 pl-6 md:pr-10 md:pl-10 min-h-screen"> -->
    <Nuxt />
    <!-- </div> -->
    <Bottom></Bottom>
  </div>
</template>

<style lang="postcss">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  outline: 0;
}
*:focus {
  outline: 0 !important;
}
.container-fluid {
  width: calc(100vw - 64px);
}
.title {
  @apply max-w-screen-md inline-block text-center mt-8 lg:text-5xl md:text-4xl sm:text-3xl text-2xl w-full font-extrabold mb-8 lg:mb-10;
}
.main-box {
  @apply container mx-auto pt-4 pr-6 pl-6 md:pr-10 md:pl-10 min-h-screen;
}
.btn {
  @apply pt-3 pl-8 pb-3 pr-8 bg-gray-900 transform hover:shadow-xl transition-all text-white rounded-sm;
}
</style>
