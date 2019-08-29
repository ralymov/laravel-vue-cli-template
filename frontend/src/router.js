import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import store from './store';

Vue.use(Router);

const redirect = (to, from, next) => {
  console.log(store.getters.isAuthenticated);
  // if (store.getters.isAuthenticated) {
  //   next({ path: '/' });
  // }
  //
  next();
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
  ],
});
