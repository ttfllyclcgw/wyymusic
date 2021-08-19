import Button from 'ant-design-vue/lib/button'
import 'ant-design-vue/dist/antd.css'

/** 注册ant-design组件 */
const ant = {
    install: function(Vue){
        Vue.component(Button.name,Button)
    }
}

export default ant

