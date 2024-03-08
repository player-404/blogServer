<script lang="ts" setup>
import ZpInput from './ZpInput.vue';
import SwitchLink from './SwitchLink.vue';
import SubmitBtn from '@/views/login/components/form/SubmitBtn.vue';
import {
  confirmPassConfig,
  passIptConfig,
  phoneConfig,
  type SignIn,
  userIptConfig,
  verifyCodeConfig
} from '../config/formConfig';
import { type key } from '@/types/utils';
import { useIptFocusStore } from '@/stores/iptFocus';
import { useFormType } from '@/stores/formType';
import { useFormDataStore } from '@/stores/formData';
import { storeToRefs } from 'pinia';

// 表单配置
const fig = defineProps<{
  config: SignIn;
}>();
// 表单类型
const { status } = storeToRefs(useFormType());
const { step } = storeToRefs(useFormDataStore());
const { updateSignInData, updateSignUpData, updateStep } = useFormDataStore();
// 输入框的 store
const { focus, blur } = useIptFocusStore();
// const { updateType } = useFormType();

// 发送获取验证码请求
const getCode = () => {
  console.log('获取验证码');
};

// 输入框聚焦
const iptFocus = () => {
  focus();
};
// 输入框失焦
const iptBlur = () => {
  blur();
};

// 按钮按下
const mousedown = () => {
  blur();
};
// 按钮弹起
const mouseup = () => {
  focus();
};
// 输入框数据更新到 store
const input = (val: string, key: key) => {
  if (status.value) {
    updateSignUpData(val, key);
  } else {
    updateSignInData(val, key);
  }
};
// 注册上一步
const pre = () => {
  if (step.value === 0) return;
  const steps = step.value - 1;
  updateStep(steps);
};
// 注册下一步
const next = () => {
  if (step.value > 3) return;
  const steps = step.value + 1;
  updateStep(steps);
};
</script>
<template>
  <div class="containers">
    <div class="form">
      <!-- 头 -->
      <slot v-if="config.showHead">
        <div class="title">{{ config.title }}</div>
      </slot>
      <!-- 用户名 -->
      <ZpInput
        v-if="config.username"
        :config="userIptConfig"
        @blur="iptBlur"
        @focus="iptFocus"
        @input="input"
      />
      <!-- 密码 -->
      <ZpInput
        v-if="config.pass"
        :config="passIptConfig"
        @blur="iptBlur"
        @focus="iptFocus"
        @input="input"
      />
      <!-- 确认密码 -->
      <ZpInput
        v-if="config.confirmPass"
        :config="confirmPassConfig"
        @blur="iptBlur"
        @focus="iptFocus"
        @input="input"
      />
      <!-- 手机号码 -->
      <ZpInput
        v-if="config.phone"
        :config="phoneConfig"
        @blur="iptBlur"
        @focus="iptFocus"
        @input="input"
      />
      <!-- 验证码 -->
      <ZpInput
        v-if="config.phone"
        :config="verifyCodeConfig"
        @blur="iptBlur"
        @focus="iptFocus"
        @input="input"
      />
      <!-- 按钮 -->
      <SubmitBtn :config="config" :step="step" @next="next" @pre="pre" />
      <!-- 忘记密码等链接按钮 -->
      <div class="tip">
        <el-button v-if="!status" class="forget" link size="small">忘记密码?</el-button>
        <SwitchLink />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.containers {
  width: 60%;
  position: absolute;

  .form {
    width: 100%;

    .title {
      width: 100%;
      text-align: left;
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 20px;
    }

    .submit {
      width: 100%;
      margin-top: 30px;
    }

    .tip {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .forget {
        font-size: 12px;
        color: #905ce0;
      }
    }
  }
}
</style>
