<template>
  <div class="Add">
    <div class="content">
      <my-header :back="true">添加图书</my-header>
      <div class="container">
        <ul class="addBookInfo">
          <li>
            <label for>书名</label>
            <div>
              <input type="text" v-model="book.bookName" autofocus />
            </div>
          </li>
          <li>
            <label for>作者</label>
            <div>
              <input type="text" v-model="book.bookAuthor" />
            </div>
          </li>
          <li>
            <label for>
              定价
              <span style="color:#999;font-size:12px">(¥)</span>
            </label>
            <div>
              <input type="text" v-model="book.bookPrice" placeholder="0"  @input="priceRule"/>
            </div>
          </li>
          
          <li>
            <label for>封面</label>
            <div>
              <input type="text" v-model="book.bookCover" />
            </div>
          </li>
          <li>
            <button @click="addBook">添加</button>
          </li>
        </ul>
        <tip :msg="tipMsg" ref="msgWrap"></tip>
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from "../components/Header";
import tip from "../components/tip";
import { addBook } from "../model/add";
export default {
  data() {
    return {
      book: {
        bookName: "",
        bookAuthor: "",
        bookPrice: "",
        bookCover: "",
        bookId: ""
      },
      
      tipMsg: ""
    };
  },
  components: {
    MyHeader,
    tip
  },
  methods: {
    async addBook() {
      if (
        !this.book.bookName ||
        !this.book.bookAuthor ||
        !this.book.bookPrice ||
        !this.book.bookCover
      ) {
        this.$refs.msgWrap.showTip();
        this.tipMsg = "请填写完整信息";
        return;
      } else if (isNaN(this.book.bookPrice)) {
        this.$refs.msgWrap.showTip();
        this.tipMsg = "价格请输入数字";
        return;
      }
      let bookInfo = {
        bookId: this.getLength + 1 || 1,
        bookName: this.book.bookName,
        bookAuthor: this.book.bookAuthor,
        bookPrice: parseFloat(this.book.bookPrice).toFixed(2),
        bookCurrentPrice: this.currentPrice,
        bookCover: this.book.bookCover
      };
      await addBook(bookInfo).then(({ data }) => {
        if (data.code == 0 || data.code == 1) {
          this.$refs.msgWrap.showTip();
          this.tipMsg = data.msg;
          setTimeout(()=>{
            this.$router.push({ path: "/list" });
          },1200)
        }
      });
    },
    discountRule(e){
      let val=e.target.value
      if(isNaN(val)||val==0){
        this.discount=''
      }else if(val.length>2){
        this.discount=val.slice(0,2)
      }
    },
    priceRule(e){
      console.log(e)
      let val=e.target.value
      if(isNaN(val)){
        this.book.bookPrice=''
      }
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  padding-bottom: 50px;
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
        margin: 10px auto;
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
}
</style>