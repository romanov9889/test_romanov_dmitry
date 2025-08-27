<template>
  <div class="status">
    <InfoBadge>
      <template #head>Статус</template>
      <template #info>
        <BaseStatus status="success">
          Активен
        </BaseStatus>
     </template>
    </InfoBadge>
  </div>
</template>

<script setup lang="ts">
  import { BaseStatus } from '@/shared/ui/BaseStatus';
  import {InfoBadge} from '@/shared/ui/InfoBadge';
</script>

<style lang="scss" scoped>
  .status {
    grid-row: 2;
    grid-column: 3;
  }
</style>

