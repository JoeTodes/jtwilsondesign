<template>
  <div>
    <product-card
      class="my-4"
      v-for="edge in $static.allProduct.edges"
      :key="edge.node.id"
      :description="edge.node.content.Description"
      :id="edge.node.id"
      :imageUrl="edge.node.content.Images[0].thumbnails.large.url"
      :path="edge.node.path"
      :price="edge.node.content.Price"
      :title="edge.node.title"
      :weight="edge.node.content.Weight"
      :length="edge.node.content.Length"
      :width="edge.node.content.Width"
      :height="edge.node.content.Height"
    >
    </product-card>
  </div>
</template>

<static-query>
{
    allProduct(sortBy: "title", order: ASC){
        edges{
            node{
                id
                title
                path
                content{
                    Images{
                        thumbnails{
                            large{
                                url
                            }
                        }  
                    }
                    Description
                    Price
                    Weight
                    Length
                    Width
                    Height
                }

            }
        }
    }
}
</static-query>

<script>
import ProductCard from "./ProductCard.vue";

export default {
  components: {
    ProductCard,
  },
};
</script>

<style scoped></style>
