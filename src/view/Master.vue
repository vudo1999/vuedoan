<template>
    <div>
        <Header></Header>
        <slot></slot>
        <Footer></Footer>
    </div>
</template>
<script>
import Header from './Header'
import Footer from './Footer'
import { SET_CART } from "../constants/mutation-type";
export default {
    components: {
        Header,
        Footer,
    },
    beforeCreate() {
        const cartSaved = window.localStorage.getItem("cart");
        if (cartSaved) {
            this.$store.commit(SET_CART, JSON.parse(cartSaved));
        }
    },
}
</script>

<style>

</style>