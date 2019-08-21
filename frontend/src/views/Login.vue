<template>
  <div class="container login-body">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card card-signin my-5">
          <div class="card-body">
            <h5 class="card-title text-center">Вход</h5>
            <form class="form-signin">
              <div class="form-label-group">
                <input id="inputEmail" class="form-control" placeholder="Email" required
                       autofocus v-model="credentials.email">
                <label for="inputEmail">Email</label>
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
import { mapState, mapActions } from 'vuex';
import { LOGIN } from '@/store/actions.type';


export default {
  name: 'Login',
  data() {
    return {
      credentials: {
        email: '',
        password: '',
      },
      remember: false,
    };
  },
  computed: {
    ...mapState({
      errors: state => state.auth.errors,
    }),
  },
  methods: {
    ...mapActions('auth', ['login', 'setUser', 'logout']),
    submit() {
      this.$store
        .dispatch(LOGIN, this.credentials)
        .then(() => this.$router.push({ name: 'home' }));
    },
  },
};
</script>
