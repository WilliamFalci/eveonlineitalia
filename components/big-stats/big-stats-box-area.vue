<template>
    <section class="tournament-area section-pt-120 section-pb-90" v-if="stats">
        <div class="container">
            <div class="tournament__wrapper">
                <hr style="border: 2px solid var(--tg-theme-primary)" />
                <div class="row justify-content-center">
                    <div class="col-xl-6 col-lg-7 col-md-10">
                        <div class="section__title text-center">
                            <text-animation title='Statistiche' />
                            <h3 class="title">ULTIMA SETTIMANA</h3>
                        </div>
                    </div>
                </div>
                <hr style="border: 2px solid var(--tg-theme-primary)" />
                <template v-if="stats.topLists && stats.topLists.find((x: any) => x.type == 'shipType').values.length > 0">
                    <div class="row justify-content-center gutter-25" v-if="stats">
                        <div class="col-xl-4 col-lg-5 col-md-6 col-sm-9">
                            <big-stats-box-item type="ships" subtitle="ULTIMA SETTIMANA" title="NAVI"
                                v-if="stats.topLists.find((x: any) => x.type == 'shipType').values.length > 0"
                                :topOfAll="stats.topLists.find((x: any) => x.type == 'shipType').values[0]"
                                :data="stats.topLists.find((x: any) => x.type == 'shipType').values.slice(1, 4)" />
                        </div>

                        <div class="col-xl-4 col-lg-5 col-md-6 col-sm-9"
                            v-if="type == 'corp' && stats.topLists.find((x: any) => x.type == 'character').values.length > 0">
                            <big-stats-box-item type="chars" subtitle="ULTIMA SETTIMANA" title="GIOCATORI"
                                :topOfAll="stats.topLists.find((x: any) => x.type == 'character').values[0]"
                                :data="stats.topLists.find((x: any) => x.type == 'character').values.slice(1, 4)" />
                        </div>

                        <div class="col-xl-4 col-lg-5 col-md-6 col-sm-9">
                            <big-stats-box-item type="systems" subtitle="ULTIMA SETTIMANA" title="SISTEMI"
                                v-if="stats.topLists.find((x: any) => x.type == 'solarSystem').values.length > 0"
                                :topOfAll="stats.topLists.find((x: any) => x.type == 'solarSystem').values[0]"
                                :data="stats.topLists.find((x: any) => x.type == 'solarSystem').values.slice(1, 4)" />
                        </div>
                    </div>
                </template>

                <template v-else>
                    <p class="text-center text-uppercase">nessuna attività nell'ultima settimana
                    </p>
                </template>
                <hr style="border: 2px solid var(--tg-theme-primary)" />
                <div class="row justify-content-center">
                    <div class="col-xl-6 col-lg-7 col-md-10">
                        <div class="section__title text-center">
                            <text-animation title='Statistiche' />
                            <h3 class="title">ULTIMO MESE</h3>
                        </div>
                    </div>
                </div>
                <hr style="border: 2px solid var(--tg-theme-primary)" />
                <div class="row justify-content-center gutter-25" v-if="stats.topAllTime">
                    <div class="col-xl-4 col-lg-5 col-md-6 col-sm-9">
                        <big-stats-box-item type="ships" subtitle="ULTIMO MESE" title="NAVI"
                            v-if="stats.topAllTime.find((x: any) => x.type == 'ship').data.length > 0"
                            :topOfAll="stats.topAllTime.find((x: any) => x.type == 'ship').data[0]"
                            :data="stats.topAllTime.find((x: any) => x.type == 'ship').data.slice(1, 4)" />
                    </div>

                    <div class="col-xl-4 col-lg-5 col-md-6 col-sm-9"
                        v-if="type == 'corp' && stats.topAllTime.find((x: any) => x.type == 'character').data.length > 0">
                        <big-stats-box-item type="chars-top" subtitle="ULTIMO MESE" title="GIOCATORI"
                            :topOfAll="stats.topAllTime.find((x: any) => x.type == 'character').data[0]"
                            :data="stats.topAllTime.find((x: any) => x.type == 'character').data.slice(1, 4)" />
                    </div>

                    <div class="col-xl-4 col-lg-5 col-md-6 col-sm-9">
                        <big-stats-box-item type="systems" subtitle="ULTIMO MESE" title="SISTEMI"
                            v-if="stats.topAllTime.find((x: any) => x.type == 'system').data.length > 0"
                            :topOfAll="stats.topAllTime.find((x: any) => x.type == 'system').data[0]"
                            :data="stats.topAllTime.find((x: any) => x.type == 'system').data.slice(1, 4)" />
                    </div>
                </div>
                <template v-else>
                    <p class="text-center text-uppercase">nessuna attività nell'ultimo mese
                    </p>
                </template>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
defineProps<{ stats: any, type: string; }>()
</script>
