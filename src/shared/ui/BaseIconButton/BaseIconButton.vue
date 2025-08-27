<template>
  <button
    :class="['icon-button', variantClass]"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
      <img
        :src="src" 
        alt="icon"
      />
  </button>
</template>

<script setup lang="ts">
  import { defineProps, defineEmits, computed } from 'vue';

  interface Props {
    variant?: 'primary' | 'secondary';
    disabled?: boolean;
    src: string;
  }
  
  const props = defineProps<Props>();

  defineEmits<{
    (e: 'click', event: MouseEvent): void;
  }>();

  const variantClass = computed(() => props.variant || 'primary');
  const disabled = computed(() => props.disabled || false);
</script>

<style lang="scss" scoped>
  .icon-button {  
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;

    img {
      width: 100%;
      height: 100%;
    }
    
    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
</style>
