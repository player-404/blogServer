<script lang="ts" setup>
import { useGetVerifyCode } from '@/utils/button';
import { reactive, ref } from 'vue';
import type { Rule } from '@/types/formType';
import { useFormDataStore } from '@/stores/formData';
import { storeToRefs } from 'pinia';

interface Config {
  height?: string;
  width?: string;
  title?: string;
  type?: string;
  name?: string;
  pass?: boolean;
}

// 输入框配置
const props = defineProps<{
  config: Config;
  rule?: RegExp;
  message?: string;
}>();
// 表单数据
const { signUpFormData } = storeToRefs(useFormDataStore());
// 验证规则
const defaultRules: Record<string, Rule> = reactive({
  // 用户名正则
  username: {
    required: true,
    message: props.message ?? '请输入用户名',
    requiredErrorMessage: '请输入用户名',
    errTip: ''
  },
  // 密码正则
  password: {
    required: true,
    errTip: '',
    message: props.message ?? '须包含大小写字母，数字，特殊符号中任意3项',
    requiredErrorMessage: '请输入密码',
    rule: /^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_!@#$%^&*`~()-+=]+$)(?![a-z0-9]+$)(?![a-z\W_!@#$%^&*`~()-+=]+$)(?![0-9\W_!@#$%^&*`~()-+=]+$)[a-zA-Z0-9\W_!@#$%^&*`~()-+=]/
  },
  confirmPassword: {
    required: true,
    errTip: '',
    message: props.message ?? '两次密码输入不一致',
    requiredErrorMessage: '请输入确认密码',
    rule: (password: string, confirmPassword: string) => {
      if (!password || !confirmPassword) return false;
      return password === confirmPassword;
    }
  },
  phone: {
    required: true,
    message: props.message ?? '手机号不正确',
    errTip: '',
    requiredErrorMessage: '请输入手机号',
    rule: /^(?:(?:\+|00)86)?1[3-9]\d{9}$/
  },
  verifyCode: {
    required: true,
    message: props.message ?? '验证码不正确',
    errTip: '',
    requiredErrorMessage: '请输入验证码',
    rule: (code, iptCode) => code === iptCode
  }
});

// 与父组件数据的双向绑定
const model = defineModel();
const emit = defineEmits(['focus', 'blur', 'input']);
// 手机验证码按钮相关功能
const { click, btnActive, text, code } = useGetVerifyCode();
// 表单类型（注册/登录）
const iptType = ref(props.config?.type);
// 输入框验证状态
const verifyStatus = ref(true);
//输入框获取焦点添加动画
const focus = () => {
  emit('focus', 'focus');
};
const blur = (rule?: RegExp) => {
  // 动画
  emit('blur', 'blur');
  // 验证
  verify(rule);
};
// 输入框input事件
const input = (el: any) => {
  emit('input', el.target.value, props.config?.name);
};
// 修改input type
const changeIptType = () => {
  iptType.value = iptType.value === 'text' ? 'password' : 'text';
};
// 输入框规则验证
const verify = (rule?: RegExp) => {
  // 获取输入框类型（从输入框配置文件中获取）
  if (!props.config?.name) return;
  // 检查是否必须输入值
  if (defaultRules[props.config?.name].required && !model.value) {
    verifyStatus.value = false;
    console.log('输入的值为空啦');
    defaultRules[props.config?.name].errTip = defaultRules[props.config?.name].requiredErrorMessage;
    return;
  }
  // 获取输入框验证规则，传递了自定义规则使用自定义规则，否则使用默认规则
  const iptRule = rule ?? defaultRules[props.config?.name].rule;
  // 没有添加规则不进行验证
  if (!iptRule) {
    verifyStatus.value = true;
    return;
  }
  defaultRules[props.config?.name].errTip = defaultRules[props.config?.name].message;
  // 确认密码与密码是否一致验证
  if (props.config?.name === 'confirmPassword') {
    const password = signUpFormData.value.password;
    const confirmPassword = signUpFormData.value.confirmPassword;
    verifyStatus.value = (iptRule as (password?: string, confirmPassword?: string) => boolean)(
      password,
      confirmPassword
    );
    return;
  }
  // 验证码验证
  if (props.config?.name === 'verifyCode') {
    verifyStatus.value = (iptRule as (code?: string, iptCode?: string) => boolean)(
      code.value,
      model.value as string
    );
    return;
  }
  //其他验证
  verifyStatus.value = (iptRule as RegExp).test(model.value as string);
};

defineExpose({
  verify,
  verifyStatus,
  name: props.config?.name
});
</script>
<template>
  <div class="zp-con">
    <p class="title">{{ config?.title ?? '用户名' }}</p>
    <div class="ipt">
      <input
        v-model="model"
        :class="{ error: !verifyStatus }"
        :style="{ height: config?.height || '30px', width: config?.width ?? '100%' }"
        :type="iptType ?? 'text'"
        @blur="blur(rule)"
        @focus="focus"
        @input="input"
      />
      <!-- 显示密码的眼睛图标 -->
      <div v-if="config?.type === 'password'" class="show-pass" @click="changeIptType">
        <Transition
          enter-active-class="animate__animated animate__fadeIn animate__faster"
          leave-active-class="animate__animated animate__fadeOut animate__faster"
        >
          <font-awesome-icon
            v-if="iptType === 'text'"
            :icon="['far', 'eye']"
            class="eye"
            size="sm"
            style="color: #d9d7d7"
          />
          <font-awesome-icon
            v-else
            :icon="['far', 'eye-slash']"
            class="eye"
            size="sm"
            style="color: #d9d7d7"
          />
        </Transition>
      </div>
      <!-- 错误提示 -->
      <Transition
        enter-active-class="animate__animated animate__fadeIn"
        leave-active-class="animate__animated animate__fadeOut"
      >
        <p v-if="!verifyStatus" class="error-tip text-ellipsis">
          {{ defaultRules[config?.name as string].errTip }}
        </p>
      </Transition>
      <el-button
        v-if="config?.name === 'phone'"
        :disabled="!btnActive || !verifyStatus"
        class="btn"
        color="#905CE0"
        @click="click"
      >
        {{ text }}
      </el-button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.zp-con {
  width: 100%;
  margin: 20px 0;
  box-sizing: border-box;

  .title {
    margin: 0;
    font-size: 14px;
    color: #acabab;
    padding: 6px 0;
  }

  .ipt {
    display: flex;
    align-items: center;
    position: relative;

    .show-pass {
      position: absolute;
      right: 6px;
      cursor: pointer;
      width: 20px;
      height: 20px;

      .eye {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        margin: auto;
      }
    }

    //超出范围显示省略号
    .text-ellipsis {
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .error-tip {
      position: absolute;
      bottom: -27px;
      font-size: 11px;
      color: red;
    }

    .btn {
      margin-left: 8px;
    }

    input {
      width: 100%;
      height: 100%;
      outline: none;
      box-sizing: border-box;
      border: 1px solid #d9d7d7;
      border-radius: 6px;
      transition: border 0.8s;
      font-size: 12px;
      text-indent: 0.5em;

      &:focus {
        border-color: #905ce0;
      }

      &.error {
        border-color: red;
      }
    }
  }
}
</style>
