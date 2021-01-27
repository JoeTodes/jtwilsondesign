<template>
    <g-link>
        <div
            class="border-gray-500 rounded shadow-lg flex-col flex text-center h-full"
        >
            <div class="h-1/3">
                <g-image :src="this.imageUrl" />
            </div>

            <h3>{{ this.title }}</h3>
            <p class="flex-grow">{{ this.description }}</p>
            <div class="flex-row flex justify-between">
                <p class="">{{ this.price | formatMoney }}</p>
                <g-link
                    class="snipcart-add-item"
                    :data-item-id="this.id"
                    :data-item-image="this.imageUrl"
                    :data-item-description="this.description"
                    :data-item-price="this.price"
                    :data-item-name="this.title"
                    :data-item-url="this.path"
                >
                    Add to cart
                </g-link>
            </div>
        </div>
    </g-link>
</template>

<script>
export default {
    props: {
        id: String,
        imageUrl: String,
        description: String,
        title: String,
        price: Number,
        path: String,
    },
};
</script>