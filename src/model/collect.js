import axios from './config'
// import QS from 'qs'

// 收藏图书
// export let collectBook=(item)=>{
//     return axios.post('/collect',QS.stringify(item)).then(res=>{
//         res.data.push(item)
//     }).catch(err=>{
//         console.log(err)
//     })
// }

export let getCollect=()=>axios.get('/api/getCollect')

// 删除收藏图书
export let removeCollect=(book)=>axios.post('/api/removeCollect',book)