<template>
    <div class="checkout__area section-pt-120 section-pb-120">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <checkout-coupon/>
                </div>
                <div class="col-lg-7">
                    <form action="#" class="customer__form-wrap">
                        <span class="title">Billing Details</span>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-grp">
                                    <label for="first-name">First name *</label>
                                    <input type="text" id="first-name" placeholder="First name">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-grp">
                                    <label for="last-name">Last name *</label>
                                    <input type="text" id="last-name" placeholder="Last name">
                                </div>
                            </div>
                        </div>
                        <div class="form-grp">
                            <label for="company-name">Company name (optional)</label>
                            <input type="text" id="company-name" placeholder="Company name">
                        </div>
                        <div class="form-grp select-grp">
                            <label for="country-name">Country / Region *</label>
                            <select id="country-name" name="country-name" class="country-name">
                                <option value="United Kingdom (UK)">United Kingdom (UK)</option>
                                <option value="United States (US)">United States (US)</option>
                                <option value="Turkey">Turkey</option>
                                <option value="Saudi Arabia">Saudi Arabia</option>
                                <option value="Portugal">Portugal</option>
                            </select>
                        </div>
                        <div class="form-grp">
                            <label for="street-address">Street address *</label>
                            <input type="text" id="street-address" placeholder="House number and street name">
                        </div>
                        <div class="form-grp">
                            <input type="text" id="street-address-two"
                                placeholder="Apartment, suite, unit, etc. (optional)">
                        </div>
                        <div class="form-grp">
                            <label for="town-name">Town / City *</label>
                            <input type="text" id="town-name" placeholder="Town / City">
                        </div>
                        <div class="form-grp select-grp">
                            <label for="district-name">District *</label>
                            <select id="district-name" name="district-name" class="district-name">
                                <option value="Alabama">Alabama</option>
                                <option value="Alaska">Alaska</option>
                                <option value="Arizona">Arizona</option>
                                <option value="California">California</option>
                                <option value="New York">New York</option>
                            </select>
                        </div>
                        <div class="form-grp">
                            <label for="zip-code">ZIP Code *</label>
                            <input type="text" id="zip-code" placeholder="ZIP Code">
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-grp">
                                    <label for="phone">Phone *</label>
                                    <input type="number" id="phone" placeholder="Phone">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-grp">
                                    <label for="email">Email address *</label>
                                    <input type="email" id="email" placeholder="Email address">
                                </div>
                            </div>
                        </div>
                        <span class="title title-two">Additional Information</span>
                        <div class="form-grp">
                            <label for="note">Order notes (optional)</label>
                            <textarea id="note" placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                        </div>
                    </form>
                </div>
                <div class="col-lg-5">
                    <div class="order__info-wrap">
                        <h2 class="title">YOUR ORDER</h2>
                        <ul class="list-wrap">
                            <li class="title">Product <span>Subtotal</span></li>
                            <li>Antiaging and Longevity × 1 <span>$19.99</span></li>
                            <li>Subtotal <span>$19.99</span></li>
                            <li>Total <span>$19.99</span></li>
                        </ul>
                        <p>Sorry, it seems that there are no available payment methods for your state. Please contact us
                            if you require assistance or wish to make alternate arrangements.</p>
                        <p>Your personal data will be used to process your order, support your experience throughout
                            this website, and for other purposes described in our <a href="#">privacy policy.</a></p>
                        <button class="btn">Place order</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>