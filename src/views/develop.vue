<template>
  <div class="develop-wrap">
    <div class="catalog">
      <div class="catalogInfo" @click="showCatalogList">目录</div>
    </div>
    <div class="catalog2">
      <div class="catalogList" v-show="catalogModel">
        <span class="title pl10 pt10" @click="showCata">目录</span>
        <ul>
          <li class="pl10 pb10"  :title="i.name" v-for="i in rightMenu">
            <a href="javascript:void(0)" @click="goAnchor(i.id)"> {{i.name}} </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="qq" :style="styleObject" >
      <div class="qqInfo"></div>
    </div>
    <div class="hc-left">
      <div class="hcl-search">
        <div class="search">在此处搜索组件...</div>
      </div>
      <div class="leftMenu">
        <Menu 　ref="leftMenu"　active-name="1"  @on-select="getRouter" width="auto" :open-names="['1']" accordion>
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
  const wh = window.innerHeight;
  const　top = wh - 180 ;
  export  default {
    data(){
      return {
        data:[],
        leftMenu:[],
        rightMenu:[],
        catalogModel:false,
        styleObject:{
          position: 'relative',
          height: '0',
          margin: '0 auto',
          left:'1230px',
          top:'0',
        }
      }
    },
    created(){
      this.styleObject.top=top+'px';
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
          menus:menu.children,
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
        this.showCatalogList(url);
      },
      goAnchor(selector){
        var anchor=document.getElementById(selector);
        document.body.scrollTop = anchor.offsetTop
      },
      showCata(){
        if( this.catalogModel){
            this.catalogModel=false;
          }else {
            this.catalogModel=true;
          }
      },
      showCatalogList(param){
        var url = "";
        var that = this;
        this.catalogModel = true;
        if(param){
          url=param;
        }else {
          let children = this.$refs.leftMenu.$children;
          for (var i = 0; i < children.length; i++) {
            var newChildren = children[i].$children;
            for (var j = 0; j < newChildren.length; j++) {
              if (newChildren[j].active) {
                url = newChildren[j].$router.currentRoute.path;
                break;
              }
            }
          }
        }
        for (var n = 0; n < that.leftMenu.length; n++) {
          var newLeftChildren = that.leftMenu[n].children;
          for (var m = 0; m < newLeftChildren.length; m++) {
            if (newLeftChildren[m].url == url) {
              that.rightMenu = newLeftChildren[m].menus;
              break;
            }
          }
        }
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
  .catalog {
    position: relative;
    left: 1250px;
    top: 50px;
    z-index: 9999;
    height: 0;
    color: #32363c;
  .catalogInfo{
    border-radius: 3px;
    font-size: 12px;
    position: fixed;
    z-index: 9999;
    width: 34px;
    height: 60px;
    border: 1px solid #dfe2e5;
    box-shadow: 0 0 6px #dfe2e5;
    background-color: #ffffff;
    letter-spacing: 5px;
    text-align: center;
    padding-top: 12px;
    padding-left: 4px;
    cursor: pointer;
  }
  }
  .catalog2 {
    position: relative;
    left: 1180px;
    top: 50px;
    z-index: 9999;
    height: 0px;
    color: rgb(50, 54, 60);
  .catalogList {
    width: 104px;
    min-height: 250px;
    position: fixed;
    z-index: 99999;
    border: 1px solid #dfe2e5;
    box-shadow: 0 0 6px #dfe2e5;
    background-color: #ffffff;
  span {
    height: 40px;
    line-height: 40px;
    display: block;
  }
  .title {
    font-size: 12px;
    color: #23282e;
    cursor: pointer;
  }
  ul li {
    color: #728093;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  &:hover {
     color: #2196f3;
   }
  a {
    color: #728093;
  &:hover {
     color: #2196f3;
   }
  }
  }
  }
  }
  .qq {
  .qqInfo {
    position: fixed;
    width: 60px;
    height: 60px;
    background-image: url("../assets/qq.png");
  }
  }
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
  .pl10 {
    padding-left: 10px;
  }
  .pb10 {
    padding-bottom: 10px;
  }

</style>
