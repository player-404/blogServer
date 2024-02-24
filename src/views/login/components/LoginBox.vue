<script setup lang="ts">
import FormCom from './form/FormIndex.vue';
import { ref, onMounted } from 'vue';

const show = ref<boolean>(true);
let timer: number | undefined;
// 自动隐藏
const autoHide = () => {
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(() => {
    show.value = false;
    clearTimeout(timer);
  }, 5000);
};

onMounted(() => {
  autoHide();
});
</script>
<template>
  <div class="login-con">
    <slot :show="show"></slot>
    <Transition
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
    >
      <FormCom v-if="!show" />
    </Transition>
  </div>
  <div class="outer center"></div>
</template>
<style lang="scss" scoped>
.login-con {
  width: 800px;
  height: 440px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9;
  border-radius: 20px;
  border: 15px solid rgba(227, 220, 247, 0.9);
  overflow: hidden;
}
</style>
