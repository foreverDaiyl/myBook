<template>
    <swiper :options="swiperOptions">
        <swiper-slide v-for="(item,index) in slider" :key="index">
            <img :src="item"  alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div> 
    </swiper>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

    export default {
        name:'Swiper',
        props:['slider'],
        data() {
            return {
                swiperOptions: {
                    loop:true,
                    autoplay:{
                        delay:1500,
                        disableOnInteraction: true
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    }
                }
            }
        },
        created(){
            this.init();
        },
        mounted(){
            this.init()
        },
        updated(){
            this.init()
        },
        components:{
            swiper,
            swiperSlide
        },
        methods:{
            init(){
                return {
                    swiperOptions: {
                        loop:true,
                        autoplay:{
                            delay:1500,
                            disableOnInteraction: true
                        },
                        pagination: {
                            el: '.swiper-pagination',
                            clickable: true
                        }
                    }
                }
            }
        }
    }
</script>

<style lang="less" scoped>
.swiper .swiper-pagination-bullet-active{
    background-color: #FFF; /* 改变轮播图下方分页按钮颜色*/
}
img {
    width: 100%;
    // height:300px;
  }
</style>