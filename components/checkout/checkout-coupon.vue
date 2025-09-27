<template>
    <div class="coupon__code-wrap">
      <div class="coupon__code-info">
        <span>
          <i class="far fa-bookmark"></i> Have a coupon?
        </span>
        <a @click="toggleForm" class="pointer" id="another-element">
          Click here to enter your code
        </a>
      </div>
      <form v-if="openForm" action="#" class="coupon__code-form">
        <p>If you have a coupon code, please apply it below.</p>
        <input type="text" placeholder="Coupon code" />
        <button type="submit" class="btn">Apply coupon</button>
      </form>
    </div>
  </template>
  
  <script setup lang="ts">
  
  const openForm = ref(false);
  
  const toggleForm = () => {
    openForm.value = !openForm.value;
  };
  </script>
  
  