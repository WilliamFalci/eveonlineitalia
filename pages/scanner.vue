<template>
    <div class="start-div">
        <div class="container mt-5 mb-5">
            <div class="row justify-contetn-center" v-if="system">
                <p><a :href="`https://evemaps.dotlan.net/map/${system.region.name}/${system.name}`" target="_blank"
                        class="h1 color-primary">{{ system.name }}</a><span class="h3">({{
                            Math.trunc(system.security_status * 10)
                            / 10 }})</span> <a :href="`https://evemaps.dotlan.net/map/${system.region.name}`"
                        target="_blank" class="h5 color-primary">{{ system.region.name }}</a></p>
            </div>

            <hr class="mt-3 mb-3" v-if="system" />

            <div class="row" v-if="dscanOverview">
                <div class="wrap-entities">
                    <div class="entity-container" v-for="(value, key) in dscanOverview">
                        <div class="wrap-entity-img">
                            <img class="entity-img"
                                :src="`/images/brackets/${eveShipClasses[key.toString().toLowerCase().replaceAll(' ', '')]}_32.png`" />
                            <img v-if="value.techLevel !== 'Unknown'" :src="`/images/pips/${value.techLevel}.png`"
                                class="pip" />
                        </div>
                        <hr />
                        <div class="p-1">
                            <p class="entity-name-overview text-center">{{ key }}</p>
                        </div>
                        <div class="p-1">
                            <p class="text-center">{{ value.count }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <hr class="mt-3 mb-3" v-if="dscanOverview" />

            <div class="row justify-content-center">
                <div class="col-6" v-if="dscanResult.length == 0 && !dscanAnalyzing">
                    <text-animation title="Directional Scanner" />
                    <textarea id="dscan" name="dscan" rows="5" class="w-100" v-model="dscan" />
                    <div class="row justify-content-center mb-5 mt-5"
                        v-if="dscanResult.length == 0 && lscanResult.length > 0">
                        <button class="w-auto btn-analyze" @click="analyze">Analizza</button>
                    </div>
                </div>
                <div class="col-6 align-items-center d-flex justify-content-center"
                    v-else-if="dscanResult.length == 0 && dscanAnalyzing">
                    <div class="row">
                        <div class="loader">
                            <div class="circle"></div>
                            <div class="circle"></div>
                            <div class="circle"></div>
                            <div class="circle"></div>
                        </div>
                    </div>
                </div>
                <div class="col-6" v-else>
                    <div class="wrap-section">
                        <p>DIRECTIONAL SCANNER</p>
                        <i class="flaticon-settings" @click="toggleDscaListMode"></i>
                    </div>

                    <div class="row m-0 mb-3 wrap-tabs">
                        <span class="wrap-button col" :class="{ 'active': dscanTab == 'ALL' }"
                            @click="dscanTab = 'ALL'">ALL</span>
                        <span class="wrap-button col" :class="{ 'active': dscanTab == 'OFF-GRID' }"
                            @click="dscanTab = 'OFF-GRID'">OFF-GRID</span>
                        <span class="wrap-button col" :class="{ 'active': dscanTab == 'IN-GRID' }"
                            @click="dscanTab = 'IN-GRID'">IN-GRID</span>
                    </div>
                    <hr class="mb-4" />
                    <!-- ENTITIES -->
                    <div class="mb-4" v-for="type of dscanOjectTypes" v-if="getDscanData && getDscanData.length > 0">
                        <div class="wrap-button">
                            <p>{{ type.toUpperCase() }}: <span>{{getDscanData.filter((x: any) => x.objectType ===
                                type).length}}</span>
                            </p>
                        </div>

                        <div class="wrap-entities">

                            <div :class="{ 'entity-container-row': listRow.dscan, 'entity-container': !listRow.dscan }"
                                v-for="entity of getDscanData.filter((x: any) => x.objectType === type)">
                                <div class="wrap-entity-img" :style="`background-image: url('${entity.icon}')`">
                                    <img class="entity-img" :src="entity.icon" />
                                    <img v-if="entity.techLevel !== 'Unknown'"
                                        :src="`/images/pips/${entity.techLevel}.png`" class="pip" />
                                    <span class="entity-counter">{{ entity.count }}</span>
                                </div>
                                <hr />
                                <div class="p-1">
                                    <p class="entity-name text-center">{{ entity.type }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="col-6" v-if="lscanResult.length == 0 && !lscanAnalyzing">
                    <text-animation title="Local Scanner" />
                    <textarea id="lscan" name="dscan" rows="5" class="w-100" v-model="lscan" />
                    <div class="row justify-content-center mb-5 mt-5"
                        v-if="dscanResult.length > 0 && lscanResult.length == 0">
                        <button class="w-auto btn-analyze" @click="analyze">Analizza</button>
                    </div>
                </div>
                <div class="col-6 align-items-center d-flex justify-content-center"
                    v-else-if="lscanResult.length == 0 && lscanAnalyzing">
                    <div class="row">
                        <div class="loader">
                            <div class="circle"></div>
                            <div class="circle"></div>
                            <div class="circle"></div>
                            <div class="circle"></div>
                        </div>
                    </div>
                </div>
                <div class="col-6" v-else>
                    <div class="wrap-section">
                        <p>LOCAL SCANNER</p>
                        <i class="flaticon-settings" @click="toggleLscaListMode"></i>
                    </div>
                    <!-- ALLIANCES -->
                    <div id="alliances" class="mb-4">
                        <div class="wrap-button mb-3">
                            <p @click="toggleShowAlly">ALLIANCES: <span>{{ lscanResult.length }}</span> <span
                                    v-if="searchAlly">(Found: {{ getAlliances.length }})</span></p>
                            <i class="flaticon-loupe" @click="toggleSearchAlly"></i>
                        </div>

                        <div class="wrap-search mb-3" v-show="showSearchAlly">
                            <input type="text" class="w-100" placeholder="search by name" v-model="searchAlly" />
                        </div>

                        <div class="wrap-entities" v-show="showAlly">
                            <div :class="{ 'entity-container-row': listRow.lscan, 'entity-container': !listRow.lscan, 'selected': selectedAlliance === alliance.name }"
                                v-for="alliance of getAlliances" @click="toggleSelectedAlliance(alliance.name)">
                                <div class="wrap-entity-img" :style="`background-image: url('${alliance.logoUrl}')`">
                                    <img class="entity-img" :src="alliance.logoUrl" />
                                    <span class="entity-counter">{{ alliance.corporations.length }}</span>
                                </div>
                                <hr />
                                <div class="p-1">
                                    <p class="entity-name text-center">{{ alliance.name }}</p>
                                </div>
                                <hr v-if="!listRow.lscan" />
                                <div class="p-1" v-if="!listRow.lscan">
                                    <p class="entity-info justify-content-space-between d-flex">
                                        <span>Chars:</span><span>{{alliance.corporations.reduce((sum: any, corp: {
                                            members: string | any[]
                                        }) => sum +
                                            corp.members.length, 0)}}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- CORPORATIONS -->
                    <div id="corporations" class="mb-4">
                        <div class="wrap-button">
                            <p @click="toggleShowCorps">CORPORATIONS: <span>{{lscanResult.flatMap((alliance: any) =>
                                alliance.corporations).length}}</span> <span
                                    v-if="searchAlly || searchCorp || selectedAlliance">(Found: {{
                                        getCorporations.length }})</span></p>
                            <i class="flaticon-loupe" @click="toggleSearchCorp"></i>
                        </div>
                        <div class="wrap-search mb-3" v-show="showSearchCorp">
                            <input type="text" class="w-100" placeholder="search by name" v-model="searchCorp" />
                        </div>
                        <div class="wrap-entities" v-show="showCorps">
                            <div class="entity-container" v-for="corp of getCorporations"
                                :class="{ 'entity-container-row': listRow.lscan, 'entity-container': !listRow.lscan, 'selected': selectedCorporation === corp.name }"
                                @click="toggleSelectedCorporation(corp.name, corp.allianceName)">
                                <div class="wrap-entity-img" :style="`background-image: url('${corp.logoUrl}')`">
                                    <img class="entity-img" :src="corp.logoUrl" />
                                    <img class="entity-ally-img" :src="corp.allianceLogo" />
                                    <span class="entity-counter">{{ corp.count }}</span>
                                </div>
                                <hr />
                                <div class="p-1">
                                    <p class="entity-name text-center">{{ corp.name }}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- MEMBERS -->
                    <div id="members" class="mb-4">
                        <div class="wrap-button" @click="toggleShowMembers">
                            <p>MEMBERS: <span>{{lscanResult.flatMap((alliance: any) =>
                                alliance.corporations.flatMap((corp: any) => corp.members)).length}}</span> <span
                                    v-if="searchAlly || searchCorp || selectedAlliance || selectedCorporation">(Found:
                                    {{ getMembers.length }})</span></p>
                        </div>
                        <div class="wrap-entities" v-show="showMembers">
                            <div :class="{ 'entity-container-row': listRow.lscan, 'entity-container': !listRow.lscan }"
                                v-for="member of getMembers">
                                <div class="wrap-entity-img" :style="`background-image: url('${member.portraitUrl}')`">
                                    <img class="entity-img" :src="member.portraitUrl" />
                                    <img class="entity-corp-img" :src="member.corporationLogo" />
                                    <img class="entity-ally-img" :src="member.allianceLogo" />
                                </div>
                                <hr />
                                <div class="p-1">
                                    <p class="entity-name text-center">{{ member.name }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center mb-5 mt-5" v-if="dscanResult.length == 0 && lscanResult.length == 0">
                <button class="w-auto btn-analyze" @click="analyze">Analizza</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { countByClassName, getFullOverview, parseTextToObjectsAndTypes, eveShipClasses } from '../utils/scanner'
import { getEsiDataDSscan, getEsiDataLocal } from '../utils/esi'
import { useFetch, useRoute, useRouter } from 'nuxt/app';

const route = useRoute();
const router = useRouter();

const lscan = ref()
const dscan = ref()

const system = ref()

const selectedAlliance = ref()
const selectedCorporation = ref()

const showAlly = ref(true)
const showCorps = ref(false)
const showMembers = ref(false)

const showSearchAlly = ref(false)
const showSearchCorp = ref(false)

const dscanOjectTypes = ref()
const dscanResult = ref(<any>[])
const dscanOverview = ref()
const lscanResult = ref(<any>[])

const dscanAnalyzing = ref(false)
const lscanAnalyzing = ref(false)

const searchAlly = ref()
const searchCorp = ref()

const listRow = ref({
    dscan: false,
    lscan: false
})

const toggleDscaListMode = () => { listRow.value.dscan = listRow.value.dscan ? false : true }
const toggleLscaListMode = () => { listRow.value.lscan = listRow.value.lscan ? false : true }

const toggleSelectedAlliance = (allianceName: string) => {
    selectedCorporation.value = null
    selectedAlliance.value = (allianceName == selectedAlliance.value) ? null : allianceName
    if (selectedAlliance.value) {
        const el = document.getElementById('corporations')
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }
}

const toggleSelectedCorporation = (corporationName: string, allianceName: string) => {
    if (corporationName == selectedCorporation.value) {
        selectedCorporation.value = null
    } else {
        selectedAlliance.value = allianceName
        selectedCorporation.value = corporationName
        if (selectedCorporation.value) {
            const el = document.getElementById('members')
            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
        }
    }
}

const toggleShowAlly = () => {
    showAlly.value = showAlly.value ? false : true
    if (showAlly.value == false) showSearchAlly.value = false
}

const toggleShowCorps = () => {
    showCorps.value = showCorps.value ? false : true
    if (showCorps.value == false) showSearchCorp.value = false
}

const toggleShowMembers = () => { showMembers.value = showMembers.value ? false : true }

const toggleSearchAlly = () => { showSearchAlly.value = showSearchAlly.value ? false : true }

const toggleSearchCorp = () => { showSearchCorp.value = showSearchCorp.value ? false : true }

const getAlliances = computed(() => (searchAlly.value) ? lscanResult.value.filter((x: any) => x.name.toString().toLowerCase().includes(searchAlly.value.toString().toLowerCase())) : lscanResult.value)

const getCorporations = computed(() => getAlliances.value.flatMap((x: any) =>

    x.corporations.filter((k: any) => {

        if (!searchCorp.value && !selectedAlliance.value) {
            return k
        } else {
            if (searchCorp.value && k.name.toString().toLowerCase().includes(searchCorp.value)) {
                if (!selectedAlliance.value) return k
                if (selectedAlliance.value && x.name == selectedAlliance.value) return k
            } else {
                if (selectedAlliance.value && x.name == selectedAlliance.value) return k
            }
        }
    }).map((y: any) => { return { ...y, allianceName: x.name, allianceLogo: x.logoUrl } })))

const getMembers = computed(() => getCorporations.value.flatMap((x: any) =>
    x.members.filter((k: any) => {
        if (!selectedAlliance.value && !selectedCorporation.value) {
            return k
        } else {
            if (selectedCorporation.value && selectedCorporation.value == x.name) { return k }
            if (!selectedCorporation.value && selectedAlliance.value && selectedAlliance.value == x.allianceName) { return k }
        }
    }).map((y: any) => {
        return { ...y, corporationName: x.name, corporationLogo: x.logoUrl, allianceName: x.allianceName, allianceLogo: x.allianceLogo }
    }))
)

const getDscanData = computed(() => {
    if (dscanTab.value == 'ALL' && dscanResult.value && dscanResult.value.length > 0) return dscanResult.value
    if (dscanTab.value == 'OFF-GRID' && dscanResult.value && dscanResult.value.length > 0) return dscanResult.value.filter((x: any) => x.distance == null || x.distance == '')
    if (dscanTab.value == 'IN-GRID' && dscanResult.value && dscanResult.value.length > 0) return dscanResult.value.filter((x: any) => x.distance !== null && x.distance !== '')
    return []
})

const UID = ref()

const dscanTab = ref('ALL')

const analyze = async () => {
    let objects: any[] = []
    let uniqueTypes:any[] = []
    let names:any[] = []
    let sun
    
    if (dscan.value)  {
        const { objects: _obj, uniqueTypes: _uniqueT, sun: _s } = await parseTextToObjectsAndTypes(dscan.value)
        objects = _obj
        uniqueTypes = _uniqueT
        sun = _s
    }

    if (lscan.value){
        names = lscan.value
            .trim()              // rimuove spazi o newline iniziali/finali
            .split("\n")         // divide per newline
            .map((s: string) => s.trim())  // rimuove spazi da ogni elemento
            .filter(Boolean);    // rimuove eventuali righe vuote
    }

    if (((objects.length > 0 && uniqueTypes.length > 0) || sun) || names.length > 0) {
        if (!UID.value){
            const createUid = await (await fetch(`/api/create-scanner-id`)).json()
            UID.value = createUid
            router.push({
                path: route.path,
                query: { ...route.query, scanId: createUid.id }
            })
        }

        if ((objects.length > 0 && uniqueTypes.length > 0) || sun) {
            dscanAnalyzing.value = true
            if (sun) {
                const systemData = await (await fetch(`/api/esi/solar-system?name=${sun}`)).json()
                if (!systemData.error) {
                    system.value = await fetch('/api/update-scanner-data', {
                        method: 'POST',
                        body: JSON.stringify({
                            id: UID.value.id,
                            type: 'SYSTEM',
                            data: system.value
                        })
                    })
                }
            }

            getEsiDataDSscan(uniqueTypes).then(async (data) => {
                dscanOjectTypes.value = Array.from(new Set(data.map((item: any) => item.objectType)));
                await fetch('/api/update-scanner-data', {
                    method: 'POST',
                    body: JSON.stringify({
                        id: UID.value.id,
                        type: 'DSCAN_TYPES',
                        data: dscanOjectTypes.value
                    })
                })
                const mapped = objects.map((obj) => {
                    const tmp = data.find((x) => obj.type === x.name)

                    return {
                        ...obj,
                        icon: `https://images.evetech.net/types/${obj.iconId}/icon?size=64`,
                        objectType: tmp?.objectType ?? null,
                        className: tmp?.className ?? null,
                        techLevel: tmp?.techLevel ?? null
                    }
                })

                await fetch('/api/update-scanner-data', {
                    method: 'POST',
                    body: JSON.stringify({
                        id: UID.value.id,
                        type: 'DSCAN',
                        data: mapped
                    })
                })
                dscanResult.value = mapped
                dscanOverview.value = countByClassName(mapped)
                dscanAnalyzing.value = false
            })
        }

        if (names.length > 0) {
            lscanAnalyzing.value = true

            getEsiDataLocal(names).then(async (data) => {
                await fetch('/api/update-scanner-data', {
                    method: 'POST',
                    body: JSON.stringify({
                        id: UID.value.id,
                        type: 'LSCAN',
                        data: data
                    })
                })
                lscanResult.value = data
                lscanAnalyzing.value = false
            })
        }
    }
}


if (route.query.scanId) {
    const { data: scannerData } = await useFetch('/api/get-scanner-data', {
        method: 'POST',
        body: {
            id: route.query.scanId,
        }
    })

    if (scannerData.value) {
        UID.value = {
            id: scannerData.value.id,
            created_at: scannerData.value.created_at
        }

        if (scannerData.value.system) {
            system.value = scannerData.value.system
        }

        if (scannerData.value.dscan) {
            dscanOjectTypes.value = scannerData.value.dscan_object_types
            dscanResult.value = scannerData.value.dscan
            dscanOverview.value = countByClassName(scannerData.value.dscan)
        }
        if (scannerData.value.lscan) {
            lscanResult.value = scannerData.value.lscan
        }
    }

}
</script>

<style lang="css">
textarea {
    background: var(--tg-common-color-black);
    color: white;
    border-radius: 5px;
}

hr {
    margin: 0;
    border-color: var(--tg-body-color);
    opacity: 1;
}

.start-div {
    margin-top: 120px;
}

.btn-analyze {
    background: var(--tg-theme-primary);
    color: black;
    border-radius: 5px;
}

.pip {
    position: absolute;
    top: -1px;
    left: 0px;
    width: 30px;
    height: 30px;
    border-top-left-radius: 10px;
}

.wrap-section {
    position: relative;
    background: var(--tg-theme-primary);
    padding: 5px;
    border-radius: 10px;
    align-items: center;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    cursor: pointer;
    border-bottom: 1px solid black;
}

.wrap-section>p {
    margin-bottom: 0;
    color: black;
}

.wrap-tabs {
    column-gap: 5px;
}

.wrap-button.active {
    background-color: var(--tg-theme-primary);
    color: var(--tg-common-color-black-3);
}

.wrap-button {
    position: relative;
    background: var(--tg-common-color-black-3);
    padding: 5px;
    border-radius: 10px;
    align-items: center;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    cursor: pointer;
    border-bottom: 1px solid black;
}

.wrap-button>p {
    margin-bottom: 0px;
}

.flaticon-settings {
    color: black;
}

.flaticon-loupe,
.flaticon-settings {
    position: absolute;
    right: 15px;
}

.wrap-search {
    margin-top: 15px;
}

.wrap-search>input {
    background-color: var(--bs-dark);
    color: white;
    border: none;
    border-radius: 5px;
    padding-left: 10px;
}

.wrap-entities {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: flex-start;
    align-items: center;
    column-gap: 10px;
    row-gap: 10px;
}

.selected {
    border: 1px solid var(--tg-theme-primary);
}

.entity-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: var(--tg-common-color-black-3);
    border-radius: 10px;
    cursor: pointer;
    border-bottom: 1px solid black;
    border-top: 1px solid #d3d3d37a;
}

.entity-container-row {
    display: flex;
    flex-direction: row;
    background: var(--tg-common-color-black-3);
    border-radius: 10px;
    cursor: pointer;
    border-bottom: 1px solid black;
    border-top: 1px solid #d3d3d37a;
    width: 100%;
}

.entity-container-row>div.p-1 {
    width: 100%;
    display: flex;
    justify-content: center;
}

.entity-container-row>div>.entity-name {
    line-height: normal;
    height: auto;
    margin-bottom: 0;
}

.entity-name-overview {
    width: 135px;
    padding: 0 10px;
    font-size: 12px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
}



.entity-container>div>p {
    margin-bottom: 0px;
}

.wrap-entity-img {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-color: #000000bd;
    background-blend-mode: overlay;
    border-radius: 10px;
    position: relative;
}

.entity-img {
    padding: 10px;
    width: 80px;
    height: 80px;
    object-fit: contain;
    margin: auto;
    display: flex;
}

.entity-counter {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 1px 8px;
    background-color: var(--bs-black);
    font-size: 10px;
    color: white;
}

.entity-ally-img {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 20px;
    height: 20px;
    object-fit: contain;
}

.entity-corp-img {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 20px;
    height: 20px;
    object-fit: contain;
}

.entity-name {
    width: 135px;
    padding: 0 10px;
    font-size: 12px;
    line-height: 21px;
    height: calc(21px * 5);
    display: flex;
    align-items: center;
    justify-content: center;
}

.entity-info {
    font-size: 10px;
    padding: 0 10px;
}

.loader {
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.circle {
    position: absolute;
    width: 0px;
    height: 0px;
    border-radius: 100%;
    background: var(--tg-common-color-black-3);
    animation: radar 3s ease-out infinite;
    box-shadow: 0px 0px 10px var(--tg-theme-primary);
    /*   box-shadow:0px 0px 10px rgba(0,0,0,.5); */
    /*   border:1px solid rgba(255,255,255,.2); */
}

.circle:nth-of-type(1) {
    animation-delay: 0.2s;
}

.circle:nth-of-type(2) {
    animation-delay: 0.6s;
}

.circle:nth-of-type(3) {
    animation-delay: 1s;
}

.circle:nth-of-type(4) {
    animation-delay: 1.4s;
}

.circle:nth-of-type(5) {
    animation-delay: 1.8s;
}

@keyframes radar {
    0% {}

    30% {
        width: 50px;
        height: 50px;
    }

    100% {
        width: 50px;
        height: 50px;
        opacity: 0;
    }
}
</style>