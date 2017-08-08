<template>
  <article class="doc-backTop-container">
    <Back-top :height="200"></Back-top>
    <Back-top :height="100" :bottom="200">
      <div class="top">返回顶端</div>
    </Back-top>
    <h1>BackTop 返回顶部</h1>
    <h2>概述</h2>
    <p>
      当页面内容冗长，需要快捷返回顶部时使用，一般放置在页面右下角位置。
    </p>
    <h2>代码示例</h2>

    <section class="demo" id="backTop1">
      <demoTab :code="backTopCode" :describeTitle="subTitle">
        <div slot="sample">
          <p>向下滚动页面，圆形按钮为默认效果。</p>
        </div>
        <div slot="describe-content">
          默认位置距离页面右部和底部 30px，滚动至距顶端 400px 时显示。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="backTop2">
      <demoTab :code="backTopCode2" :describeTitle="subTitle2">
        <div slot="sample">
          <p>向下滚动页面，蓝色的按钮为自定义效果。</p>
        </div>
        <div slot="describe-content">
          自定义了位置在页面底部 200px,滚动至距顶端 200px 时显示。
        </div>
      </demoTab>
    </section>

    <h2 id="backTop3">API</h2>
    <h3>BackTop props</h3>
    <section class="demo">
      <Table border :columns="propsColumns" :data="propsData"></Table>
    </section>
    <h3>BackTop events</h3>
    <section class="demo">
      <Table border :columns="eventsColumns" :data="eventsData"></Table>
    </section>
  </article>
</template>
<script>
  import demoTab from '@/components/DemoTab'
  export default {
    components: {
      demoTab
    },
    data () {
      return {
        propsColumns:[
          {
            title: '属性',
            key: 'attribute',
          },
          {
            title: '说明',
            key: 'describe',
            width:'350px'
          },{
            title: '类型',
            key: 'type',
          },{
            title: '默认值',
            key: 'default',
          }],
        propsData:[{
          attribute: 'height',
          describe:'页面滚动高度达到该值时才显示BackTop组件',
          type:"Number",
          default:"400"
        },{
          attribute: 'bottom',
          describe:'组件距离底部的距离',
          type:"Number",
          default:"30"
        },{
          attribute: 'right',
          describe:'组件距离右部的距离',
          type:"Number",
          default:"30"
        },{
          attribute: 'duration',
          describe:'滚动动画持续时间，单位 毫秒',
          type:"Number",
          default:"1000"
        }],
        eventsColumns:[
          {
            title: '事件名',
            key: 'eventsName',
          },
          {
            title: '说明',
            key: 'describe',
            width:'450px'
          },{
            title: '返回值',
            key: 'return',
          }],
        eventsData:[{
          eventsName: 'on-click',
          describe:'点击按钮时触发',
          return:"无"
        }],
        "subTitle": "基础用法",
        "backTopCode": `
        &lt;template>
           &lt;Back-top>&lt;/Back-top>
        &lt;/template>
        &lt;script>
            export default {
            }
        &lt;/script>
        `,
        "subTitle2": "自定义样式",
        "backTopCode2": `
          &lt;template>
             &lt;Back-top :height="100" :bottom="200">
                 &lt;div class="top">返回顶端>&lt;/div>
             &lt;/Back-top>
          &lt;/template>
          &lt;script>
              export default {
              }
          &lt;/script>
          &lt;style scoped>
              .top{
                  padding: 10px;
                  background: rgba(0, 153, 229, .7);
                  color: #fff;
                  text-align: center;
                  border-radius: 2px;
              }
          &lt;/style>
          `
      }
    }
  }
</script>
<style lang="less">
  code {
    display: inline-block;
    background: #f7f7f7;
    font-family: Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;
    margin: 0 3px;
    padding: 1px 5px;
    border-radius: 3px;
    color: #666;
    border: 1px solid #eee;
  }
  .top{
    padding: 10px;
    background: rgba(0, 153, 229, .7);
    color: #fff;
    text-align: center;
    border-radius: 2px;
  }
</style>
