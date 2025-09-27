<template>
  <section class="about__area-two section-pt-160 section-pb-190">
    <div class="container">
        <div class="row justify-content-center align-items-center">
            <div class="col-xl-6 col-lg-6 order-0 order-lg-2">
                <div class="about__funFact-images">
                    <img src="/images/others/fun_fact_shape.png" alt="background" class="bg-shape">
                    <img src="/images/others/fun_fact.png" class="main-img" alt="image">
                </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-10">
                <div class="section__title text-start mb-30">
                    <h3 class="title">EVE ONLINE ITALIA <br> COMMUNITY</h3>
                </div>
                <div class="about__content-two">
                    <p>L'idea è davvero semplice, ovvero dare uno spazio neutro e di semplice uso a tutti i giocatori italiani di eve online, considerando anche chi si sta approcciando ad EVE per la prima volta, questo spazio vuole favorire lo scambio di opinioni, informazioni in merito al gioco, senza escludere le meccaniche ad esso connesse.<br>Entra nel nostro discord, esplora il gioco e divertit nell'unieverso!</br></p>
                </div>
                <div class="about__content-bottom justify-content-center">
                    <div class="about__content-circle">
                        <img src="/images/icons/circle.svg" alt="img">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" version="1.1">
                            <path id="textPath" d="M 0,75 a 75,75 0 1,1 0,1 z"></path>
                            <text>
                                <textPath href="#textPath">EVE ONLINE ITALIA</textPath>
                            </text>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>

<!-- popup video start -->
<popup-video></popup-video>
<!-- popup video end -->
</template>

<script setup lang="ts">
const {playVideo} = useVideoPopup();
</script>
