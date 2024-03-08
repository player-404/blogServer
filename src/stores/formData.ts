import { defineStore } from 'pinia';
import { ref } from 'vue';
import { type Form } from '@/stores/types/formType';
import { type key } from '@/types/utils';

export const useFormDataStore = defineStore('formData', () => {
  // 登录表单数据
  const signInformData = ref<Form>({
    username: undefined,
    password: undefined
  });
  // 注册表单数据
  const signUpFormData = ref<Form>({
    username: undefined,
    password: undefined,
    confirmPassword: undefined,
    phone: undefined,
    code: undefined
  });
  // 注册进度
  const step = ref(0);
  // 登录表单数据更新
  const updateSignInData = (val: string, key: key) => {
    signInformData.value[key] = val;
  };
  // 注册表单数据更新
  const updateSignUpData = (val: string, key: key) => {
    signUpFormData.value[key] = val;
  };
  // 更新注册进度
  const updateStep = (val: number) => {
    step.value = val;
  };

  return {
    signInformData,
    signUpFormData,
    step,
    updateSignInData,
    updateSignUpData,
    updateStep
  };
});
