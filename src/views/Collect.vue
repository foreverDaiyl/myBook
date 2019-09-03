<template>
  <div class="collect">
    <my-header :back="true">收藏夹</my-header>
    <div class="content">
      <ul class="container">
        <li v-for="item in allCollectBooks" :key="item.bookId">
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
            <button class="btn" @click="remove(item)">取消收藏</button>
          </div>
        </li>
      </ul>
      <p
        v-if="!allCollectBooks.length"
        style="color:#666;width:100%;text-align:center;font-size:14px;"
      >暂无收藏</p>
      <tip :msg="tipMsg" ref="msgWrap"></tip>
    </div>
  </div>
</template>

<script>
import MyHeader from "../components/Header";
import { getCollect, removeCollect } from "../model/collect";
import tip from "../components/tip";
export default {
  name: "collect",
  data() {
    return {
      allCollectBooks: [],
      tipMsg: ""
    };
  },
  created() {
    this.init();
  },
  components: {
    MyHeader,
    tip
  },

  methods: {
    async init() {
      await getCollect().then(({ data }) => {
        if (data.code == 0) {
          this.allCollectBooks = data.data;
        }
      });
    },
    async remove(book) {
      await removeCollect(book).then(({ data }) => {
        this.$refs.msgWrap.showTip();
        this.tipMsg = data.msg;
        this.init();
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

      .bookWrap{
        padding: 6px;
        height:108px;
        border: 1px solid #ececec;
        display:flex;
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
        height: 50px;
        overflow: hidden;
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
          margin-right: 5px;
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