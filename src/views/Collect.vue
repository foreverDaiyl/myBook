<template>
    <div class="collect">
        <my-header :back="true">收藏页</my-header>
        <div class="content">
            <ul class="container">
                <li v-for="item in allCollectBooks" :key="item.bookId">
                    <div class="cover">
                      <img :src="item.bookCover" alt="">
                    </div>
                    <div class="right">
                        <h4>{{item.bookName}}</h4>
                        <p>{{item.bookInfo}}</p>
                        <p class="price">{{item.bookPrice}}</p>
                        <button class="btn" @click="remove(item.bookId)">取消收藏</button>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import MyHeader from '../components/Header'
import {collectBook} from '../model/collect'
    export default {
        name:'collect',
        data() {
            return {
                allCollectBooks: []
            }
        },
        created(){
            this.init()
        },
        components:{
            MyHeader
        },
        
        methods:{
            remove(id){
                this.allCollectBooks=this.allCollectBooks.filter(item=>item.bookId!=id)
            },
            async init(){
                // this.allCollectBooks=this.$store.state.collectList
                console.log(await collectBook())
                this.allCollectBooks=(await collectBook()).data
            }
        }
    }
</script>

<style lang="less" scoped>
.container{
  margin-bottom:50px;

  li{
    padding: 10px;
    overflow: hidden;

    .cover{
      width:40%;
      float:left;

      img {
        width: 100%;
      }
    }

    .right{
      float:right;
      width:58%;

      .price{
        font-size:20px;
        color:red;
      }

      .btn{
        width:60px;
        height:30px;
        border-radius:5px;
        color:#fff;
        background-color:red;
        border:none;

        &:nth-of-type(1){
          margin-right:5px;
        }
      }
    }
  }

  
}
.tip{
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;
    width: 100%;
    height: 100%;
    display:none;

    >div{
      width:100%;
      height:100%;
      display:flex;
      align-items:center;
      justify-content: center;
      p{
        border-radius:8px;
        background-color:rgba(0,0,0,.6);
        padding:10px; 
        color:#fff;
      }
    }
}
</style>