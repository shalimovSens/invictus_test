<script setup lang="ts">
import HeaderBase from './components/HeaderBase.vue'
import TextBase from './components/TextBase.vue'
import TextToggle from './components/TextToggle.vue'

import { reactive, provide, } from 'vue'

import { onlyOneTrue, } from './utils'
import type { ParagraphsStatusMap, ParagraphId, } from './index.t'


const paragraphsStatus: ParagraphsStatusMap = reactive({
    '1': true,
    '2': true,
    '3': true,
    '4': true,
})

const changeParagraphStatus = (e: Event, paragaphId: ParagraphId) => {
    const checkboxEl = e.target as HTMLInputElement

    if (onlyOneTrue(paragraphsStatus) && paragraphsStatus[paragaphId]) {
        setTimeout(() => {
            checkboxEl.checked = true
        }, 0)
        return
    }
    paragraphsStatus[paragaphId] = checkboxEl.checked
}
provide('statusProvider', {
    paragraphsStatus,
    changeParagraphStatus,
})
</script>
<template>
    <HeaderBase />
    <main class="main">
        <div class="container">
            <div class="main__inner">
                <aside class="main__switcher">
                    <TextToggle />
                </aside>
                <TextBase :is-show="paragraphsStatus"/>
                <div class="main__whitespace">&nbsp;</div>
            </div>
        </div>
    </main>
</template>
<style scoped lang="sass">
.container
    max-width: 1200px
    padding-inline: 15px
    margin-inline: auto
.main__inner
    align-items: start
    column-gap: 20px
    display: grid
    grid-template-columns: 1fr auto 1fr
    justify-content: center

.main__switcher
    margin-left: auto

@media screen and (max-width: 680px)
    .main__whitespace
        display: none
    
    .main__inner
        grid-template-columns: auto
        grid-template-rows: auto auto

    .main__switcher
        margin-top: 15px
        margin-inline: auto
        grid-row: -1

</style>