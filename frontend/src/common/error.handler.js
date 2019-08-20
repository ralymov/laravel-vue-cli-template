import axios from 'axios';
import SweetAlert from '../mixins/sweet-alert';

function errorHandler(error) {
  // check for errorHandle config
  if (error.config.errorHandle && error.config.errorHandle === false) {
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
