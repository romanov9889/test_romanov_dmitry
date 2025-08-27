<template>
  <div class="location">
    <span class="path-part">Главная</span>
    <span class="divider">&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;</span>
    <span class="path-part">Ученики</span>
    <span class="divider">&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;</span>
    <span class="path-part current">Документы</span>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
  .location {
    font-size: 14;
  }

  .divider {
    color: var(--color-secondary-text);
  }

  .path-part {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    
    &.current {
      color: var(--color-secondary-text)
    }
  }
</style>