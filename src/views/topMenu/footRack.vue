<template>
  <div class="demo">
    <div class="notFond">
      404
    </div>
    <div class="notFondContent">
页面功能开发中..敬请期待...
    </div>

  </div>
</template>
<script>
export  default {
  data() {
      return {
        show: true
      }
  }
}
</script>
<style>
  .demo
  {
    margin-left: 20px;
  }
  .notFond
  {
    margin-top: 100px;
    font-size: 100px;
    text-align: center;
    color: #00A6F8;
  }
  .notFondContent
  {
text-align: center;
    color: #00A6F8;
    font-size: 20px;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0
  }
</style>
