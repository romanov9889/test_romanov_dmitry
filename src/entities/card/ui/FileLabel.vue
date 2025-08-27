<template>
  <div class="file">
    <template v-if="src">
      <img :src="src" alt="file_icon" />
    </template>
    <template v-else>
      <span class="no-file">нет файла</span>
    </template>
  </div>
</template>

<script setup lang="ts">
  import { CardDocumentFormat } from '../model/types';
  import xlsIcon from '@/shared/assets/icons/xls.svg';
  import pdfIcon from '@/shared/assets/icons/pdf.svg';
  import jpgIcon from '@/shared/assets/icons/jpg.svg';
  import docIcon from '@/shared/assets/icons/doc.svg';
  import { computed } from 'vue';

  interface Props {
    documentType?: CardDocumentFormat | null
  }

  const props = defineProps<Props>()

  const src = computed<string>(() => {
    switch (props.documentType) {
      case CardDocumentFormat.PDF: return pdfIcon
      case CardDocumentFormat.DOC: return docIcon
      case CardDocumentFormat.XLS: return xlsIcon
      case CardDocumentFormat.JPG: return jpgIcon
      default: return ''
    }
  })
</script>

<style lang="scss" scoped>
  .file {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background: var(--color-main-background);
    width: 117px;
    height: 117px;    
  }

  .no-file {
    color: var(--color-text-secondary);
    font-size: 14px;
  }
</style>
