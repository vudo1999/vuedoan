<template>
  <div>
    <div class="content">
      <div class="container">
        <div class="content-top" v-for="item in typeProduct" :key="item.id">
          <h1>{{item.name}}</h1>
          <div class="grid-in row">
            <div class="col-md-4 grid-top" v-for="item in item.product.slice(0, 6)" :key="item.id">
              <router-link :to="'detail/'+item.id" class="b-link-stripe b-animate-go thickbox"
                ><img
                  class="img-responsive height-image"
                  :src="'http://127.0.0.1:8000/source/image/product/'+item.image"
                  alt=""
                />
                <div class="b-wrapper">
                  <h3 class="b-animate b-from-left b-delay03">
                    <span>{{item.name}}</span>
                  </h3>
                </div>
              </router-link>

              <p><a href="single.html">{{item.name}}</a></p>
              <button @click="addToCart(item)">Add to Cart</button>
            </div>
          </div>
        </div>
        <!----->
        <!-- <button @click="get">Get data</button> -->
      </div>
      <!---->
      <div class="content-bottom">
        <ul>
          <li>
            <a href="#"
              ><img class="img-responsive" src="../assets/images/lo.png" alt=""
            /></a>
          </li>
          <li>
            <a href="#"
              ><img
                class="img-responsive"
                src="../assets/images/lo1.png"
                alt=""
            /></a>
          </li>
          <li>
            <a href="#"
              ><img
                class="img-responsive"
                src="../assets/images/lo2.png"
                alt=""
            /></a>
          </li>
          <li>
            <a href="#"
              ><img
                class="img-responsive"
                src="../assets/images/lo3.png"
                alt=""
            /></a>
          </li>
          <li>
            <a href="#"
              ><img
                class="img-responsive"
                src="../assets/images/lo4.png"
                alt=""
            /></a>
          </li>
          <li>
            <a href="#"
              ><img
                class="img-responsive"
                src="../assets/images/lo5.png"
                alt=""
            /></a>
          </li>
          <div class="clearfix"></div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import { GET_CART } from '../constants/mutation-type';
export default {
    data() {
    return {
      typeProduct: [],
    };
  },
    mounted() {
        axios
        .get("http://127.0.0.1:8000/api/typeproducts")
        .then((response) => (this.typeProduct = response.data.data))
        .catch((error) => console.log(error));
    },
    methods: {
        addToCart(item) {
            this.$store.commit("addToCart", item);
        },
        // get(){
        //     console.log(GET_CART)
        // }
    }
};
</script>

<style scoped>
.height-image{
    height: 250px;
    width: 350px;
}
</style>