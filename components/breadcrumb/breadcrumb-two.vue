<template>
  <section
    class="breadcrumb-area breadcrumb__hide-img"
    style="background-image: url(/images/bg/breadcrumb_bg01.jpg)"
  >
    <div class="container">
      <div class="breadcrumb__wrapper">
        <div class="row">
          <div class="col-12">
            <div class="breadcrumb__content">
              <h2 class="title">{{ title }}</h2>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <nuxt-link to="/">Home</nuxt-link>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    {{ subtitle }}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  subtitle: string;
}>();
</script>
