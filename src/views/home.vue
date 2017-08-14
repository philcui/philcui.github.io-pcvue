<template>
  <div class="home-wrap">
    <div class="home-top-menu">
      <div>
        <a class="home-title" href="/" >
          UTRY DESIGN
        </a>
        <ul class="home-menu">
          <li v-for="menu in menus" @click="gotoThat(menu)" :class="{actColor:menu.selected}">
            {{menu.title}}
            <a :class="{active:menu.selected}"></a>
          </li>
        </ul>
      </div>
    </div>
    <div :style="{ minHeight: height }">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>

  export default {
    data() {
      return {
        height: '',
        menus: [
          {title: '首页', url: '/', selected: false},
          {title: '设计', url: '/design', selected: false},
          {title: '开发', url: '/develop', selected: false},
          {title: '资源', url: '/resource', selected: false}
        ]
      }
    },
    mounted: function () {
      const wh = window.innerHeight;
      this.height = (wh - 80) + 'px';
      const findMenu = path => {
        const explicitMatch = this.menus.find(m => m.url === path)
        if (explicitMatch) {
          return explicitMatch;
        } else {
          return findMenuByChildren(path);
        }
      }
      const findMenuByChildren = path => {
        const routes = this.$router.options.routes;
        let parent = null;
        const recurMatch = route => {
          let children = route.children;
          while (children && children.some(c => c.path === path)) {
            parent = route.path;
            return true;
          }
          return children && children.some(recurMatch);
        }
        routes.some(recurMatch);
        if (parent)
          return findMenu(parent);
        return null
      }
      const where = window.location.href
      const menuTitle = where.slice(where.indexOf('/#') + 2)
      const selectedMenu = findMenu(menuTitle)
      if (selectedMenu) {
        selectedMenu.selected = true
      }
    },
    methods: {
      gotoThat(menu) {
        this.menus.forEach(m => m.selected = false)
        menu.selected = true
        this.$router.push(menu.url);
      }
    },
  }

</script>
<style lang="less" scoped>
  .home-wrap {
    background-color: #f9f9f9;
    overflow-x: hidden;
    width: 100%;
    height: 100%;

  .home-top-menu {
    z-index: 9;
    background-color: #ffffff;
    position: fixed;
    width: 100%;
    height: 80px;
    box-shadow: 0 0 13px #e2e2e2;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    height: 100%;
    width: 1200px;
    margin: 0 auto;
  }

  .home-title {
    color: #2196f3;
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
    &:hover {
       color: #56AFF6 !important;
     }
    &::before{
      content: "";
      display: inline-block;
      width: 35px;
      height: 28px;
      background-image: url("../assets/logo.png");
      vertical-align: middle;
      margin-bottom: 5px;
    }
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
    cursor: pointer;
    &:hover {
       color: #2196f3 !important;
     }
    &:hover a{
     border: 2px solid #2196f3;
   }
  a {
    border: 2px solid rgba(200, 200, 200, 0);
    border-radius: 3px;
    width: 40px;
  }

  .active {
    border: 2px solid #2196f3;
  }

  }
  .actColor {
    color: #2196f3 !important;
  }

  }
  }
  }
</style>
