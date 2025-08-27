<template>

  <div class="card">
      <slot></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
  .card {
    background: #FFF;
    border-radius: 10px;
    height: fit-content;
    box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.1);
  }
</style>
