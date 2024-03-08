import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useFormType = defineStore('formType', () => {
  // true注册 false 登录
  const status = ref<boolean | undefined>();

  const updateType = (type: boolean | undefined) => {
    status.value = type;
  };
  return {
    status,
    updateType
  };
});
