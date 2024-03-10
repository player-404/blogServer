<script lang="ts" setup>
const { show } = defineProps(['show']);
</script>
<template>
  <Transition leave-active-class="animate__animated animate__fadeOut">
    <div v-if="show" class="circle-container">
      <div class="one-circle circle"></div>
      <div class="two-circle circle"></div>
      <div class="three-circle circle"></div>
    </div>
  </Transition>
</template>
<style lang="scss" scoped>
.circle-container {
  width: 100%;
  height: 100%;
  position: relative;
  filter: blur(70px);

  .text-container {
    position: absolute;
  }

  .circle {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -100px;
    margin-left: -100px;
    opacity: 0;
  }

  .one-circle {
    background: #ff6347;
    box-shadow: 0 0 20px #ff6347;
    z-index: 4;
    animation: fade-in 3s linear infinite;
  }

  .two-circle {
    background: #007fff;
    margin-top: -30px;
    box-shadow: 0px 0px 20px #007fff;

    z-index: 3;
    animation: fade-in 3s 1s linear infinite;
  }

  .three-circle {
    background: #ffa500;
    margin-top: -90px;
    margin-left: -30px;
    animation: fade-in 3s 2s linear infinite;
    box-shadow: 0px 0px 20px #ffa500;
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
      transform: scale(0.2);
    }
    25% {
      opacity: 1;
      transform: scale(1);
      z-index: 4;
    }

    50% {
      transform: scale(1.4);
      z-index: 4;
    }
    75% {
      transform: scale(1);
      z-index: 4;
      opacity: 1;
    }
    100% {
      transform: scale(0.2);
      opacity: 0;
      z-index: 4;
    }
  }
}
</style>
