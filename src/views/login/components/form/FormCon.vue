<script setup lang="ts">
import { computed, ref, watch } from 'vue';

import ZpInput from './ZpInput.vue';
import SwitchLink from './SwitchLink.vue';
import {
  userIptConfig,
  passIptConfig,
  confirmPassConfig,
  phoneConfig,
  verifyCodeConfig
} from '../config/formConfig';
import { useIptFocusStore } from '@/stores/iptFocus';
import { useFormType } from '@/stores/formType';
import { type SignIn } from '../config/formConfig';
import { storeToRefs } from 'pinia';
// 表单配置文件
const fig = defineProps<{
  config: SignIn;
}>();
// 表单类型
const { status } = storeToRefs(useFormType());
// 输入框的 store
const { focus, blur } = useIptFocusStore();
const { updateType } = useFormType();

const form = computed(() => {
  const signInForm = {
    username: '',
    password: ''
  };
  const signUpForm = {
    username: '',
    password: '',
    confirmPass: '',
    phone: undefined,
    code: undefined
  };

  return fig.config.confirmPass ? signUpForm : signInForm;
});

watch(status, (newv) => {
  updateType(newv);
});
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
</script>
<template>
  <div class="containers">
    <div class="form">
      <div class="title">{{ config.title }}</div>
      <!-- 用户名 -->
      <ZpInput
        :config="userIptConfig"
        v-if="config.username"
        v-model="form.username"
        @focus="iptFocus"
        @blur="iptBlur"
      />
      <!-- 密码 -->
      <ZpInput
        :config="passIptConfig"
        v-if="config.pass"
        @focus="iptFocus"
        @blur="iptBlur"
        v-model="form.password"
      />
      <!-- 确认密码 -->
      <ZpInput
        :config="confirmPassConfig"
        @focus="iptFocus"
        @blur="iptBlur"
        v-if="config.confirmPass"
      />
      <!-- 手机号码 -->
      <ZpInput :config="phoneConfig" @focus="iptFocus" @blur="iptBlur" v-if="config.phone" />
      <!-- 验证码 -->
      <ZpInput :config="verifyCodeConfig" @focus="iptFocus" @blur="iptBlur" v-if="config.phone" />
      <!-- 按钮 -->
      <el-button class="submit" color="#905CE0" @mousedown="mousedown" @mouseup="mouseup">
        {{ config.title }}</el-button
      >
      <!-- 忘记密码等链接按钮 -->
      <div class="tip">
        <el-button link class="forget" size="small" v-if="!status">忘记密码?</el-button>
        <SwitchLink />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.containers {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  .form {
    width: 60%;
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
