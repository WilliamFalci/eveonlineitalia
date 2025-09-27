<template>
  <section
    class="upcoming-match__area section-pt-120 section-pb-85"
    style="background-image: url(/images/bg/match_bg.jpg)"
  >
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-6 col-lg-7 col-md-10">
          <div class="section__title text-center mb-60">
            <text-animation title="MATCHES list" />
            <h3 class="title">upcoming MATCHES</h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="upcoming-match__lists">
            <upcoming-match-item
              date="OCTOBER 7, 2024, 8:30 PM"
              team_1="/images/others/team_vs01.png"
              team_2="/images/others/team_vs02.png"
              time="08:30"
              game_name_1="dota2"
              match_name="sky hunter"
              match_name_2="The Tadium"
              game_name_2="dota2"
              delay=".2"
            />

            <upcoming-match-item
              date="October 9, 2024, 5:30 pm"
              team_1="/images/others/team_vs03.png"
              team_2="/images/others/team_vs04.png"
              time="05:30"
              game_name_1="valorant"
              match_name="killer 7"
              match_name_2="Black mx"
              game_name_2="valorant"
              delay=".4"
            />

            <upcoming-match-item
              date="October 10, 2024, 9:30 pm"
              team_1="/images/others/team_vs05.png"
              team_2="/images/others/team_vs06.png"
              time="09:30"
              game_name_1="PUBG PC"
              match_name="killer 7"
              match_name_2="Black mx"
              game_name_2="PUBG PC"
              delay=".6"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
