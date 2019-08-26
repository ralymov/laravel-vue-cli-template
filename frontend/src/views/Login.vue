<template>
  <div class="animated bounceInDown">
    <div class="container">
      <span class="error animated tada" id="msg"></span>
      <form name="form1" class="box" @submit.prevent="submit">
        <h4>Auth<span>Template</span></h4>
        <h5>Sign in to your account.</h5>
        <input type="text" name="email" placeholder="Email" autocomplete="off">
        <span class="typcn typcn-eye" id="eye">Show</span>
        <input type="password" name="password" placeholder="Password" id="pwd" autocomplete="off">
        <label>
          <input type="checkbox">
          <span></span>
          <small class="rmb">Remember me</small>
        </label>
        <a href="#" class="forgetpass">Forget Password?</a>
        <input type="submit" value="Sign in" class="btn1">
      </form>
      <a href="#" class="dnthave">Don’t have an account? Sign up</a>
    </div>
    <div class="footer">
      <span>Made by <a href="https://github.com/ralymov">Alymov Roman</a></span>
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

<style lang="scss">
  body, html {
    background-color: #1d243d;
    padding: 0;
    margin: 0;
  }

  .container {
    margin: 0;
    top: 50px;
    left: 50%;
    position: absolute;
    text-align: center;
    transform: translateX(-50%);
    background-color: rgb(33, 41, 66);
    border-radius: 9px;
    border-top: 10px solid #79a6fe;
    border-bottom: 10px solid #8BD17C;
    width: 400px;
    height: 500px;
    box-shadow: 1px 1px 108.8px 19.2px rgb(25, 31, 53);
  }

  .box h4 {
    color: #5c6bc0;
    font-size: 18px;
    margin-top: 94px;;
  }

  .box h4 span {
    color: #dfdeee;
    font-weight: lighter;
  }

  .box h5 {
    font-size: 13px;
    color: #a1a4ad;
    letter-spacing: 1.5px;
    margin-top: -15px;
    margin-bottom: 70px;
  }

  .box input[type = "text"], .box input[type = "password"] {
    display: block;
    margin: 20px auto;
    background: #262e49;
    border: 0;
    border-radius: 5px;
    padding: 14px 10px;
    width: 320px;
    outline: none;
    color: #565f79;
    transition: all .2s ease-out;
  }

  ::-webkit-input-placeholder {
    color: #565f79;
  }

  .box input[type = "text"]:focus, .box input[type = "password"]:focus {
    border: 1px solid #79A6FE;
  }

  a {
    color: #5c7fda;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  label input[type = "checkbox"] {
    display: none; /* hide the default checkbox */
  }

  /* style the artificial checkbox */
  label span {
    height: 13px;
    width: 13px;
    border: 2px solid #464d64;
    border-radius: 2px;
    display: inline-block;
    position: relative;
    cursor: pointer;
    float: left;
    left: 7.5%;
  }

  .btn1 {
    border: 0;
    background: #7f5feb;
    color: #dfdeee;
    border-radius: 100px;
    width: 340px;
    height: 49px;
    font-size: 16px;
    position: absolute;
    top: 79%;
    left: 8%;
    transition: 0.3s;
    cursor: pointer;
  }

  .btn1:hover {
    background: #5d33e6;
  }

  .rmb {
    cursor: pointer;
    position: absolute;
    margin-left: -154px;
    margin-top: 1px;
    color: #dfdeee;
    font-size: 13px;
  }

  .forgetpass {
    position: relative;
    float: right;
    right: 28px;
  }

  .dnthave {
    position: absolute;
    top: 92%;
    left: 24%;
  }

  [type=checkbox]:checked + span:before { /* <-- style its checked state */
    content: '\2713\0020';
    color: #896cec;
    font-size: 16px;
    position: absolute;
    top: -4px;
    left: -1px;
    width: 13px;
  }

  .typcn {
    position: absolute;
    left: 316px;
    top: 288px;
    color: #8d92a2;
    font-size: 16px;
    cursor: pointer;
  }

  .typcn.active {
    color: #7f60eb;
  }

  .error {
    background: #ff3333;
    text-align: center;
    width: 337px;
    height: 20px;
    padding: 2px;
    border: 0;
    border-radius: 5px;
    margin: 10px auto 10px;
    position: absolute;
    top: 31%;
    left: 7.2%;
    color: white;
    display: none;
  }

  .footer {
    position: relative;
    left: 0;
    bottom: 0;
    top: 605px;
    width: 100%;
    color: #78797d;
    font-size: 14px;
    text-align: center;
  }

  .footer .fa {
    color: #7f5feb;;
  }
</style>
