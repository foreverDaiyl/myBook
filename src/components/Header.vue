<template>
    <div class="header">
        <slot></slot>
        <i class="iconfont icon-fanhui" v-if="back" @click="goBack"></i>
    </div>
</template>

<script>
    export default {
        props:{
            back:{
                default:false
            }
        },
        name:'Header',
        methods:{
            goBack(){
                this.$router.go(-1)
            }
        }
    }
</script>

<style lang="less" scoped>
    .header{
        position:fixed;
        top:0;
        left:0;
        height:40px;
        width:100%;
        font-size:20px;
        background-color:#439ffe;
        line-height:40px;
        text-align:center;
        color:#fff;
        z-index:999
    }
    .icon-fanhui{
        position:absolute;
        left:8px;
        color:#fff
    }
</style>