import type { RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/login/loginIndex.vue')
  },
  {
    name: 'home',
    path: '/home',
    component: () => import('@/views/home/HomeIndex.vue'),
    meta: {
      requiresAuth: true
    }
  }
];
