import axios from 'axios';

const instance = axios.create({
    // baseURL: 'https://cnodejs.org/api/v1/',
    timeout: 3000,
    headers: { 'X-Custom-Header': 'foobar' }
});

//请求拦截处理
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

//返回拦截处理
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export const get = (url, param) => {
    return instance.get(`${url}`, { params: param })
}
export const post = (url, param) => {
    return instance.post(`${url}`, param)
}