<template>
  <article class="doc-affix-container">
    <h1>Affix 图钉</h1>
    <h2>概述</h2>
    <p>
      使用图钉，可以将内容固定在屏幕上，并且不随页面的滚动而滚动。常用于侧边菜单等。
    </p>
    <h2>代码示例</h2>

    <section class="demo" id="affix1">
      <demoTab :code="affixCode" :describeTitle="subTitle" :animated="false">
        <div slot="sample">
          <Affix>
            <span class="demo-affix">固定在最顶部</span>
          </Affix>
        </div>
        <div slot="describe-content">
          简单使用，当元素不可见时，直接固定在最顶端。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="affix2">
      <demoTab :code="affixCode2" :describeTitle="subTitle2" :animated="false">
        <div slot="sample">
          <Affix :offset-top="50">
            <span class="demo-affix">固定在距离顶部 50px 的位置</span>
          </Affix>
        </div>
        <div slot="describe-content">
          当滚动到一定距离时再固定。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="affix3">
      <demoTab :code="affixCode3" :describeTitle="subTitle3" :animated="false">
        <div slot="sample">
          <Affix :offset-bottom="200">
            <span class="demo-affix">固定在距离底部 200px 的位置</span>
          </Affix>
        </div>
        <div slot="describe-content">
          在屏幕下方固定，可以通过缩小浏览器窗口高度来查看效果。<br/>
          注意，<code>offset-top</code>和<code>offset-bottom</code>只可以设置一个，如果都设置，会使用<code>offset-top</code>。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="affix4">
      <demoTab :code="affixCode4" :describeTitle="subTitle4" :animated="false">
        <div slot="sample">
          <Affix :offset-top="100" @on-change="change">
            <span class="demo-affix">固定在距离顶部 100px 的位置</span>
          </Affix>
        </div>
        <div slot="describe-content">
          当固定状态发生改变时，会触发事件。
        </div>
      </demoTab>
    </section>

    <h2 id="affix5">API</h2>
    <h3>Affix props</h3>
    <section class="demo">
      <Table border :columns="propsColumns" :data="propsData"></Table>
    </section>
    <h3>Affix events</h3>
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
          attribute: 'offset-top',
          describe:'距离窗口顶部达到指定偏移量后触发',
          type:"Number",
          default:"0"
        },{
          attribute: 'offset-bottom',
          describe:'距离窗口底部达到指定偏移量后触发',
          type:"Number",
          default:"-"
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
          eventsName: 'on-change',
          describe:'在固定状态发生改变时触发',
          return:"true | false"
        }],
        "subTitle": '基础用法',
        "affixCode": `
          &lt;style>
              .demo-affix{
                  display: inline-block;
                  color: #fff;
                  padding: 10px 30px;
                  text-align: center;
                  background: rgba(0,153,229,.9);
              }
          &lt;/style>
          &lt;template>
             &lt;Affix>
                 &lt;span class="demo-affix">固定在最顶部&lt;/span>
             &lt;/Affix>
          &lt;/template>
          &lt;script>
              export default {
              }
          &lt;/script>
        `,
        "subTitle2": '偏移',
        "affixCode2": `
          &lt;style>
              .demo-affix{
                  display: inline-block;
                  color: #fff;
                  padding: 10px 30px;
                  text-align: center;
                  background: rgba(0,153,229,.9);
              }
          &lt;/style>
          &lt;template>
             &lt;Affix :offset-top="50">
                 &lt;span class="demo-affix">固定在距离顶部 50px 的位置&lt;/span>
             &lt;/Affix>
          &lt;/template>
          &lt;script>
              export default {
              }
          &lt;/script>
        `,
        "subTitle3": '固定在底部',
        "affixCode3": `
          &lt;style>
              .demo-affix{
                  display: inline-block;
                  color: #fff;
                  padding: 10px 30px;
                  text-align: center;
                  background: rgba(0,153,229,.9);
              }
          &lt;/style>
          &lt;template>
             &lt;Affix :offset-bottom="200">
                 &lt;span class="demo-affix">固定在距离底部 200px 的位置&lt;/span>
             &lt;/Affix>
          &lt;/template>
          &lt;script>
              export default {
              }
          &lt;/script>
        `,
        "subTitle4": '固定状态改变时的回调',
        "affixCode4": `
          &lt;style>
              .demo-affix{
                  display: inline-block;
                  color: #fff;
                  padding: 10px 30px;
                  text-align: center;
                  background: rgba(0,153,229,.9);
              }
          &lt;/style>
          &lt;template>
             &lt;Affix :offset-top="100" @on-change="change">
                 &lt;span class="demo-affix">固定在距离顶部 100px 的位置&lt;/span>
             &lt;/Affix>
          &lt;/template>
          &lt;script>
              export default {
                methods: {
                  change (status) {
                      this.$Message.info(\`当前状态：${status}\`);
                  }
                }
              }
          &lt;/script>
        `
      }
    },
    methods: {
      change (status) {
        this.$Message.info(`当前状态：${status}`);
      }
    }
  }
</script>
<style lang ="less" scoped>
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
  .demo-affix{
    display: inline-block;
    color: #fff;
    padding: 10px 30px;
    text-align: center;
    background: rgba(0,153,229,.9);
  }
</style>
