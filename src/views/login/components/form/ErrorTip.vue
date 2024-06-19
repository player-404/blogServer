<script setup lang="ts">
import { useFormDataStore } from '@/stores/formData';

const formDataStore = useFormDataStore();

const tryAgain = () => {
  formDataStore.updateStep(0);
};
</script>
<template>
  <div class="error-tip">
    <el-result icon="error" title="注册失败" sub-title="发生点小问题，请检查你的数据后重试">
      <template #extra>
        <el-button type="primary" @click="tryAgain">重试</el-button>
      </template>
    </el-result>
  </div>
</template>
<style lang="scss" scoped>
.error-tip {
  position: absolute;
  widows: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}
</style>
