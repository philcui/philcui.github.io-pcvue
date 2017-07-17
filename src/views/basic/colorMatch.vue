<template>
  <div class="a">
    <div>
      <div><a href="javascript:void(0)" @click="goAnchor('#anchor-'+index)" v-for="index in 20"> {{index}} </a></div>
      <div :id="'anchor-'+index" class="item" v-for="index in 20">{{index}}</div>
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
