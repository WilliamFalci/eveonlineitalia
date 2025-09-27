<template>
 <section class="about__area section-pt-130 section-pb-130">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-6 col-lg-7 col-md-10">
          <div class="section__title text-center mb-60">
            <text-animation title="know about us" />
            <h3 class="title">top rated steamers</h3>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-xl-10">
          <div class="about__tab-wrap">
            <div class="about__buttons">
              <nuxt-link to="/shop" class="tg-btn-2">
                buy Hero
                <svg-btn-bg-three/>
              </nuxt-link>
              <nuxt-link to="/shop" class="tg-btn-2 -secondary">
                buy nfts
                <svg-btn-bg-four/>
              </nuxt-link>
            </div>
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <about-nav-btn id="01" img="/images/others/about_tab01.png" :isActive="true" />
              <about-nav-btn id="02" img="/images/others/about_tab02.png" />
              <about-nav-btn id="03" img="/images/others/about_tab03.png" />
              <about-nav-btn id="04" img="/images/others/about_tab04.png" />
              <about-nav-btn id="05" img="/images/others/about_tab05.png" />
              <about-nav-btn id="06" img="/images/others/about_tab06.png" />
            </ul>
          </div>
        </div>
      </div>
      <div class="tab-content" id="myTabContent">
        <about-tab-item id="01" img="/images/others/about_img01.jpg" :isActive="true" title="human game" rate="50%"/>
        <about-tab-item id="02" img="/images/others/about_img02.jpg" title="Axie Infinity" rate="60%" />
        <about-tab-item id="03" img="/images/others/about_img03.jpg" title="The Walking Dead" rate="75%"/>
        <about-tab-item id="04" img="/images/others/about_img04.jpg" title="The Dogami" rate="65%" />
        <about-tab-item id="05" img="/images/others/about_img05.jpg" title="The Sandbox" rate="85%" />
        <about-tab-item id="06" img="/images/others/about_img06.jpg" title="Pegaxy Horses" rate="90%" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>
