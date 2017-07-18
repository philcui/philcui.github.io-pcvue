<template>
  <div class="home-wrap">
    <div class="home-top-menu">
      <div>
        <span class="home-title"> UTRY DESIGN</span>
        <ul class="home-menu">
          <li v-for="menu in menus" @click="gotoThat(menu)" :class="{actColor:menu.selected}">
            {{menu.title}}
            <a :class="{active:menu.selected}"></a>
          </li>
        </ul>
      </div>
    </div>
    <div class="home-content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>

  export default {
    data() {
      return {
        menus: [
          { title: '首页', url: '/', selected: false },
          { title: '设计', url: '/design', selected: false },
          { title: '开发', url: '/develop', selected: false },
          { title: '资源', url: '/resource', selected: false }
        ]
      }
    },
    mounted: function () {
      const where = window.location.href
      const menuTitle = where.slice(where.lastIndexOf('/'))
      const selectedMenu = this.menus.find(m => m.url === menuTitle)

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
    z-index: 9999;
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
