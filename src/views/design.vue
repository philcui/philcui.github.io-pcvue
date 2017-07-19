<template>
  <div class="develop-wrap">
    <div class="hc-left">
      <div class="hcl-search">
        <Input style="border: none;width: 100%" @on-focus="changeFocus" @on-blur="changeBlur" @input="search" placeholder="在此处搜索组件..." />
        <!--<div class="search"></div>-->
        <div class="hcl-search-list" v-show="seaShow">
          <ul>
            <li v-for="item in searchList"><a @click="clickItem(item.id,item.name,item.url)">{{item.name}}</a></li>
          </ul>
        </div>
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
  import menuData from '../../server/mock/designMenu.js'
  export  default {
    data(){
      return {
        data:[],
        leftMenu:[],
        searchList:[],
        seaShow:false,
        isFocus:false,
        isOpen: false
      }
    },
    created(){
      this.data=menuData.menu;
      this.getDate=menuData.menu;
      this.getMenus();

    },
    mounted() {
      window.addEventListener('click', this.hideSearch);
      const where = window.location.href;
      const menuName = where.slice(where.indexOf('/#') + 2);
      const children = this.$refs.leftMenu.$children;
      for (var i = 0; i < children.length; i++) {
        var newChildren = children[i].$children;
        for (var j = 0; j < newChildren.length; j++) {
          if (newChildren[j].name == menuName) {
            this.isOpen = true;
            newChildren[j].active = true;
            this.$refs.leftMenu.openNames[0] = children[i].name;
            this.$refs.leftMenu.updateOpened();
          }
        }
      }
      if (!this.isOpen) {
        this.$refs.leftMenu.openNames[0] = "7C43A10FE0BF47148DC9E513E021FCD5";
        this.$refs.leftMenu.updateOpened();
      }
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
      search(txt)
      {
        //txt
        if(txt)
        {
          this.seaShow=true;
          var list=[];
          for(var i=0;i<this.getDate.length;i++){
            if(this.getDate[i].pid!="0"&&this.getDate[i].name.indexOf(txt)>=0)
            {
              list.push(this.getDate[i]);
            }
          }
          this.searchList=list;
        }
        else
        {
          this.seaShow=false;
//          this.data=menuData.menu;
        }
      },
      changeFocus(a){
        this.isFocus=true;
        if(a.currentTarget.value)
        {
          this.seaShow=true;
        }
      },
      changeBlur(){
        this.isFocus=false;
      },
      clickItem(id,name){
        console.log(name);
        console.log(id);
      },
      hideSearch(){
        if(!this.isFocus)
        {
          this.seaShow=false;
        }
      }
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
    position: relative;
    margin-top: 43px;
    border-left: 1px solid #dddee1 ;
    .hcl-search-list{
      background-color: #ffffff;
      border: 1px solid #dfe2e5;
      height: auto;
      z-index: 999;
      position: absolute;
      box-shadow: #dfe2e5 0px 0px 3px;
      width: 100%;
      ul{
        margin: 5px;
        /*margin: 0;*/
        /*padding: 0;*/
        list-style: none;
      }
      li{
        line-height:25px;
        height: 25px;
        a{
          color: #728093;
        }
        a:hover
         {
            color: #65aef5;
         }
      }
    }
    input{
      border:none;
      background-color: #f9f9f9;
      font-size: 15px;
    }
  /*.search {*/
    /*position: relative;*/
    /*margin-top: 45px;*/
    /*color: #a1afc2;*/
    /*font-size: 14px;*/
    /*height: 55px;*/
    /*padding-left: 24px;*/
    /*border-left: 1px solid #dddee1;*/
  /*}*/
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
  .ivu-menu-vertical .ivu-menu-item:hover, .ivu-menu-vertical .ivu-menu-submenu-title:hover {
    background: #03a9f4;
    color: white !important;
  }
  }
  }
  .hc-right {
    width: 960px;
    min-height: 200px;
  }
  }
  .ivu-input:focus {
    border-color: #35a0da;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0);
  }
</style>
