<template>
    <div class="footer">
        <router-link to="/home">
            <i class="iconfont icon-shouye"></i>
            <span>首页</span>
        </router-link>
        <router-link to="/list">
            <i class="iconfont icon-iconfront-"></i>
            <span>列表</span>
        </router-link>
        <router-link to="/collect">
            <i class="iconfont icon-shoucang"></i>
            <span>收藏</span>
        </router-link>
        <router-link to="/add">
            <i class="iconfont icon-tianjia"></i>
            <span>添加</span>
        </router-link>

    </div>
</template>

<script>
    export default {
        name:'Tab'
    }
</script>

<style lang="less" scoped>
.footer{
    position:fixed;
    bottom:0;
    z-index:10001;
    width:100%;
    border-top:1px solid #ccc;
    background:#fff;
    display:flex;
    align-items:center;/*垂直居中*/
    justify-content: center;
    height:50px;

    a{
        display:flex;
        flex-direction:column;
        flex:1;
        align-items:center;
        color: #222;
    }
    .router-link-active{
        color:#439ffe
    }
}
</style>