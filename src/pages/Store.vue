<template>
  <Layout>
    <product-cards></product-cards>
  </Layout>
</template>

<script>
import Layout from "~/layouts/StoreLayout.vue";
import ProductCards from "../components/ProductCards.vue";

export default {
  components: {
    Layout,
    ProductCards,
  },
  metaInfo() {
    return {
      title: "Store",
    };
  },
};
</script>
