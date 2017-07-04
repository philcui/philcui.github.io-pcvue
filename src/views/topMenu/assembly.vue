<template>
  <div id="ass">
    <div class="layout">
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
                <Menu-item v-for="child in item.children"  :key="child.id" :name="child.url">{{child.name}}</Menu-item>
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
    </div>
  </div>
</template>

<script>
  import menuData from '../../../server/mock/leftMenu.js'
  import menu from '../../../server/mock/menu.js'
  export default {
    name: 'app',
    data(){
      return {
        act:false,
        leftMenu:[],
        leftTopMenu:[],
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
        nodes.forEach(node => {
          const parentId = node.pid;
          const parent = nodes.find(parent => parent.id === parentId)
          if (parent) {
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
  .layout {
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
