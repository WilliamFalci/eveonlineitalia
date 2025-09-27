<template>
  <section class="tournament__details-area">
    <div class="container">
        <div class="row justify-content-center">
          <div class="blog-post-wrapper">
              <div class="tournament__details-content">
                <h2 class="title">zombie land TOURNAMENT max</h2>
                <div class="blog-post-meta">
                    <ul class="list-wrap">
                      <li>By<nuxt-link to="#">Admin</nuxt-link></li>
                      <li><i class="far fa-calendar-alt"></i> Aug 16, 2024</li>
                      <li><i class="far fa-comments"></i><nuxt-link to="#">No comments</nuxt-link></li>
                    </ul>
                </div>
                <p>Excepteur sint occaecat atat non proident, sunt in culpa qui officia deserunt mollit anim id est labor umLor em ipsum dolor amet consteur adiscing Duis elentum solliciin is yaugue euismods Nulla ullaorper. Ipsum is simply dummy text of  printing and typeetting industry. Lorem Ipsum has been the industries standsaard sipiscing Duis elementum solliciin. Duis aute irure dolor in repderit in voluptate velit esse cillum dolorliq commodo consequat.</p>
                <blockquote>
                    <p>Duis elentum solliciin is yaugue euismods Nulla ullaorper. Ipsum is simply dummy text of printing and typeetting industry.</p>
                </blockquote>
                <p>Axcepteur sint occaecat atat non proident, sunt in culpa qui officia deserunt mollit anim id est labor umLor em ipsum dolor amet, consteur adiscing Duis elentum solliciin is yaugue euismods Nulla ullaorper. Ipsum is simply dummy text of  printing and typeetting industry. Lorem Ipsum has been the industries standsaard sipiscing Duis elementum.</p>
                <div class="tournament__details-video position-relative">
                    <NuxtImg src="/images/blog/blog_post03.jpg" alt="img"/>
                    <a class="popup-video pointer" @click="playVideo('ssrNcwxALS4')">
                      <i class="flaticon-play"></i>
                    </a>
                </div>
                <p>Axcepteur sint occaecat atat non proident, sunt in culpa qui officia deserunt mollit anim id est labor umLor em ipsum dolor amet, consteur adiscing Duis elentum solliciin is yaugue euismods Nulla ullaorper. Ipsum is simply dummy text of printing.</p>
                <div class="tournament__details-form">
                    <h4 class="tournament__details-form-title">join nft games android</h4>
                    <p>Simply dummy text of printing and typeetting industry been the industries</p>
                    <form action="#">
                      <input type="text" placeholder="Name *" />
                      <input type="text" placeholder="Player ID *" required />
                      <input type="email" placeholder="Email *" required />
                      <button class="tournament__details-form-btn">Join Now</button>
                    </form>
                </div>
                <div class="blog-details-bottom">
                    <div class="row">
                      <div class="col-xl-6 col-md-7">
                          <div class="tg-post-tags">
                            <h5 class="tags-title">tags :</h5>
                            <ul class="list-wrap d-flex flex-wrap align-items-center m-0">
                                <li><nuxt-link to="#">Esports</nuxt-link>,</li>
                                <li><nuxt-link to="#">Fantasy</nuxt-link>,</li>
                                <li><nuxt-link to="#">game</nuxt-link></li>
                            </ul>
                          </div>
                      </div>
                      <div class="col-xl-6 col-md-5">
                          <div class="blog-post-share justify-content-start justify-content-md-end">
                            <h5 class="share">share :</h5>
                            <ul class="list-wrap">
                                <li><nuxt-link to="#"><i class="fab fa-facebook-f"></i></nuxt-link></li>
                                <li><nuxt-link to="#"><i class="fab fa-twitter"></i></nuxt-link></li>
                                <li><nuxt-link to="#"><i class="fab fa-linkedin-in"></i></nuxt-link></li>
                            </ul>
                          </div>
                      </div>
                    </div>
                </div>
              </div>
          </div>
          <div class="blog-post-sidebar">
              <aside class="blog-sidebar tournament__sidebar">
                <div class="shop__widget">
                    <h4 class="shop__widget-title">search</h4>
                    <div class="shop__widget-inner">
                      <div class="shop__search">
                          <input type="text" placeholder="Search here" />
                          <button class="p-0 border-0"><i class="flaticon-search"></i></button>
                      </div>
                    </div>
                </div>
                <div class="shop__widget">
                    <h4 class="shop__widget-title">TRENDING MATCHES</h4>
                    <div class="shop__widget-inner">
                      <div class="trending__matches-list">
                          <tournament-details-match-item :item="{thumb: '/images/others/trend_match01.png', box_price: 7500, team_name: 'FOXTIE MAX',video_id:'a3_o4SpV1vI' }" />
                          <tournament-details-match-item :item="{thumb: '/images/others/trend_match02.png', box_price: 5500, team_name: 'HATAX NINJA',video_id:'ssrNcwxALS4' }" />
                          <tournament-details-match-item :item="{thumb: '/images/others/trend_match03.png', box_price: 3500, team_name: 'SPARTAN II',video_id:'a3_o4SpV1vI' }" />
                      </div>
                    </div>
                </div>
                <div class="shop__widget">
                    <h4 class="shop__widget-title">ADVERTISEMENT</h4>
                    <div class="shop__widget-inner">
                      <div class="tournament__advertisement">
                          <nuxt-link to="#"><NuxtImg src="/images/others/tournament_ad.jpg" alt="img" /></nuxt-link>
                      </div>
                    </div>
                </div>
              </aside>
          </div>
        </div>
    </div>
  </section>

  <!-- popup video start -->
  <popup-video></popup-video>
  <!-- popup video end -->
</template>

<script setup lang="ts">
const {playVideo} = useVideoPopup();
</script>
