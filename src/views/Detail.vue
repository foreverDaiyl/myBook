<template>
    <div class="detail">
        <div class="content">
            <my-header :back="true">修改页</my-header>
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
                        <button @click="modifyInfo">确认修改</button>
                    </li>
                </ul>
                <div class="tip" ref="tip" v-show="false">
                    <div>
                    <p ref="msg">修改成功</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MyHeader from '../components/Header';
    export default {
        components:{
            MyHeader
        },
        computed:{
            getId(){
                return this.$route.params.id
            }
        },
        data() {
            return {
                book:{
                    bookName: '',
                    bookInfo:'',
                    bookPrice:0
                }
            }
        },
        // async created(){
        //     let {id}=this.$route.params;
        //     this.book=await getOneBook(id);
        // },
        created(){
            let {id}=this.$route.params;
            this.$store.commit("getOneBook",id);
        },
        computed:{
            getBook(){
                return this.$store.state.tempBook;
            }
            
        },
        methods:{
            modifyInfo(){

            }
        }
    }
</script>

<style lang="less" scoped>
.detail{
    position:absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    background:#fff;
    z-index:1000;
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
}

</style>