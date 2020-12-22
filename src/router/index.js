import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/add',
    name: 'AddStaff',
    component: () => import('@/views/AddStaff.vue')
  },
  {
    path: '/list',
    name: 'ListStaff',
    component: () => import('@/views/ListStaffs.vue')
  },
  {
    path: '/update',
    name: 'UpdateStaff',
    component: () => import('@/views/UpdateStaff.vue'),
    props: true
  },
  {
    path: '/serverError',
    name: 'serverError',
    component: () => import('@/views/errors/ServerError')
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
