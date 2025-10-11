<template>
  <section
      class="tournament__list-area section-pb-120 section-pt-120">
      <div class="container">
        <div class="tournament__wrapper">
          <div class="row align-items-end mb-60">
            <div class="col">
              <div class="section__title text-center text-lg-start title-shape-none">
                <span class="sub-title tg__animate-text">
                  Corporazioni della community italiana di EVE Online
                </span>
                <h3 class="title text-center">Corporazioni della community italiana di EVE Online</h3>
                <hr class="border-color-primary"/>
                <p class="small text-center font-italic">Elenco ordinato in base al numero di membri</p>
                <hr class="border-color-primary"/>
                            
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-12">
              <div class="tournament__list-item-wrapper">
                <corporations-list-item v-for="(item,i) in corporations" :key="item.eve_corp_id" :item="item" :index="i" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script setup lang="ts">
import type { eveCorp } from "@/types/eve";
import { useFetch } from 'nuxt/app';

const { data: corps } = await useFetch(`/api/community-ceos`)
const corporations:eveCorp = corps.value as eveCorp
</script>
