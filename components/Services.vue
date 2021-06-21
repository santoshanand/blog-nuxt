<template>
  <section class="text-gray-600 body-font">
      <div class="container py-10 mx-auto">
        <div class="flex flex-col w-full mb-10">
          <h1 class="sm:text-3xl text-2xl uppercase font-medium title-font text-gray-900">What I'm Doing</h1>
        </div>
        <div class="flex flex-wrap -m-4">
          <service-item>
            <template #icon>
              <h1>01</h1>
            </template>
            <template #title>
              Backend Development
            </template>
            <template #description>
              Used various languages like <b>Go Lang, Node.js, .Net Core</b> etc. to develop application backend. 
            </template>
          </service-item>
          <service-item>
            <template #icon>
              <h1>02</h1>
            </template>
            <template #title>
              Mobile Development
            </template>
            <template #description>
              Developed multiple mobile applications using <b>Google Flutter, Android, PhoneGap, Ionic</b> etc. 
            </template>
          </service-item>
          <service-item>
            <template #icon>
              <h1>03</h1>
            </template>
            <template #title>
              Frontend Development
            </template>
            <template #description>
              Worked on multiple frontend technologies like <b>Angular, Svelte Kit, Vue.js, Nuxt.js</b> with bootstrap, tailwind css etc.
            </template>
          </service-item>
          <service-item>
            <template #icon>
              <h1>04</h1>
            </template>
            <template #title>
              Object Relationship Model
            </template>
            <template #description>
              Used multiple ORM's with different different technology; for example <b>.Net Core</b> with <b>Entity</b>,with <b>TypeORM</b> and <b>Go with GORM</b>.
            </template>
          </service-item>
          <service-item>
            <template #icon>
              <h1>05</h1>
            </template>
            <template #title>
              Application Optimization
            </template>
            <template #description>
              Improved many application including backend, fronend and mobile using verious techniques. Also upgraded lagacy application to latest technology. 
            </template>
          </service-item>
          <service-item>
            <template #icon>
              <h1>06</h1>
            </template>
            <template #title>
              Solution Provider
            </template>
            <template #description>
              Provided best solution to clients for their application requirement. Ability to choose frameworks based on application needs.
            </template>
          </service-item>
        </div>
      </div>
    </section>
</template>