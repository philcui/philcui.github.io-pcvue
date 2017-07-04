<template>
  <div id="app">
    <div class="layout">
      <Menu mode="horizontal" theme="dark" active-name="/home"  @on-select="getTopMenuUrl">
        <div class="layout-logo">UtryUI-Vue</div>
        <div class="layout-nav">
          <Menu-item :name="item.url"  v-for="item in topMenu" :key="item.menuId">
            <Icon :type="item.icon"></Icon>
            {{item.title}}
          </Menu-item>
          <Select style="width:100px" placeholder="版本">
            <Option value="1">V1.0.0</Option>
            <Option value="2">V2.0.0</Option>
          </Select>
        </div>
      </Menu>
      <div class="layout-content">
        <router-view></router-view>
      </div>
      <div class="layout-copy">
        Copyright © 20017-- 远传公司保留所有权利
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data(){
      return {
        topMenu:[{menuId:'1',title:'指南',code:'1',icon:'navigate',url:'/topMenu/guide'},
                 {menuId:'2',title:'组件',code:'2',icon:'grid',url:'/topMenu/assembly'},
                 {menuId:'3',title:'手脚架',code:'3',icon:'settings',url:'/topMenu/footRack'}],
      }
    },
    methods:{
      getTopMenuUrl(url){
        this.$router.push(url);
      },
    }
  }
</script>

<style lang="less" scoped>
  #app {
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  .layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
  }
  .ivu-menu-dark {
    background: #ffffff;
  }
  .ivu-menu-dark.ivu-menu-horizontal .ivu-menu-item, .ivu-menu-dark.ivu-menu-horizontal .ivu-menu-submenu {
    color: #2f3032;
  }
  .ivu-menu-dark.ivu-menu-horizontal .ivu-menu-item-active, .ivu-menu-dark.ivu-menu-horizontal .ivu-menu-item:hover, .ivu-menu-dark.ivu-menu-horizontal .ivu-menu-submenu-active, .ivu-menu-dark.ivu-menu-horizontal .ivu-menu-submenu:hover {
    color: #2d8cf0 ;
  }
  .layout-logo {
    width: auto;
    height: 30px;
    line-height: 30px;
    font-size: 20px;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }

  .layout-nav {
    width: 420px;
    margin: 0 auto;
    float: right;
  }

  .layout-assistant {
    width: 300px;
    margin: 0 auto;
    height: inherit;
  }

  .layout-breadcrumb {
    padding: 10px 15px 0;
  }

  .layout-content {
    min-height: 200px;
    margin: 15px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
  }

  .layout-content-main {
    padding: 10px;
  }

  .layout-copy {
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
  }
  .leftMenu {
    font-size: 14px;
    border-right: 1px solid #dddee1;
  }
  .markMenu {
    font-size: 18px;
    border-right: 1px solid #dddee1;
  }
  .leftMenu-title {
    padding: 12px 24px;
  }
  .leftMenu:hover {
    color: #2d8cf0;
    border-right: 2px solid #2d8cf0;
  }
  .leftMenuHover {
    color: #2d8cf0;
    border-right: 2px solid #2d8cf0;
  }
</style>
