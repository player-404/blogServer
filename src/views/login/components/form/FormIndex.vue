<script setup lang="ts">
import formBoard from './FormBoard.vue';
</script>
<template>
  <div class="container">
    <div class="left">
      <formBoard />
    </div>
    <div class="right"></div>
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
}
</style>
