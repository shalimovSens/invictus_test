<script setup lang="ts">
import HeadingBase from './HeadingBase.vue'

</script>
<template>
    <header class="header">
        <div class="header__inner">
            <div class="header__whitespace">&nbsp;</div>
            <div class="header__heading">
                <HeadingBase />
            </div>
            <div class="header__subtitle">By William Ernest Henley</div>
        </div>
    </header>
</template>
<style scoped lang="sass">
.header
    padding-block: 12px

.header__inner
    align-items: end
    column-gap: 20px
    display: grid
    grid-template-columns: 1fr auto 1fr
    justify-content: center
    row-gap: 5px

.header__subtitle
    font-size: $font-size-s
    line-height: 1.4

@media screen and (max-width: 680px)
    .header__whitespace
        display: none
    .header__inner
        grid-template-columns: auto
    .header__heading
        text-align: center
</style>