<template>
    <section class="shop-area">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-3 col-lg-4 col-md-11 order-2 order-lg-0">
                    <!-- sidebar start  -->
                    <search-sidebar @update-q="handleUpdateQ" tPlaceholder="Cerca personaggio"/>
                    <!-- sidebar end  -->
                </div>

                <div class="col-xl-9 col-lg-8 col-md-11">
                    <div
                        class="row justify-content-center row-cols-xl-3 row-cols-lg-2 row-cols-md-2 row-cols-sm-2 row-cols-1">
                        <div v-for="item in list" :key="item.eve_online_id" class="col">
                            <giocatori-item :item="item" />
                        </div>
                    </div>

                    <div class="pagination__wrap" v-if="totPages">
                        <ui-pagination :totPages="totPages" :currPage="page" @update-curr-page="handleUpdateCurrPage" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import type { eveMember } from "@/types/eve";
import { useFetch, useRoute, useRouter } from 'nuxt/app';
import { ref } from "vue";

const route = useRoute();
const router = useRouter();
const page = ref((route.query.page && Number(route.query.page) > 0) ? Number(route.query.page) : 1)
const take = ref((route.query.take && Number(route.query.take) > 0) ? Number(route.query.take) : 9)
const totPages = ref()
const list = ref()
const q = ref()

const { data: members } = await useFetch(`/api/community-users?page=${page.value}&take=${take.value}`)
totPages.value = (members.value as any)?.totPages
console.log(totPages.value)
list.value = members.value.elements

const handleUpdateCurrPage = async (newValue: number) => {
    page.value = newValue
    let url = `/api/community-users?page=${page.value}&take=${take.value}`
    if (q.value) url = `${url}&q=${q.value}`
    const { data: members } = await useFetch(url)
    router.push({
        path: route.path,
        query: { ...route.query, page: page.value, take: take.value }
    })
    list.value = (members.value as any)?.elements as eveMember[]
    totPages.value = (members.value as any)?.totPages
}

if (route.query.page && Number(route.query.page) > Number(totPages.value)){
    await handleUpdateCurrPage(totPages.value)
}

const handleUpdateQ = async (newValue: string) => {
    page.value = 1
    take.value = 9
    router.push({
        path: route.path,
        query: { ...route.query, page: page.value, take: take.value }
    })
    q.value = newValue
    let url = `/api/community-users?page=${page.value}&take=${take.value}`
    if (q.value) url = `${url}&q=${q.value}`
    const { data: members } = await useFetch(url)
    list.value = (members.value as any)?.elements as eveMember[]
    totPages.value = (members.value as any)?.totPages
}


</script>