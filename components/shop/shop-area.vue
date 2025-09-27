<template>
<section class="shop-area">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-xl-3 col-lg-4 col-md-11 order-2 order-lg-0">
                <!-- sidebar start  -->
                <shop-sidebar/>
                <!-- sidebar end  -->
            </div>
            <div class="col-xl-9 col-lg-8 col-md-11">
                <div class="shop__top-wrap">
                    <div class="row align-items-center">
                        <div class="col-lg-8 col-sm-6">
                            <div class="shop__showing-result">
                                <p>Showing 1 - 9 of 15 results</p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-6">
                            <div class="shop__ordering">
                                <select name="orderby" class="orderby">
                                    <option value="Default sorting">Default sorting</option>
                                    <option value="Sort by popularity">Sort by popularity</option>
                                    <option value="Sort by average rating">Sort by average rating</option>
                                    <option value="Sort by latest">Sort by latest</option>
                                    <option value="Sort by latest">Sort by latest</option>
                                </select>
                            </div>
                        </div> 
                    </div>
                </div>
                <div class="row justify-content-center row-cols-xl-3 row-cols-lg-2 row-cols-md-2 row-cols-sm-2 row-cols-1">
                    <div v-for="item in product_items" :key="item.id" class="col">
                        <shop-item :item="item" />
                    </div>
                </div>
                <div class="pagination__wrap">
                    <ul class="list-wrap d-flex flex-wrap justify-content-center">
                        <li><nuxt-link to="#" class="page-numbers">01</nuxt-link></li>
                        <li><span class="page-numbers current">02</span></li>
                        <li><nuxt-link to="#" class="page-numbers">03</nuxt-link></li>
                        <li><nuxt-link to="#" class="page-numbers">....</nuxt-link></li>
                        <li>
                            <nuxt-link to="#" class="next page-numbers">
                                <i class="fas fa-angle-double-right"></i>
                            </nuxt-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import product_data from "@/data/product-data";

const product_items = [...product_data]
</script>
