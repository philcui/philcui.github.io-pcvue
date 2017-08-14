<template>
  <div class="resource-wrap">
      <h1>
          资源下载
      </h1>
      <div v-if="resources.length==0">
          暂时还没有资源
      </div>
      <div class="resource-items" v-else>
          <div class="resource-item" v-for="(item, index) in resources" :key="index">
              <div class="img">
                  <img :src="item.img">
              </div>
              <div class="content">
                  <h2>
                      {{item.title}}
                  </h2>
                  <h3>
                      {{item.subTitle}}
                  </h3>
                  <Button type="primary" size="small">下载</Button>
              </div>
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
              default () {
                  return []
              }
            //   default: function () {
            //       return [{img:'',title:'Axure Components',subTitle:'Axure组件库',url:''},
            //       {img:'',title:'Axure Components',subTitle:'Axure组件库',url:''},
            //       {img:'',title:'Axure Components',subTitle:'Axure组件库',url:''},
            //       {img:'',title:'Axure Components',subTitle:'Axure组件库',url:''}]
            //   }
          }
      },
      created () {
          console.log(123)
      },
      mounted () {
         
      }
  }
</script>
<style lang="less" scpoed>
  .resource-wrap{
    width: 1200px;
    margin: 110px auto 0;
    background-color: #fff;
    min-height: 500px;
    padding: 0px 30px;
    h1{
        font-size: 24px;
        color: #23282e;
        line-height: 90px;
        font-weight: normal;
        display: block;
    }
    .resource-items{
        // display: flex;
        // flex-wrap: wrap;
        // justify-content: space-between;
        margin-right: -30px;
    }
    .resource-item{
        float: left;
        width: 360px;
        height: 180px;
        box-sizing: border-box;
        border:1px solid #e5e8ea;
        margin: 0px 30px 30px 0px;
        padding-top: 35px;
        border-radius: 3px;
        & > div {
            height: 100px;
        }
       .img{
           width: 100px;
           margin-left:30px;
           display: inline-block;
           vertical-align: top;
           line-height: 100px;
           img{
               width: 85px;
               height: 70px;
               vertical-align: middle;
           }
       }
       .content{
           display: inline-block;
           position: relative;
           padding-top: 10px;
           h2,h3{
               font-weight: normal;
               width: 210px;
               overflow: hidden;
           }
           h2{
               line-height: 25px;
           }
           h3{
               line-height: 25px;
           }
           button {
               position: absolute;
               bottom: 10px;
           }
       }
       &:hover{
           box-shadow: 0px 0px 10px #e5e8ea;
       }
    }
  }
</style>
