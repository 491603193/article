<template>
  <div class="hello">
    <tabbar>
      <tabbar-item>
        <img slot="icon" src="../assets/logo.png">
        <span slot="label">Wechat</span>
      </tabbar-item>
      <tabbar-item show-dot>
        <img slot="icon" src="../assets/logo.png">
        <span slot="label">Message</span>
      </tabbar-item>
      <tabbar-item selected link="/component/demo">
        <img slot="icon" src="../assets/logo.png">
        <span slot="label">Explore</span>
      </tabbar-item>
      <tabbar-item badge="2">
        <img slot="icon" src="../assets/logo.png">
        <span slot="label">News</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from "vux/src/components/tabbar/tabbar-item"
export default {
  name: 'HelloWorld',
  components: {
    Tabbar,
    TabbarItem
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
