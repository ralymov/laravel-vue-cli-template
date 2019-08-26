import Vue from 'vue';
import axios from 'axios';

require('./error.handler');


axios.defaults.baseURL = '/api/';
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

const ApiService = {
  async query(resource, params) {
    const res = await Vue.axios.get(resource, params);
    return res.data;
  },

  async get(resource, slug = '') {
    const res = await Vue.axios.get(`${resource}/${slug}`);
    return res.data;
  },

  async post(resource, params) {
    const res = await axios.post(`${resource}`, params);
    return res.data;
  },

  async update(resource, slug, params) {
    const res = await Vue.axios.put(`${resource}/${slug}`, params);
    return res.data;
  },

  async put(resource, params) {
    const res = await Vue.axios.put(`${resource}`, params);
    return res.data;
  },

  async delete(resource, slug) {
    const res = await Vue.axios.delete(`${resource}/${slug}`);
    return res.data;
  },
};

export default ApiService;

export const AuthService = {
  async login(credentials) {
    return ApiService.post('auth/login', credentials);
  },
  async register(user) {
    return ApiService.post('auth/register', user);
  },
};
