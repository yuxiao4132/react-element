import axios from 'axios'


// 创建axios示例
export function request(config){
    const instance=axios.create({
      baseURL:'https://elm.cangdu.org',
      timeout:5000
    })
   //请求拦截
   instance.interceptors.request.use(config => {
     return config
   },err=>{
  
   })
   //请求到数据拦截并且返回数据
   instance.interceptors.response.use(res => {
     return res.data
   },err=>{
  
   })
  
   return instance(config)
}
  