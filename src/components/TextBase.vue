<script setup lang="ts">
import type { ParagraphsStatusMap, } from '@/index.t'


defineProps<{
    isShow: ParagraphsStatusMap
}>()
</script>
<template>
    <div class="text">
        <p 
            class="text__paragraph"
            :class="{
                text__paragraph_hidden: !isShow['1']
            }"
        >
            <span>Out of the night that covers me,</span>
            <span>Black as the pit from pole to pole,</span>
            <span>I thank whatever gods may be</span>
            <span>For my unconquerable soul.</span>
        </p>
        <p 
            class="text__paragraph"
            :class="{
                text__paragraph_hidden: !isShow['2']
            }"
        >
            <span>In the fell clutch of circumstance</span>
            <span>I have not winced nor cried aloud.</span>
            <span>Under the bludgeonings of chance</span>
            <span>My head is bloody, but unbowed.</span>
        </p>
        <p 
            class="text__paragraph"
            :class="{
                text__paragraph_hidden: !isShow['3']
            }"
        >
            <span>Beyond this place of wrath and tears</span>
            <span>Looms but the Horror of the shade,</span>
            <span>And yet the menace of the years</span>
            <span>Finds and shall find me unafraid.</span>
        </p>
        <p 
            class="text__paragraph"
            :class="{
                text__paragraph_hidden: !isShow['4']
            }"
        >
            <span>It matters not how strait the gate,</span>
            <span>How charged with punishments the scroll,</span>
            <span>I am the master of my fate,</span>
            <span>I am the captain of my soul.</span>
        </p>
    </div>
</template>
<style scoped lang="sass">
.text
    display: flex
    flex-direction: column
    // row-gap: 12px
    // margin-inline: auto
    width: fit-content
    font-size: $font-size-l
    margin-right: -100px
    transition: margin-left 0.2s
.text__paragraph
    display: flex
    flex-direction: column
    margin-bottom: 12px
    min-height: 0

    span:nth-child(2n)
        text-indent: 30px

.text__paragraph_hidden
    max-height: 0
    visibility: hidden
    margin-bottom: 1px
@media screen and (max-width: 680px)
    .text
        font-size: $font-size-m
        margin-right: -40px

    .text__paragraph
        span:nth-child(2n)
            text-indent: 20px

@media screen and (max-width: 470px) 
    .text
        margin-right: -20px

@media screen and (max-width: 420px) 
    .text
        margin-right: 0

@keyframes hide-in
    0%
        max-height: 0
        visibility: hidden
        margin-bottom: 1px
    100%
        max-height: 0
        visibility: hidden
        margin-bottom: 1px
</style>