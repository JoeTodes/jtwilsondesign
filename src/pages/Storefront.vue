<template>
    <Layout
        ><div>The Store</div>
        <g-link
            v-for="edge in $page.allProduct.edges"
            :key="edge.node.id"
            :to="edge.node.path"
            ><g-image :src="edge.node.content.Images[0].url" />{{
                edge.node.title
            }}</g-link
        >
    </Layout>
</template>

<page-query>
query Product{
 allProduct{
  edges{
    node{
      title,
      id,
      path,
      content{
        Images{
          url
        },
        Price
      }
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