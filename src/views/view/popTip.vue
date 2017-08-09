<template>
  <article class="doc-poptip-container">
    <h1>PopTip 气泡提示</h1>
    <h2>概述</h2>
    <p>
      Poptip 与 Tooltip 类似，具有很多相同配置，不同点是 Poptip 以卡片的形式承载了更多的内容，比如链接、表格、按钮等。<br/>
      Poptip 还 confirm 确认框，与 Modal 不同的是，它会出现在就近元素，相对轻量。
    </p>
    <h2>代码示例</h2>

    <section class="demo" id="poptip1">
      <demoTab :code="poptipCode" :describeTitle="subTitle">
        <div slot="sample">
          <Poptip trigger="hover" title="提示标题" content="提示内容">
            <Button>hover 激活</Button>
          </Poptip>
          <Poptip title="提示标题" content="提示内容">
            <Button>click 激活</Button>
          </Poptip>
          <Poptip trigger="focus" title="提示标题" content="提示内容">
            <Button>focus 激活</Button>
          </Poptip>
          <Poptip trigger="focus" title="提示标题" content="提示内容">
            <i-input placeholder="输入框的 focus"></i-input>
          </Poptip>
        </div>
        <div slot="describe-content">
          支持三种触发方式：鼠标悬停、点击、聚焦。默认是点击。<br/>
          注意 Poptip 内的文本使用了 <code>white-space: nowrap;</code>，即不自动换行，如需展示很多内容并自动换行时，建议给内容 slot 增加样式 <code>white-space: normal;</code>。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="poptip2">
      <demoTab :code="poptipCode2" :describeTitle="subTitle2">
        <div slot="sample">
          <div class="top">
            <Poptip title="提示标题" content="提示内容" placement="top-start">
              <Button>上左</Button>
            </Poptip>
            <Poptip title="提示标题" content="提示内容" placement="top">
              <Button>上边</Button>
            </Poptip>
            <Poptip title="提示标题" content="提示内容" placement="top-end">
              <Button>上右</Button>
            </Poptip>
          </div>
          <div class="center">
            <div class="center-left">
              <Poptip title="提示标题" content="提示内容" placement="left-start">
                <Button>左上</Button>
              </Poptip><br><br>
              <Poptip title="提示标题" content="提示内容" placement="left">
                <Button>左边</Button>
              </Poptip><br><br>
              <Poptip title="提示标题" content="提示内容" placement="left-end">
                <Button>左下</Button>
              </Poptip>
            </div>
            <div class="center-right">
              <Poptip title="提示标题" content="提示内容" placement="right-start">
                <Button>右上</Button>
              </Poptip><br><br>
              <Poptip title="提示标题" content="提示内容" placement="right">
                <Button>右边</Button>
              </Poptip><br><br>
              <Poptip title="提示标题" content="提示内容" placement="right-end">
                <Button>右下</Button>
              </Poptip>
            </div>
          </div>
          <div class="bottom">
            <Poptip title="提示标题" content="提示内容" placement="bottom-start">
              <Button>下左</Button>
            </Poptip>
            <Poptip title="提示标题" content="提示内容" placement="bottom">
              <Button>下边</Button>
            </Poptip>
            <Poptip title="提示标题" content="提示内容" placement="bottom-end">
              <Button>下右</Button>
            </Poptip>
          </div>
        </div>
        <div slot="describe-content">
          组件提供了12个不同的方向显示Poptip，具体配置可查看API。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="poptip3">
      <demoTab :code="poptipCode3" :describeTitle="subTitle3">
        <div slot="sample">
          <Poptip v-model="visible">
            <a>click 激活</a>
            <div slot="title"><i>自定义标题</i></div>
            <div slot="content">
              <a @click="close">关闭提示框</a>
            </div>
          </Poptip>
        </div>
        <div slot="describe-content">
          通过<code>v-model</code>来控制提示框的显示和隐藏。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="poptip4">
      <demoTab :code="poptipCode4" :describeTitle="subTitle4">
        <div slot="sample">
          <Poptip placement="right" width="400">
            <Button type="ghost">click 激活</Button>
            <div class="api" slot="content">
              <table>
                <thead>
                <tr>
                  <th>版本号</th>
                  <th>更新时间</th>
                  <th>说明</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>0.9.5</td>
                  <td>2016-10-26</td>
                  <td>新增信息提示组件 <code>Tooltip</code>和<code>Poptip</code></td>
                </tr>
                <tr>
                  <td>0.9.4</td>
                  <td>2016-10-25</td>
                  <td>新增对话框组件 <code>Modal</code></td>
                </tr>
                <tr>
                  <td>0.9.2</td>
                  <td>2016-09-28</td>
                  <td>新增选择器组件 <code>Select</code></td>
                </tr>
                </tbody>
              </table>
            </div>
          </Poptip>
        </div>
        <div slot="describe-content">
          通过自定义 slot 来实现复杂的内容。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="poptip5">
      <demoTab :code="poptipCode5" :describeTitle="subTitle5">
        <div slot="sample">
          <Poptip
            confirm
            title="您确认删除这条内容吗？"
            @on-ok="ok"
            @on-cancel="cancel">
            <Button>删除</Button>
          </Poptip>
          <Poptip
            confirm
            title="Are you sure delete this task?"
            @on-ok="ok"
            @on-cancel="cancel"
            ok-text="yes"
            cancel-text="no">
            <Button>国际化</Button>
          </Poptip>
        </div>
        <div slot="describe-content">
          通过设置属性<code>confirm</code>开启确认框模式。确认框只会以 click 的形式激活，并且只会显示 title 的内容，忽略 content。
        </div>
      </demoTab>
    </section>

    <h2 id="poptip6">API</h2>
    <h3>PopTip props</h3>
    <section class="demo">
      <Table border :columns="propsColumns" :data="propsData"></Table>
    </section>
    <h3>PopTip events</h3>
    <section class="demo">
      <Table border :columns="eventsColumns" :data="eventsData"></Table>
    </section>
    <h3>PopTip slot</h3>
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
        visible: false,
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
          attribute: 'trigger',
          describe:'触发方式，可选值为<code>hover</code>（悬停）<code>click</code>（点击）<code>focus</code>（聚焦）,在 confirm 模式下，只有 click 有效',
          type:"String",
          default:"click"
        },{
          attribute: 'title',
          describe:'显示的标题',
          type:"String | Number",
          default:"-"
        },{
          attribute: 'content',
          describe:'显示的正文内容，只在非 confirm 模式下有效',
          type:"String | Number",
          default:"空"
        },{
          attribute: 'placement',
          describe:'提示框出现的位置，可选值为<code>top</code><code>top-start</code><code>top-end</code><code>bottom</code><code>bottom-start</code><code>bottom-end</code><code>left</code><code>left-start</code><code>left-end</code><code>right</code><code>right-start</code><code>right-end</code>',
          type:"String",
          default:"top"
        },{
          attribute: 'width',
          describe:'宽度，最小宽度为 150px，在 confirm 模式下，默认最大宽度为 300px',
          type:"String | Number",
          default:"-"
        },{
          attribute: 'confirm',
          describe:'是否开启对话框模式',
          type:"Boolean",
          default:"false"
        },{
          attribute: 'ok-text',
          describe:'确定按钮的文字，只在 confirm 模式下有效',
          type:"String",
          default:"确定"
        },{
          attribute: 'cancel-text',
          describe:'取消按钮的文字，只在 confirm 模式下有效',
          type:"String",
          default:"取消"
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
        },
          {
            eventsName: 'on-ok',
            describe:'点击确定的回调，只在 confirm 模式下有效',
            return:"无"
          },
          {
            eventsName: 'on-cancel',
            describe:'点击取消的回调，只在 confirm 模式下有效',
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
            width:'500px'
          }],
        slotData:[{
          name: '无',
          describe:'主体内容'
          },
          {
            name: 'title',
            describe:'提示框标题，定义此 slot 时，会覆盖 props <code>title</code>'
          },
          {
            name: 'content',
            describe:'提示框内容，定义此 slot 时，会覆盖 props <code>content</code>，只在非 confirm 模式下有效'
          }],
        "subTitle": '基础用法',
        "poptipCode": `
          &lt;template>
             &lt;Poptip trigger="hover" title="提示标题" content="提示内容">
              &lt;Button>hover 激活&lt;/Button>
            &lt;/Poptip>
            &lt;Poptip title="提示标题" content="提示内容">
              &lt;Button>click 激活&lt;/Button>
            &lt;/Poptip>
            &lt;Poptip trigger="focus" title="提示标题" content="提示内容">
              &lt;Button>focus 激活&lt;/Button>
            &lt;/Poptip>
            &lt;Poptip trigger="focus" title="提示标题" content="提示内容">
              &lt;i-input placeholder="输入框的 focus">&lt;/i-input>
            &lt;/Poptip>
          &lt;/template>
          &lt;script>
              export default {
              }
          &lt;/script>
        `,
        "subTitle2": '位置',
        "poptipCode2": `
          &lt;style scoped>
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
          &lt;/style>
          &lt;template>
             &lt;div class="top">
                &lt;Poptip title="提示标题" content="提示内容" placement="top-start">
                    &lt;Button>上左&lt;/Button>
                &lt;/Poptip>
                &lt;Poptip title="提示标题" content="提示内容" placement="top">
                    &lt;Button>上边&lt;/Button>
                &lt;/Poptip>
                &lt;Poptip title="提示标题" content="提示内容" placement="top-end">
                    &lt;Button>上右&lt;/Button>
                &lt;/Poptip>
            &lt;/div>
            &lt;div class="center">
                &lt;div class="center-left">
                    &lt;Poptip title="提示标题" content="提示内容" placement="left-start">
                        &lt;Button>左上&lt;/Button>
                    &lt;/Poptip>&lt;br>&lt;br>
                    &lt;Poptip title="提示标题" content="提示内容" placement="left">
                        &lt;Button>左边&lt;/Button>
                    &lt;/Poptip>&lt;br>&lt;br>
                    &lt;Poptip title="提示标题" content="提示内容" placement="left-end">
                        &lt;Button>左下&lt;/Button>
                    &lt;/Poptip>
                &lt;/div>
                &lt;div class="center-right">
                    &lt;Poptip title="提示标题" content="提示内容" placement="right-start">
                        &lt;Button>右上&lt;/Button>
                    &lt;/Poptip>&lt;br>&lt;br>
                    &lt;Poptip title="提示标题" content="提示内容" placement="right">
                        &lt;Button>右边&lt;/Button>
                    &lt;/Poptip>&lt;br>&lt;br>
                    &lt;Poptip title="提示标题" content="提示内容" placement="right-end">
                        &lt;Button>右下&lt;/Button>
                    &lt;/Poptip>
                &lt;/div>
            &lt;/div>
            &lt;div class="bottom">
                &lt;Poptip title="提示标题" content="提示内容" placement="bottom-start">
                    &lt;Button>下左&lt;/Button>
                &lt;/Poptip>
                &lt;Poptip title="提示标题" content="提示内容" placement="bottom">
                    &lt;Button>下边&lt;/Button>
                &lt;/Poptip>
                &lt;Poptip title="提示标题" content="提示内容" placement="bottom-end">
                    &lt;Button>下右&lt;/Button>
                &lt;/Poptip>
            &lt;/div>
          &lt;/template>
          &lt;script>
              export default {
              }
          &lt;/script>
        `,
        "subTitle3": '从浮层内关闭',
        "poptipCode3": `
          &lt;template>
             &lt;Poptip v-model="visible">
                 &lt;a>click 激活&lt;/a>
                 &lt;div slot="title">
                     &lt;i>自定义标题&lt;/i>
                 &lt;/div>
                 &lt;div slot="content">
                     &lt;a @click="close">关闭提示框&lt;/a>
                 &lt;/div>
             &lt;/Poptip>
          &lt;/template>
          &lt;script>
              export default {
                data () {
                  return {
                    visible: false
                  }
                },
                methods: {
                    close () {
                        this.visible = false;
                    }
                }
              }
          &lt;/script>
        `,
        "subTitle4": '嵌套复杂内容',
        "poptipCode4": `
          &lt;template>
             &lt;Poptip placement="right" width="400">
                 &lt;Button type="ghost">click 激活&lt;/Button>
                 &lt;div class="api" slot="content">
                     &lt;table>
                         &lt;thead>
                             &lt;tr>
                                 &lt;th>版本号&lt;/th>
                                 &lt;th>更新时间&lt;/th>
                                 &lt;th>说明&lt;/th>
                             &lt;/tr>
                         &lt;/thead>
                         &lt;tbody>
                             &lt;tr>
                                 &lt;td>0.9.5&lt;/td>
                                 &lt;td>2016-10-26&lt;/td>
                                 &lt;td>新增信息提示组件&lt;code>Tooltip&lt;/code>和&lt;code>Poptip&lt;/code>&lt;/td>
                             &lt;/tr>
                             &lt;tr>
                                 &lt;td>0.9.4&lt;/td>
                                 &lt;td>2016-10-25&lt;/td>
                                 &lt;td>新增对话框组件 &lt;code>Modal&lt;/code>&lt;/td>
                             &lt;/tr>
                             &lt;tr>
                                 &lt;td>0.9.2&lt;/td>
                                 &lt;td>2016-09-28&lt;/td>
                                 &lt;td>新增选择器组件 &lt;code>Select&lt;/code>&lt;/td>
                             &lt;/tr>
                         &lt;/tbody>
                      &lt;/table>
                 &lt;/div>
             &lt;/Poptip>
          &lt;/template>
          &lt;script>
              export default {
              }
          &lt;/script>
        `,
        "subTitle5": '确认框',
        "poptipCode5": `
          &lt;template>
             &lt;Poptip confirm title="您确认删除这条内容吗？" @on-ok="ok" @on-cancel="cancel">
                 &lt;Button>删除&lt;/Button>
             &lt;/Poptip>
             &lt;Poptip confirm title="Are you sure delete this task？" @on-ok="ok" @on-cancel="cancel" ok-text="yes" cancel-text="no">
                 &lt;Button>国际化&lt;/Button>
             &lt;/Poptip>
          &lt;/template>
          &lt;script>
              export default {
                methods: {
                  ok () {
                      this.$Message.info('点击了确定');
                  },
                  cancel () {
                      this.$Message.info('点击了取消');
                  }
                }
              }
          &lt;/script>
        `
      }
    },
    methods: {
      close () {
        this.visible = false;
      },
      ok () {
        this.$Message.info('点击了确定');
      },
      cancel () {
        this.$Message.info('点击了取消');
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
