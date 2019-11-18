<template>
    <div
        :class="{'md:flex-row': isLeft, 'md:flex-row-reverse': !isLeft}"
        class="container mx-auto flex flex-col justify-between items-center pt-32 pb-16 px-2 md:px-12 xl:px-64"
    >
        <div
            v-bind:class="{'md:text-left': isLeft, 'md:text-right': !isLeft}"
            class="text-2xl sm:text-3xl text-center font-bold w-3/5 font-display text-text-blue mb-8"
        >
            <div class="mb-8">
                <slot name="title"></slot>
            </div>
            <div class="text-black text-base sm:text-xl font-regular font-body mb-8">
                <slot name="body"></slot>
            </div>

            <button
                v-on:click="$emit('open-portfolio', title )"
                class="mb-4 font-display text-xl text-white font-bold frosty tracking-wider border-2 border-white rounded-full px-4 py-3 hover:text-text-green hover:border-text-green"
            >EXAMPLES</button>
        </div>
        <slot name="image"></slot>
    </div>
</template>

<script>
export default {
    props: ["title", "isLeft"]
};
</script>

<style scoped>
.frosty {
    background-image: linear-gradient(
        130deg,
        #3ae1b4 0%,
        #29c8db 50%,
        #2c7aff 100%
    );
}

.frosty:hover {
    background-image: none;
}
button {
    transition: all 0.5s ease;
}
</style>