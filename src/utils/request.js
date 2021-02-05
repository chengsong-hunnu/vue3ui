import axios from "axios"

axios.defaults.headers["Content-Type"] = "application/json;charset=utf-8"
// 创建axios实例
const service = axios.create({
    // axios中请求配置有baseURL选项，表示请求URL公共部分
    baseURL: "https://api.chengsong.info",
    // 超时
    timeout: 10000
})

service.interceptors.request.use((config) => {
    console.log("ajax requst", config)
    return config
})
service.interceptors.response.use((config) => {
    console.log("ajax respose", config)
    return config
})
export default service
