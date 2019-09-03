<template>
  <div class="detail">
    <div class="content">
      <my-header :back="true">修改图书</my-header>
      <div class="container" style="padding-bottom: 30px;">
        <ul class="addBookInfo">
          <li>
            <label for></label>
            <div style="border:none; padding:5px 2%;text-align:center;height:auto">
              <img :src="book.bookCover" style="width: 160px;" />
            </div>
          </li>
          <li>
            <label for>书名</label>
            <div>
              <input type="text" v-model="book.bookName" />
            </div>
          </li>
          <li>
            <label for>作者</label>
            <div>
              <input type="text" v-model="book.bookAuthor" />
            </div>
          </li>
          <li>
            <label for>原价</label>
            <div>
              <input type="text" v-model="book.bookPrice"  @input="priceRule"/>
            </div>
          </li>
          <li>
            <label for>
              折扣
              <span style="color:#999;font-size:12px" >(%)</span>
            </label>
            <div>
              <input type="text" v-model="book.discount" placeholder="如85折，填85即可" @input="discountRule"/>
            </div>
          </li>
          <li>
            <label for>
              现价
              <span style="color:#999;font-size:12px">(¥)</span>
            </label>
            <div>
              <p style="color:red">{{currentPrice}}</p>
            </div>
          </li>
          <li>
            <label for>封面</label>
            <div>
              <input type="text" v-model="book.bookCover" />
            </div>
          </li>
          <li>
            <button @click="modifyInfo(book)">确认修改</button>
          </li>
        </ul>
        <div class="tip" ref="tip" v-show="false">
          <div>
            <p ref="msg">修改成功</p>
          </div>
        </div>
      </div>
      <tip :msg="tipMsg" ref="msgWrap"></tip>
    </div>
  </div>
</template>

<script>
import MyHeader from "../components/Header";
import { getOneBook, updateBook } from "../model/list";
import tip from "../components/tip";
export default {
  components: {
    MyHeader,
    tip
  },
  data() {
    return {
      book: {
        bookName: "",
        bookAuthor: "",
        bookPrice: 0,
        bookCover: "",
        discount: '',
        bookCurrentPrice:''
      },
      
      tipMsg: ""
    };
  },
  created() {
    this.init();
  },
  computed: {
    currentPrice() {
      if(this.book.bookPrice==0){
        return 0
      }else if(!this.book.discount){
        return this.book.bookPrice 
      }
      let result=0
      if(this.book.discount.length==2){
        result=(parseFloat(this.book.discount)/ 100 *parseFloat(this.book.bookPrice)).toFixed(2)
      }else if(this.book.discount.length==3){
          result=(parseFloat(this.book.discount)/ 1000 *parseFloat(this.book.bookPrice)).toFixed(2)
      }
      result=(+(result+'').replace(/\d$/,0)).toFixed(2)
      console.log(result)
      return  result
    }
  },
  methods: {
      toFixedZero(n){
          return parseFloat((n+'')).toFixed(2)
      },
    async init() {
      let { id } = this.$route.params;
      await getOneBook(id).then(({ data }) => {
        if (data.code == 0) {
          this.book = data.data;
        }
      });
    },
    async modifyInfo(book) {
       book.bookPrice=this.toFixedZero(this.book.bookPrice)
       book.bookCurrentPrice=this.currentPrice
      await updateBook(book)
        .then(({ data }) => {
          if (data.code == 0 || data.code == 1) {
            this.$refs.msgWrap.showTip();
            this.tipMsg = data.msg;
            let time = 1000;
            return time;
          }
        })
        .then(time => {
          setTimeout(() => {
            this.$router.push({ path: "/list" });
          }, time);
        });
    },
    discountRule(e){
      let val=e.target.value
      if(isNaN(val)||val==0){
        this.book.discount=''
      }else if(val.length>3){
        this.book.discount=val.slice(0,3)
      }
    },
    priceRule(e){
      let val=e.target.value
      if(isNaN(val)){
        this.book.bookPrice=''
      }
    }

  }
};
</script>

<style lang="less" scoped>
.detail {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #fff;
  z-index: 1000;
  .addBookInfo {
    padding: 20px 0;

    li {
      width: 90%;
      margin: 0 auto 10px;

      label {
        display: block;
        font-size: 18px;
        font-weight: 500;
        margin-bottom: 6px;
      }
      > div {
        width: 100%;
      }
      button {
        background-color: red;
        color: #fff;
        border: none;
        width: 30%;
        height: 40px;
        line-height: 40px;
        margin: 20px auto;
        display: block;
        font-size: 16px;
        border-radius: 5px;
      }
    }
  }
}
</style>