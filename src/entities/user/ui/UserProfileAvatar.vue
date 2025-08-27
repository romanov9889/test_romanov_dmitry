<template> 
  <img class="avatar" :src="avatar" alt="avatar" />
</template>


<script setup lang="ts">
  import avatar from '@/shared/assets/img/avatar_girl.png'
</script>

<style lang="scss" scoped>    
  .avatar {
    height: 100%;
    width: 100%;
    border-radius: 50%;
    grid-column: 1;   
    grid-row: 1 / -1;
  }
</style>

