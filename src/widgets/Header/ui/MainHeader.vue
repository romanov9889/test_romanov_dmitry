<template>
  <HeaderWrapper>
    <slot name="path"></slot>
    <slot name="widgets"></slot>
  </HeaderWrapper>
</template>

<script setup lang="ts">
  import HeaderWrapper from './HeaderWrapper.vue';

</script>

<style lang="scss" scoped></style>