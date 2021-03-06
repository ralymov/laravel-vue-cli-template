/* eslint no-shadow: ["error", { "allow": ["state"] }] */
import ApiService, { AuthService } from '../common/api.service';
import { getToken, saveToken, destroyToken } from '../common/jwt.service';
import {
  LOGIN,
  LOGOUT,
  REGISTER,
  CHECK_AUTH,
  UPDATE_USER,
} from './actions.type';
import { SET_AUTH, PURGE_AUTH, SET_ERROR } from './mutations.type';

const state = {
  errors: null,
  user: {
    access_token: '',
    name: '',
  },
  isAuthenticated: !!getToken(),
};

const getters = {
  currentUser(state) {
    return state.user;
  },
  isAuthenticated(state) {
    return state.isAuthenticated;
  },
};

const actions = {
  [LOGIN](context, credentials) {
    return new Promise((resolve) => {
      AuthService.login(credentials)
        .then((user) => {
          context.commit(SET_AUTH, user);
          resolve(user);
        })
        .catch((response) => {
          context.commit(
            SET_ERROR,
            response.data && response.data.errors ? response.data.errors : response.data,
          );
        });
    });
  },

  [LOGOUT](context) {
    context.commit(PURGE_AUTH);
  },

  [REGISTER](context, credentials) {
    return new Promise((resolve, reject) => {
      AuthService.register(credentials)
        .then((user) => {
          context.commit(SET_AUTH, user);
          resolve(user);
        })
        .catch(({ response }) => {
          context.commit(SET_ERROR, response.data.errors);
          reject(response);
        });
    });
  },

  [CHECK_AUTH](context) {
    return new Promise((resolve, reject) => {
      if (getToken()) {
        ApiService.setHeader();
        AuthService.user()
          .then((user) => {
            context.commit(SET_AUTH, user);
            resolve(user);
          })
          .catch((error) => {
            context.commit(SET_ERROR, error.response.data.errors);
            reject(error);
          });
      } else {
        context.commit(PURGE_AUTH);
        reject();
      }
    });
  },

  [UPDATE_USER](context, payload) {
    const {
      email, username, password, image, bio,
    } = payload;
    const user = {
      email,
      username,
      bio,
      image,
    };
    if (password) {
      user.password = password;
    }

    return ApiService.put('user', user).then(({ data }) => {
      context.commit(SET_AUTH, data.user);
      return data;
    });
  },
};

const mutations = {
  [SET_ERROR](state, error) {
    state.errors = error;
  },
  [SET_AUTH](state, user) {
    state.isAuthenticated = true;
    state.user = user;
    state.errors = {};
    if (state.user.access_token) {
      saveToken(state.user.access_token);
    }
  },
  [PURGE_AUTH](state) {
    state.isAuthenticated = false;
    state.user = {};
    state.errors = {};
    destroyToken();
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
