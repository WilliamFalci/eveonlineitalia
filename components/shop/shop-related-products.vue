<template>
  <div class="related__product-wrapper">
    <h2 class="related-title">Related Products</h2>
    <div
      class="row justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1"
    >
      <div v-for="item in related_prd" :key="item.id" class="col">
        <shop-item :item="item" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import product_data from "@/data/product-data";

const related_prd = [...product_data].slice(0, 4);
</script>
