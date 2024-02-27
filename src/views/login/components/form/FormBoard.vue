<script setup lang="ts">
import { ref } from 'vue';
const word = ref<string>('准备做什么呢?');
</script>
<template>
  <div class="board">
    <div class="top"></div>
    <div class="bot">{{ word }}</div>
  </div>
</template>
<style lang="scss" scoped>
.board {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .top {
    width: 200px;
    height: 200px;
    background: url('@/assets/imgs/signInbg.png') no-repeat center center;
    background-size: cover;
  }
  .bot {
    font-size: 19px;
    font-weight: bold;
    color: #fff;
    padding-top: 20px;
  }
}
</style>
