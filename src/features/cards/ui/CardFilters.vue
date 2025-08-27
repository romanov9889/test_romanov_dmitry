<template>
  <div class="card-filters">
    <BaseSelect
      label="Тип документа"
      :options="CARD_DOCUMENT_TYPE"
      :model-value="documentType"
      @update:model-value="v => emit('update:documentType', v as CardDocumentFormat)"
    />

    <BaseSelect
      label="Статус"
      :options="CARD_STATUS_OPTIONS"
      :model-value="status"
      @update:model-value="v => emit('update:status', v as ContractStatus)"
    />

    <BaseSelect
      label="Сортировка"
      :options="CARD_SORT_OPTIONS"
      :model-value="sortBy"
      @update:model-value="v => emit('update:sortBy', v as string)"
    />
  </div>
</template>

<script setup lang="ts">
  import { defineProps, defineEmits } from 'vue'
  import { BaseSelect } from '@/shared/ui/BaseSelect'
  import type { CardDocumentFormat, ContractStatus } from '@/entities/card'
  import { CARD_DOCUMENT_TYPE, CARD_STATUS_OPTIONS, CARD_SORT_OPTIONS } from '../consts'

  interface Props {
    documentType: CardDocumentFormat | string
    status: ContractStatus | string
    sortBy: string
  }

  defineProps<Props>()

  const emit = defineEmits<{
    (e: 'update:documentType', value: CardDocumentFormat): void
    (e: 'update:status', value: ContractStatus): void
    (e: 'update:sortBy', value: string): void
  }>()
</script>

<style scoped lang="scss">
  .card-filters {
    display: flex;
    flex-direction: row;
    gap: 164px;
  }
</style>
