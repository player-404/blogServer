<script setup lang="ts">
defineProps(['modelValue']);
const emit = defineEmits(['update:modelValue']);
const onLineClick = () => {
  emit('update:modelValue', 'onLine');
};
const offLineClick = () => {
  emit('update:modelValue', 'offLine');
};
</script>
<template>
  <div class="active-tabs">
    <el-button
      size="large"
      class="on-line"
      :class="{ active: modelValue === 'onLine' }"
      @click="onLineClick"
      color="#eff2f3"
      >在线用户</el-button
    >
    <el-button
      size="large"
      class="off-line"
      :class="{ active: modelValue === 'offLine' }"
      @click="offLineClick"
      color="#eff2f3"
      >失效用户</el-button
    >
  </div>
</template>
<style lang="scss" scoped>
:deep(.el-button) {
  margin: 0;
  border: none;
  font-weight: bolder;
}

.on-line {
  border-radius: 4px 0px 0 4px;
  &.active {
    background-color: #e1e7e9;
  }
}
.off-line {
  border-radius: 0px 4px 4px 0;
  &.active {
    background-color: #e1e7e9;
  }
}
</style>
