<template>
  <div class="select-wrapper">
    <label class="select-label">{{ label }}</label>
    <select
      :value="modelValue"
      @change="onChange"
      class="select-input"
    >
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
  import { defineProps, defineEmits } from 'vue'

  interface Option {
    label: string
    value: string | number
  }

  interface Props {
    label: string
    options: Option[]
    modelValue: string | number
  }

  defineProps<Props>()

  const emit = defineEmits<{
    (e: 'update:modelValue', value: string | number): void
  }>()

  function onChange(event: Event) {
    const target = event.target as HTMLSelectElement
    emit('update:modelValue', target.value)
  }
</script>

<style lang="scss" scoped>
  .select-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
  }

  .select-label {
    font-weight: 400;
    font-size: 14px;
    color: var(--color-secondary-text);
  }

  .select-input {
    color: var(--color-primary);
    outline: unset;
    margin-left: -4px;
  }
</style>
