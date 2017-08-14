<template>
  <div class="resource-wrap">
      <h1>
          资源下载
      </h1>
      <div v-if="resources.length==0">
          暂时还没有资源
      </div>
      <div class="resource-items" v-else>
          <div class="resource-item">
          </div>
          <div class="resource-item">
          </div>
          <div class="resource-item">
          </div>
          <div class="resource-item">
          </div>
      </div>
  </div>
</template>
<script>
  export default {
      data () {
          return {

          }
      },
      props: {
          resources: {
              type:Array,
              default: []
          }
      }
  }
</script>
<style lang="less" scpoed>
  .resource-wrap{
    width: 1200px;
    margin: 110px auto 0;
    background-color: #fff;
    min-height: 500px;
    padding: 0px 25px;
    h1{
        font-size: 24px;
        color: #23282e;
        line-height: 90px;
        font-weight: normal;
        display: block;
    }
    .resource-items{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .resource-item{
        width: 360px;
        height: 180px;
        box-sizing: border-box;
        border:1px solid #e5e8ea;
        margin-bottom: 30px;
    }
  }
</style>
