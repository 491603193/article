<template>
  <div id="app">
    <Index msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Index from './views/Index.vue'

export default {
  name: 'app',
  components: {
    Index
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
