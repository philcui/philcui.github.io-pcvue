<template>
  <div class="colorM-Wrap">
    <div>
      <div :id="'111'+index" class="item" v-for="index in 20">{{index}}</div>
    </div>
  </div>
</template>
<script>
export default {
    date(){
        return {

        }
    },
  methods:{
      goAnchor(selector){
          debugger
        var anchor = this.$el.querySelector(selector)
        debugger
        document.body.scrollTop = anchor.offsetTop
      }
  }
}
</script>
<style>
.item {
  padding: 20px;
}
</style>
