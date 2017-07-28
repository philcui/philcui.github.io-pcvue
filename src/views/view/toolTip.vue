<template>
  <article class="doc-toolTip-container">
    <h1>Tooltip 文字提示</h1>
    <h2>概述</h2>
    <p>
      文字提示气泡框，在鼠标悬停时显示，代替了系统的<Tag color="grey">title</Tag>提示。
    </p>
    <h2>代码示例</h2>
  <section class="demo">
    <demoTab :code="toolTipCode" :describeTitle="describeTitle">
      <div slot="sample">
        <Tooltip content="这里是提示文字">
          当鼠标经过这段文字时，会显示一个气泡框
        </Tooltip>
      </div>
      <div slot="describe-content">
        最简单的用法。

        注意 Tooltip 内的文本使用了<Tag color="grey">white-space: nowrap;</Tag>，即不自动换行，如需展示很多内容并自动换行时，建议给内容 slot 增加样式<Tag color="grey">white-space: normal;</Tag>。
      </div>
    </demoTab>
  </section>

  <section class="demo">
    <demoTab :code="toolTipCode2" :describeTitle="describeTitle2">
      <div slot="sample">
        <Tooltip placement="top" content="Tooltip 文字提示" :delay="1000">
          <Button @click="disabled = true">延时1秒显示</Button>
        </Tooltip>
      </div>
      <div slot="describe-content">
        通过设置属性<Tag color="grey">delay</Tag>可以延时显示文字提示，单位毫秒。
      </div>
    </demoTab>
  </section>

  <section class="demo">
    <demoTab :code="toolTipCode3" :describeTitle="describeTitle3">
      <div slot="sample">
        <div class="top">
          <Tooltip content="Top Left 文字提示" placement="top-start">
            <Button>上左</Button>
          </Tooltip>
          <Tooltip content="Top Center 文字提示" placement="top">
            <Button>上边</Button>
          </Tooltip>
          <Tooltip content="Top Right 文字提示" placement="top-end">
            <Button>上右</Button>
          </Tooltip>
        </div>
        <div class="center">
          <div class="center-left">
            <Tooltip content="Left Top 文字提示" placement="left-start">
              <Button>左上</Button>
            </Tooltip><br><br>
            <Tooltip content="Left Center 文字提示" placement="left">
              <Button>左边</Button>
            </Tooltip><br><br>
            <Tooltip content="Left Bottom 文字提示" placement="left-end">
              <Button>左下</Button>
            </Tooltip>
          </div>
          <div class="center-right">
            <Tooltip content="Right Top 文字提示" placement="right-start">
              <Button>右上</Button>
            </Tooltip><br><br>
            <Tooltip content="Right Center 文字提示" placement="right">
              <Button>右边</Button>
            </Tooltip><br><br>
            <Tooltip content="Right Bottom 文字提示" placement="right-end">
              <Button>右下</Button>
            </Tooltip>
          </div>
        </div>
        <div class="bottom">
          <Tooltip content="Bottom Left 文字提示" placement="bottom-start">
            <Button>下左</Button>
          </Tooltip>
          <Tooltip content="Bottom Center 文字提示" placement="bottom">
            <Button>下边</Button>
          </Tooltip>
          <Tooltip content="Bottom Right 文字提示" placement="bottom-end">
            <Button>下右</Button>
          </Tooltip>
        </div>
      </div>
      <div slot="describe-content">
        组件提供了12个不同的方向显示Tooltip，具体配置可查看API。
      </div>
    </demoTab>
  </section>

  <section class="demo">
    <demoTab :code="toolTipCode4" :describeTitle="describeTitle4">
      <div slot="sample">
        <Tooltip placement="top">
          <Button>多行</Button>
          <div slot="content">
            <p>显示多行信息</p>
            <p><i>可以自定义样式</i></p>
          </div>
        </Tooltip>
      </div>
      <div slot="describe-content">
        通过自定义 slot 显示多行文本或更复杂的样式。
      </div>
    </demoTab>
  </section>

  <section class="demo">
    <demoTab :code="toolTipCode5" :describeTitle="describeTitle5">
      <div slot="sample">
        <Tooltip placement="top" content="可以禁用文字提示" :disabled="disabled">
          <Button @click="closeTip">点击关闭提示</Button>
        </Tooltip>
      </div>
      <div slot="describe-content">
        通过设置属性<Tag color="grey">disabled</Tag>可以禁用文字提示。
      </div>
    </demoTab>
  </section>

    <h2 id="switch3">API</h2>
    <h3>Tooltip props</h3>
    <section class="demo">
      <Table border :columns="propsColumns" :data="propsData"></Table>
    </section>
    <h3>Tooltip events</h3>
    <section class="demo">
      <Table border :columns="eventsColumns" :data="eventsData"></Table>
    </section>
    <h3>Tooltip  slot</h3>
    <section class="demo">
      <Table border :columns="slotColumns" :data="slotData"></Table>
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
        disabled: false,
        propsColumns:[
          {
            title: '属性',
            key: 'attribute',
          },
          {
            title: '说明',
            key: 'describe',
            width:'500px'
          },{
            title: '类型',
            key: 'type',
          },{
            title: '默认值',
            key: 'default',
          }],
        propsData:[{
          attribute: 'content',
          describe:'显示的内容',
          type:"String | Number",
          default:"空"
        },{
          attribute: 'placement',
          describe:'提示框出现的位置，可选值为top top-start top-end bottom bottom-start bottom-end left left-start left-end right right-start right-end',
          type:"String",
          default:"bottom"
        },{
          attribute: 'disabled',
          describe:'是否禁用提示框',
          type:"Boolean",
          default:"false"
        },{
          attribute: 'delay',
          describe:'延迟显示，单位毫秒',
          type:"Number",
          default:"0"
        },{
          attribute: 'always',
          describe:'是否总是可见',
          type:"Boolean",
          default:"false"
        },{
          attribute: 'transfer',
          describe:'是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果',
          type:"Boolean",
          default:"false"
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
          eventsName: 'on-popper-hide',
          describe:'在提示框消失时触发',
          return:"无"
        }],
        slotColumns:[
          {
            title: '名称',
            key: 'name',
          },
          {
            title: '说明',
            key: 'describe',
            width:'450px'
          }],
        slotData:[{
          name: 'content',
          describe:'提示框的内容，定义此 slot 时，会覆盖 props content。'
        },{
          name: '无',
          describe:'主体内容'
        }],
        "describeTitle": "基础用法",
        "toolTipCode": `
          &lt;template>
            &lt;Tooltip content="这里是提示文字">
              当鼠标经过这段文字时，会显示一个气泡框
            &lt;/Tooltip>
          &lt;/template>
          &lt;script>
          export default {

          }
          &lt;/script>
        `,
        "describeTitle2": "延时",
        "toolTipCode2": `
          &lt;template>
            &lt;Tooltip placement="top" content="Tooltip 文字提示" :delay="1000">
              &lt;Button @click="disabled = true">延时1秒显示&lt;/Button>
            &lt;/Tooltip>
          &lt;/template>
          &lt;script>
          export default {

          }
          &lt;/script>
        `,
        "describeTitle3": "位置",
        "toolTipCode3": `
          &lt;template>
            &lt;div class="top">
                &lt;Tooltip content="Top Left 文字提示" placement="top-start">
                    &lt;Button>上左&lt;/Button>
                &lt;/Tooltip>
                &lt;Tooltip content="Top Center 文字提示" placement="top">
                    &lt;Button>上边&lt;/Button>
                &lt;/Tooltip>
                &lt;Tooltip content="Top Right 文字提示" placement="top-end">
                    &lt;Button>上右&lt;/Button>
                &lt;/Tooltip>
            &lt;/div>
            &lt;div class="center">
                &lt;div class="center-left">
                    &lt;Tooltip content="Left Top 文字提示" placement="left-start">
                        &lt;Button>左上&lt;/Button>
                    &lt;/Tooltip>&lt;br>&lt;br>
                    &lt;Tooltip content="Left Center 文字提示" placement="left">
                        &lt;Button>左边&lt;/Button>
                    &lt;/Tooltip>&lt;br>&lt;br>
                    &lt;Tooltip content="Left Bottom 文字提示" placement="left-end">
                        &lt;Button>左下&lt;/Button>
                    &lt;/Tooltip>
                &lt;/div>
                &lt;div class="center-right">
                    &lt;Tooltip content="Right Top 文字提示" placement="right-start">
                        &lt;Button>右上&lt;/Button>
                    &lt;/Tooltip>&lt;br>&lt;br>
                    &lt;Tooltip content="Right Center 文字提示" placement="right">
                        &lt;Button>右边&lt;/Button>
                    &lt;/Tooltip>&lt;br>&lt;br>
                    &lt;Tooltip content="Right Bottom 文字提示" placement="right-end">
                        &lt;Button>右下&lt;/Button>
                    &lt;/Tooltip>
                &lt;/div>
            &lt;/div>
            &lt;div class="bottom">
                &lt;Tooltip content="Bottom Left 文字提示" placement="bottom-start">
                    &lt;Button>下左&lt;/Button>
                &lt;/Tooltip>
                &lt;Tooltip content="Bottom Center 文字提示" placement="bottom">
                    &lt;Button>下边&lt;/Button>
                &lt;/Tooltip>
                &lt;Tooltip content="Bottom Right 文字提示" placement="bottom-end">
                    &lt;Button>下右&lt;/Button>
                &lt;/Tooltip>
            &lt;/div>
          &lt;/template>
          &lt;script>
          export default {

          }
          &lt;/script>
        `,
        "describeTitle4": "自定义内容",
        "toolTipCode4": `
          &lt;template>
            &lt;Tooltip placement="top">
              &lt;Button>多行&lt;/Button>
              &lt;div slot="content">
                  &lt;p>显示多行信息&lt;/p>
                  &lt;p>&lt;i>可以自定义样式&lt;/i>&lt;/p>
              &lt;/div>
            &lt;/Tooltip>
          &lt;/template>
          &lt;script>
          export default {

          }
          &lt;/script>
        `,
        "describeTitle5": "禁用",
        "toolTipCode5": `
          &lt;template>
            &lt;Tooltip placement="top" content="可以禁用文字提示" :disabled="disabled">
              &ltButton @click="disabled = true">点击关闭提示&lt/Button>
            &lt;/Tooltip>
          &lt;/template>
          &lt;script>
          export default {
            data () {
              return {
                  disabled: false
              }
            }
          }
          &lt;/script>
        `
      }
    },
    methods: {
      closeTip() {
          if(this.disabled){
              this.disabled = false;
          }else{
              this.disabled = true;
          }

      }
    }
  }
</script>
<style lang="less">
  article {
    padding-left: 30px;
    font-size: 14px;
    h1, h2, h3{
      margin:12px 0px;
      font-weight: normal;
    }
    h1{
      margin-top: 40px;
      font-size: 26px;
    }
    h2{
      font-size:20px;
    }
    section.demo{
      margin: 20px 0px;
    }
  }
  .top,.bottom{
    text-align: center;
  }
  .center{
    width: 300px;
    margin: 10px auto;
    overflow: hidden;
  }
  .center-left{
    float: left;
  }
  .center-right{
    float: right;
  }
</style>
