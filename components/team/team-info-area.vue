<template>
<section class="team__info-area">
     <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="team__info-wrap">
                    <div class="team__info-discord">
                        <div class="about__content-circle">
                            <NuxtImg src="/images/icons/circle02.svg" alt="img" />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" version="1.1">
                                <path id="textPath" d="M 0,75 a 75,75 0 1,1 0,1 z"></path>
                                <text>
                                    <textPath href="#textPath">EVE ONLINE ITALIA</textPath>
                                </text>
                            </svg>
                            <i class="flaticon-discord"></i>
                        </div>
                        <div class="team__info-discord-info">
                            <span class="sub">Join Us</span>
                            <h5 class="title"><nuxt-link to="https://discord.com/" target="_blank">DISCORD</nuxt-link></h5>
                        </div>
                    </div>
                    <div class="team__info-list">
                        <ul class="list-wrap">
                            <li>
                                <div class="team__info-item">
                                    <div class="team__info-icon">
                                        <NuxtImg src="/images/others/team_vs02.png" alt="img"/>
                                    </div>
                                    <div class="team__info-content">
                                        <span class="sub">Member</span>
                                        <h5 class="title">Black ninja</h5>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="team__info-item">
                                    <div class="team__info-icon">
                                        <i class="flaticon-swords-1"></i>
                                    </div>
                                    <div class="team__info-content">
                                        <span class="sub">Game play</span>
                                        <h5 class="title">Pubg Mobile</h5>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="team__info-item">
                                    <div class="team__info-icon">
                                        <i class="flaticon-diamond"></i>
                                    </div>
                                    <div class="team__info-content">
                                        <span class="sub">Win Time</span>
                                        <h5 class="title">04</h5>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>
