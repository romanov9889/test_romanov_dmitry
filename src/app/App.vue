<template>
  <div class="app">
    <Navbar />
    <main class="content">
      <Header>
        <template #path> <LocationPath /> </template>
        <template #widgets><UserProfileWidget /> </template>
      </Header>

      <div class="wrapper">
          <StudentPage />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
  import { Navbar } from '@/widgets/Navbar';
  import { Header } from '@/widgets/Header';
  import { StudentPage } from '@/pages/StudentPage';
  import { UserProfileWidget } from '@/widgets/UserProfile';
  import { LocationPath } from '@/widgets/LocationPath';
</script>

<style scoped lang="scss">
  .app {
    display: flex;
  }

  .content {
    position: relative;
    flex: 1;
    height: 100vh;
    width: 100vw;
    overflow-y: scroll;
    background: var(--color-main-background);

  }
  
  .wrapper {
    padding: 26px 90px;
  }
</style>
