<template>
  <div>
    <NuxtLoadingIndicator color="#0050FF" />
    <NuxtRouteAnnouncer />
    <section
      class="w-full h-screen flex flex-col items-center justify-center gap-8 bg-gray-100 dark:bg-gray-100 font-roboto"
    >
      <div class="space-y-5 text-center">
        <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Nothing to see here!
        </h2>
        <p
          class="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-500"
        >
          Just a quiet little domain minding its own business. Maybe something
          exciting appears here someday… maybe not.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts"></script>
