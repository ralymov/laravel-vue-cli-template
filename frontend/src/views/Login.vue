<template>
  <div class="container login-body">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card card-signin my-5">
          <div class="card-body">
            <h5 class="card-title text-center">Вход</h5>
            <form class="form-signin">
              <div class="form-label-group">
                <input id="inputEmail" class="form-control" placeholder="Имя пользователя" required
                       autofocus v-model="credentials.username">
                <label for="inputEmail">Имя пользователя</label>
              </div>

              <div class="form-label-group">
                <input type="password" id="inputPassword" class="form-control" placeholder="Пароль"
                       required
                       v-model="credentials.password">
                <label for="inputPassword">Пароль</label>
              </div>

              <button class="btn btn-lg btn-primary btn-block text-uppercase"
                      @click.prevent="submit">Вход
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Login',
  data() {
    return {
      credentials: {
        password: '',
        username: '',
      },
      remember: false,
    };
  },
  methods: {
    ...mapActions('auth', ['login', 'setUser', 'logout']),
    submit() {
      axios.post('login', this.credentials).then((response) => {
        const credentials = response.data;
        this.login(credentials);
        this.getCurrentUser();
        this.$router.push('/');
      });
    },
    getCurrentUser() {
      axios.get('/credentials')
        .then(response => this.setUser(response.data))
        .catch(error => this.logout());
    },
  },
};
</script>
