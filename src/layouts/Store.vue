<template>
    <div>
        <div>
            <g-link class="snipcart-customer-signin">Account</g-link>
            <g-link class="snipcart-checkout">
                Cart
                <span class="snipcart-total-items"></span>
                <span class="snipcart-total-price">{{
                    this.totalPrice | formatMoney
                }}</span>
            </g-link>
        </div>
        <slot />
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            totalPrice: 0,
        };
    },
    methods: {
        getTotalPrice: function () {
            return Snipcart.store.getState().cart.total;
        },
    },
    mounted: function () {
        this.totalPrice = this.getTotalPrice();
    },
};
</script>