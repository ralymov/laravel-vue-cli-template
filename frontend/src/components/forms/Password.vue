<template>
  <div class="password-input-container">
    <span class="typcn typcn-eye" @click="showPassword=!showPassword">
      {{showPassword ? 'Hide' : 'Show'}}
    </span>
    <input
      :type="showPassword ? 'text' : 'password'"
      :placeholder="placeholder"
      :name="name"
      :value="value"
      @input="onInput($event.target.value)"
      :required="required"
      autocomplete="off"
    >
  </div>
</template>

<script>
export default {
  name: 'Password',
  props: {
    value: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: 'Password',
    },
    name: {
      type: String,
      default: 'password',
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      showPassword: false,
    };
  },
  methods: {
    onInput(value) {
      this.$emit('input', value);
    },
  },
};
</script>

<style lang="scss">
  .password-input-container {
    position: relative;
  }

  .typcn {
    position: absolute;
    color: #8d92a2;
    font-size: 16px;
    cursor: pointer;
    right: 50px;
    top: 25%;
    z-index: 1;
  }

  .typcn.active {
    color: #7f60eb;
  }
</style>
