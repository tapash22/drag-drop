import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vue2Editor from "vue2-editor";


Vue.config.productionTip = false

new Vue({
  router,
  Vue2Editor,
  store,
  render: h => h(App)
}).$mount('#app')
