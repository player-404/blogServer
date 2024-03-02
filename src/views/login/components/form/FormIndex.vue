<script setup lang="ts">
import formBoard from './FormBoard.vue';
import SignUpForm from './SignUpForm.vue';
import formCon from './FormCon.vue';
import { signInConfig } from '../config/formConfig';
import { useFormType } from '@/stores/formType';
import { storeToRefs } from 'pinia';
import signInBg from '@/assets/imgs/signInbg.png';
import signUpBg from '@/assets/imgs/signUpBg.png';

const { status } = storeToRefs(useFormType());
// const switchForm = (type: boolean) => {
//   status.value = type;
// };
</script>
<template>
  <div class="container">
    <div class="left">
      <Transition
        enter-active-class="animate__animated animate__bounceInLeft"
        leave-active-class="animate__animated animate__bounceOutRight"
      >
        <formBoard :url="signInBg" v-if="!status" />
        <formBoard :url="signUpBg" word="加入我们吧！" v-else />
      </Transition>
    </div>
    <div class="right">
      <Transition
        enter-active-class="animate__animated animate__bounceInRight"
        leave-active-class="animate__animated animate__bounceOutLeft"
      >
        <!-- 登录表单 -->
        <formCon v-if="!status" :config="signInConfig" />
        <!-- 注册表单 -->
        <SignUpForm v-else />
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
  .left {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(#8f5ae0, #ad8ce2);
    overflow: hidden;
    position: relative;
  }
  .right {
    flex-grow: 1;
    height: 100%;
    overflow: hidden;
    position: relative;
  }
}
</style>
