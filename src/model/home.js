import axios from './config'

// 请求轮播图片
// export let getSliders=()=>axios.get('/getSliders')

export let getBanners=()=>axios.get('/api/sliders')

// 请求热门图片
// export let getHotBook=()=>axios.get('/getHotBook')
export let getHotBooks=()=>axios.get('/api/hot')
// export let getSliders=()=>axios.post('/api/miguplay/apibeta/user/advertService/getAdverts?MmEwMD=')