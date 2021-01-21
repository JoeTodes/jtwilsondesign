<template>
    <Layout>
        <div>
            <g-image :src="$page.product.content.Images[0].url" />
            <h1>{{ this.$page.product.title }}</h1>
            <p>{{ this.$page.product.content.Price | formatMoney }}</p>
            <button
                class="snipcart-add-item"
                :data-item-id="this.$page.product.id"
                :data-item-image="this.$page.product.content.Images[0].url"
                :data-item-price="this.$page.product.content.Price"
                :data-item-name="this.$page.product.title"
                :data-item-url="this.$page.product.path"
            >
                Add to cart
            </button>
        </div>
    </Layout>
</template>

<page-query>
query ($id: ID!){
    product(id: $id){
        title,
        path,
        id,
        content{
            Price
            Images{
                url
            }
        }
    }
}
</page-query>

<script>
import Layout from "~/layouts/Store.vue";

export default {
    components: {
        Layout,
    },
};
</script>