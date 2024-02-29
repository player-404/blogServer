<script setup lang="ts">
import { reactive } from 'vue';
const props = defineProps({
  word: {
    type: String,
    default: '准备做什么呢?'
  },
  url: {
    type: String,
    required: true
  }
});
const style = reactive({
  backgroundImage: `url(${props.url})`
});
</script>
<template>
  <div class="board">
    <div class="top" :style="style"></div>
    <div class="bot">{{ word ?? '准备做点什么呢?' }}</div>
  </div>
</template>
<style lang="scss" scoped>
.board {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  .top {
    width: 200px;
    height: 200px;
    background: no-repeat center center;
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
