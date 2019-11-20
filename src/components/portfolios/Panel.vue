<template>
  <transition name="slide">
    <div
      :style="{top: this.YOffset+'px'}"
      class="flex flex-col absolute h-screen w-full left-0 frost z-50"
    >
      <div class="flex flex-row justify-between py-8 px-16">
        <div class="text-white font-dispaly font-extrabold text-6xl align-middle">{{this.title}}</div>
        <button class="self-end my-auto" v-on:click="$emit('close-portfolio',title)">
          <font-awesome class="text-white text-6xl" :icon="['far','times-circle']" />
        </button>
      </div>
      <div class="flex flex-wrap mx-4 self-center justify-center mt-16">
        <Card url="#" image="~/assets/roadcase.png" text="nice project I did">
          <g-image src="~/assets/roadcase.png"></g-image>
        </Card>
        <Card url="#" image="~/assets/roadcase.png" text="nice project I did">
          <g-image src="~/assets/roadcase.png"></g-image>
        </Card>
        <Card url="#" image="~/assets/roadcase.png" text="nice project I did">
          <g-image src="~/assets/roadcase.png"></g-image>
        </Card>
        <Card url="#" image="~/assets/roadcase.png" text="nice project I did">
          <g-image src="~/assets/roadcase.png"></g-image>
        </Card>
        <Card url="#" image="~/assets/roadcase.png" text="nice project I did">
          <g-image src="~/assets/roadcase.png"></g-image>
        </Card>
        <Card url="#" image="~/assets/roadcase.png" text="nice project I did">
          <g-image src="~/assets/roadcase.png"></g-image>
        </Card>
      </div>
    </div>
  </transition>
</template>

<script>
import Card from "~/components/portfolios/Card.vue";

export default {
  data: function() {
    return {
      YOffset: 0
    };
  },
  components: {
    Card
  },
  props: ["title"],
  methods: {
    handleScroll(event) {
      this.YOffset = window.pageYOffset;
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style scoped>
.frost {
  background: linear-gradient(130deg, #3ae1b4 0%, #29c8db 50%, #2c7aff 100%);

  transform-origin: 100%;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 1.5s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
}
</style>