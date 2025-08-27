<template>
  <head> 
    <slot></slot>   
  </head>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
  head {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: var(--color-header-bg);
    height: 72px;
    width: 100%;
    padding: 16px 90px;
  }
</style>