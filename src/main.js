import Vue from 'vue'
import App from './App.vue'
/** router */
import router from './router'
/** ant-design */
import ant from './config/antdesign'
Vue.use(ant)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
