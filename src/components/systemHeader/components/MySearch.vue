<script setup lang="ts">
import { ref } from 'vue';

const search = ref('');
</script>
<template>
  <div class="my-search">
    <el-input v-model="search" placeholder="搜索" size="large" :style="{ width: '280px' }">
      <template #suffix>
        <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
      </template>
    </el-input>
  </div>
</template>
<style lang="scss" scoped></style>
