<template>
  <div >
    <Header/>
    <div class="container mx-auto pt-4 pr-6 pl-6 md:pr-10 md:pl-10">
      <Nuxt />
    </div>
  </div>
</template>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
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

</style>
