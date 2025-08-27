<template>
  <label class="base-input-wrapper">
    <span v-if="!modelValue" class="placeholder">
      {{ placeholder }}
      <span v-if="required" class="required">*</span>
    </span>
    <input
      :id="id"
      :type="type"
      :name="name"
      :value="modelValue"
      :disabled="disabled"
      @input="onChange"
      class="base-input"
    />
  </label>
</template>

<script setup lang="ts">
  import { defineProps, defineEmits } from 'vue';

  withDefaults(defineProps<{
    modelValue: string;
    placeholder?: string;
    type?: "number" | "text";
    name?: string;
    id?: string;
    disabled?: boolean;
    required?: boolean;
  }>(), {
    type: 'text'
  });

  const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void;
  }>();

  function onChange(event: Event) {
    const target = event.target as HTMLInputElement;
    emit('update:modelValue', target.value);
  }
</script>

<style lang="scss" scoped>
  .base-input-wrapper {
    border-bottom: 1px solid #B9C2C9;
    padding-bottom: 12px;
    width: 100%;
    position: relative;
  }

  .placeholder {
    position: absolute;
    left: 0;
    top: 0;
    color: var(--color-secondary-text);  
    
    .required {
      color: var(--color-error)
    }
  }

  .base-input {
    font-weight: 400;  
    border: 0;
    width: 100%;

    &:focus {
      outline: none;      
    }
  }
</style>
