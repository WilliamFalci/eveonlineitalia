<template>
  <section
    class="roadMap__area roadMap-bg section-pt-150 section-pb-150"
    style="background-image: url(/images/bg/roadmap_bg.jpg)"
  >
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-10">
          <div class="roadMap__inner">
            <div class="row">
              <div class="col-xl-5 col-lg-6">
                <div class="roadMap__content">
                  <h2 class="title">a look into roadmaps seasons</h2>
                  <p>
                    With Season 1 Ending with our play and Duis elementum
                    sollicitudin is yaugue euismods Nulla ulla Player-focused
                    updates games from Mobile App and Enjoy.
                  </p>
                  <nuxt-link to="/contact" class="tg-btn-1 -btn-yellow">
                    <span>roadmap</span>
                  </nuxt-link>
                </div>
                <div class="roadMap__img">
                  <img
                    src="/images/others/roadmap.png"
                    class="tg-parallax"
                    data-scale="1.5"
                    data-orientation="down"
                    alt="roadMap__img"
                  />
                </div>
              </div>
              <div class="col-xl-7 col-lg-6">
                <div class="roadMap__steps-wrap" ref="roadMap_target">
                  <div
                    v-for="item in road_map_lists"
                    :key="item.id"
                    :class="`roadMap__steps-item ${item.active ? 'active' : ''}`"
                  >
                    <h3 class="title">{{item.title}}</h3>
                    <ul class="roadMap__list list-wrap">
                      <li
                        v-for="(l, i) in item.lists"
                        :key="i"
                        :class="`${l.active ? 'active' : ''} tg__animate-text style2`"
                      >
                        {{ l.text }}
                      </li>
                    </ul>
                    <img
                      src="/images/others/roadmap_img.png"
                      alt="img"
                      class="roadMap__steps-img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const roadMapTarget = ref<HTMLElement | null>(null);
// road map lists
type IRoadMap = {
  id: number;
  active: boolean;
  title: string;
  lists: {
    active: boolean;
    text: string;
  }[];
};
const road_map_lists: IRoadMap[] = [
  {
    id: 1,
    active: true,
    title: "season 1",
    lists: [
      { active: true, text: "Battle Practice Mode" },
      { active: true, text: "iOS Open Beta" },
      { active: true, text: "Land Creation & Building" },
      { active: true, text: "Land Creation & Building" },
    ],
  },
  {
    id: 2,
    active: false,
    title: "season 2",
    lists: [
      { active: true, text: "Battle Practice Mode" },
      { active: true, text: "iOS Open Beta" },
      { active: false, text: "Land Creation & Building" },
      { active: false, text: "Land Creation & Building" },
    ],
  },
  {
    id: 3,
    active: false,
    title: "season 3",
    lists: [
      { active: false, text: "Battle Practice Mode" },
      { active: false, text: "iOS Open Beta" },
      { active: false, text: "Land Creation & Building" },
      { active: false, text: "Land Creation & Building" },
    ],
  },
];
import { useIntersectionObserver } from '@vueuse/core'

const roadMap_target = ref(null);
const roadMapAnimView = ref(false);

const { stop } = useIntersectionObserver(
  roadMap_target,
  ([{ isIntersecting }], observerElement) => {
    if (isIntersecting) {
      roadMapAnimView.value = isIntersecting;
    }
  },
)

  watch(roadMapAnimView, (newValue) => {
    if (newValue) {
      useTextAnimation()
    }
  })
</script>
