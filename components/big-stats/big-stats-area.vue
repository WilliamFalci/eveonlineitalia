<template>
  <section
    class="upcoming-match__area section-pt-120 section-pb-85"
    style="background-image: url(/images/bg/video_bg4.png); background-color: #10181f;"
  >
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-6 col-lg-7 col-md-10">
          <div class="section__title text-center mb-60">
            <text-animation title="pvp" />
            <h3 class="title">STATISTICHE</h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">

          <div class="upcoming-match__lists section-pb-85" v-if="stats">
            <big-stats-item
              label_1="ISK Distrutti"
              :value_1="Number(stats.iskDestroyed).toLocaleString('it-IT')"
              :avg="`${Math.trunc((Number(stats.iskDestroyed) / ( Number(stats.iskDestroyed) + Number(stats.iskLost) )) * 100)}%`"
              label_2="ISK Persi"
              :value_2="Number(stats.iskLost).toLocaleString('it-IT')"
              delay=".4"
            />

            <big-stats-item
              label_1="Navi Distrutte"
              :value_1="Number(stats.shipsDestroyed).toLocaleString('it-IT')"
              :avg="`${Math.trunc((Number(stats.shipsDestroyed) / ( Number(stats.shipsDestroyed) + Number(stats.shipsLost) )) * 100)}%`"
              label_2="Navi Perse"
              :value_2="Number(stats.shipsLost).toLocaleString('it-IT')"
              delay=".2"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{stats:any}>()
</script>
