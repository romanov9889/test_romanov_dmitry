<template>
  <teleport to="body">
    <div v-if="isOpen" class="modal-overlay" @click.self="close">
      <div class="modal">
        <header class="modal-header">
          <h3>{{ title }}</h3>
          <button class="close-button" @click="close">&times;</button>
        </header>
        <section class="modal-body">        
          <slot />
        </section>        
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
  import { defineProps, defineEmits } from 'vue';

  interface Props {
    isOpen: boolean;
    title?: string;
  }
  defineProps<Props>();

  const emit = defineEmits<{
    (e: 'close'): void;
  }>();

  function close() {
    emit('close');
  }
</script>

<style lang="scss" scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
  }

  .modal {
    background: #fff;
    border-radius: 10px;
    max-width: 650px;
    width: 100%;
    padding: 30px;
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 36px;
    font-weight: 800;
    color: var(--color-primary);
    h3 {
      margin: 0;
    }

    .close-button {
      background: transparent;
      border: none;
      color: var(--color-secondary-text);
      font-size: 36px;
      cursor: pointer;
    }
  }

  .modal-body {
    margin-top: 50px;
  }
</style>
