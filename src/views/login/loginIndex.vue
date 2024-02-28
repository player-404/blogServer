<script setup lang="ts">
import Wg from './components/WelcomBg.vue';
import LoginCon from './components/LoginBox.vue';
import WelText from './components/WelText.vue';
</script>
<template>
  <div class="container">
    <!-- 背景霓虹灯 -->
    <LoginCon v-slot="{ show }">
      <Wg :show="show"></Wg>
      <WelText class="text" :show="show" />
    </LoginCon>
  </div>
</template>
<style lang="scss" scoped>
.container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #dfd5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  .text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
