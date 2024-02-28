<script setup lang="ts">
import FormCom from './form/FormIndex.vue';
import { ref, onMounted } from 'vue';
import { useIptFocusStore } from '@/stores/iptFocus';
import { storeToRefs } from 'pinia';

// 登录表单展示状态
const show = ref<boolean>(true);
// 定时器
let timer: number | undefined = undefined;
//表单输入框 sotre
const { status } = storeToRefs(useIptFocusStore());

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
  <div class="login-con" :class="{ scales: status }">
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
  width: 860px;
  height: 500px;
  background-color: #fff;
  position: relative;
  z-index: 9;
  border-radius: 20px;
  border: 15px solid rgba(227, 220, 247, 0.9);
  overflow: hidden;
  &.scales {
    animation: scale 0.3s;
  }
}
@keyframes scale {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.01);
  }
  100% {
    transform: scale(1);
  }
}
</style>
