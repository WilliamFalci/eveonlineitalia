<template>
  <div
    :class="`tab-pane ${isActive ? 'show active' : ''}`"
    :id="`about${id}`"
    role="tabpanel"
    :aria-labelledby="`about${id}-tab`"
  >
    <div class="row justify-content-center">
      <div class="col-xl-5 col-lg-10">
        <div class="about__img">
          <img :src="img" alt="img" />
        </div>
      </div>
      <div class="col-xl-7 col-lg-10">
        <div class="about__flex-wrap">
          <div class="about__content-wrap">
            <div class="about__content">
              <h4 class="title">{{ title }}</h4>
              <span class="rate">rate {{ rate }}</span>
              <p>
                Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum
                sollicitudin is yaugue euismods Nulla ullamcorper. Morbi
                pharetra tellus miolslis, tincidunt massa venenatis.
              </p>
            </div>
            <div class="about__content-list">
              <ul class="list-wrap">
                <li>
                  <img src="/images/icons/features_icon01.png" alt="img" /> Chichi Dragon Ball
                </li>
                <li>
                  <img src="/images/icons/features_icon02.png" alt="img" /> Space Babe Night
                </li>
                <li>
                  <img src="/images/icons/features_icon03.png" alt="img" /> Dragon Ball
                </li>
              </ul>
            </div>
          </div>
          <div class="about__btn-wrap">
            <ul class="list-wrap">
              <li>
                <NuxtLink to="/shop-details">Dragon Ball</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/shop">nft market</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/contact">support</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const props = defineProps(['id', 'img', 'title', 'rate', 'isActive']);
</script>
