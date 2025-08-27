<template>
  <div class="wrapper">
    <div class="user-info">
      <img class="avatar" :src="avatar" alt="avatar"/>
      <span class="user-name">Name_user</span>
    </div>
    <div class="user-actions">
      <BaseIconButton :src="settingsIcon"/>
      <BaseIconButton :src="logoutIcon"/>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { BaseIconButton } from '@/shared/ui/BaseIconButton';
  import settingsIcon from '@/shared/assets/icons/settings.svg';
  import logoutIcon from '@/shared/assets/icons/logout.svg';
  import avatar from '@/shared/assets/img/user_avatar.png';
</script>

<style lang="scss" scoped>
  .wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 50px;
  }

  .user-info {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }

  .user-actions {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 33px;
  }

  .avatar {
    height: 40px;
    width: 40px;
  }
</style>

