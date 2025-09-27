<template>
  <section class="faq-area">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <div class="faq__content-wrap">
            <div class="section__title text-start">
              <span class="sub-title tg__animate-text">Get your answer</span>
              <h3 class="title">Frequently asked questions</h3>
              <p>
                Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum
                <br />
                sollicitudin is yaugue euismods.
              </p>
            </div>
            <div class="faq__wrapper">
              <div class="accordion" id="accordionExample">
                <div
                  v-for="(item, i) in faq_data"
                  :key="i"
                  class="accordion-item"
                  @click="handleMouseOver(i)"
                >
                  <h2 class="accordion-header" :id="`heading-${item.id}`">
                    <button
                      :class="`accordion-button ${item.active ? '' : 'collapsed'}`"
                      type="button"
                      data-bs-toggle="collapse"
                      :data-bs-target="`#collapse-${item.id}`"
                      :aria-expanded="item.active ? 'true' : 'false'"
                      :aria-controls="`collapse-${item.id}`"
                    >
                      <span class="count">{{ i + 1 }}</span> {{ item.title }}
                    </button>
                  </h2>
                  <div
                    :id="`collapse-${item.id}`"
                    :class="`accordion-collapse collapse ${item.active ? 'show' : ''}`"
                    :aria-labelledby="`heading-${item.id}`"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      {{ item.desc }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="services__images">
            <div
              v-for="(s, i) in service_images"
              :key="i"
              :class="`services__images-item ${activeIndex === i ? 'active' : ''}`"
            >
              <img :src="s" alt="img" />
              <nuxt-link to="/service-details" class="services__link">
                <i class="flaticon-next"></i>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const activeIndex = ref<number | null>(0);

const handleMouseOver = (index: number) => {
  activeIndex.value = index;
};

// service images
const service_images: string[] = [
  "/images/others/services_img01.jpg",
  "/images/others/services_img02.jpg",
  "/images/others/services_img03.jpg",
  "/images/others/services_img04.jpg",
];
// faq data type
type IFaq = {
  id: string;
  active?: boolean;
  title: string;
  desc: string;
};
// faq data
const faq_data: IFaq[] = [
  {
    id: "one",
    active: true,
    title: "Best NFT Game",
    desc: "Been the industries standard dummy text ever since the 1500s, when an unknown printer took a galley",
  },
  {
    id: "two",
    title: "Where can I get some?",
    desc: "Been the industries standard dummy text ever since the 1500s, when an unknown printer took a galley",
  },
  {
    id: "three",
    title: "Does it come from?",
    desc: "Been the industries standard dummy text ever since the 1500s, when an unknown printer took a galley",
  },
];
</script>
