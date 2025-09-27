<template>
 <div class="shop__details-images-wrap">
      <ul class="nav nav-tabs" id="imageTab" role="tablist">
          <li class="nav-item" role="presentation">
              <button class="nav-link active" id="one-tab" data-bs-toggle="tab" data-bs-target="#one" type="button" role="tab" aria-controls="one" aria-selected="true" :tabindex="-1">
                  <NuxtImg src="/images/products/shop_nav01.jpg" alt="img"/>
              </button>
          </li>
          <li class="nav-item" role="presentation">
              <button class="nav-link" id="two-tab" data-bs-toggle="tab" data-bs-target="#two" type="button" role="tab" aria-controls="two" aria-selected="false" :tabindex="-1">
                  <NuxtImg src="/images/products/shop_nav02.jpg" alt="img"/>
              </button>
          </li>
          <li class="nav-item" role="presentation">
              <button class="nav-link" id="three-tab" data-bs-toggle="tab" data-bs-target="#three" type="button" role="tab" aria-controls="three" aria-selected="false" :tabindex="-1">
                  <NuxtImg src="/images/products/shop_nav03.jpg" alt="img"/>
              </button>
          </li>
      </ul>
      <div class="tab-content" id="imageTabContent">
          <div v-for="(item,index) in active_images" :key="item.id" :class="`tab-pane ${item.id === 'one'?'show active':''}`" :id="item.id" role="tabpanel" :aria-labelledby="`${item.id}-tab`">
              <a class="popup-image pointer" @click.prevent="handleShowImage(index)">
                <NuxtImg :src="item.img" alt="img" />
              </a>
          </div>
      </div>
  </div>

  <!-- image lightbox start -->
  <popup-image-lightbox :images="active_images.map(p => p.img)" :indexVal="index" :visible="visible" @handleHide="handleHide"></popup-image-lightbox>
  <!-- image lightbox end -->
</template>

<script setup lang="ts">
const active_images = [
    {id:'one',img:'/images/products/shop_details01.jpg'},
    {id:'two',img:'/images/products/shop_details02.jpg'},
    {id:'three',img:'/images/products/shop_details03.jpg'}
]

// image popup
const visible = ref(false);
const index = ref(0);
function handleHide() {
  visible.value = false;
}
const handleShowImage = (indexNum: number) => {
  index.value = indexNum;
  visible.value = true;
};
</script>