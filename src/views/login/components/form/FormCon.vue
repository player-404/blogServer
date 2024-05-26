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
import { verifyForm } from '@/utils/iptVerify';
import { useFormDataStore } from '@/stores/formData';
import { signUp, signIn } from '../../../../api/loginApi';

import { storeToRefs } from 'pinia';
import { ref, type VNodeRef } from 'vue';
import { ElNotification } from 'element-plus';
import { useRouter } from 'vue-router';

// 表单配置
const fig = defineProps<{
  config: SignIn;
}>();
// 表单类型
const { status } = storeToRefs(useFormType());
const { step, signUpFormData, signInformData } = storeToRefs(useFormDataStore());
const { updateSignInData, updateSignUpData, updateStep } = useFormDataStore();
// 输入框的 store
const { focus, blur } = useIptFocusStore();
// 路由
const router = useRouter();
// const { updateType } = useFormType();
const iptRef = ref<VNodeRef[]>([]);
// 输入框聚焦
const iptFocus = () => {
  focus();
};
// 输入框失焦
const iptBlur = () => {
  blur();
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
  // 下一步  表单（输入项）的验证
  if (verifyForm(iptRef)) {
    // 下一步 切换表单
    if (step.value > 3) return;
    const steps = step.value + 1;
    updateStep(steps);

    // 注册表单提交
    if (step.value === 2) {
      signUp(signUpFormData.value)
        .then((data) => {
          console.log('注册', data);
          ElNotification({
            title: '注册成功',
            message: '跳转中...',
            type: 'success'
          });

          // 注册完成跳转主页
          router.push('/');
        })
        .catch((err) => {
          console.log('注册失败', err);
          ElNotification({
            title: '注册失败',
            message: err.response.data.message,
            type: 'error'
          });
        });
    }
  } else {
    ElNotification({ title: '验证失败', message: '表单有误, 请检查你的输入项', type: 'error' });
  }
};
// 提交表单
const submit = () => {
  if (verifyForm(iptRef)) {
    /* 登录 */
    signIn(signInformData.value.username as string, signInformData.value.password as string)
      .then((data) => {
        console.log('登录', data);
        ElNotification({
          title: '登录成功',
          message: '跳转中...',
          type: 'success'
        });
        // 登录完成跳转主页
        router.push('/');
      })
      .catch((err) => {
        console.log('登录失败', err);
        ElNotification({
          title: '登录失败',
          message: err.response.data.message,
          type: 'error'
        });
      });
  } else {
    ElNotification({ title: '登录失败', message: '表单有误, 请检查你的输入项', type: 'error' });
  }
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
        :ref="
          (el: any) => {
            iptRef.push(el);
          }
        "
        :config="userIptConfig"
        @blur="iptBlur"
        @focus="iptFocus"
        @input="input"
      />
      <!-- 密码 -->
      <ZpInput
        v-if="config.pass"
        :ref="
          (el: any) => {
            iptRef.push(el);
          }
        "
        :config="passIptConfig"
        @blur="iptBlur"
        @focus="iptFocus"
        @input="input"
      />
      <!-- 确认密码 -->
      <ZpInput
        v-if="config.confirmPass"
        :ref="
          (el: any) => {
            iptRef.push(el);
          }
        "
        :config="confirmPassConfig"
        @blur="iptBlur"
        @focus="iptFocus"
        @input="input"
      />
      <!-- 手机号码 -->
      <ZpInput
        v-if="config.phone"
        :ref="
          (el: any) => {
            iptRef.push(el);
          }
        "
        :config="phoneConfig"
        @blur="iptBlur"
        @focus="iptFocus"
        @input="input"
      />
      <!-- 验证码 -->
      <ZpInput
        v-if="config.phone"
        :ref="
          (el: any) => {
            iptRef.push(el);
          }
        "
        :config="verifyCodeConfig"
        @blur="iptBlur"
        @focus="iptFocus"
        @input="input"
      />
      <!-- 按钮 -->
      <SubmitBtn :config="config" :step="step" @next="next" @pre="pre" @submit="submit" />
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
