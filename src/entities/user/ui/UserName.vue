<template>
  <div class="name-container">
    <h2 class="name">Абрамова Екатерина</h2>
    <img class="sex-icon" :src="girlImg" />
  </div>
</template>

<script setup lang="ts">
  import girlImg from '@/shared/assets/img/Girl.png' 
</script>

<style lang="scss" scoped>
  .name-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 30px;
    grid-row: 1;
    grid-column: 2;
  }

  .name {
    font-size: 36px;
    font-weight: 700;
    -webkit-text-stroke: 1px #000000;
    color: var(--color-primary);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  .sex-icon {
    height: 27px;
  }
</style>

