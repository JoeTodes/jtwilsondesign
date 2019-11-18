<template>
    <transition name="slide">
        <div :style="{top: this.YOffset+'px'}" class="w-full h-full absolute left-0 frost z-50">
            <button v-on:click="$emit('close-portfolio',title)">Close</button>
        </div>
    </transition>
</template>

<script>
export default {
    data: function() {
        return {
            YOffset: 0
        };
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