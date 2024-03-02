<script setup lang="ts">
import { useGetVerifyCode } from '@/utils/button';
import { ref } from 'vue';

interface Config {
  height?: string;
  width?: string;
  title?: string;
  type?: string;
  name?: string;
  pass?: boolean;
}
const props = defineProps<{
  config?: Config;
}>();
const emit = defineEmits(['focus', 'blur']);
// 输入框输入值此处使用了v-model语法糖
const model = defineModel();
const { click, btnActive, text } = useGetVerifyCode();
const iptType = ref(props.config?.type);

//输入框获取焦点添加动画
const focus = () => {
  emit('focus', 'focus');
};
const blur = () => {
  emit('blur', 'blur');
};
// 修改input type
const changeIptType = () => {
  iptType.value = iptType.value === 'text' ? 'password' : 'text';
};
</script>
<template>
  <div class="zp-con">
    <p class="title">{{ config?.title ?? '用户名' }}</p>
    <div class="ipt">
      <input
        :type="iptType ?? 'text'"
        :style="{ height: config?.height || '30px', width: config?.width ?? '100%' }"
        v-model="model"
        @focus="focus"
        @blur="blur"
      />
      <!-- 显示密码的眼睛图标 -->
      <div class="show-pass" v-if="config?.type === 'password'" @click="changeIptType">
        <Transition
          enter-active-class="animate__animated animate__fadeIn animate__faster"
          leave-active-class="animate__animated animate__fadeOut animate__faster"
        >
          <font-awesome-icon
            :icon="['far', 'eye']"
            style="color: #d9d7d7"
            size="sm"
            v-if="iptType === 'text'"
            class="eye"
          />
          <font-awesome-icon
            :icon="['far', 'eye-slash']"
            style="color: #d9d7d7"
            size="sm"
            v-else
            class="eye"
          />
        </Transition>
      </div>
      <!-- 错误提示 -->
      <p class="error-tip">测试信息</p>
      <el-button
        class="btn"
        v-if="config?.name === 'phone'"
        color="#905CE0"
        @click="click"
        :disabled="!btnActive"
      >
        {{ text }}
      </el-button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.zp-con {
  width: 100%;
  margin: 12px 0;
  box-sizing: border-box;
  .title {
    margin: 0;
    font-size: 14px;
    color: #acabab;
    padding: 2px 0;
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
    .error-tip {
      position: absolute;
      bottom: -20px;
      font-size: 10px;
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
    }
  }
}
</style>
