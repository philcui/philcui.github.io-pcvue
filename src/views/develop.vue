<template>
  <div class="develop-wrap">
    <div class="catalog">
      <div class="catalogInfo" @click="showCatalogList('',true)">目录</div>
    </div>
    <div class="catalog2">
      <div class="catalogList" v-show="catalogModel">
        <span class="title pl10 pt10" @click="showCata">目录</span>
        <ul>
          <li class="pl10 pb10" :title="i.name" v-for="(i, index) in rightMenu" :key="index">
            <a :class="{actColor:i.isAct}" href="javascript:void(0)" @click="goAnchor(i)"> {{i.name}} </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="qq" :style="styleObject">
      <div class="qqInfo"></div>
    </div>
    <div class="hc-left">
      <div class="hcl-search">
        <Input style="border: none;width: 100%" @on-focus="changeFocus" @on-blur="changeBlur" @input="search"
               placeholder="在此处搜索组件..."/>
        <div class="hcl-search-list" v-show="seaShow">
          <ul>
            <li v-for="(item, index) in searchList" :key="index" @click="clickItem(item.id,item.name,item.url)">{{item.name}}</li>
          </ul>
        </div>
      </div>
      <div class="leftMenu">
        <Menu 　ref="leftMenu" 　active-name="1" @on-select="getRouter" width="auto" accordion>
          <Submenu v-for="item in leftMenu" :name="item.id" :key="item.id">
            <template slot="title">
              {{item.name}}
            </template>
            <Menu-item v-for="child in item.children" :key="child.id" :name="child.url">{{child.name}}</Menu-item>
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
  const top = wh - 180;
  export  default {
    data(){
      return {
        data: [],
        leftMenu: [],
        rightMenu: [],
        catalogModel: false,
        styleObject: {
          position: 'relative',
          height: '0',
          margin: '0 auto',
          left: '1230px',
          top: '0',
        },
        searchList: [],
        seaShow: false,
        isFocus: false,
        isOpen: false
      }
    },
    created(){
      this.styleObject.top = top + 'px';
      this.data = menuData.menu;
      this.getMenus();
      this.getDate = menuData.menu;
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
    methods: {
      getMenus(){
        var menus = this.data;
        const nodes = menus.map(menu => ({
          name: menu.name,
          id: menu.id,
          pid: menu.pid,
          children: [],
          url: menu.url,
          code: 1,
          menus: menu.children,
        }))
        const root = []
        nodes.forEach(node => {
          const parentId = node.pid;
          const parent = nodes.find(parent => parent.id === parentId)
          if (parent) {
            parent.children.push(node);
          }
          if (!node.pid) {
            root.push(node)
          }
        })
        this.leftMenu = root[0].children;
      },
      getRouter(url){
        this.$router.push(url);
        this.showCatalogList(url, false);
      },
      goAnchor(selector){
        this.rightMenu.forEach(function(i){
            i.isAct=false;
        })
        selector.isAct=true;
        var anchor = document.getElementById(selector.id);
        document.body.scrollTop = anchor.offsetTop
      },
      showCata(){
        if (this.catalogModel) {
          this.catalogModel = false;
        } else {
          this.catalogModel = true;
        }
      },
      showCatalogList(param, bool){
        var url = "";
        var that = this;
        this.catalogModel = bool;
        if (param) {
          url = param;
        } else {
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
      search(txt){
        if (txt) {
          this.seaShow = true;
          var list = [];
          for (var i = 0; i < this.getDate.length; i++) {
            if (this.getDate[i].pid != "0" && this.getDate[i].name.indexOf(txt) >= 0) {
              list.push(this.getDate[i]);
            }
          }
          this.searchList = list;
        }
        else {
          this.seaShow = false;
        }
      },
      changeFocus(a){
        this.isFocus = true;
        if (a.currentTarget.value) {
          this.seaShow = true;
        }
      },
      changeBlur(){
        this.isFocus = false;
      },
      clickItem(id, name,url){
//        this.getMenus();
        this.$router.push(url);
        this.showCatalogList(url, false);
        var isSelsct=false;
        const children = this.$refs.leftMenu.$children;
        for (var i = 0; i < children.length; i++) {
          var newChildren = children[i].$children;
          isSelsct=false;
          for (var j = 0; j < newChildren.length; j++) {
            if (newChildren[j].name == url) {
//              this.isOpen = true;
              newChildren[j].active = true;
              this.$refs.leftMenu.openNames[0] = children[i].name;
              isSelsct=true;
            }
            else
            {
//              this.isOpen = false;
              newChildren[j].active = false;
            }
            if(isSelsct)
            {
              children[i].opened=true;
            }
            else
            {
              children[i].opened=false;
            }
          }
        }
        this.$refs.leftMenu.updateOpened();

        console.log(name);
        console.log(id);
      },
      hideSearch(){
        if (!this.isFocus) {
          this.seaShow = false;
        }
      }
    }
  }
</script>
<style lang="less" scoped>
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

  .catalogInfo {
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
    &:hover {
        color: #000000;
     }
  }

  ul li {
    color: #728093;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
  &
  :hover {
    color: #2196f3;
  }

  a {
    color: #728093;

  &
  :hover {
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
    border-left: 1px solid #dddee1;
    height: 55px;
    position: relative;
    margin-top: 43px;

  .hcl-search-list {
    background-color: #ffffff;
    border: 1px solid #dfe2e5;
    height: auto;
    z-index: 999;
    position: absolute;
    box-shadow: #dfe2e5 0px 0px 3px;
    width: 100%;

  ul {
    /*margin: 5px;*/
    /*margin: 0;*/
    /*padding: 0;*/
    list-style: none;
  }

  li{
    line-height:25px;
    height: 25px;
    color: #728093;
    padding-left: 5px;
    cursor:pointer;
  }
  li:hover
  {
    background-color: #65aef5;
    color: #FFFFFF;

  }
  }
  input {
    border: none;
    background-color: #f9f9f9;
    font-size: 15px;
  }

  }
  .leftMenu {
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
    font-size: 16px;
    color: #23282e;
  }

  .ivu-menu-item {
    font-size: 14px;
    color: #728093;
  }

  .ivu-menu-opened {
    background: #eaf3f9;
  }

  .ivu-menu-item-active {
    color: #2d8cf0 !important;
    border-right: 0 !important;
  }

  .ivu-menu-vertical.ivu-menu-light:after {
    content: '';
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
  .ivu-menu-light.ivu-menu-vertical .ivu-menu-item {
    border-right: 0 !important;
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

  .ivu-input:focus {
    border-color: #35a0da;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0);
  }
  .actColor{
    color: #65aef5 !important;
  }
</style>
<style lang="less">
article {
  padding-left: 30px;
  font-size: 14px;
  h1, h2, h3{
    margin:12px 0px;
    font-weight: normal;
  }
  h1{
    margin-top: 40px;
    font-size: 26px;
  }
  h2{
    font-size:20px;
  }
  section.demo{
    margin: 20px 0px;
  }

  td span code {
    display: inline-block;
    background: #f7f7f7;
    font-family: Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;
    margin: 0 3px;
    padding: 1px 5px;
    border-radius: 3px;
    color: #666;
    border: 1px solid #eee;
  }
}
</style>
