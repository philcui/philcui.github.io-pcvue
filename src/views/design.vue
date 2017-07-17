<template>
  <div class="develop-wrap">
    <div class="hc-left">
      <div class="hcl-search">
        <div class="search">设计    在此处搜索组件...</div>
      </div>
      <div class="leftMenu">
        <Menu active-name="1"  @on-select="getRouter" width="auto" :open-names="['1']" accordion>
          <Submenu v-for="item in leftMenu" :name="item.code"  :key="item.id">
            <template slot="title">
              {{item.name}}
            </template>
            <Menu-item v-for="child in item.children"  :key="child.id" :name="child.url">{{child.name}}</Menu-item>
          </Submenu>
        </Menu>
      </div>
    </div>
    <div class="hc-right">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  import menuData from '../../server/mock/leftMenu.js'
  export  default {
    data(){
      return {
        data:[],
        leftMenu:[],
      }
    },
    created(){
      this.data=menuData.menu;
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
    }
  }
</script>
<style lang="less" scpoed>
  .develop-wrap {
    width: 1200px;
    margin: 80px auto 0;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: row;
  .hc-left {
    width: 240px;
  .hcl-search {
    height: 55px;
  .search {
    position: relative;
    margin-top: 45px;
    color: #a1afc2;
    font-size: 14px;
    height: 55px;
    padding-left: 24px;
    border-left: 1px solid #dddee1;
  }
  }
  .leftMenu{
    border-left: 1px solid #dddee1;
  .ivu-menu-light {
    background: #f9f9f9;
  }
  .ivu-menu-opened {
    border-left: 5px solid #2196f3;
  }
  .ivu-menu-light {
    border-right: 0 !important;
    border-left: 1px solid #f9f9f9 !important;
  }
  .ivu-menu {
    font-size: 16px ;
    color: #23282e;
  }
  .ivu-menu-item {
    font-size: 14px ;
    color: #728093 ;
  }
  .ivu-menu-opened {
    background: #eaf3f9;
  }
  .ivu-menu-item-active {
    color: #2d8cf0 !important;
    border-right: 0 !important;
  }
  .ivu-menu-vertical.ivu-menu-light:after {
    content:'' ;
    display: block;
    width: 0;
    height: 100%;
    background: #dddee1;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
  }
  }
  }
  .hc-right {
    width: 960px;
    min-height: 200px;
  }
  }
</style>
