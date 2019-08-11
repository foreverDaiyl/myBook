<template>
  <div class="list">
    <my-header :back="true">列表页</my-header>
    <div class="content">
      <ul class="container">
        <router-link
          tag="li"
          v-for="item in allBooks"
          :key="item.bookId"
          :to="{name:'detail',params:{id:item.bookId}}"
        >
          <div class="cover">
            <img :src="item.bookCover" alt />
          </div>
          <div class="right">
            <h4>{{item.bookName}}</h4>
            <p>{{item.bookInfo}}</p>
            <p class="price">{{item.bookPrice}}</p>
            <button class="btn" @click.stop="remove(item.bookId)">删除</button>
            <button class="btn" @click.stop="collect(item)" :ref="item.bookId">收藏</button>
          </div>
        </router-link>
      </ul>
      <div class="tip" ref="tip">
        <div>
          <p ref="msg">收藏成功</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from "../components/Header";
import { getAllBooks,removeBook} from "../model/list";
import { collectBook } from "../model/collect";
export default {
  data() {
    return {
      allBooks: [],
      collectList: []
    };
  },
  components: {
    MyHeader
  },
  created() {
    this.getBooks();
  },
  methods: {
    showTip(msg) {
      this.$refs.msg.innerHTML = msg;
      this.$refs.tip.style.display = "block";
      setTimeout(() => {
        this.$refs.tip.style.display = "none";
      }, 1000);
    },
    async getBooks() {
      this.allBooks = (await getAllBooks()).data;
    },
    async remove(id) {
      this.allBooks =await removeBook(id)
    },
    collect(item){
       collectBook(item)
      console.log( collectBook(item))
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
      width: 40%;
      float: left;

      img {
        width: 100%;
      }
    }

    .right {
      float: right;
      width: 58%;

      .price {
        font-size: 20px;
        color: red;
      }

      .btn {
        width: 60px;
        height: 30px;
        border-radius: 5px;
        color: #fff;
        background-color: red;
        border: none;

        &:nth-of-type(1) {
          margin-right: 5px;
        }
        &.active {
          background-color: #ddd;
        }
      }
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