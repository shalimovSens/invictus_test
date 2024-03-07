<script setup lang="ts">
import { ref, inject, } from 'vue'

import type { ParagraphId, IStatus, } from '@/index.t'


defineProps<{
    paragraphId: ParagraphId,
}>()

const randId = ref(Math.random())
const { paragraphsStatus, changeParagraphStatus, } = inject('statusProvider') as IStatus
</script>
<template>
    <input 
        class="checkbox" 
        type="checkbox" 
        :id="'custom-checkbox' + randId"
        :checked="paragraphsStatus[paragraphId]"
        @change="changeParagraphStatus($event, paragraphId)"
    >
    <label 
        class="checkmark" 
        :for="'custom-checkbox' + randId"
    ></label>
</template>
<style scoped lang="sass">
.checkbox
    display: none

.checkmark
    display: inline-block
    width: 19px
    height: 19px
    border: 2px solid $black
    cursor: pointer
    background-color: transparent
    transition: background-color .1s

.checkbox:checked + .checkmark
    background-color: $black

</style>