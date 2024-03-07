<script setup lang="ts">
import CheckboxBase from './CheckboxBase.vue'


</script>
<template>
    <div class="switcher">
        <CheckboxBase :paragraph-id="'1'" />
        <CheckboxBase :paragraph-id="'2'" />
        <CheckboxBase :paragraph-id="'3'" />
        <CheckboxBase :paragraph-id="'4'" />
    </div>
</template>
<style scoped lang="sass">
.switcher
    display: flex
    flex-flow: row nowrap
    column-gap: 15px
</style>