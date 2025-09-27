<template>
    <div>
        <!-- breadcrumb area start -->
        <breadcrumb-one title="Page Not Found" subtitle="404" bg="/images/bg/breadcrumb_bg01.jpg"
            brd_img="/images/others/breadcrumb_img02.png" />
        <!-- breadcrumb area end -->

        <!-- error-area -->
        <div class="error__area team-bg section-pt-120 section-pb-120"
            style="background-image: url(/images/bg/team_bg.jpg);">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xxl-8 col-xl-7 col-lg-8">
                        <div class="error-content text-center">
                            <svg-not-found />
                            <h2 class="title">Look Like You’re Lost</h2>
                            <p>Sorry, the page you are looking for could not be found</p>
                            <nuxt-link href="/" class="btn">back to home</nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- error-area-end -->
    </div>
</template>

<script setup lang="ts">
useSeoMeta({ title: "Not Found - MYKD" });
</script>