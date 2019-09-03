<template>
  <div class="home">
    <MyHeader :back="false">热门推荐</MyHeader>
    <div class="content">
      <Swiper :slider="slidersAry"></Swiper>
      <div class="container">
        <h2 class="title">热门图书</h2>
        <ul>
          <router-link
            tag="li"
            v-for="(item,index) in hotAry"
            :key="index"
            :to="{name:'detail',params:{id:item.bookId}}"
          >
            <div class="cover">
              <div class="bookWrap">
                <img :src="item.bookCover" alt />
              </div>
            </div>
            <b>{{item.bookName}}</b>
          </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MyHeader from "@/components/Header.vue";
import Swiper from "@/components/Swiper.vue";
import { getBanners, getHotBooks } from "../model/home";

export default {
  name: "home",
  data() {
    return {
      slidersAry: [],
      hotAry: []
    };
  },
  async created() {
    try {
      await getBanners().then(({ data }) => {
        if (data.code == 0) {
          this.slidersAry = data.data;
        }
      });
      await getHotBooks().then(({ data }) => {
        if (data.code == 0) {
          this.hotAry = data.data;
        }
      });
    } catch (e) {
      console.log(e);
    }
  },
  components: {
    MyHeader,
    Swiper
  },
  methods: {}
};
</script>
<style lang="less" scoped>
.container {
  margin-bottom: 50px;
  box-sizing: border-box;
  overflow-x: hidden;
  padding-bottom: 10px;

  .title {
    font-size: 16px;
    padding-left: 10px;
  }
  li {
    float: left;
    width: 50%;

    .cover{
      padding: 10px;
    }
    .bookWrap {
      padding: 6px;
    border: 1px solid #ececec;
      img {
        display: block;
        margin: 0 auto;
        width: 100%;
      }
    }

    b {
      display: block;
      padding-left: 30px;
      font-size: 14px;
      font-weight: 500;
      height: 24px;
      overflow: hidden;
      line-height: 1.5;
      text-overflow: ellipsis;
      white-space: nowrap;
      padding: 0 10px;
    }
  }
}
</style>