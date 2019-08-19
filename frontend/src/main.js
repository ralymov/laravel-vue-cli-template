import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

window.axios = require('axios');

window.axios.defaults.baseURL = '/api/';
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

require('./services/errorResponseHandler');

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
