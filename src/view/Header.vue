<template>
  <div>
    <div class="header">
      <div class="header-top">
        <div class="container">
          <div class="search">
            <form>
              <input
                type="text"
                value="Search "
                onfocus="this.value = '';"
                onblur="if (this.value == '') {this.value = 'Search';}"
              />
              <input type="submit" value="Go" />
            </form>
          </div>
          <div class="header-left">
            <ul>
              <li><a href="#">Login</a></li>
              <li><a href="#">Register</a></li>
            </ul>
            <div class="cart box_1">
              <a href="#">
                <h3>
                  <div class="total">
                    <span class="simpleCart_total"></span> (<span
                      id="simpleCart_quantity"
                      class="simpleCart_quantity"
                    >{{GET_CART}}</span>
                  </div>
                  <img src="../assets/images/cart.png" alt="" />
                </h3>
              </a>
            </div>
            <div class="clearfix"></div>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
      <div class="container">
        <div class="head-top">
          <div class="logo">
            <a href=""><img src="../assets/images/logo.png" alt="" /></a>
          </div>
          <div class="h_menu4">
            <ul class="memenu skyblue">
              <li class="active grid">
                <a class="color8" href="">Home</a>
              </li>
              <li>
                <a class="color1" href="#">Men</a>
                <div class="mepanel">
                  <div class="row">
                    <div class="col1">
                      <div class="h_nav">
                        <ul>
                          <li><a href="#">Accessories</a></li>
                          <li><a href="#">Bags</a></li>
                          <li><a href="#">Caps & Hats</a></li>
                          <li>
                            <a href="#">Hoodies & Sweatshirts</a>
                          </li>
                          <li><a href="#">Jackets & Coats</a></li>
                          <li><a href="#">Jeans</a></li>
                          <li><a href="#">Jewellery</a></li>
                          <li>
                            <a href="#">Jumpers & Cardigans</a>
                          </li>
                          <li><a href="#">Leather Jackets</a></li>
                          <li>
                            <a href="#">Long Sleeve T-Shirts</a>
                          </li>
                          <li><a href="#">Loungewear</a></li>
                        </ul>
                      </div>
                    </div>
                    <div class="col1">
                      <div class="h_nav">
                        <ul>
                          <li><a href="#">Shirts</a></li>
                          <li>
                            <a href="#">Shoes, Boots & Trainers</a>
                          </li>
                          <li><a href="#">Shorts</a></li>
                          <li><a href="#">Suits & Blazers</a></li>
                          <li><a href="#">Sunglasses</a></li>
                          <li><a href="#">Sweatpants</a></li>
                          <li><a href="#">Swimwear</a></li>
                          <li><a href="#">Trousers & Chinos</a></li>
                          <li><a href="#">T-Shirts</a></li>
                          <li><a href="#">Underwear & Socks</a></li>
                          <li><a href="#">Vests</a></li>
                        </ul>
                      </div>
                    </div>
                    <div class="col1">
                      <div class="h_nav">
                        <h4>Popular Brands</h4>
                        <ul>
                          <li><a href="#">Levis</a></li>
                          <li><a href="#">Persol</a></li>
                          <li><a href="#">Nike</a></li>
                          <li><a href="#">Edwin</a></li>
                          <li><a href="#">New Balance</a></li>
                          <li><a href="#">Jack & Jones</a></li>
                          <li><a href="#">Paul Smith</a></li>
                          <li><a href="#">Ray-Ban</a></li>
                          <li><a href="#">Wood Wood</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="grid">
                <a class="color2" href="#"> Women</a>
                <div class="mepanel">
                  <div class="row">
                    <div class="col1">
                      <div class="h_nav">
                        <ul>
                          <li><a href="#">Accessories</a></li>
                          <li><a href="#">Bags</a></li>
                          <li><a href="#">Caps & Hats</a></li>
                          <li>
                            <a href="#">Hoodies & Sweatshirts</a>
                          </li>
                          <li><a href="#">Jackets & Coats</a></li>
                          <li><a href="#">Jeans</a></li>
                          <li><a href="#">Jewellery</a></li>
                          <li>
                            <a href="#">Jumpers & Cardigans</a>
                          </li>
                          <li><a href="#">Leather Jackets</a></li>
                          <li>
                            <a href="#">Long Sleeve T-Shirts</a>
                          </li>
                          <li><a href="#">Loungewear</a></li>
                        </ul>
                      </div>
                    </div>
                    <div class="col1">
                      <div class="h_nav">
                        <ul>
                          <li><a href="#">Shirts</a></li>
                          <li>
                            <a href="#">Shoes, Boots & Trainers</a>
                          </li>
                          <li><a href="#">Shorts</a></li>
                          <li><a href="#">Suits & Blazers</a></li>
                          <li><a href="#">Sunglasses</a></li>
                          <li><a href="#">Sweatpants</a></li>
                          <li><a href="#">Swimwear</a></li>
                          <li><a href="#">Trousers & Chinos</a></li>
                          <li><a href="#">T-Shirts</a></li>
                          <li><a href="#">Underwear & Socks</a></li>
                          <li><a href="#">Vests</a></li>
                        </ul>
                      </div>
                    </div>
                    <div class="col1">
                      <div class="h_nav">
                        <h4>Popular Brands</h4>
                        <ul>
                          <li><a href="#">Levis</a></li>
                          <li><a href="#">Persol</a></li>
                          <li><a href="#">Nike</a></li>
                          <li><a href="#">Edwin</a></li>
                          <li><a href="#">New Balance</a></li>
                          <li><a href="#">Jack & Jones</a></li>
                          <li><a href="#">Paul Smith</a></li>
                          <li><a href="#">Ray-Ban</a></li>
                          <li><a href="#">Wood Wood</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li><a class="color4" href="#">Blog</a></li>
              <li><a class="color6" href="#">Conact</a></li>
            </ul>
          </div>

          <div class="clearfix"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>