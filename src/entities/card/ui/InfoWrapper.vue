<template>
  <div class="info">
    <div class="card-info">
      <h4 class="header"><slot name="title"></slot></h4>          
        <slot name="status"></slot>
        <span class="date"><slot name="date"></slot></span>
    </div>      
    <div class="actions"><slot name="actions"></slot></div>
  </div>
</template>


<script setup lang="ts">
</script>

<style lang="scss" scoped>
    .info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      height: 100%;      
      gap: 18px;
    }

    .card-info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
    }
    
    .actions {
      display: flex;
      flex-direction: row;
      gap: 30px;
    }

    .header {
      font-size: 24px;
      font-weight: 700;
    }

    .date {
      font-weight: 400;
      color: var(--color-secondary-text);
    }
</style>

