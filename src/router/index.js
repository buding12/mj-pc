import Vue from 'vue';
import VueRouter from 'vue-router';
import login from '@/views/login/index.vue';
import layout from '@/views/layout/index.vue';
import notFound from '@/views/404.vue';
import article from '@/views/article/index.vue';
import home from '@/views/home/index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    component: login,
  },
  {
    path: '/layout',
    component: layout,
    children: [
      {
        path: '', // 匹配hash值只有layout
        redirect: 'home',
      },
      {
        path: '/layout/home', // 全路径
        component: home,
        meta: { title: '数据看板' },
      },
      {
        path: 'article', // 简写
        component: article,
        meta: { title: '面经管理' },
      },
    ],
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
