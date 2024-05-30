<script setup lang="ts">
import ActiveTabs from './components/ActiveTabs.vue';
import EditorBtns from './components/EditorBtns.vue';
</script>
<template>
  <div class="sys-header">
    <div class="left">
      <ActiveTabs />
      <EditorBtns />
    </div>
    <div class="right"></div>
  </div>
</template>
<style lang="scss" scoped>
.sys-header {
  padding: 20px 20px 0;
  .left {
    display: flex;
    align-items: center;
  }
}
</style>
