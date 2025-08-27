<template>
  <form @submit.prevent="onSubmit" class="card-form">
    <BaseRadioGroup
      v-model="form.documentType"
      :options="DOCUMENT_TYPES"
      required
    >
      Тип документа:
    </BaseRadioGroup>
    <BaseTextInput
      v-model="form.documentName"
      placeholder="Название документа"
      required
    />
    <BaseTextInput
      v-model="form.documentNumber"
      type="number"
      placeholder="Номер"
    />
    <div class="date-range">
      <BaseDateInput
        v-model="form.startDate"
        :max="form.endDate"        
        placeholder="Не выбрано"
      >
        Действует с:
      </BaseDateInput>
      <BaseDateInput
        v-model="form.endDate"
        :min="form.startDate"
        placeholder="Не выбрано"
      >
        по:
      </BaseDateInput>
    </div>    
    <div class="checkbox-container">
      <BaseCheckbox
        v-model="form.notifyOnEnd"
      >
        Оповещать об окончании
      </BaseCheckbox>
      <BaseCheckbox
      v-model="form.createTaskOnEnd"
      >
        Создавать задачу при окончании
      </BaseCheckbox>
    </div>
    <BaseFilesInput 
      v-model="form.file"
      :accept="[
        CardDocumentFormat.XLS,
        CardDocumentFormat.PDF,
        CardDocumentFormat.JPG,
        CardDocumentFormat.DOC
      ].join(',')"
    />
    <div class="form-actions">
      <BaseButton  type="submit" variant="primary" :disabled="isSubmitDisabled">Добавить документ</BaseButton>
      <BaseButton type="button" variant="secondary" @click="$emit('close')">Отмена</BaseButton>
    </div>
  </form>
</template>

<script setup lang="ts">
  import { CardDocumentFormat, useCardsStore } from '@/entities/card';
  import { BaseButton } from '@/shared/ui/BaseButton';
  import { BaseCheckbox } from '@/shared/ui/BaseCheckbox';
  import { BaseDateInput } from '@/shared/ui/BaseDateInput';
  import BaseFilesInput from '@/shared/ui/BaseFilesInput/BaseFilesInput.vue';
  import { BaseRadioGroup } from '@/shared/ui/BaseRadioGroup';
  import { BaseTextInput } from '@/shared/ui/BaseTextInput';
  import { useCardForm } from '../model/useCardsForm';
  import { DOCUMENT_TYPES } from '../model/consts';
  
  const cardsStore = useCardsStore()
  const { form, submit, isSubmitDisabled } = useCardForm()

  const emit = defineEmits<{
    (e: 'close'): void
  }>();

  function handleClose() {
    emit('close');
  }

  async function onSubmit() {
    const cardData = submit()
    await cardsStore.addCard(cardData)
    handleClose()
  }
</script>

<style scoped lang="scss">
  .card-form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 50px;

  }

  .date-range {
    display: flex;
    gap: 12px;
  }

  .checkbox-container {
    display: flex;
    flex-direction: column;
    gap: 22px
  }

  .form-actions {
    display: flex;  
    align-self: center;
    gap: 8px;
  }
</style>
