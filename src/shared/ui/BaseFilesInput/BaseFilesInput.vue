<template>
  <div
    class="file-input"
    :class="{ 'file-input--dragover': isDragOver }"
    @dragover.prevent="onDragOver"
    @dragleave.prevent="onDragLeave"
    @drop.prevent="onDrop"
    @click="triggerFileInput"    
  >
    <input
      type="file"
      class="hidden-input"
      :accept="accept"
      @change="onFileSelect"
      ref="fileInput"
    />
    
    <img 
      class="file-icon"
      :src="fileIconSrc"
      alt="file"
    />

    <div class="placeholder" v-if="!props.modelValue">
      <span class="primary">Загрузить файл</span>
      <span class="secondary"><span class="lined">Выберите файл</span> или перетащите его сюда</span>
    </div>
    <span v-else-if="props.modelValue?.name" class="file-text">
      {{ props.modelValue.name }}
    </span>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue'
  import pdfIcon from '@/shared/assets/icons/pdf.svg'
  import xslIcon from '@/shared/assets/icons/xls.svg'
  import docIcon from '@/shared/assets/icons/doc.svg'
  import jpgIcon from '@/shared/assets/icons/jpg.svg'
  import plusIcon from '@/shared/assets/icons/plus.svg'

  interface Props {
    modelValue?: File | null
    accept?: string
  }

  const props = defineProps<Props>()
  const emit = defineEmits<{
    (e: 'update:modelValue', file: File | null): void
  }>()

  const isDragOver = ref(false)
  const fileInput = ref<HTMLInputElement | null>(null)

  function onDragOver() {
    isDragOver.value = true
  }

  function onDragLeave() {
    isDragOver.value = false
  }

  function validateFile(file: File): boolean {
    if (!props.accept) return true

    const acceptList = props.accept.split(',').map(a => a.trim().toLowerCase())
    const fileName = file.name.toLowerCase()
    const mime = file.type.toLowerCase()

    return acceptList.some(rule => {
      if (rule.endsWith('/*')) {
        return mime.startsWith(rule.replace('/*', ''))
      }
      if (rule.startsWith('.')) {
        return fileName.endsWith(rule)
      }
      return mime === rule
    })
  }

  function onDrop(event: DragEvent) {
    isDragOver.value = false
    const files = event.dataTransfer?.files
    if (files && files.length > 0) {
      const file = files[0]
      if (validateFile(file)) {
        emit('update:modelValue', file)
      } else {     
        emit('update:modelValue', null)
      }
    }
  }

  function onFileSelect(event: Event) {
    const target = event.target as HTMLInputElement
    if (target.files && target.files.length > 0) {
      emit('update:modelValue', target.files[0]) 
      target.value = ''
    }
  }

  function triggerFileInput() {
    fileInput.value?.click()
  }

  const fileIconSrc = computed(() => {
    const file = props.modelValue
    if (!file) return plusIcon

    const type = file.type
    switch (type) {
      case 'application/pdf': return pdfIcon
      case 'application/vnd.ms-excel':
      case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': return xslIcon
      case 'application/msword':
      case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document': return docIcon
      default: return type.startsWith('image/') ? jpgIcon : plusIcon
    }
  })
</script>

<style scoped>
  .file-input {
    display: flex;
    padding: 25px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 100%;
    height: 157px;
    border: 1px solid #B9C2C9;
    border-radius: 10px;
    background-color: var(--color-main-background);
    text-align: center;
    cursor: pointer;
    box-shadow: 0px 4px 4px 0px #00000040;
  }

  .hidden-input {
    display: none;
  }

  .placeholder {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    .secondary {
      color: var(--color-secondary-text);
      .lined {
        text-decoration: underline;
      }
    }
  }

  .file-icon {
    height: 32px;
    width: 32px;
  }

  .file-text {
    font-size: 16px;
    color: var(--color-secondary-text);
  }
</style>
