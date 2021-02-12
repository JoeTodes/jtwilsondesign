<template>
  <SfProductCardHorizontal
    :title="title"
    :description="description"
    :link="path"
    :regularPrice="price | formatMoney"
    :showAddToCartButton="true"
    :wishlistIcon="false"
    :qty="qty"
    v-on:input="updateQuantity"
    v-on:click:add-to-cart="addToCart"
    ><template v-slot:image
      ><g-link :to="path">
        <g-image :src="imageUrl" />
      </g-link> </template
  ></SfProductCardHorizontal>
</template>

<script>
import { SfProductCardHorizontal } from "@storefront-ui/vue";
export default {
  data: function() {
    return { qty: 1 };
  },
  props: {
    id: String,
    imageUrl: String,
    description: String,
    title: String,
    price: Number,
    path: String,
    weight: Number,
    length: Number,
    width: Number,
    height: Number,
  },
  components: {
    SfProductCardHorizontal,
  },
  methods: {
    updateQuantity: function(payload) {
      this.qty = payload;
    },
    addToCart: async function() {
      try {
        await Snipcart.api.cart.items.add({
          id: this.id,
          name: this.title,
          price: this.price,
          url: this.path,
          quantity: this.qty,
          weight: this.weight,
          length: this.length,
          width: this.width,
          height: this.height,
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
