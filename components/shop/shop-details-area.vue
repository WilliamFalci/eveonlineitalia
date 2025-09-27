<template>
  <section class="shop-area shop-details-area">
      <div class="container">
          <div class="row">
              <!-- shop details images -->
              <shop-details-images/>
              <!-- shop details images -->
              <div class="shop__details-content">
                  <div class="shop__details-rating">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <span class="rating-count">( 3 Customer Review )</span>
                  </div>
                  <h2 class="title">game controller</h2>
                  <div class="shop__details-price">
                      <span class="amount">${{product.price.toFixed(2)}} <span class="stock-status">- {{product.status}}</span></span>
                  </div>
                  <div class="shop__details-short-description">
                      <p>{{product.description}}</p>
                  </div>
                  <div class="shop__details-model d-flex align-items-center">
                      <p class="model m-0">Model:</p>
                      <ul class="list-wrap d-flex align-items-center">
                          <li @click="model = 'Gat'" :class="model=== 'Gat'?'active':''">
                            Gat
                          </li>
                          <li @click="model = 'dat4'" :class="model=== 'dat4'?'active':''">
                            dat4
                          </li>
                          <li @click="model = 'rt30'" :class="model=== 'rt30'?'active':''">
                            rt30
                          </li>
                      </ul>
                  </div>
                  <div class="shop__details-qty">
                      <div class="cart-plus-minus d-flex flex-wrap align-items-center">
                          <form class="quantity num-block">
                              <input type="text" class="in-num" v-model="incValue" readonly />
                              <div class="qtybutton-box">
                                  <span @click="handleIncrement('inc')" class="plus"><i class="fas fa-angle-up"></i></span>
                                  <span @click="handleIncrement('dec')" class="minus dis"><i class="fas fa-angle-down"></i></span>
                              </div>
                          </form>
                          <button class="shop__details-cart-btn">add to cart</button>
                      </div>
                  </div>
                  <div class="shop__details-bottom">
                      <div class="posted_in">
                          <b>Categories :</b>
                          <nuxt-link to="/shop">Gamdias,</nuxt-link>
                          <nuxt-link to="/shop">Apple,</nuxt-link>
                          <nuxt-link to="/shop">Huawei</nuxt-link>
                      </div>
                      <div class="tagged_as">
                          <b>Tags :</b>
                          <nuxt-link to="/shop">Silver,</nuxt-link>
                          <nuxt-link to="/shop">Pink,</nuxt-link>
                          <nuxt-link to="/shop">Green</nuxt-link>
                      </div>
                      <div class="product_share">
                          <b>Share :</b>
                          <nuxt-link to="/shop"><i class="fab fa-facebook-f"></i></nuxt-link>
                          <nuxt-link to="/shop"><i class="fab fa-twitter"></i></nuxt-link>
                          <nuxt-link to="/shop"><i class="fab fa-instagram"></i></nuxt-link>
                      </div>
                  </div>
              </div>
          </div>
          <div class="row">
              <div class="col-12">
                  <div class="product__desc-wrap">
                      <ul class="nav nav-tabs" id="descriptionTab" role="tablist">
                          <li class="nav-item" role="presentation">
                              <button class="nav-link active" id="description-tab" data-bs-toggle="tab" data-bs-target="#description" type="button" role="tab" aria-controls="description" aria-selected="true" :tabindex="-1">Description</button>
                          </li>
                          <li class="nav-item" role="presentation">
                              <button class="nav-link" id="info-tab" data-bs-toggle="tab" data-bs-target="#info" type="button" role="tab" aria-controls="info" aria-selected="false" :tabindex="-1">Additional Information</button>
                          </li>
                          <li class="nav-item" role="presentation">
                              <button class="nav-link" id="reviews-tab" data-bs-toggle="tab" data-bs-target="#reviews" type="button" role="tab" aria-controls="reviews" aria-selected="false" :tabindex="-1">Reviews (0)</button>
                          </li>
                      </ul>
                      <div class="tab-content" id="descriptionTabContent">
                          <div class="tab-pane animation-none fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
                              <p>Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum solliciin is yaugue euismods Nulla ullaorper. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industries standard dummy text
                              ever since the 1500s.</p>
                              <p>Do not look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour.</p>
                          </div>
                          <div class="tab-pane animation-none fade" id="info" role="tabpanel" aria-labelledby="info-tab">
                              <table class="table table-sm">
                                  <tbody>
                                      <tr>
                                          <th scope="row">General</th>
                                          <td>PS5 Digital Platform</td>
                                      </tr>
                                      <tr>
                                          <th scope="row">Technical Information</th>
                                          <td>Qualcomm Snapdragon XR2</td>
                                      </tr>
                                      <tr>
                                          <th scope="row">Display</th>
                                          <td>3664 x 1920</td>
                                      </tr>
                                      <tr>
                                          <th scope="row">RAM & Storage</th>
                                          <td>8GB/256GB</td>
                                      </tr>
                                      <tr>
                                          <th scope="row">Included</th>
                                          <td>PS5 VR Streaming Assistant</td>
                                      </tr>
                                  </tbody>
                              </table>
                          </div>
                          <div class="tab-pane animation-none fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                              <div class="product__desc-review">
                                  <div class="product__desc-review-title mb-15">
                                      <h5 class="title">Customer Reviews (0)</h5>
                                  </div>
                                  <div class="left-rc">
                                      <p>No reviews yet</p>
                                  </div>
                                  <div class="right-rc">
                                      <nuxt-link to="#">Write a review</nuxt-link>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="related__product-area">
              <!-- related products start -->
              <shop-related-products/>
              <!-- related products end -->
          </div>
      </div>
  </section>
</template>

<script setup lang="ts">
import type { IProduct } from "@/types/product-type";

defineProps<{product:IProduct}>();
const model = ref<string>('Gat');
const incValue = ref<number>(1);

//hanle increment 
const handleIncrement = (value:string) => {
    if(value === 'inc'){
      incValue.value += 1
    }
    else {
        if(incValue.value > 1){
          incValue.value -= 1
        }
    }
}
</script>
