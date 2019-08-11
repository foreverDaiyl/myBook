<template>
    <div class="Add">
        <div class="content">
            <my-header :back="true">添加页</my-header>
            <div class="container">
                <ul class="addBookInfo">
                    <li>
                        <label for="">书名</label>
                        <div>
                            <input type="text" v-model="book.bookName">
                        </div>
                        
                    </li>
                    <li>
                        <label for="">信息</label>
                        <div>
                            <input type="text"  v-model="book.bookInfo">
                        </div>
                        
                    </li>
                    <li>
                        <label for="">价格</label>
                        <div>
                            <input type="text"  v-model="book.bookPrice">
                        </div>
                    </li>
                    <li>
                        <label for="">封面</label>
                        <div>
                            <input type="text"  v-model="book.bookCover">
                        </div>
                    </li>
                    <li>
                        <button @click="addBook">添加</button>
                    </li>
                </ul>
                <div class="tip" ref="tip">
                    <div>
                    <p ref="msg">收藏成功</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MyHeader from '../components/Header'
    export default {
        data() {
            return {
                book: {
                    bookName:'',
                    bookInfo:'',
                    bookPrice:0,
                    bookCover:'',
                    bookId:''
                }
            }
        },
        components:{
            MyHeader
        },
        computed: {
            getLength(){
                return this.$store.state.books.length;
            }
        },
        methods:{
            addBook(){
                if(!this.book.bookName||!this.book.bookInfo||!this.book.bookPrice||!this.book.bookCover){
                    this.showTip('请填写完整信息')
                    return
                }
                if(isNaN(this.book.bookPrice)){
                    this.showTip('价格请输入数字');
                    return 
                }
                let book={
                    bookName:this.book.bookName,
                    bookInfo:this.book.bookInfo,
                    bookPrice:this.book.bookPrice,
                    bookCover:this.book.bookCover,
                    bookId:this.getLength+1||1,
                }
                this.$store.commit('addBook',book);
                this.book.bookName=this.book.bookInfo=this.book.bookPrice=this.book.bookCover='';
                // this.showTip("已提交")
                this.$router.push({ path: 'list' })
                
                
            },
            showTip(msg){
                this.$refs.msg.innerHTML=msg
                this.$refs.tip.style.display = "block";
                setTimeout(() => {
                    this.$refs.tip.style.display = "none";
                }, 1000);
            }
        }
    }
</script>

<style lang="less" scoped>
.addBookInfo{
    padding:20px 0;
    
    li{
        width:90%;
        margin:0 auto 10px;

       label{
           display:block;
           font-size:20px;
           font-weight:bold;
           margin-bottom:6px;
       } 
       >div{
           width:100%;
           height:40px;
           border: 1px solid #ddd;
           overflow:hidden;
            input[type='text']{
                width:94%;
                padding:0 3%;
                font-size:20px;
                height:100%;
                border:none;
            }
       }
       button{
           background-color:red;
           color:#fff;
           border:none;
           width:80%;
           height:40px;
           line-height:40px;
           margin:20px auto;
           display:block;
           font-size:20px;
           border-radius:5px;
       }
    }
}
.tip {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  display: none;

  > div {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      border-radius: 8px;
      background-color: rgba(0, 0, 0, 0.6);
      padding: 10px;
      color: #fff;
    }
  }
}
</style>