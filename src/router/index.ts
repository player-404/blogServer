import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './routes';
import { globalGuards } from './guards';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

const myRouter = globalGuards(router);

export default myRouter;
