<template>
    <div class="flex flex-col min-h-screen leading-normal bg-white">
        <Header />

        <div class="flex-grow container mx-auto">
            <slot />
        </div>

        <Footer />

        <div class="fixed bottom-0 left-0 w-screen h-4 frostybottom mx-0"></div>
    </div>
</template>


<script>
import Footer from "~/components/Footer.vue";
import Header from "~/components/Header.vue";

export default {
    components: {
        Footer,
        Header
    }
};
</script>

<style scoped>
.frostybottom {
    background: linear-gradient(90deg, #3ae1b4 0%, #29c8db 50%, #2c99ff 100%);
}
</style>



