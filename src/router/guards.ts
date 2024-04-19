import { type Router } from 'vue-router';
import Cookies from 'js-cookie';

// 全局路由守卫
export const globalGuards = (router: Router) => {
  // 全局前置守卫
  router.beforeEach((to, from, next) => {
    if (!to.meta.requiresAuth) return next();
    if (Cookies.get('jwt')) {
      next();
    } else {
      next({ name: 'login' });
    }
  });
  return router;
};
