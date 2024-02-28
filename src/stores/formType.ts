import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useFormType = defineStore('formType', () => {
  const status = ref<boolean | undefined>();

  const updateType = (type: boolean | undefined) => {
    status.value = type;
  };
  return {
    status,
    updateType
  };
});
