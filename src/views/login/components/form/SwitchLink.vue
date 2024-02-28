<script setup lang="ts">
import { useFormType } from '@/stores/formType';
import { storeToRefs } from 'pinia';

const { updateType } = useFormType();
const { status } = storeToRefs(useFormType());

const update = (type: boolean | undefined) => {
  updateType(type);
};
</script>
<template>
  <p class="sign-up">
    {{ !status ? '没有账号?' : '已有账号?' }}
    <el-button
      link
      size="small"
      class="sign-up-btn"
      @click="update(true)"
      key="signUp"
      v-if="!status"
      >注册</el-button
    >
    <el-button link size="small" class="sign-up-btn" @click="update(false)" key="signIn" v-else
      >登录</el-button
    >
  </p>
</template>
<style lang="scss" scoped>
.sign-up {
  font-size: 12px;
  display: flex;
  align-items: center;
  .sign-up-btn {
    color: #905ce0;
  }
}
</style>
