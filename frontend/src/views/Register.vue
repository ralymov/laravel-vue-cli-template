<template>
  <div>
    <div class="container">
      <form name="form1" class="box" @submit.prevent="submit">
        <h4>Auth<span>Template</span></h4>
        <h5>Sign up.</h5>
        <input
          type="text"
          name="email"
          placeholder="Email"
          autocomplete="off"
          v-model="user.email"
          required
        >

        <input
          type="text"
          name="name"
          placeholder="Name"
          autocomplete="off"
          v-model="user.name"
          required
        >
        <password v-model="user.password" required/>
        <password v-model="user.password_confirmation" placeholder="Confirm password" required/>
        <input type="submit" value="Sign up" class="auth-submit-button">
      </form>

      <router-link to="login" class="dnthave">Already have an account? Sign in</router-link>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { REGISTER } from '@/store/actions.type';
import Password from '../components/forms/Password.vue';

export default {
  name: 'Register',
  components: {
    Password,
  },
  data() {
    return {
      user: {
        email: '',
        name: '',
        password: '',
        password_confirmation: '',
      },
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
      if (this.password !== this.password_confirmation) this.alertError();
      this.$store
        .dispatch(REGISTER, this.user)
        .then(() => this.$router.push({ name: 'login' }));
    },
  },
};
</script>
