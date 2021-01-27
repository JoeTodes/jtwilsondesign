<template>
    <Layout
        ><div>The Store</div>
        <product-cards></product-cards
    ></Layout>
</template>


<script>
import Layout from "~/layouts/Store.vue";
import ProductCards from "../components/ProductCards.vue";

export default {
    components: {
        Layout,
        ProductCards,
    },
};
</script>