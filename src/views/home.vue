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
        <router-view></router-view>
    </div>
  </div>
</template>
<script>
  export default {
      data(){
          return {
            index:false,
            des:true,
            dep:false,
            res:false,
          }
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
            this.$router.push("/design");
            break;
          case 3:
            this.dep = true;
            this.$router.push("/develop");
            break;
          case 4:
            this.res = true;
            this.$router.push("/home");
            break;
          default:
            this.$router.push("/home");
        }
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
          &:hover{
            cursor: pointer;
          }
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
}

</style>
