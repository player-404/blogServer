import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useTabStore = defineStore('tabStore', () => {
  const visitTabs = ref<Tab[]>([]);

  // 添加标签页
  const addTab = (routeOption: Tab) => {
    if (!visitTabs.value) return;
    const index = visitTabs.value.findIndex((item) => item.path === routeOption.path);
    if (index !== -1) return;
    visitTabs.value.push(routeOption);
  };
  // 删除标签页
  const removeTab = (routeOption: Tab) => {
    if (!visitTabs.value) return;
    const index = visitTabs.value.findIndex((tab) => tab.path === routeOption.path);
    console.log('index', index);
    if (index !== -1) {
      visitTabs.value.splice(index, 1);
    }
  };
  return {
    visitTabs,
    addTab,
    removeTab
  };
});
