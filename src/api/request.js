// 对于axios进行二次封装
import axios from 'axios'
// 引入进度条
import nprogress from 'nprogress';
// 引入进度条的样式
import 'nprogress/nprogress.css';
// 在当前模块引入store
import store from '@/store';
// start:进度条结束 done：进度条结束
// 1:利用axios对象的方法create,去创建一个axios实例
const requests = axios.create({
    // 配置对象
    // 基础路径，发请求的时候，自动带上api
    baseURL: "/api",
    // 代表请求超时时间5S
    timeout: 5000
})

// 请求拦截器
requests.interceptors.request.use((config) => {
    // config:配置对象，对象里面有一个属性很重要，包含header请求头
    // 进度条开始动
    if (store.state.detail.uuid_token) {
        // 请求头添加一个字段
        config.headers.userTempId = store.state.detail.uuid_token;
    }
    // 需要携带token带给服务器
    if (store.state.user.token) {
        config.headers.token = store.state.user.token;
    }
    nprogress.start();
    return config
})
// 响应拦截器
requests.interceptors.response.use((res) => {
    // 进度条结束
    nprogress.done();
    // 成功，返回数据
    return res.data
}, (error) => {
    // 失败的回调函数
    return Promise.reject(new Error('faile'))
})
// 对外暴露
export default requests
