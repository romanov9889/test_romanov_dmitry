<template>
  <navbar-wrapper>
    <div
      v-for="item in sidebarItems"
      :key="item.title"
      class="sidebar"
    >
      <NavbarButton :active="item.route === '/students'">
        <template #icon>
          <img :src="item.icon" alt=""  />
        </template>
        {{ item.title }}
      </NavbarButton>
    </div>
  </navbar-wrapper>
</template>

<script setup lang="ts">
  import { sidebarItems } from '@/shared/сonfig/sidebar';
  import NavbarButton from './ui/NavbarButton.vue';
  import NavbarWrapper from './ui/NavbarWrapper.vue';
</script>

<style scoped lang="scss"></style>
