import axios from './config'

// 请求轮播图片
export let getSliders=()=>axios.get('/getSliders')

// 请求热门图片
export let getHotBook=()=>axios.get('/getHotBook')
// export let getSliders=()=>axios.post('/api/miguplay/apibeta/user/advertService/getAdverts?MmEwMD=')