<template>
  <div>
    <span class="typcn typcn-eye" @click="showPassword=!showPassword">Show</span>
    <input
      :type="showPassword ? 'text' : 'password'"
      name="password"
      placeholder="Password"
      autocomplete="off"
      :value="value"
      @input="onInput($event.target.value)"
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

<style lang="scss" scoped>

</style>
