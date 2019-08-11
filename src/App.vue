<template>
  <div id="app">
    <Tab/>
    <router-view/>
  </div>
</template>

<script>

import Tab from '@/components/Tab.vue'
export default {
  name:'App',
  components:{
    Tab
  }
}
</script>
<style lang="less">
*{
  margin:0;
  padding:0;
}
ul,li{
  list-style:none;
}
a{
  text-decoration:none;
}
.content{
  position:absolute;
  top:40px;
  left:0;
  bottom:50px;
  width:100%;
}
</style>
