export function collectBook(state,options){
    if(!state.collectList.length) {
        state.collectList.unshift(options)
    }
    state.collectList.forEach(item=>{
        if(item.bookId==options.bookId){
            return
        }
    })
    state.collectList.unshift(options)
}
export function addBook(state,options){
    state.books.unshift(options);
    
}
export function removeBook(state,options){
    state.books=state.books.filter(item=>item.bookName!=options)
    console.log(state.books)
}

export function getOneBook(state,options){
    state.tempBook= state.books.filter(item=>item.bookId==options)
}