<template>
  <div class="input-container">
    <label class="date-input-laber">
      <slot></slot>
    </label>

    <input
      ref="inputRef"
      type="date"
      :value="modelValue"
      :min="min"
      :max="max"
      :required="required"
      @input="onInput"
      class="hidden-input"
    />

    <div class="date-input" @click="openCalendar">
      <span v-if="!modelValue" class="input-placeholder">
        {{ placeholder }}
      </span>
      <span v-else class="input-value">
        {{ formatDate(modelValue) }}
      </span>
      <img :src="calendarIcon" alt="calendar" class="calendar-icon" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import calendarIcon from '@/shared/assets/icons/input_calendar.svg'
  import { formatDate, formatDateToISO } from '@/shared/date'

  interface Props {
    modelValue: string
    placeholder?: string
    min?: string
    max?: string
    required?: boolean
  }

  withDefaults(defineProps<Props>(), {
    placeholder: 'Не выбрано',
    required: false,
  })

  const emit = defineEmits(['update:modelValue'])

  const inputRef = ref<HTMLInputElement | null>(null)

  function openCalendar() {
    if (inputRef.value?.showPicker) {
      inputRef.value.showPicker() 
    } else {
      inputRef.value?.click()
    }
  }

  function onInput(event: Event) {
    const target = event.target as HTMLInputElement | null
    if (target) {
      const isoDate = formatDateToISO(target.value)
      emit('update:modelValue', isoDate)
    }
  }
</script>

<style scoped>
  .input-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 17px;
  }

  .hidden-input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
    width: 0;
    height: 0;
  }

  .input-placeholder {
    color: var(--color-secondary-text)
  }

  .date-input {
    display: flex;
    align-items: center;
    background: #FFF;
    cursor: pointer;
    gap: 10px;
  }

  .input-value {
    color: #333;
  }

  .calendar-icon {
    width: 14px;
    height: 14px;
  }
</style>
