import axios from './config'

export const addBook=(book)=>axios.post('/api/add',book)