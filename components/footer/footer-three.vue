<template>
    <footer class="footer-style-three bg-img-cover bg-img-center" style="background-image:url(/images/bg/footer_bg3.png)">
        <div class="footer__top-wrap">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-xl-4 col-lg-5 col-md-7">
                        <div class="footer-widget">
                            <div class="footer-logo logo">
                                <nuxt-link href="/">
                                    <img src="/images/logo/logo.png" alt="Logo">
                                </nuxt-link>
                            </div>
                            <div class="footer-text">
                                <p class="desc">Commodo metus auctor poti sapien eget porttitor, elementum semper cubilia lacinia praesent dis hac dui, nisi ridiculus</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-6">
                        <div class="footer-widget">
                            <div class="footer-contact-link">
                                <div class="icon">
                                    <svg-location/>
                                </div>
                                <div>
                                    <h4 class="title">Office Location:</h4>
                                    <p>Marks Dan Street 15UIK, Berlin <br class="d-lg-block d-none">
                                        FP 256 Germany.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-6">
                        <div class="footer-widget">
                            <div class="footer-contact-link">
                                <div class="icon">
                                    <svg-contact-info/>
                                </div>
                                <div>
                                    <h4 class="title">Contact:</h4>
                                    <a class="link" href="tel:163254736587">(+163)-2547-36587</a>
                                    <a class="link" href="mailto:infohelp@example.com">infohelp@example.com</a>
                                </div>
                            </div>
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
                            <p>Copyright © {{new Date().getFullYear()}} - All Rights Reserved By <span>Mykd</span></p>
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