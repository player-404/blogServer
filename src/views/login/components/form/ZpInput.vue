<script setup lang="ts">
import { useGetVerifyCode } from '@/utils/button';

interface Config {
  height?: string;
  width?: string;
  title?: string;
  type?: string;
  name?: string;
}
defineProps<{
  config?: Config;
}>();
const emit = defineEmits(['focus', 'blur']);

const model = defineModel();
const { click, btnActive, text } = useGetVerifyCode();
const focus = () => {
  emit('focus', 'focus');
};
const blur = () => {
  emit('blur', blur);
};
</script>
<template>
  <div class="zp-con">
    <p class="title">{{ config?.title ?? '用户名' }}</p>
    <div class="ipt">
      <input
        :type="config?.type || 'text'"
        :style="{ height: config?.height || '30px', width: config?.width ?? '100%' }"
        v-model="model"
        @focus="focus"
        @blur="blur"
      />
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
  margin: 4px 0;
  box-sizing: border-box;
  .title {
    margin: 0;
    font-size: 14px;
    color: #acabab;
    padding: 4px 0;
  }
  .ipt {
    display: flex;
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
