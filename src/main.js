import Vue from 'vue'
import App from './App.vue'
/** router */
import router from './router'
/** ant-design */
import Antd from 'ant-design-vue/es'
import 'ant-design-vue/dist/antd.css'
/** 注入全局属性$message */
import {message} from 'ant-design-vue'
/** less */
import less from 'less'
/** vuex */
import store from './vuex/store'

Vue.prototype.$message = message;
message.config({
  duration: 1, //持续时间
  top: `30px`, //到页面顶部距离
  maxCount: 1 // 最大显示数, 超过限制时，最早的消息会被自动关闭
})

Vue.use(Antd)
Vue.use(less)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
