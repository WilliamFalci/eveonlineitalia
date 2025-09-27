<template>
  <div :class="`${isActive ? 'search__active' : ''}`">
    <div class="search__popup-wrap">
      <div class="search__layer"></div>
      <div class="search__close" @click="closeSearch">
        <span>
          <i class="flaticon-swords-in-cross-arrangement"></i>
        </span>
      </div>
      <div class="search__wrap text-center">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h2 class="title">
                ... <span>Search Here</span> ...
              </h2>
              <div class="search__form">
                <form action="#">
                  <input type="text" name="search" placeholder="Type keywords here" required />
                  <button class="search-btn">
                    <i class="flaticon-loupe"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ isActive: boolean }>();
const emit = defineEmits();

const closeSearch = () => {
  emit('closeSearch', '/audio/remove.wav');
};

</script>
