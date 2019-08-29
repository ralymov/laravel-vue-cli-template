import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import alert from './mixins/alert.mixin';
import helper from './mixins/helper.mixin';

import { CHECK_AUTH } from './store/actions.type';

Vue.mixin(alert);
Vue.mixin(helper);

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Главная';

  if (to.meta.guestGuard) {
    next();
    return;
  }

  store.dispatch(CHECK_AUTH)
    .then(() => next)
    .catch(() => {
      next({ name: 'login' });
    });
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
