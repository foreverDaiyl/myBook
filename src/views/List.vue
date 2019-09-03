<template>
  <div class="list">
    <my-header :back="true">图书库</my-header>
    <div class="content">
      <p
        v-if="!allBooks.length"
        style="color:#666;width:100%;text-align:center;font-size:14px;"
      >正在加载</p>
      <ul class="container">
        <router-link
          tag="li"
          v-for="item in allBooks"
          :key="item.bookId"
          :to="{name:'detail',params:{id:item.bookId}}"
        >
          <div class="cover">
            <div class="bookWrap">
              <img :src="item.bookCover" alt />
            </div>
          </div>
          <div class="right">
            <h4>{{item.bookName}}</h4>
            <p class="author">{{item.bookAuthor}}</p>
            <p class="price">
              <span v-if="item.bookCurrentPrice">¥ {{item.bookCurrentPrice}}</span>
              <span :class="item.bookCurrentPrice?'text-through':''">¥ {{item.bookPrice}}</span>
            </p>
            <button class="btn" @click.stop="remove(item.bookId)">删除</button>
            <button
              class="btn"
              :class="{'active':item.isCollected}"
              @click.stop="collect($event,item)"
            >{{item.isCollected?'已收藏':'收藏'}}</button>
          </div>
        </router-link>
      </ul>
      <tip :msg="tipMsg" ref="msgWrap"></tip>
    </div>
  </div>
</template>

<script>
import MyHeader from "../components/Header";
import { getAllBooks, removeBook, collectBook } from "../model/list";
import tip from "../components/tip";
export default {
  data() {
    return {
      allBooks: [],
      tipMsg: ""
    };
  },
  components: {
    MyHeader,
    tip
  },
  created() {
    this.getBooks();
  },
  mounted(){
    this.getBooks();
  },
  methods: {
    async getBooks() {
      await getAllBooks().then(({ data }) => {
        if (data.code == 0) {
          this.allBooks = data.data.reverse();
        }
      });
    },
    async remove(id) {
      await removeBook(id).then(({ data }) => {
        if (data.code == 0) {
          this.$refs.msgWrap.showTip();
          this.tipMsg = data.msg;
          this.getBooks();
        }
      });
    },
    async collect(e, book) {
      await collectBook(book).then(({ data }) => {
        if (data.code == 0 || data.code == 1) {
          this.$refs.msgWrap.showTip();
          this.tipMsg = data.msg;
          this.getBooks();
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  margin-bottom: 50px;

  li {
    padding: 10px;
    overflow: hidden;

    .cover {
      width: 120px;
      float: left;
      height:120px;

      .bookWrap {
        padding: 10px;
        padding: 6px;
        height:108px;
        border: 1px solid #ececec;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        img {
          width: 100%;
        }
      }
    }

    .right {
      margin-left:140px;

      h4 {
        font-size: 14px;
        font-weight: 500;
        height: 46px;
        overflow: hidden;
        line-height: 1.6;
      }
      .author {
        font-size: 12px;
        color: #666;
        margin: 2px auto;
      }
      .price {
        font-size: 20px;
        color: red;
        font-size: 16px;
        margin: 2px auto 5px;

        span {
          width: 50%;
          display: inline-block;

          &.text-through {
            text-decoration: line-through;
            color: #999;
          }
        }
      }

      .btn {
        width: 60px;
        height: 30px;
        border-radius: 5px;
        color: #fff;
        background-color: red;
        border: none;

        &:nth-of-type(1) {
          margin-right: 10px;
        }
        &.active {
          background-color: #b3b1b1;
        }
      }
    }
  }
}
</style>