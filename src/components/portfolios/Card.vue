<template>
    <div class="shadow-lg bg-white m-2 md:m-4 w-2/5 md:w-1/5 rounded-lg">
        <a :href="this.url">
            <g-image class="rounded-lg rounded-b-none" :src="image"></g-image>
            <div
                class="p-1 lg:p-2 text-center text-xl sm:text-3xl font-display font-bold"
            >{{this.title}}</div>

            <div
                v-html="this.text"
                class="px-1 lg:px-4 pb-2 text-center text-lg sm:text-xl font-body"
            ></div>
        </a>
    </div>
</template>

<script>
export default {
    props: ["url", "image", "text", "title"]
};
</script>