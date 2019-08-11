<template>
  <div class="home">
    <MyHeader :back="false">首页</MyHeader>
    <div class="content">
      <Swiper :slider="slidersAry"></Swiper>
      <div class="container">
        <h2>热门图书</h2>
        <ul>
          <li v-for="(item,index) in hotAry" :key="index">
            <img :src="item.bookCover" alt />
            <b>{{item.bookName}}</b>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MyHeader from "@/components/Header.vue";
import Swiper from "@/components/Swiper.vue";
import { getSliders, getHotBook } from "../model/home";

export default {
  name: "home",
  data() {
    return {
      slidersAry:[],
      hotAry: []
    };
  },
  // created(){
  //   getSliders().then(res=>{
  //     console.log(res)
  //     this.slidersAry=res.data
  //   })
  // },
  async created() {
    this.slidersAry=(await getSliders()).data;
    this.hotAry=(await getHotBook()).data.slice(-4);
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

  li {
    float: left;
    width: 50%;

    img {
      display: block;
      margin: 0 auto;
      width: 100%;
    }
    b {
      display: block;
      padding-left: 30px;
    }
  }
}
</style>