<template>
<section class="tournament-area section-pt-120 section-pb-90">
  <div class="container">
      <div class="tournament__wrapper">
          <div class="row justify-content-center">
              <div class="col-xl-6 col-lg-7 col-md-10">
                  <div class="section__title text-center mb-60">
                      <text-animation title='our tournament' />
                      <h3 class="title">play to earn games</h3>
                  </div>
              </div>
          </div>
          <div class="row justify-content-center gutter-25">
              <div v-for="item in tournament_data" :key="item.id" class="col-xl-4 col-lg-5 col-md-6 col-sm-9">
                  <tournaments-box :item="item" />
              </div>
          </div>
      </div>
  </div>
</section>
</template>

<script setup lang="ts">
import tournament_data from '@/data/tournament-data';
</script>

