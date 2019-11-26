<template>
    <transition name="slide">
        <div
            :style="{top: this.YOffset+'px'}"
            class="flex flex-col absolute h-screen w-full left-0 frost z-50"
        >
            <div class="flex flex-row justify-between py-2 sm:py-8 px-4 sm:px-16">
                <div
                    class="text-white font-dispaly font-extrabold text-6xl align-middle"
                >{{this.title}}</div>
                <button class="self-end my-auto" v-on:click="$emit('close-portfolio',title)">
                    <font-awesome class="text-white text-6xl" :icon="['far','times-circle']"></font-awesome>
                </button>
            </div>
            <div class="flex mx-1 sm:mx-4 self-center justify-center mt-2">
                <Card
                    v-for="item in filterPosts"
                    :key="item.node.title"
                    :url="item.node.url"
                    :title="item.node.title"
                    :image="item.node.image"
                    :text="item.node.content"
                ></Card>
            </div>
        </div>
    </transition>
</template>

<static-query>
query{
    allPost{
        edges{
            node{
                title
                image
                content
                panel
                url
            }
        }
    }
}
</static-query>

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
    computed: {
        filterPosts: function() {
            return this.$static.allPost.edges.filter(edge => {
                return edge.node.panel == this.title;
            });
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