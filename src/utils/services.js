import axios from 'axios'
import qs from 'qs'

axios.defaults.withCredentials = true;  //允许跨域设置，不然可能因为拿不到cookie而报错
axios.defaults.baseURL = 'http://localhost:3000/'  //服务器地址

//请求拦截
axios.interceptors.request.use(req=>{
  if(req.meth === 'post' && !(req.data instanceof FormData)){
    req.headers = {
     'Content-Type': 'application/x-www-form-urlencoded'
    }
    req.data = qs.stringify(req.data,{arrayFormat:'repeat'}) //传数组时设置
  }
  return req
},req_err=>{
  return Promise.reject(req_err)
})

//响应拦截
axios.interceptors.response.use(res=>{
  return res
},res_err=>{
  return Promise.resolve(res_err)
})

export default axios
