<template>
  <div class="edit"><BaseIconButton :src="editIcon"/></div>
  <div class="delete"><BaseIconButton :src="binIcon"/></div>
</template>

<script setup lang="ts">
  import { BaseIconButton } from '@/shared/ui/BaseIconButton';
  import editIcon from '@/shared/assets/icons/edit.svg'
  import binIcon from '@/shared/assets/icons/bin.svg'
</script>

<style lang="scss" scoped>
  .edit {
    grid-column: 6;
    grid-row: 1;
    justify-self: flex-end;
  }

  .delete {
    grid-column: 6;
    grid-row: 2;
    justify-self: flex-end;
  }
</style>

