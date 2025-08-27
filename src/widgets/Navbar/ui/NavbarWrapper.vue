<template>
  <aside class="sidebar">
    <div class="logo">
      <img :src="logo" alt="logo" />
    </div>
    <nav class="nav">
      <slot></slot>
    </nav>
  </aside>
</template>

<script setup lang="ts">
  import logo from '@/shared/assets/img/main_logo.svg';

  defineOptions({
    name: 'NavbarWrapper',
  });
</script>

<style scoped lang="scss">
  .sidebar {
    width: 140px;
    height: 100vh;
    gap: 40px;
    background: var(--color-primary);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px 0;

  }

  .logo {
    img {
      width: 95px;
      height: auto;
    }
  }

  .nav {
    display: flex;
    flex-direction: column;
    gap: 16px;
    flex: 1;
    width: 100%;
  }
</style>
