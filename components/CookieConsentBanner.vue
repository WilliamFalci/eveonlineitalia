<template>
    <div v-if="consent === 'unknown'"
        class="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 flex flex-col md:flex-row justify-between items-center gap-2 z-50">
        <p class="text-sm text-center">
            Usiamo cookie per analizzare il traffico e migliorare l’esperienza utente.
            <a href="/privacy" class="underline">Scopri di più</a>.
        </p>

        <div class="row justify-content-center gap-2">
            <button @click="reject" class="buttonDeclined d-flex" name="reject-cookie">
                Rifiuta
            </button>
            <button @click="accept" class="buttonAccepted d-flex" name="accept-cookie">
                Accetta
            </button>
        </div>
        <hr class="border-color-primary"/>
    </div>
</template>

<script setup lang="ts">
const { consent, accept, reject } = useCookieConsent()
</script>

<style lang="css" scoped>
.buttonDeclined {
    display: flex;
    background: #0c1217;
    text-transform: uppercase;
    font-family: var(--tg-heading-font-family);
    font-weight: var(--tg-fw-bold);
    font-size: 13px;
    color: var(--tg-body-color);
    padding: 12px 45px;
    letter-spacing: 1px;
    border-radius: 6px;
    width: auto;
}

.buttonAccepted {
    display: flex;
    background: var(--tg-theme-primary);
    text-transform: uppercase;
    font-family: var(--tg-heading-font-family);
    font-weight: var(--tg-fw-bold);
    font-size: 13px;
    color: #fff;
    padding: 12px 45px;
    letter-spacing: 1px;
    border-radius: 6px;
    width: auto;
}
</style>
