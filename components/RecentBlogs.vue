<template>
  <section class="text-gray-600 body-font">
    <div class="container py-10 mx-auto">
      <div class="flex flex-col w-full mb-10">
        <h1
          class="
            sm:text-3xl
            text-2xl
            uppercase
            font-medium
            title-font
            text-gray-900
          "
        >
          Recent Blogs
        </h1>
      </div>
      <div class="w-full mx-auto">
        <div class="flex flex-wrap -mx-4">
          <blog-item></blog-item>
          <blog-item></blog-item>
          <blog-item></blog-item>
        </div>
      </div>
    </div>
  </section>
</template>