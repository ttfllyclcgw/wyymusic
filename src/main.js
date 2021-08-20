import Vue from 'vue'
import App from './App.vue'
/** router */
import router from './router'
/** ant-design */
import Antd from 'ant-design-vue/es'
import 'ant-design-vue/dist/antd.css'

Vue.use(Antd)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
