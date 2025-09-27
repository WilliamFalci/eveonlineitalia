<template>
  <section class="contact-area">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6 col-md-10">
            <div class="contact__content">
              <h2 class="overlay-title">
                <span>join us</span>
              </h2>
              <h2 class="title">CONTACT US AND FIND YOUR mykd</h2>
              <p>
                Axcepteur sint occaecat atat non proident, sunt culpa officia
                deserunt mollit anim id est labor umLor emdolor
              </p>
              <div class="footer-el-widget">
                <h4 class="title">information</h4>
                <ul class="list-wrap">
                  <li>
                    <nuxt-link to="tel:123">+971 333 222 557</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="mailto:info@exemple.com">info@exemple.com</nuxt-link>
                  </li>
                  <li>New Central Park W7 Street, New York</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-10">
            <div class="contact__form-wrap">
              <!-- form start -->
              <form-contact />
              <!-- form end -->
              <p class="ajax-response"></p>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script setup lang="ts">

</script>
