<template>
  <div>
    <!--content-->
    <!---->
    <div class="product">
      <div class="container">
          <div class="row">
              
        <div class="col-md-3 product-price">
          <div class="rsidebar span_1_of_left">
            <div class="of-left">
              <h3 class="cate">Categories</h3>
            </div>
          </div>
          <!--initiate accordion-->
          <!---->
          <div class="product-middle">
            <div class="fit-top">
              <h6 class="shop-top">Lorem Ipsum</h6>
              <a href="#" class="shop-now">SHOP NOW</a>
              <div class="clearfix"></div>
            </div>
          </div>
          <div class="sellers">
            <div class="of-left-in">
              <h3 class="tag">Tags</h3>
            </div>
            <div class="tags">
              <ul>
                <li><a href="#">design</a></li>
                <li><a href="#">fashion</a></li>
                <li><a href="#">lorem</a></li>
                <li><a href="#">dress</a></li>
                <li><a href="#">fashion</a></li>
                <li><a href="#">dress</a></li>
                <li><a href="#">design</a></li>
                <li><a href="#">dress</a></li>
                <li><a href="#">design</a></li>
                <li><a href="#">fashion</a></li>
                <li><a href="#">lorem</a></li>
                <li><a href="#">dress</a></li>

                <div class="clearfix"></div>
              </ul>
            </div>
          </div>
          <!---->
          <div class="product-bottom">
            <div class="of-left-in">
              <h3 class="best">Best Sellers</h3>
            </div>
            <div class="product-go">
              <div class="fashion-grid">
                <a href="#"
                  ><img class="img-responsive" src="../assets/../assets/images/p1.jpg" alt=""
                /></a>
              </div>
              <div class="fashion-grid1">
                <h6 class="best2">
                  <a href="#">Lorem ipsum dolor sit amet consectetuer </a>
                </h6>

                <span class="price-in1"> $40.00</span>
              </div>

              <div class="clearfix"></div>
            </div>
            <div class="product-go">
              <div class="fashion-grid">
                <a href="#"
                  ><img class="img-responsive" src="../assets/images/p2.jpg" alt=""
                /></a>
              </div>
              <div class="fashion-grid1">
                <h6 class="best2">
                  <a href="#">Lorem ipsum dolor sit amet consectetuer </a>
                </h6>

                <span class="price-in1"> $40.00</span>
              </div>

              <div class="clearfix"></div>
            </div>
          </div>
          
        </div>
        <div class="col-md-9 text-center">
            <h1>{{storeData.name}}</h1>
            <img
                  class="img-responsive height-image-detail"
                  :src="'http://127.0.0.1:8000/source/image/product/'+storeData.image"
                  alt=""
                />
            <h2>Gia: {{storeData.price}}$</h2>
            <button >Add to Cart</button>
        </div>
          </div>
      </div>
    </div>
    <!--//content-->
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            typeProductId: this.$route.params.id,
            storeData: []
        }
    },
    mounted() {
        axios
        .get("http://127.0.0.1:8000/api/products/get?id="+this.typeProductId)
        .then((response) => (this.storeData = response.data.data))
        .catch((error) => console.log(error));
    },
    methods: {
        getData(){
            console.log(this.storeData)
        }
    }
};
</script>

<style scoped>
.height-image-detail{
    width: 600px;
    height: 500px;
}
</style>