import Vue from 'vue';
import VueRouter from 'vue-router';
import login from '@/views/layout/index.vue';
import layout from '@/views/login/index.vue';
import notFound from '@/views/404.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    component: login,
  },
  {
    path: '/layout',
    component: layout,
  },
  {
    path: '*',
    redirect: '/404',
  },
  {
    path: '/404',
    component: notFound,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
