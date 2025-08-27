<template>
  <label class="base-checkbox">
    <input
      type="checkbox"
      :checked="modelValue"
      :disabled="disabled"
      @change="onChange"
    />
    <span class="label-text"><slot /></span>
  </label>
</template>

<script setup lang="ts">
  import { defineProps, defineEmits } from 'vue';

  interface Props {
    modelValue: boolean;
    disabled?: boolean;
  }
  defineProps<Props>();

  const emit = defineEmits<{
    (e: 'update:modelValue', value: boolean): void;
  }>();

  function onChange(event: Event) {
    const target = event.target as HTMLInputElement;
    emit('update:modelValue', target.checked);
  }
</script>

<style scoped lang="scss">
.base-checkbox {
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: 400;
  gap: 10px;

  input {
    width: 20px;
    height: 20px;
  }
}
</style>
