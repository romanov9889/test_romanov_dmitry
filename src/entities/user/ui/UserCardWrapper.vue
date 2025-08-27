<template>     
  <BaseCard>
    <div class="profile-wrapper">
      <slot name="avatar"></slot>
      <slot name="name"></slot>
      <slot name="social"></slot>
      <slot name="status"></slot>
      <slot name="contacts"></slot>
      <slot name="actions"></slot>
    </div>
  </BaseCard>
</template>


<script setup lang="ts">
  import BaseCard from '@/shared/ui/BaseCard/BaseCard.vue';
</script>

<style lang="scss" scoped>
  .profile-wrapper {
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 112px 3fr 1fr 1fr 2fr 1fr;
    gap: 30px;
    align-items: center;
    padding: 20px;
    height: 152px;
    width: 100%;
  }    
</style>

