<template>
  <button
    :class="['base-button', variantClass]"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
  import { defineProps, defineEmits, computed } from 'vue';

  interface Props {
    variant?: 'primary' | 'secondary';
    disabled?: boolean;
  }

  const props = defineProps<Props>();

  defineEmits<{
    (e: 'click', event: MouseEvent): void;
  }>();

  const variantClass = computed(() => props.variant || 'primary');
</script>

<style lang="scss" scoped>
  .base-button {
    width: 220px;
    height: 50px;
    border-radius: 10px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 800;
    text-transform: uppercase;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &.primary {
      background-color: var(--color-btn-primary-bg);
      color: var(--btn-color);
    }

    &.secondary {
      background-color: var(--color-btn-secondary-bg);
      color: var(--btn-color);
    }
  }
</style>
