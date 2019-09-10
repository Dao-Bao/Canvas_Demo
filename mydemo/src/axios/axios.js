import axios from 'axios'
// 封装api get请求
export const fetch = (path, params) => {
    return axios.get(path, { params: params }).then(res => {
        if (res.data.code === 403) {
            router.push({
                path: '/'
            });
            Message({
                message: res.data.msg,
                type: 'warning'
            })
        } else {
            return res.data;
        }
    }).catch(err => {
        console.log(err);
        return Promise.reject(err);
    })
}

// 封装api post请求
export const post = (path, params) => {
    return axios.post(path, params).then(res => {
        if (res.data.code === 403) {
            router.push({
                path: '/'
            });
            Message({
                message: res.data.msg,
                type: 'warning'
            })
        } else {
            return res.data;
        }
    }).catch(err => {
        console.log(err);
        return Promise.reject(err);
    })
}