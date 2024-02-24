<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Typed from 'typed.js';
const word = ref<string>('不傲才以骄人，不以宠而作威');
const botRef = ref<Element | null>(null);
const useTyped = () => {
  new Typed('#bot', {
    stringsElement: 'dasdas',
    loop: true,
    typeSpeed: 30,
    backSpeed: 30
  });
};
onMounted(() => {
  useTyped();
});
</script>
<template>
  <div class="board">
    <div class="top"></div>
    <div class="bot" id="bot" ref="botRef"></div>
  </div>
</template>
<style lang="scss" scoped>
.board {
  .top {
    width: 200px;
    height: 200px;
    background: url('@/assets/signInbg.png') no-repeat center center;
    background-size: cover;
  }
  .bot {
    font-size: 20px;
    font-weight: bold;
    color: #fff;
  }
}
</style>
