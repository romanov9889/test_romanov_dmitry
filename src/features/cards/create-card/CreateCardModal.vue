<template>
  <div>
    <BaseButton variant="primary" @click="isOpen = true">Добавить документ</BaseButton>
    
    <BaseModal :isOpen="isOpen" title="Создание карточки" @close="isOpen = false">
      <CreateCardForm @close="isOpen = false"/>  
    </BaseModal>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import CreateCardForm from './CreateCardForm.vue';
  import { BaseButton } from '@/shared/ui/BaseButton';
  import { BaseModal } from '@/shared/ui/BaseModal';
  const isOpen = ref(false);
</script>
