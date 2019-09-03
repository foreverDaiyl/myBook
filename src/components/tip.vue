<template>
  <div class="tip" ref="tip">
    <div>
      <p :msgTip="msg">{{msg}}</p>
    </div>
  </div>
</template>

<script>
    export default {
      data() {
        return {
          isShow: false
        }
      },
        props:['msg'],
        methods:{
            showTip(msg) {
                this.$refs.tip.style.display = "block";
                setTimeout(() => {
                    this.$refs.tip.style.display = "none";
                }, 1000)
            }
        }
    }
</script>

<style lang="less" scoped>
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
    font-size:14px;
    p {
      border-radius: 20px;
      background-color: rgba(0, 0, 0, 0.6);
      padding: 10px 20px;
      color: #fff;
    }
  }
}
</style>