<template>
  <div>
    <div class="container">
      <form name="form1" class="box" @submit.prevent="submit">
        <h4>Auth<span>Template</span></h4>
        <h5>Sign in to your account.</h5>
        <input
          type="text"
          name="email"
          placeholder="Email"
          autocomplete="off"
          v-model="credentials.email"
          required
        >
        <password v-model="credentials.password" required></password>
        <label>
          <input type="checkbox" v-model="remember">
          <span></span>
          <small class="rmb">Remember me</small>
        </label>
        <router-link to="forget-password" class="forgetpass">Forget Password?</router-link>
        <input type="submit" value="Sign in" class="auth-submit-button">
      </form>

      <router-link to="register" class="dnthave">Don’t have an account? Sign up</router-link>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { LOGIN } from '@/store/actions.type';
import Password from '../components/forms/Password.vue';

export default {
  name: 'Login',
  components: {
    Password,
  },
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
