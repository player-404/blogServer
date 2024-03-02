<script setup lang="ts">
import { signUpConfig } from '../config/formConfig';
import FormCon from './FormCon.vue';
</script>
<template>
  <div class="con">
    <div class="header">
      <div class="title">注册</div>
      <el-steps style="max-width: 600px" :active="1" align-center>
        <el-step title="Step 1" />
        <el-step title="Step 2" />
        <el-step title="Step 3" />
      </el-steps>
    </div>
    <!-- 基本信息 -->
    <FormCon :config="signUpConfig"> </FormCon>
  </div>
</template>
<style lang="scss" scoped>
.header {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
}
</style>
