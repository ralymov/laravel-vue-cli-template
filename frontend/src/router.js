import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import store from './store';
import NotFound from '@/views/NotFound.vue';
import { CHECK_AUTH } from '@/store/actions.type';

Vue.use(Router);

const redirect = (to, from, next) => {
  store.dispatch(CHECK_AUTH)
    .then(() => next({ path: '/' }))
    .catch(() => next());

  // next();
};

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { title: 'Home page' },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/login',
      name: 'login',
      beforeEnter: redirect,
      component: () => import(/* webpackChunkName: "login" */ './views/Login.vue'),
      meta: { guestGuard: true, title: 'Login' },
    },
    {
      path: '/register',
      name: 'register',
      beforeEnter: redirect,
      component: () => import(/* webpackChunkName: "register" */ './views/Register.vue'),
      meta: { guestGuard: true, title: 'Sign up' },
    },
    { path: '/404', component: NotFound, meta: { title: 'Страница не найдена' } },
    { path: '*', redirect: '/404' },
  ],
});
