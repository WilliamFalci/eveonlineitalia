<template>
    <section class="tournament-area section-pt-120 section-pb-90">
        <div class="container">
            <div class="tournament__wrapper">
                <template v-if="stats.topLists.find((x: any) => x.type == 'shipType').values.length > 0">
                    <div class="row justify-content-center gutter-25" v-if="stats">
                        <div class="col-xl-4 col-lg-5 col-md-6 col-sm-9">
                            <big-stats-box-item type="ships" subtitle="ULTIMO MESE" title="NAVI" v-if="stats.topLists.find((x: any) => x.type == 'shipType').values.length > 0"
                                :topOfAll="stats.topLists.find((x: any) => x.type == 'shipType').values[0]"
                                :data="stats.topLists.find((x: any) => x.type == 'shipType').values.slice(1, 4)" />
                        </div>
    
                        <div class="col-xl-4 col-lg-5 col-md-6 col-sm-9" v-if="type=='corp' && stats.topLists.find((x: any) => x.type == 'character').values.length > 0">
                            <big-stats-box-item type="chars" subtitle="ULTIMO MESE" title="GIOCATORI"
                                :topOfAll="stats.topLists.find((x: any) => x.type == 'character').values[0]"
                                :data="stats.topLists.find((x: any) => x.type == 'character').values.slice(1, 4)" />
                        </div>
    
                        <div class="col-xl-4 col-lg-5 col-md-6 col-sm-9">
                            <big-stats-box-item type="systems" subtitle="ULTIMO MESE" title="SISTEMI" v-if="stats.topLists.find((x: any) => x.type == 'solarSystem').values.length > 0"
                                :topOfAll="stats.topLists.find((x: any) => x.type == 'solarSystem').values[0]"
                                :data="stats.topLists.find((x: any) => x.type == 'solarSystem').values.slice(1, 4)" />
                        </div>
                    </div>
                </template>
                <template v-else>
                    <p class="text-center text-uppercase">GIOCATORE INATTIVO - nessuna attività nell'ultimo mese</p>
                </template>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
defineProps<{ stats: any, type:string; }>()
</script>
