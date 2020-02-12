import apis from './apis'

function get (api, data = {}, loading = false) {
    return request(apis[api], 'GET', data, loading)
}

function post (api, data = {}, loading = false) {
    return request(apis[api], 'POST', data, loading)
}

// loading 是否在请求时执行 showLoading
function request (url, method, data, loading) {
    return new Promise((resolve, reject) => {
        loading && dd.showLoading({ content: '加载中...' })
        
        setTimeout(() => {
            dd.httpRequest({
                url,
                method,
                data,
                timeout: 10 * 1000,
                success: res => {
                    if (res.status !== 200) {
                        toast('网络错误')
                        reject(res.data || {})
                    } else {
                        resolve(res.data || {})
                    }
                    dd.hideLoading()
                },
                fail: err => {
                    toast('请求失败')
                    reject(err)
                    dd.hideLoading()
                    // dd.alert({ content: JSON.stringify(err) })
                }
            })
        }, loading ? 1000 : 1)
    })
}

// 封装 toast
function toast (content, duration = 3000) {
    // 弹出 toast
    dd.showToast({
        content,
        duration
    });

    // 固定时间后隐藏 toast
    setTimeout(() => {
        dd.hideToast()
    }, duration)
}

export default {
    get,
    post
}