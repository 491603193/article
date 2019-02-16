import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import '@/style/transition.css'
import '@/style/base.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
