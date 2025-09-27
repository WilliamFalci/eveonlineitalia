<template>
    <footer class="footer-style-four bg-img-cover bg-img-center"
        style="background-image:url(/images/bg/footer_bg4.png)">
        <div class="footer__top-wrap">

        </div>
        <div class="container">

            <div class="footer__country">
                <div class="container custom-container">
                    <div class="row">
                        <div class="col-6">
                            <div class="footer__country-name">
                                <h2 class="text">EVE</h2>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="footer__country-name text-center text-sm-end">
                                <h2 class="text">ITALIA</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer__two-widgets">
                <div class="container custom-container">
                    <div class="row">
                        <div class="col-md-4 col-sm-7 order-1 order-md-0" style="justify-content: flex-end; display: flex; flex-direction: column;">
                            <div class="footer-el-widget">
                                <h4 class="title">information</h4>
                                <ul class="list-wrap">
                                    <li><b>In-Game</b>: TremalJack</li>
                                    <li><b>Discord</b>: tjack_91</li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-5 order-0 order-md-2">
                            <iframe class="m-auto d-flex" style="margin-bottom: 100px!important" src="https://discord.com/widget?id=1414250498038698207&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
                            <div class="footer-el-widget text-start text-md-center widget_nav_menu">
                                <div class="footer-el-logo mb-35">
                                    <nuxt-link to="/">
                                        <img src="/images/logo/logo.png" alt="Mykd" />
                                    </nuxt-link>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 col-sm-7 order-3" style="justify-content: flex-end; display: flex; flex-direction: column;">
                            <div class="footer-el-widget text-start text-md-end">
                                <h4 class="title">head office</h4>
                                <ul class="list-wrap">
                                    <li><b>Region</b>: The Forge</li>
                                    <li><b>Costellation</b>: Kimotoro</li>
                                    <li><b>System</b>: Jita</li>
                                    <li><b>Station</b>: Caldari Navy Assembly Plant, Moon 4, Jita IV</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="copyright__wrap -style-two">
                <div class="container custom-container">
                    <div class="row align-items-center">
                        <div class="col-lg-12">
                            <div class="copyright__text text-center text-lg-start">
                                <p class="text-center">Copyright © {{ new Date().getFullYear() }} eveonlineitalia.it Community
                                    Italiana Eve Online - EVE Online, il logo EVE e tutti i loghi e design associati sono
                                    proprietà intellettuale di <span>CCP</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
    if (window.IntersectionObserver) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active-footer");
                    observer.unobserve(entry.target);
                }
            });
        }, {
            rootMargin: "0px 0px -100px 0px"
        });

        document.querySelectorAll('.has-footer-animation').forEach(block => {
            observer.observe(block);
        });
    } else {
        document.querySelectorAll('.has-footer-animation').forEach(block => {
            block.classList.remove('has-footer-animation');
        });
    }
})
</script>
