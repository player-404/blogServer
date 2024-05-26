import type { RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/login/loginIndex.vue')
  },
  {
    name: 'home',
    path: '/',
    component: () => import('@/views/home/HomeIndex.vue'),
    meta: {
      requiresAuth: true
    },
    redirect: { path: '/index' },
    children: [
      {
        name: 'index',
        path: '/index',
        component: () => import('@/views/dashboard/DashboardIndex.vue')
      },
      {
        name: 'user',
        path: '/user',
        component: () => import('@/views/systemUser/UserSystem.vue')
      },
      {
        name: 'role',
        path: '/role',
        component: () => import('@/views/systemRole/RoleSystem.vue')
      },
      {
        name: 'menu',
        path: '/menu',
        component: () => import('@/views/systemMenu/MenuSystem.vue')
      },
      {
        name: 'star',
        path: '/star',
        component: () => import('@/views/webNav/WebNav.vue')
      }
    ]
  }
];
