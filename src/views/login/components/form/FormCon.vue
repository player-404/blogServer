<script setup lang="ts">
import ZpInput from './ZpInput.vue';
import {
  userIptConfig,
  passIptConfig,
  confirmPassConfig,
  phoneConfig,
  verifyCodeConfig
} from '../config/formConfig';
import { computed } from 'vue';
import { type SignIn } from '../config/formConfig';
const fig = defineProps<{
  config: SignIn;
}>();

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

// 发送获取验证码请求
const getCode = () => {
  console.log('获取验证码');
};
</script>
<template>
  <div class="containers">
    <div class="form">
      <div class="title">{{ config.title }}</div>
      <!-- 用户名 -->
      <ZpInput :config="userIptConfig" v-if="config.username" v-model="form.username" />
      <!-- 密码 -->
      <ZpInput :config="passIptConfig" v-if="config.pass" v-model="form.password" />
      <!-- 确认密码 -->
      <ZpInput :config="confirmPassConfig" v-if="config.confirmPass" />
      <!-- 手机号码 -->
      <ZpInput :config="phoneConfig" v-if="config.phone" />
      <!-- 验证码 -->
      <ZpInput :config="verifyCodeConfig" v-if="config.phone" />
      <!-- 按钮 -->
      <el-button class="submit" color="#905CE0">{{ config.title }}</el-button>
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
  }
}
</style>
