<template>
  <div class="container">
    <div class="check">
      <h1>My Shopping Bag (2)</h1>
      <div class="col-md-9 cart-items" v-for="item in GET_CART" :key="item.id">
        <div class="cart-header">
          <div class="close1"></div>
          <div class="cart-sec simpleCart_shelfItem">
            <div class="cart-item cyc">
              <img :src="'http://127.0.0.1:8000/source/image/product/'+item.image" class="img-responsive" alt="" />
            </div>
            <!-- <button @click="dataget(item)">getData</button> -->
            <div class="cart-item-info">
              <h3>
                <a href="#">{{item.name}}</a
                >
              </h3>
              <ul class="qty">
                  <li><button>-</button></li>
                <li><input type="text" :value="item.qty"></li>
                <li><button>+</button></li>
              </ul>

              <div class="delivery">
                <p>Service Charges : Rs.100.00</p>
                <span>Delivered in 2-3 bussiness days</span>
                <div class="clearfix"></div>
              </div>
            </div>
            <div class="clearfix"></div>
          </div>
        </div>
      </div>
      <div class="col-md-3 cart-total">
        <a class="continue" href="#">Continue to basket</a>
        <div class="price-details">
          <h3>Price Details</h3>
          <span>Total</span>
          <span class="total1">6200.00</span>
          <span>Discount</span>
          <span class="total1">---</span>
          <span>Delivery Charges</span>
          <span class="total1">150.00</span>
          <div class="clearfix"></div>
        </div>
        <ul class="total_price">
          <li class="last_price"><h4>TOTAL</h4></li>
          <li class="last_price"><span>6350.00</span></li>
          <div class="clearfix"></div>
        </ul>

        <div class="clearfix"></div>
        <a class="order" href="#">Place Order</a>
        <div class="total-item">
          <h3>OPTIONS</h3>
          <h4>COUPONS</h4>
          <a class="cpns" href="#">Apply Coupons</a>
          <p><a href="#">Log In</a> to use accounts - linked coupons</p>
        </div>
      </div>

      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {GET_CART, CART_TOTAL} from '../constants/mutation-type'
export default {
    computed: {
        ...mapGetters({
            GET_CART,
            CART_TOTAL
        })
    },
    methods: {
        dataget(item){
            console.log(item);
        }
    }
};
</script>

<style>
</style>