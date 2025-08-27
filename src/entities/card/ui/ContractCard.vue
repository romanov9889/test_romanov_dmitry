<template>
    <CardWrapper 
    :document-type="props.card.fileType"
    :status="props.card.status"
    >
        <template #title>
          {{ cardTitle }}
        </template>      
        <template #date>{{ dateRange }}</template>
        <template #actions>
          <BaseIconButton :src="printer" />
          <BaseIconButton :src="edit" />
          <BaseIconButton :src="bin" />          
        </template>
    </CardWrapper>
</template>

<script setup lang="ts">
  import { BaseIconButton } from '@/shared/ui/BaseIconButton';
  import { type ContractCard } from '../model/types';
  import CardWrapper from './parts/CardWrapper.vue';
  import printer from '@/shared/assets/icons/printer.svg';
  import edit from '@/shared/assets/icons/edit.svg';
  import bin from '@/shared/assets/icons/bin.svg';
  import { formatDate } from '@/shared/date';
  import { computed } from 'vue';

  interface Props {
    card: ContractCard;
  }

  const props = defineProps<Props>()

  const cardTitle = computed(() => {
    const { documentName, documentNumber } = props.card
    return documentNumber ? `${documentName} №${documentNumber}` : documentName
  })

  const dateRange = computed(() => {
    const start = props.card.startDate ? formatDate(props.card.startDate) : ''
    const end = props.card.endDate ? formatDate(props.card.endDate) : ''
    return start && end ? `${start} - ${end}` : start || end
  })
</script>

<style lang="scss" scoped></style>

