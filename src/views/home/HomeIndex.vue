<script lang="ts" setup>
import Slider from '@/views/home/components/Slider.vue';
import MyHead from '@/views/home/components/MyHead.vue';
</script>
<template>
  <div class="container">
    <div class="slider">
      <Suspense>
        <Slider />
      </Suspense>
    </div>
    <div class="content">
      <el-container class="container">
        <el-header>
          <MyHead />
        </el-header>
        <el-main>
          <RouterView />
        </el-main>
      </el-container>
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
    box-sizing: border-box;
    flex-shrink: 0;
    .container {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
