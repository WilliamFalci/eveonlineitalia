<template>
  <section
      class="tournament__list-area section-pb-120 section-pt-120"
      style="background-image:url(/images/bg/tournament_bg.jpg)"
    >
      <div class="container">
        <div class="tournament__wrapper">
          <div class="row align-items-end mb-60">
            <div class="col-lg-8">
              <div class="section__title text-center text-lg-start title-shape-none">
                <span class="sub-title tg__animate-text">
                  tournament List
                </span>
                <h3 class="title">Active tournament</h3>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="section__title-link">
                <nuxt-link to="/tournament">EXPLORE MORE</nuxt-link>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="tournament__list-item-wrapper">
                  <client-only>
                    <tournaments-list-item v-for="(item,i) in tournament_data" :key="item.id" 
                    :item="item" :index="i" />
                  </client-only>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script setup lang="ts">
import tournament_data from '@/data/tournament-data';
</script>
