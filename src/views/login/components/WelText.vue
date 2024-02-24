<script setup lang="ts">
const text: string = 'WelCome';
const { show } = defineProps(['show']);
</script>
<template>
  <div class="text-container">
    <template v-for="(item, index) in text" :key="index">
      <Transition
        :leave-active-class="`animate__animated animate__fadeOut animate__delay-${index * 0.3}s`"
        :enter-active-class="`animate__animated animate__fadeIn animate__delay-${index}s`"
      >
        <span v-if="show">{{ item }}</span>
      </Transition>
    </template>
  </div>
</template>
<style lang="scss" scoped>
.text-container {
  font-size: 28px;
  font-weight: bolder;
  color: #fff;
}
</style>
