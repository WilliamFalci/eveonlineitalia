<template>
  <section
      class="team__area team-bg section-pt-130 section-pb-100"
      style="background-image: url(/images/bg/team_bg.jpg)"
    >
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-6 col-lg-7 col-md-10">
          <div class="section__title text-center mb-60">
            <text-animation title="il nostro team" />
            <h3 class="title">EVEONLINEITALIA.IT</h3>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
          <div
            v-for="(t,i) in team_data"
            :key="t.id"
            class="col-xl-3 col-lg-4 col-sm-6 wow fadeInUp"
            :data-wow-delay="`.${i + 1}s`"
          >
            <div class="team__item">
              <div class="team__thumb">
                <NuxtImg format="webp" :src="t.img" alt="img" />
              </div>
              <div class="team__content">
                <h4 class="name">
                  {{t.title}}
                </h4>
                <span class="designation">{{t.subtitle}}</span>
              </div>
            </div>
          </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import team_data from '@/data/team-data';
</script>
