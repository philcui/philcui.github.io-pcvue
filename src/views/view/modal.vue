<template>
  <article class="doc-modal-container">
    <h1>Modal 对话框</h1>
    <h2>概述</h2>
    <p>
      模态对话框，在浮层中显示，引导用户进行相关操作。<br/>
      Modal提供了两种用法，普通组件使用和封装好的简洁实例调用。
    </p>
    <h2>示例代码</h2>
    <h3>普通组件的使用方法</h3>
    <section class="demo" id="basic">
      <demoTab :code="basicModal" :describeTitle="subTitle">
        <div slot="sample">
           <Button type="primary" @click="modal1 = true">显示对话框</Button>
           <Modal
              v-model="modal1"
              title="普通的Modal对话框标题"
              @on-ok="ok"
              @on-cancel="cancel">
              <p>对话框内容</p>
              <p>对话框内容</p>
              <p>对话框内容</p>
          </Modal>
        </div>
        <div slot="describe-content">
           最简单的使用方法，通过控制属性visible来显示 / 隐藏对话框。<br/>
           可以使用 v-model 实现双向绑定。<br/>
           默认按键盘ESC键也可以关闭。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="custom">
      <demoTab :code="customModal" :describeTitle="subTitlecustom">
        <div slot="sample">
           <Button @click="modal2 = true">自定义页头和页脚</Button>
           <Modal v-model="modal2" width="360">
               <p slot="header" style="color:#f60;text-align:center">
                   <Icon type="information-circled"></Icon>
                   <span>删除确认</span>
               </p>
               <div style="text-align:center">
                   <p>此任务删除后，下游 10 个任务将无法执行。</p>
                   <p>是否继续删除？</p>
               </div>
               <div slot="footer">
                   <Button type="error" size="large" long :loading="modal_loading" @click="del">删除</Button>
               </div>
           </Modal>
           <Button @click="modal3 = true">不带标题栏</Button>
           <Modal v-model="modal3">
               <p>对话框内容</p>
               <p>对话框内容</p>
               <p>对话框内容</p>
           </Modal>
           <Button @click="modal4 = true">国际化</Button>
           <Modal
               v-model="modal4"
               title="Modal Title"
               ok-text="OK"
               cancel-text="Cancel">
               <p>Something...</p>
               <p>Something...</p>
               <p>Something...</p>
           </Modal>
           <Button @click="modal5 = true">设置宽度</Button>
           <Modal
               v-model="modal5"
               title="自定义宽度"
               width="300">
               <p>自定义宽度，单位 px，默认 520px。</p>
               <p>对话框的宽度是响应式的，当屏幕尺寸小于 768px 时，宽度会变为自动<code>auto</code>。</p>
           </Modal>
        </div>
        <div slot="describe-content">
           Modal 组件提供了灵活的自定义样式 API 和 Slot，可以自由控制整个 Modal 的各个组成部分，比如页头、页脚、关闭按钮。<br>
           通过和其它组件的交互，能实现更复杂的功能，满足了大多业务场景。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="asyn">
      <demoTab :code="asynModal" :describeTitle="subTitleasyn">
        <div slot="sample">
           <Button type="primary" @click="modal6 = true">显示对话框</Button>
           <Modal
               v-model="modal6"
               title="对话框标题"
               :loading="loading"
               @on-ok="asyncOK">
               <p>点击确定后，对话框将在 2秒 后关闭。</p>
           </Modal>
        </div>
        <div slot="describe-content">
           Modal 组件提供了灵活的自定义样式 API 和 Slot，可以自由控制整个 Modal 的各个组成部分，比如页头、页脚、关闭按钮。<br>
           通过和其它组件的交互，能实现更复杂的功能，满足了大多业务场景。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="disable">
      <demoTab :code="disableModal" :describeTitle="subTitledisable">
        <div slot="sample">
           <Button @click="modal7 = true">禁用右上角关闭（含Esc键）</Button>
           <Modal
               title="对话框标题"
               v-model="modal7"
               :closable="false">
               <p>对话框内容</p>
               <p>对话框内容</p>
               <p>对话框内容</p>
           </Modal>
           <Button @click="modal8 = true">禁用遮罩层关闭</Button>
           <Modal
               title="对话框标题"
               v-model="modal8"
               :mask-closable="false">
               <p>对话框内容</p>
               <p>对话框内容</p>
               <p>对话框内容</p>
           </Modal>
        </div>
        <div slot="describe-content">
           Modal 组件提供了灵活的自定义样式 API 和 Slot，可以自由控制整个 Modal 的各个组成部分，比如页头、页脚、关闭按钮。<br>
           通过和其它组件的交互，能实现更复杂的功能，满足了大多业务场景。
        </div>
      </demoTab>
    </section>

    <h3>实例化使用方法</h3>
    <section class="demo" id="instance">
      <demoTab :code="basicModal" :describeTitle="subTitle">
        <div slot="sample">
           <Button @click="instance('info')">消息</Button>
           <Button @click="instance('success')">成功</Button>
           <Button @click="instance('warning')">警告</Button>
           <Button @click="instance('error')">错误</Button>
           <Modal
              v-model="modal1"
              title="普通的Modal对话框标题"
              @on-ok="ok"
              @on-cancel="cancel">
              <p>对话框内容</p>
              <p>对话框内容</p>
              <p>对话框内容</p>
          </Modal>
        </div>
        <div slot="describe-content">
           除了上述通过标准组件的使用方法，iView 还精心封装了一些实例方法，用来创建一次性的轻量级对话框。<br/>
           实例以隐式创建 Vue 组件的方式在全局创建一个对话框，并在消失时移除，所以同时只能操作一个对话框。<br/>
           四种基本的对话框，只提供一个确定按钮。
        </div>
      </demoTab>
    </section>

    <h2 id="api">API</h2>

    <h3>Alert props</h3>
    <section class="demo">
     <Table border :columns="propscolumns" :data="propsdata"></Table>
    </section>

    <h3>Alert events</h3>
    <section class="demo">
     <Table border :columns="eventcolumns" :data="eventdata"></Table>
    </section>

    <h3>Alert slot</h3>
    <section class="demo">
     <Table border :columns="slotcolumns" :data="slotdata"></Table>
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
      modal1: false,
       modal2: false,
       modal_loading: false,
       modal3: false,
       modal4: false,
       modal5: false,
       modal6: false,
       modal7: false,
       modal8: false,
       loading: true,
       subTitle: "基础用法",
       subTitlecustom: '自定义样式',
       subTitleasyn: "异步关闭",
       propscolumns:[
        {
            title: '属性',
            key: 'attribute',
        },
        {
            title: '说明',
            key: 'describe'
        },
        {
            title: '类型',
            key: 'type',
        },
        {
            title: '默认值',
            key: 'default'
        }
      ],
      propsdata:[
        {
          'attribute': 'type',
          'describe':'警告提示样式，可选值为info、success、warning、error',
          'type':"String",
          'default':"info"
        },
        {
          'attribute': 'closable',
          'describe':'是否可关闭',
          'type':"Boolean",
          'default':"false"
        },
        {
          'attribute': 'show-icon',
          'describe':'是否显示图标',
          'type':"Boolean",
          'default':"false"
        }
      ],
       "eventcolumns":[
        {
            'title': '事件名',
            'key': 'event',
        },
        {
            'title': '说明',
            'key': 'describe'
        },
        {
            'title': '返回值',
            'key': 'return',
        }
      ],
      "eventdata":[
        {
          'event': 'on-close',
          'describe':'关闭时触发',
          'return':"event"
        }
      ],
       "slotcolumns":[
        {
            'title': '名称',
            'key': 'name',
        },
        {
            'title': '说明',
            'key': 'describe'
        }
      ],
      "slotdata":[
        {
          "name": "无",
          "describe":"警告提示内容"
        },
        {
          "name": "desc",
          "describe":"警告提示辅助性文字介绍"
        },
        {
          "name": "icon",
          "describe":"自定义图标内容"
        },
        {
          "name": "close",
          "describe":"自定义关闭内容"
        },
      ],
      "basicModal": `
&lt;template>
    &lt;Button type="primary" @click="modal1 = true">显示对话框&lt;/Button>
    &lt;Modal
        v-model="modal1"
        title="普通的Modal对话框标题"
        @on-ok="ok"
        @on-cancel="cancel">
        &lt;p>对话框内容&lt;/p>
        &lt;p>对话框内容&lt;/p>
        &lt;p>对话框内容&lt;/p>
    &lt;/Modal>
&lt;/template>
&lt;script>
    export default {
        data () {
            return {
                modal1: false
            }
        },
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
`,
    customModal: `
&lt;template>
    &lt;Button @click="modal2 = true">自定义页头和页脚&lt;/Button>
    &lt;Modal v-model="modal2" width="360">
        &lt;p slot="header" style="color:#f60;text-align:center">
            &lt;Icon type="information-circled">&lt;/Icon>
            &lt;span>删除确认&lt;/span>
        &lt;/p>
        &lt;div style="text-align:center">
            &lt;p>此任务删除后，下游 10 个任务将无法执行。&lt;/p>
            &lt;p>是否继续删除？&lt;/p>
        &lt;/div>
        &lt;div slot="footer">
            &lt;Button type="error" size="large" long :loading="modal_loading" @click="del">删除&lt;/Button>
        &lt;/div>
    &lt;/Modal>
    &lt;Button @click="modal3 = true">不带标题栏&lt;/Button>
    &lt;Modal v-model="modal3">
        &lt;p>对话框内容&lt;/p>
        &lt;p>对话框内容&lt;/p>
        &lt;p>对话框内容&lt;/p>
    &lt;/Modal>
    &lt;Button @click="modal4 = true">国际化&lt;/Button>
    &lt;Modal
        v-model="modal4"
        title="Modal Title"
        ok-text="OK"
        cancel-text="Cancel">
        &lt;p>Something...&lt;/p>
        &lt;p>Something...&lt;/p>
        &lt;p>Something...&lt;/p>
    &lt;/Modal>
    &lt;Button @click="modal5 = true">设置宽度&lt;/Button>
    &lt;Modal
        v-model="modal5"
        title="自定义宽度"
        width="300">
        &lt;p>自定义宽度，单位 px，默认 520px。&lt;/p>
        &lt;p>对话框的宽度是响应式的，当屏幕尺寸小于 768px 时，宽度会变为自动&lt;code>auto&lt;/code>。&lt;/p>
    &lt;/Modal>
&lt;/template>
&lt;script>
    export default {
        data () {
            return {
                modal2: false,
                modal_loading: false,
                modal3: false,
                modal4: false,
                modal5: false
            }
        },
        methods: {
            del () {
                this.modal_loading = true;
                setTimeout(() => {
                    this.modal_loading = false;
                    this.modal2 = false;
                    this.$Message.success('删除成功');
                }, 2000);
            }
        }
    }
&lt;/script>
    `,
    asynModal:`
&lt;template>
    &lt;Button type="primary" @click="modal6 = true">显示对话框&lt;/Button>
    &lt;Modal
        v-model="modal6"
        title="对话框标题"
        :loading="loading"
        @on-ok="asyncOK">
        &lt;p>点击确定后，对话框将在 2秒 后关闭。&lt;/p>
    &lt;/Modal>
&lt;/template>
&lt;script>
    export default {
        data () {
            return {
                modal6: false,
                loading: true
            }
        },
        methods: {
            asyncOK () {
                setTimeout(() => {
                    this.modal6 = false;
                }, 2000);
            }
        }
    }
&lt;/script>
    `,
    disableModal:`
&lt;template>
    &lt;Button @click="modal7 = true">禁用右上角关闭（含Esc键）&lt;/Button>
    &lt;Modal
        title="对话框标题"
        v-model="modal7"
        :closable="false">
        &lt;p>对话框内容&lt;/p>
        &lt;p>对话框内容&lt;/p>
        &lt;p>对话框内容&lt;/p>
    &lt;/Modal>
    &lt;Button @click="modal8 = true">禁用遮罩层关闭&lt;/Button>
    &lt;Modal
        title="对话框标题"
        v-model="modal8"
        :mask-closable="false">
        &lt;p>对话框内容&lt;/p>
        &lt;p>对话框内容&lt;/p>
        &lt;p>对话框内容&lt;/p>
    &lt;/Modal>
&lt;/template>
&lt;script>
    export default {
        data () {
            return {
                modal7: false,
                modal8: false,
            }
        }
    }
&lt;/script>
    `
    }
  },
  created () {}
  ,
  methods: {
       ok () {
           this.$Message.info('点击了确定');
       },
       cancel () {
           this.$Message.info('点击了取消');
       },
       del () {
            this.modal_loading = true;
            setTimeout(() => {
                this.modal_loading = false;
                this.modal2 = false;
                this.$Message.success('删除成功');
            }, 2000);
        },
       instance (type) {
        const title = '对话框的标题';
        const content = '<p>一些对话框内容</p><p>一些对话框内容</p>';
        switch (type) {
            case 'info':
                this.$Modal.info({
                    title: title,
                    content: content
                });
                break;
            case 'success':
                this.$Modal.success({
                    title: title,
                    content: content
                });
                break;
            case 'warning':
                this.$Modal.warning({
                    title: title,
                    content: content
                });
                break;
            case 'error':
                this.$Modal.error({
                    title: title,
                    content: content
                });
                break;
        }
       },
       asyncOK () {
           setTimeout(() => {
               this.modal6 = false;
           }, 2000);
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
</style>

