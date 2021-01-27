<template>
    <div class="grid grid-cols-3 gap-5">
        <product-card
            v-for="edge in $static.allProduct.edges"
            :key="edge.node.id"
            :description="edge.node.content.Description"
            :id="edge.node.id"
            :imageUrl="edge.node.content.Images[0].thumbnails.large.url"
            :path="edge.node.path"
            :price="edge.node.content.Price"
            :title="edge.node.title"
        >
        </product-card>
    </div>
</template>

<static-query>
{
    allProduct(sortBy: "id", order: ASC){
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