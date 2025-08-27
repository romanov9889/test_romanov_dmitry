<template>
  <BaseCard>
    <div class="card-wrapper">
      <InfoWrapper>
        <template #title><slot name="title"></slot></template>
        <template #status><CardStatus :status="status" /></template>
        <template #date>
          <slot name="date"></slot>          
        </template>
        <template #actions><slot name="actions"></slot></template>
      </InfoWrapper>      
      <FileLabel :document-type="documentType" />
    </div>
  </BaseCard>
</template>


<script setup lang="ts">
  import{ CardDocumentFormat, ContractStatus } from '../../model/types';
  import { BaseCard } from '@/shared/ui/BaseCard';
  import CardStatus from './CardStatus.vue';
  import FileLabel from './FileLabel.vue';
  import InfoWrapper from './InfoWrapper.vue';

  interface Props {
    documentType?: CardDocumentFormat | null
    status: ContractStatus | null
  }

  defineProps<Props>()

</script>

<style lang="scss" scoped>
  .card-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 378px;        
    height: 157px;
    padding: 20px;
    justify-content: space-between;        
  }
</style>

