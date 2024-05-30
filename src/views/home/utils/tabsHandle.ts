import { type RouteRecordRaw, type RouteLocationNormalizedLoaded } from 'vue-router';
import { useTabStore } from '@/stores/tabStore';

const findTab = (
  routes: readonly RouteRecordRaw[],
  route: RouteLocationNormalizedLoaded,
  store: any
) => {
  routes.forEach((item) => {
    if (item.children && item.children.length > 0) {
      findTab(item.children, route, store);
    }
    if (item.path === route.path) {
      const { name, path, meta } = item;
      store.addTab({ name, path, title: meta?.title });
      return;
    }
  });
};

export const useGetTabs = (
  routes: readonly RouteRecordRaw[],
  route: RouteLocationNormalizedLoaded
) => {
  const tabStore = useTabStore();
  findTab(routes, route, tabStore);
};

export const useInitTabs = (
  routes: readonly RouteRecordRaw[],
  route: RouteLocationNormalizedLoaded
) => {
  const tabStore = useTabStore();
  const localTabs = JSON.parse(localStorage.getItem('tabs') || '[]');
  if (!localTabs || localTabs.length === 0) {
    useGetTabs(routes, route);
    return;
  }
  tabStore.visitTabs.push(...localTabs);
};
