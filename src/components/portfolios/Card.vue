<template>
  <div class="shadow-lg bg-white m-8 w-3/4 sm:w-1/3 md:w-1/4 rounded-lg">
    <a :href="this.url">
      <g-image class="rounded-lg rounded-b-none" :src="image"></g-image>
      <div class="p-2 text-center text-3xl font-display font-bold">{{this.title}}</div>

      <div v-html="this.text" class="px-4 pb-2 text-center text-xl font-body"></div>
    </a>
  </div>
</template>

<script>
export default {
  props: ["url", "image", "text", "title"]
};
</script>