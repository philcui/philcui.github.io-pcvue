<template>
  <div id="app">
    <div class="layout">
      <Menu mode="horizontal" theme="dark" active-name="2">
        <div class="layout-logo">UtryVue界面元素库</div>
        <div class="layout-nav">
          <Menu-item :name="item.code" v-for="item in topMenu" :key="item.menuId">
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
        <Row>
          <i-col span="5">
            <div class="leftMenu" v-for="item in leftTopMenu" :class="item.cls">
              <div class="leftMenu-title" @click="getUrl(item.id)">{{item.title}}</div>
            </div>
            <div class="markMenu">
              <div class="leftMenu-title">组件</div>
            </div>
            <Menu active-name="1"  @on-select="getRouter" width="auto" :open-names="['1']">
              <Submenu v-for="item in leftMenu" :name="item.code"  :key="item.id">
                <template slot="title">
                  <Icon type="navicon-round"></Icon>
                  {{item.name}}
                </template>
                <Menu-item v-for="child in item.children" :name="child.url">{{child.name}}</Menu-item>
              </Submenu>
            </Menu>
          </i-col>
          <i-col span="19">
            <div class="layout-content-main">
              <router-view></router-view>
            </div>
          </i-col>
        </Row>
      </div>
      <div class="layout-copy">
        Copyright © 20017-- 远传公司保留所有权利
      </div>
    </div>
  </div>
</template>

<script>
  import menuData from '../../server/mock/leftMenu.js'
  import menu from '../../server/mock/menu.js'
  export default {
    name: 'app',
    data(){
      return {
        act:false,
        leftMenu:[],
        leftTopMenu:[],
        topMenu:[{menuId:'1',title:'指南',code:'1',icon:'navigate'},{menuId:'2',title:'组件',code:'2',icon:'grid'},{menuId:'3',title:'手脚架',code:'3',icon:'settings'}],
        data:[],
      }
    },
    created(){
      this.data=menuData.menu;
      this.leftTopMenu=menu.data;
      this.getMenus();
    },
    methods:{
      getMenus(){
        var menus=this.data;
        const nodes = menus.map(menu => ({
          name: menu.name,
          id: menu.id,
          pid: menu.pid,
          children:[],
          url:menu.url,
          code:1,
        }))
        const root = []
        /*var code=1;
         var number=1;*/
        nodes.forEach(node => {
          const parentId = node.pid;
          const parent = nodes.find(parent => parent.id === parentId)
          if (parent) {
            /*if(parent.pid==root[0].children.id && parent.pid){
             parent.code=code;
             code++;
             }else if(node.pid==parent.id){
             node.code=parent.code+'-'+number;
             number++;
             }*/
            parent.children.push(node);
          }
          if(!node.pid){
            root.push(node)
          }
        })
        this.leftMenu=root[0].children;
      },
      getRouter(url){
        this.$router.push(url);
      },
      getUrl(val){
        for(var i=0;i<this.leftTopMenu.length;i++){
          this.leftTopMenu[i].cls='';
        }
        this.leftTopMenu[val].cls='leftMenuHover';
        var url=this.leftTopMenu[val].url;
        this.$router.push(url);
      },
    }
  }
</script>

<style  scoped>
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
