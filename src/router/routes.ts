import type { RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
  {
    name: 'loginIndex',
    path: '/login',
    component: () => import('@/views/login/loginIndex.vue')
  },
  {
    name: 'homeIndex',
    path: '/',
    component: () => import('@/views/home/HomeIndex.vue'),
    meta: {
      requiresAuth: true
    },
    redirect: { path: '/index' },
    children: [
      {
        name: 'dashboardIndex',
        path: '/index',
        component: () => import('@/views/dashboard/DashboardIndex.vue'),
        meta: {
          title: '首页'
        }
      },
      {
        name: 'userSystem',
        path: '/user',
        component: () => import('@/views/systemUser/UserSystem.vue'),
        meta: {
          title: '用户管理'
        }
      },
      {
        name: 'roleSystem',
        path: '/role',
        component: () => import('@/views/systemRole/RoleSystem.vue'),
        meta: {
          title: '角色管理'
        }
      },
      {
        name: 'menuSystem',
        path: '/menu',
        component: () => import('@/views/systemMenu/MenuSystem.vue'),
        meta: {
          title: '菜单管理'
        }
      },
      {
        name: 'webNav',
        path: '/star',
        component: () => import('@/views/webNav/WebNav.vue'),
        meta: {
          title: '网页收藏'
        }
      }
    ]
  }
];
