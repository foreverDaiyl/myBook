import axios from './config'

// 获取所有图书
export let getAllBooks = () => axios.get('/api/books')

// 删除图书
export let removeBook = id =>axios.get('/api/removeBook?id='+id)

// 收藏图书
export let collectBook = book=>axios.post('/api/collect',book)

// 更新图书
export let updateBook=book=>axios.post('/api/updateBook',book)

// 获取当前图书
export let getOneBook=id=>axios.get('/api/getOneBook?id='+id)