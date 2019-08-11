import axios from './config'

// 获取所有图书
export let getAllBooks = () => axios.get('/getHotBook')

// 删除图书
export let removeBook = (id) => {
   return axios.get('/getHotBook').then(res=>{
       return res.data.filter(item=>item.bookId!==id)
    })
}