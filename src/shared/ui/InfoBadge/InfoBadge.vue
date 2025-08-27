<template>
  <div class="container">
    <h5 class="header"><slot name="head">Заголовок</slot></h5>
    <span class="text"><slot name="info">Информация</slot></span>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
  .header {
    font-size: 14px;
    color: var(--color-secondary-text);
  }
</style>
