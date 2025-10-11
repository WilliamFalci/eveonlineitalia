<template>
  <div :class="`tournament__box-wrap`">
    <svg-t-box-bg />
    <div class="tournament__box-price">
      <i class="fas fa-trophy"></i>
      <span>TOP</span>
    </div>
    <div class="tournament__box-countdown">
      <div class="coming-time" data-countdown="2023/5/16">
      </div>
    </div>
    <div class="tournament__box-caption">
      <span class="sub">{{ subtitle }}</span>
      <h4 class="title">{{ title }}</h4>
    </div>

    <div class="tournament__box-prize" v-if="names && type=='ships'">
      <div class="tournament__player-thumb">
        <img :src="`https://images.evetech.net/types/${topOfAll.shipTypeID}/render?size=128`" alt="img" />
      </div>
      <span>{{ selectName(topOfAll.shipTypeID) }}</span>
      <span class="tournament__player-price">
        {{ topOfAll.kills }} <i class="fas fa-skull"></i>
      </span>
    </div>

    <div class="tournament__box-prize" v-if="type=='chars'">
      <div class="tournament__player-thumb">
        <img :src="`https://images.evetech.net/characters/${topOfAll.characterID}/portrait?size=128`" alt="img" />
      </div>
      <span>{{ topOfAll.characterName }}</span>
      <span class="tournament__player-price">
        {{ topOfAll.kills }} <i class="fas fa-skull"></i>
      </span>
    </div>
    
    <div class="tournament__box-prize" v-if="names && type=='systems'">
      <div class="tournament__player-thumb">
        <img :src="`https://zkillboard.com/img/nohus/systems/${topOfAll.solarSystemID}.png`" alt="img" />
      </div>
      <span>{{ selectName(topOfAll.solarSystemID) }}</span>
      <span class="tournament__player-price">
        {{ topOfAll.kills }} <i class="fas fa-skull"></i>
      </span>
    </div>

    <ul class="tournament__box-list list-wrap">
      <li v-for="l in data" :key="l.id" v-if="names && type=='ships'">
        <div class="tournament__box-list-item">
          <div class="tournament__player-thumb">
            <img :src="`https://images.evetech.net/types/${l.shipTypeID}/render?size=128`" alt="img" />
          </div>
          <h6 class="tournament__player-name">{{ selectName(l.shipTypeID.toString()) }}</h6>
          <span class="tournament__player-price">
            {{ l.kills }} <i class="fas fa-skull"></i>
          </span>
        </div>
      </li>

      <li v-for="l in data" :key="l.id" v-if="type=='chars'">
        <div class="tournament__box-list-item">
          <div class="tournament__player-thumb">
            <img :src="`https://images.evetech.net/characters/${l.characterID}/portrait?size=128`" alt="img" />
          </div>
          <h6 class="tournament__player-name">{{ l.characterName }}</h6>
          <span class="tournament__player-price">
            {{ l.kills }} <i class="fas fa-skull"></i>
          </span>
        </div>
      </li>

      <li v-for="l in data" :key="l.id" v-if="names && type=='systems'">
        <div class="tournament__box-list-item">
          <div class="tournament__player-thumb">
            <img :src="`https://zkillboard.com/img/nohus/systems/${l.solarSystemID}.png`" alt="img" />
          </div>
          <h6 class="tournament__player-name">{{ selectName(l.solarSystemID.toString()) }}</h6>
          <span class="tournament__player-price">
            {{ l.kills }} <i class="fas fa-skull"></i>
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useFetch } from 'nuxt/app';
import { ref } from 'vue';

const props = defineProps<{ subtitle: string, title: string, topOfAll: any, data: any, type: string }>()
const names = ref()

const selectName = (id: string) => names.value.find((x: any) => x.id.toString() == id).name

if (props.type == "ships") {
  const { data: ships } = await useFetch('https://esi.evetech.net/universe/names', { method: 'POST', body: props.data.map((x: any) => x.shipTypeID).concat(props.topOfAll.shipTypeID) })
  names.value = ships.value
}

if (props.type == "systems") {
  const { data: systems } = await useFetch('https://esi.evetech.net/universe/names', { method: 'POST', body: props.data.map((x: any) => x.solarSystemID).concat(props.topOfAll.solarSystemID) })
  names.value = systems.value
}
</script>
