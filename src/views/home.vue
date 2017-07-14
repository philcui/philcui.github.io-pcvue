<template>
  <div class="home-wrap">
    <div class="home-top-menu">
      <span class="home-title"> UTRY DESIGN</span>
      <ul class="home-menu">
        <li :class="{actColor:index}" @click="changeAct(1)">首页 <a :class="{active:index}"></a></li>
        <li :class="{actColor:des}" @click="changeAct(2)">设计 <a :class="{active:des}"></a></li>
        <li :class="{actColor:dep}" @click="changeAct(3)">开发 <a :class="{active:dep}"></a></li>
        <li :class="{actColor:res}" @click="changeAct(4)">资源 <a :class="{active:res}"></a></li>
      </ul>
    </div>
    <div class="home-content">
      <div class="hc-left">
        <div class="hcl-search">
          <div class="search">在此处搜索组件...</div>
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
  </div>
</template>
<script>
  import menuData from '../../server/mock/leftMenu.js'
  export default {
      data(){
          return {
            leftMenu:[],
            data:[],
            index:false,
            des:true,
            dep:false,
            res:false,
          }
      },
    created(){
      this.data=menuData.menu;
      this.getMenus();
    },
    methods:{
      changeAct(val){
        this.index = false;
        this.des = false;
        this.dep = false;
        this.res = false;
        switch(val){
          case 1:
            this.index = true;
            this.$router.push("/");
            break;
          case 2:
            this.des = true;
            this.$router.push("/home");
            break;
          case 3:
            this.dep = true;
            this.$router.push("/home");
            break;
          case 4:
            this.res = true;
            this.$router.push("/home");
            break;
          default:
            this.$router.push("/home");
        }
      },
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
<style lang="less" scoped>
.home-wrap {
  background-color: #f9f9f9;
  overflow-x: hidden;
  width: 100%;
  height: 100%;
  .home-top-menu {
    z-index: 9999;
    background-color: #ffffff;
    position: fixed;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    height: 80px;
    box-shadow: 0 0 13px #e2e2e2;
    .home-title{
      color: #2196f3;
      font-size: 24px;
    }
    .home-menu {
      font-size: 14px;
        li {
          color: #7b889a;
          margin-left: 45px;
          line-height: 80px;
          height: 80px;
          float: left;
          width: 38px;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          flex-direction: column;
        a {
          border:2px solid  rgba(200,200,200,0);
          border-radius: 3px;
          width: 40px;
        }
        .active {
          border: 2px solid #2196f3 ;

        }
      }
      .actColor {
        color: #2196f3 !important;
      }
    }
  }
.home-content {
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
}

</style>
