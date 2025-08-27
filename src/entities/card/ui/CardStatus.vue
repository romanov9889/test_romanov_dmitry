<template>
  <BaseStatus :status="mappedStatus">
    <template #error>Расторгнут</template>
    <template #success>Заключен</template>
  </BaseStatus>
</template>

<script setup lang="ts">
  import { BaseStatus } from '@/shared/ui/BaseStatus';
  import{ ContractStatus } from '../model/types';
  import { computed } from 'vue';

  interface Props {
    status: ContractStatus | null
  }

  const props = defineProps<Props>()

  const mappedStatus = computed(() => {
    if (props.status === ContractStatus.Active) return 'success'
    if (props.status === ContractStatus.Ended) return 'error'
    return null
  })
</script>

<style lang="scss" scoped>
  .status {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    gap: 9px;
    font-weight: 400;
  }
</style>

