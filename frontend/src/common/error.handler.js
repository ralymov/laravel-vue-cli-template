import axios from 'axios';
import SweetAlert from '../mixins/alert.mixin';

function errorHandler(error) {
  // check for errorHandle config
  if (error.config.errorHandle === false) {
    return Promise.reject(error);
  }

  // if has response show the error
  if (error.response) {
    SweetAlert.methods.alertError('Что-то пошло не так.');
    return Promise.reject(error);
  }

  return null;
}

// apply interceptor on response
axios.interceptors.response.use(
  response => response,
  errorHandler,
);

export default errorHandler;
