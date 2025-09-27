<template>
    <div class="cart__area team-bg section-pt-120 section-pb-120"
        :style="{ backgroundImage: `url(/images/bg/team_bg.jpg)` }">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <table class="table cart__table">
                        <thead>
                            <tr>
                                <th class="product__thumb">&nbsp;</th>
                                <th class="product__name">Product</th>
                                <th class="product__price">Price</th>
                                <th class="product__quantity">Quantity</th>
                                <th class="product__subtotal">Subtotal</th>
                                <th class="product__remove">&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="product__thumb">
                                    <nuxt-link href="/shop-details">
                                        <img src="/images/products/product01.jpg" alt="prd-img" />
                                    </nuxt-link>
                                </td>
                                <td class="product__name">
                                    <nuxt-link href="/shop-details">Antiaging and Longevity</nuxt-link>
                                </td>
                                <td class="product__price">$13.00</td>
                                <td class="product__quantity">
                                    <div class="shop__details-qty">
                                        <form action="#" class="quantity num-block">
                                            <input type="text" class="in-num" :value="quantity" readonly />
                                            <div class="qtybutton-box">
                                                <span @click="handleIncrement('inc')" class="plus">
                                                    <i class="fas fa-angle-up"></i>
                                                </span>
                                                <span @click="handleIncrement('dec')" class="minus dis">
                                                    <i class="fas fa-angle-down"></i>
                                                </span>
                                            </div>
                                        </form>
                                    </div>
                                </td>
                                <td class="product__subtotal">$13.00</td>
                                <td class="product__remove">
                                    <a href="#">&times;</a>
                                </td>
                            </tr>

                            <tr>
                                <td colspan="6" class="cart__actions">
                                    <form action="#" class="cart__actions-form">
                                        <input type="text" placeholder="Coupon code" />
                                        <button type="submit" class="btn">Apply coupon</button>
                                    </form>
                                    <div class="update__cart-btn text-end f-right">
                                        <button type="submit" class="btn">Update cart</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="col-lg-4">
                    <div class="cart__collaterals-wrap">
                        <h2 class="title">Cart totals</h2>
                        <ul class="list-wrap">
                            <li>
                                Subtotal <span>$32.00</span>
                            </li>
                            <li>
                                Total <span class="amount">$32.00</span>
                            </li>
                        </ul>
                        <nuxt-link href="/checkout" class="btn">Proceed to checkout</nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const quantity = ref(1);

// Handle increment and decrement
const handleIncrement = (value: string) => {
    if (value === "inc") {
        quantity.value += 1;
    } else if (quantity.value > 1) {
        quantity.value -= 1;
    }
};
</script>
