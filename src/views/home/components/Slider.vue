<script lang="ts" setup>
import { useHomeStore } from '@/stores/homeStore';
import { useRoute } from 'vue-router';

const route = useRoute();
const homeStore = useHomeStore();
await homeStore.getUserMenus().catch((err) => {
  console.log('发生错误', err.message);
});
</script>
<template>
  <el-row>
    <el-col :span="24" class="menu-con">
      <h5 class="mb-2 slider-title">刘刘的后台</h5>
      <el-menu
        :unique-opened="true"
        active-text-color="#272727"
        background-color="#E2EBE8"
        popper-effect="light"
        style="--el-menu-hover-bg-color: #edf1f0"
        text-color="#717A77"
        :router="true"
        :default-active="route.path"
      >
        <template v-for="(item, index) in homeStore.sliderMenus" :key="index">
          <el-menu-item v-if="item.children?.length == 0" :index="item.path">
            <template #title>
              <span>{{ item.name }}</span>
            </template>
          </el-menu-item>
          <el-sub-menu v-else :index="item.path">
            <template #title>
              <span>{{ item.name }}</span>
            </template>
            <el-menu-item v-for="items in item.children" :key="items.path" :index="items.path">{{
              items.name
            }}</el-menu-item>
          </el-sub-menu>
        </template>
      </el-menu>
    </el-col>
  </el-row>
</template>
<style lang="scss" scoped>
.menu-con {
  font-family: ui-serif;

  .slider-title {
    color: #303030;
    text-align: center;
    font-size: 20px;
  }
}

:deep(.el-menu) {
  user-select: none;
  font: {
    weight: 600;
  }
}

:deep(.el-menu-item) {
  --el-menu-hover-bg-color: #edf1f0;
}

:deep(.el-menu--inline) {
  background-color: #edf1f0;
}
</style>
