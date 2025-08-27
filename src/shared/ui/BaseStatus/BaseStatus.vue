<template>
  <div 
    v-if="status" 
    class="status"       
  >
    <div 
      class="status-indicator"      
      :class="status" 
    />
      <span v-if="status === 'success'"><slot name="success">Активен</slot></span>
      <span v-else-if="status === 'error'"><slot name="error">Не активен</slot></span>
  </div>
</template>

<script setup lang="ts">
  interface Props {
    status?: 'success' | 'error' | null
  }

  defineProps<Props>()
</script>

<style lang="scss" scoped>
  .status {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    gap: 9px;
    font-weight: 400;

  }
  
  .status-indicator {
    height: 9px;
    width: 9px;
    
    &.success { 
      background: var(--color-success);

    }

    &.error {
      background: var(--color-error);
    }
  }
</style>

