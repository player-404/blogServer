<script setup lang="ts">
import formBoard from './FormBoard.vue';
import formCon from './FormCon.vue';
import { signInConfig, signUpConfig } from '../config/formConfig';
import { useFormType } from '@/stores/formType';
import { storeToRefs } from 'pinia';

const { status } = storeToRefs(useFormType());
const switchForm = (type: boolean) => {
  status.value = type;
};
</script>
<template>
  <div class="container">
    <div class="left">
      <formBoard />
    </div>
    <div class="right">
      <Transition
        enter-active-class="animate__animated animate__bounceInRight"
        leave-active-class="animate__animated animate__bounceOutLeft"
      >
        <!-- 登录表单 -->
        <formCon v-if="!status" :config="signInConfig" @switch="switchForm" />
        <!-- 注册表单 -->
        <formCon v-else :config="signUpConfig" @switch="switchForm" />
      </Transition>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  left: 0;
  top: 0;
  .left {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(#8f5ae0, #ad8ce2);
  }
  .right {
    flex-grow: 1;
    height: 100%;
    overflow: hidden;
    position: relative;
  }
}
</style>
