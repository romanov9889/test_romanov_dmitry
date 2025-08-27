<template>
  <button 
    class="navbar-button"
    :class="{ 'active': active }"
  >
    <span>
      <slot name="icon" />
    </span>
    <span class="navbar-button">
      <slot>Button</slot>
    </span>
  </button>
</template>

<script setup lang="ts">
  defineProps<{
    active?: boolean
  }>()
</script>

<style lang="scss" scoped>
  .navbar-button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100px;
    width: 100%;
    gap: 5px;
    border: none;
    color: var(--btn-color);
    cursor: pointer;

    &.active {
      background: var(--color-secondary);
    }
  }
</style>
