<template>
  <div id="main">
    <div class="fof">
      <h1>Error 404</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped>

  * {
    transition: all 0.6s;
  }

  #main {
    display: table;
    width: 100%;
    height: 100vh;
    text-align: center;
  }

  .fof {
    display: table-cell;
    vertical-align: middle;
  }

  .fof h1 {
    font-size: 50px;
    display: inline-block;
    padding-right: 12px;
    animation: type .5s alternate infinite;
    color: #7f9a9a;
  }

  @keyframes type {
    from {
      box-shadow: inset -3px 0px 0px #888;
    }
    to {
      box-shadow: inset -3px 0px 0px transparent;
    }
  }

</style>
