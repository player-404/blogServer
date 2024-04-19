<script setup lang="ts">
import Slider from './components/Slider.vue';
</script>
<template>
  <div class="container">
    <div class="slider">
      <Slider />
    </div>
    <div class="content">
      <RouterView />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  .slider {
    width: 20%;
    height: 100%;
    min-width: 250px;
    max-width: 300px;
    background-color: #e2ebe8;
  }
  .content {
    flex-grow: 1;
    background-color: #edf1f0;
    height: 100%;
  }
}
</style>
