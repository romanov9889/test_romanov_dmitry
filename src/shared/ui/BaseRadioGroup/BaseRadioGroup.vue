<template>
  <div class="group-wrapper"> 
    <span class="group-title">
      <slot>Title</slot>
      <span class="required-star" v-if="required"> *</span>
    </span>
    <div class="radio-group">
      <label
        v-for="option in options"
        :key="option.value"
        class="radio-option"
      >
        <input
        class="radio-input"
          type="radio"
          :value="option.value"
          :checked="option.value === modelValue"
          :disabled="option.disabled || disabled"
          @change="onChange(option.value)"
        />
        <span class="label-text">{{ option.label }}</span>
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { defineProps, defineEmits } from 'vue';

  type RadioOption = {
    label: string;
    value: string;
    disabled?: boolean;
  };

  interface Props {
    modelValue: string;
    options: RadioOption[];
    disabled?: boolean;
    required?: boolean;
  }

  defineProps<Props>();

  const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void;
  }>();

  function onChange(value: string) {
    emit('update:modelValue', value);
  }
</script>

<style scoped lang="scss">
  .group-wrapper {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 17px;
  }

  .required-star {
    color: red;
  }
  
  .radio-group {
    font-weight: 400;
    display: flex;
    flex-direction: column;
    gap: 10px;
  
  }
  
  .radio-option {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;

    input {
      height: 20px;
      width: 20px;
    }
  }

</style>
