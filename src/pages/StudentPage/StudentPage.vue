<template>
  <div class="student-card-wrapper">
    <StudentCard />
  </div>
  <CardsWidget />
</template>

<script setup lang="ts">
  import { CardsWidget } from '@/widgets/ContractCards';
  import { StudentCard } from '@/widgets/StudentCard';
</script>

<style lang="scss" scoped>
  .student-card-wrapper {
      margin-bottom: 90px;
  }
</style>

