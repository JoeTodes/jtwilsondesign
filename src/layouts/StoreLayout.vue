<template>
  <div class="bg-back-white-blue h-screen">
    <div class="flex flex-row justify-between px-12 py-4">
      <h1
        class="align-middle font-body font-extrabold text-store-green text-xl lg:text-3xl hover:text-ice-600 tracking-wider"
      >
        JTWILSON.DESIGN<span class="text-text-blue">[store]</span>
      </h1>
      <div>
        <g-link class="align-middle inline-block snipcart-customer-signin mx-1"
          ><SfIcon icon="profile" size="lg" color="green-primary"
        /></g-link>
        <g-link class="align-middle inline-block snipcart-checkout ml-1">
          <SfIcon icon="empty_cart" size="lg" color="green-primary" />
        </g-link>
        <span
          class="align-middle text-store-green font-body font-bold snipcart-items-count"
        ></span>
      </div>
    </div>
    <div class="px-12">
      <slot />
    </div>
  </div>
</template>

<script>
import { SfIcon } from "@storefront-ui/vue";
export default {
  data: function() {
    return {
      totalPrice: 0,
    };
  },
  components: {
    SfIcon,
  },
  mounted: function() {
    this.totalPrice = Snipcart.store.getState().cart.total;
  },
};
</script>
