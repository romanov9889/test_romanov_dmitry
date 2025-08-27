<template>
  <div class="phone">
    <InfoBadge>
      <template #head>Телефон</template>
      <template #info>8-900-000-00-00</template>
    </InfoBadge>
  </div>
  <div class="parents-phone">
    <InfoBadge>
      <template #head>Телефон родителей</template>
      <template #info>8-900-000-00-00</template>
    </InfoBadge>
  </div>
  <div class="date-of-birth">
    <InfoBadge>
      <template #head>Дата рождения</template>
      <template #info>25.04.2004 (17 лет)</template>
    </InfoBadge>
  </div>
  <div class="address">
    <InfoBadge>
      <template #head>Адрес</template>
      <template #info>г. Краснодар, ул. Советская 24, кв. 208 </template>
    </InfoBadge>
  </div>
</template>

<script setup lang="ts">
import { InfoBadge } from '@/shared/ui/InfoBadge';
</script>

<style lang="scss" scoped>
  .phone {
    grid-row: 1;
    grid-column: 4;
  }

  .parents-phone {
    grid-row: 2;
    grid-column: 4;
  }

  .date-of-birth {
    grid-row: 1;
    grid-column: 5;
  }
  
  .address {
    grid-row: 2;
    grid-column: 5;
  }
</style>

