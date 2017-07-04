<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="less">
  #app {
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  html, body, #app{
  // height: 100%;
  }
  /*滚动条样式*/
  ::-webkit-scrollbar {
    width: 7px;
    height: 7px;
    background: rgba(0, 0, 0, 0.1);
  }
  ::-webkit-scrollbar:hover {
    background: rgba(0, 0, 0, 0.2);
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    -ms-border-radius: 6px;
    -o-border-radius: 6px;
    border-radius: 6px;
  }
  ::-webkit-scrollbar-thumb:hover {
    -webkit-box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.25);
    /* Webkit browsers */
    -moz-box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.25);
    /* Firefox */
    -ms-box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.25);
    /* IE9 */
    -o-box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.25);
    /* Opera(Old) */
    box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.25);
    /* IE9+, News */
    background-color: rgba(0, 0, 0, 0.4);
  }
</style>
