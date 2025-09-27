<template>
    <footer class="footer-style-four bg-img-cover bg-img-center" style="background-image:url(/images/bg/footer_bg4.png)">
        <div class="footer__top-wrap">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-12">
                        <div class="footer-widget text-center">
                            <div class="footer-logo logo">
                                <nuxt-link href="/">
                                    <NuxtImg src="/images/logo/preloader.png" alt="Logo">
                                </nuxt-link>
                            </div>
                            <div class="footer-menu-link mt-20">
                                <nuxt-link href="/">Home</nuxt-link>
                                <nuxt-link href="/about">About</nuxt-link>
                                <nuxt-link href="/shop">Shop</nuxt-link>
                                <nuxt-link href="/tournament">Tournament</nuxt-link>
                                <nuxt-link href="/blog">Blog</nuxt-link>
                            </div>
                        </div>
                        <div class="footer-newsletter2">
                            <h4 class="title">MYKD NEWSLETTER</h4>
                            <form action="#" class="footer-newsletter-form2">
                                <input type="email" placeholder="Enter Email Address">
                                <button type="submit">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="copyright__wrap">
                <div class="row gy-2 align-items-center">
                    <div class="col-lg-6">
                        <div class="copyright__text">
                            <p>Copyright © {{ new Date().getFullYear() }} - All Rights Reserved By <span>Mykd</span></p>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="copyright__menu">
                            <ul class="list-wrap d-flex flex-wrap justify-content-center justify-content-lg-end">
                                <li><nuxt-link href="/contact">Contact Us</nuxt-link></li>
                                <li><nuxt-link href="/contact">Join our team</nuxt-link></li>
                                <li><nuxt-link href="/contact">Privacy Policy</nuxt-link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">

</script>