<template>
  <div class="bg-white m-8 w-3/4 sm:w-1/3 md:w-1/4 rounded-lg">
    <a :href="this.url">
      <slot></slot>

      <div class="p-4 text-center text-xl font-body">{{this.text}}</div>
    </a>
  </div>
</template>

<script>
export default {
  props: ["url", "image", "text"]
};
</script>