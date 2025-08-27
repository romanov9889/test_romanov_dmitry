<template>
  <div class="cards-list">
    <slot
      v-for="(item, index) in items"
      :card="item"
      :key="item.id || index"
    />
  </div>
</template>

<script setup lang="ts">
  import { defineProps } from 'vue';
  import type { ContractCardType } from '../model/types';

  defineProps<{
    items: ContractCardType[];
  }>();
</script>

<style lang="scss" scoped>
  .cards-list {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 28px;
  }
</style>
