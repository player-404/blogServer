<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { useTabStore } from '@/stores/tabStore';
import { useGetTabs, useInitTabs } from '../utils/tabsHandle';
import { watch } from 'vue';
import { type TabsPaneContext } from 'element-plus';
import { ref } from 'vue';

const route = useRoute();
const router = useRouter();
const tabStore = useTabStore();
const active = ref(route.path);

// 关闭标签页
const remove = (tabPaneName: string) => {
  tabStore.removeTab({ path: tabPaneName });
  if (route.path === tabPaneName) {
    const lastTab = tabStore.visitTabs[tabStore.visitTabs.length - 1];
    router.push({ path: lastTab.path });
  }
};

//点击标签页
const tabClick = (pane: TabsPaneContext) => {
  const path = pane.props.name;
  if (path === route.path || !path) return;
  router.push({ path: path as string });
};
// 初始化标签页
useInitTabs(router.options.routes, route);
// 更新标签页
watch(route, (newv) => {
  useGetTabs(router.options.routes, newv);
  active.value = newv.path;
});
// 订阅state
tabStore.$subscribe(() => {
  localStorage.setItem('tabs', JSON.stringify(tabStore.visitTabs));
});
</script>
<template>
  <el-tabs v-model="active" type="card" class="demo-tabs" @tabRemove="remove" @tabClick="tabClick">
    <el-tab-pane
      v-for="item in tabStore.visitTabs"
      :key="item.name"
      :label="item.title"
      :name="item.path"
      :closable="item.path !== '/index'"
      class="pane"
    />
  </el-tabs>
</template>
<style lang="scss" scoped>
:deep(.el-tabs__item) {
  background-color: #e2ebe8;
  border-radius: 6px;
  border: none;
  margin-right: 8px;
  overflow: hidden;
}
:deep(.el-tabs__nav) {
  border: none !important;
}
:deep(.el-tabs__item) {
  border: none;
}
:deep(.is-active) {
  border: none !important;
}
</style>
