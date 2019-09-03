<template>
  <div id="app">
    <Tab />
    <router-view />
  </div>
</template>

<script>
import Tab from "@/components/Tab.vue";
export default {
  name: "App",
  components: {
    Tab
  }
};
</script>
<style lang="less">
* {
  margin: 0;
  padding: 0;
}
html,
body {
  min-width: 320px;
}
ul,
li {
  list-style: none;
}
a {
  text-decoration: none;
}
.content {
  position: absolute;
  top: 40px;
  left: 0;
  bottom: 50px;
  width: 100%;
}
button:focus {
  outline: none;
  background: #e50101;
}
input {
      color: #333;
          font-size: 16px;
  border:none;
  border: 1px solid #b1b1b1;
  width: 100%;
  padding: 3px 8px;
  line-height: 1.6;
  border-radius: 3px;
  box-sizing: border-box;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
}
input:focus {
  outline: none;
  border-color: #66afe9;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(102, 175, 233, 0.6);
}
</style>
