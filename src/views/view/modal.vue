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

    <section class="demo" id="customposition">
      <demoTab :code="custompositionModal" :describeTitle="subTitlecustomposition">
        <div slot="sample">
           <Button @click="modal9 = true">距离顶部 20px</Button>
           <Modal
               title="对话框标题"
               v-model="modal9"
               :styles="{top: '20px'}">
               <p>对话框内容</p>
               <p>对话框内容</p>
               <p>对话框内容</p>
           </Modal>
           <Button @click="modal10 = true">垂直居中</Button>
           <Modal
               title="对话框标题"
               v-model="modal10"
               class-name="vertical-center-modal">
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
      <demoTab :code="instanceModal" :describeTitle="subTitle">
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

    <section class="demo" id="confirm">
      <demoTab :code="confirmModal" :describeTitle="subTitleconfirm">
        <div slot="sample">
           <Button @click="confirm">标准</Button>
           <Button @click="custom">自定义按钮文字</Button>
           <Button @click="async">异步关闭</Button>
        </div>
        <div slot="describe-content">
           快速弹出确认对话框，并且可以自定义按钮文字及异步关闭。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="custominstance">
      <demoTab :code="custominstanceModal" :describeTitle="subTitlecustominstance">
        <div slot="sample">
           <p>
               姓名：{{ value }}
           </p>
           <p>
               <Button @click="render">自定义内容</Button>
           </p>
        </div>
        <div slot="describe-content">
          使用 render 字段可以基于 Render 函数来自定义内容。
          使用 render 后，将不再限制类型，content 也将无效。
        </div>
      </demoTab>
    </section>

    <h2 id="api">API</h2>

    <h3>Modal props</h3>
    <section class="demo">
     <Table border :columns="propscolumns" :data="propsdata"></Table>
    </section>

    <h3>Modal events</h3>
    <section class="demo">
     <Table border :columns="eventcolumns" :data="eventdata"></Table>
    </section>

    <h3>Modal slot</h3>
    <section class="demo">
     <Table border :columns="slotcolumns" :data="slotdata"></Table>
    </section>

    <h3>Modal instance</h3>
    <p>通过直接调用以下方法来使用：</p>
    <ul>
        <li>
            <code>this.$Modal.info(config)</code>
        </li>
        <li>
            <code>this.$Modal.success(config)</code>
        </li>
        <li>
            <code>this.$Modal.warning(config)</code>
        </li>
        <li>
            <code>this.$Modal.error(config)</code>
        </li>
        <li>
            <code>this.$Modal.confirm(config)</code>
        </li>
    </ul>
    <p>以上方法隐式地创建及维护Vue组件。参数 config 为对象，具体说明如下：</p>
    <section class="demo">
     <Table border :columns="propscolumns" :data="instancedata"></Table>
    </section>

    <p>
        另外提供了全局关闭对话框的方法：
    </p>
    <ul>
        <li>
            <code>this.$Modal.remove()</code>
        </li>
    </ul>
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
       modal9: false,
       modal10: false,
       loading: true,
       value: '',
       subTitle: "基础用法",
       subTitlecustom: '自定义样式',
       subTitleasyn: "异步关闭",
       subTitledisable: "禁用关闭",
       subTitlecustomposition:'自定义位置',
       subTitleconfirm:'确认对话框',
       subTitlecustominstance:'自定义内容',
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
          'attribute': 'value',
          'describe':'对话框是否显示，可使用 v-model 双向绑定数据。',
          'type':"Boolean",
          'default':"false"
        },
        {
          'attribute': 'title',
          'describe':'对话框标题，如果使用 slot 自定义了页头，则 title 无效',
          'type':"String",
          'default':"-"
        },
        {
          'attribute': 'closable',
          'describe':'是否显示右上角的关闭按钮，关闭后 Esc 按键也将关闭',
          'type':"Boolean",
          'default':"true"
        },
        {
          'attribute': 'mask-closable',
          'describe':'是否允许点击遮罩层关闭',
          'type':"Boolean",
          'default':"true"
        },
        {
          'attribute': 'loading',
          'describe':'点击确定按钮时，确定按钮是否显示 loading 状态，开启则需手动设置visible来关闭对话框',
          'type':"Boolean",
          'default':"false"
        },
        {
          'attribute': 'scrollable',
          'describe':'页面是否可以滚动',
          'type':"Boolean",
          'default':"false"
        },
        {
          'attribute': 'ok-text',
          'describe':'确定按钮文字',
          'type':"String",
          'default':"确定"
        },
        {
          'attribute': 'cancel-text',
          'describe':'取消按钮文字',
          'type':"String",
          'default':"取消"
        },
        {
          'attribute': 'width',
          'describe':'对话框宽度，对话框的宽度是响应式的，当屏幕尺寸小于 768px 时，宽度会变为自动auto。当其值不大于 100 时以百分比显示，大于 100 时为像素',
          'type':"Number | String",
          'default':"520"
        },
        {
          'attribute': 'styles',
          'describe':'设置浮层样式，调整浮层位置等，该属性设置的是.ivu-modal的样式',
          'type':"Object",
          'default':"-"
        },
        {
          'attribute': 'class-name',
          'describe':'设置对话框容器.ivu-modal-wrap的类名，可辅助实现垂直居中等自定义效果',
          'type':"String",
          'default':"-"
        },
        {
          'attribute': 'transition-names',
          'describe':'自定义显示动画，第一项是模态框，第二项是背景',
          'type':"Array",
          'default':"['ease', 'fade']"
        },
        {
          'attribute': 'transfer',
          'describe':'是否将弹层放置于 body 内',
          'type':"Boolean",
          'default':"true"
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
          'event': 'on-ok',
          'describe':'点击确定的回调',
          'return':"无"
        },
        {
          'event': 'on-cancel',
          'describe':'点击取消的回调',
          'return':"无"
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
          "name": "header",
          "describe":"自定义页头"
        },
        {
          "name": "footer",
          "describe":"自定义页脚内容警告提示辅助性文字介绍"
        },
        {
          "name": "close",
          "describe":"自定义右上角关闭内容"
        },
        {
          "name": "无",
          "describe":"对话框主体内容"
        },
      ],
      instancedata:[
        {
          'attribute': 'title',
          'describe':'标题',
          'type':"String | Element String",
          'default':"-"
        },
        {
          'attribute': 'content',
          'describe':'内容',
          'type':"String | Element String",
          'default':"-"
        },
        {
          'attribute': 'render',
          'describe':'自定义内容，使用后不再限制类型， content 也无效。',
          'type':"Function",
          'default':"-"
        },
        {
          'attribute': 'width',
          'describe':'宽度，单位 px',
          'type':"Number | String",
          'default':"416"
        },
        {
          'attribute': 'okText',
          'describe':'确定按钮的文字',
          'type':"String",
          'default':"确定"
        },
        {
          'attribute': 'cancelText',
          'describe':'取消按钮的文字，只在Modal.confirm()下有效',
          'type':"String",
          'default':"取消"
        },
        {
          'attribute': 'loading',
          'describe':'点击确定按钮时，确定按钮是否显示 loading 状态，开启则需手动调用Modal.remove()来关闭对话框',
          'type':"Boolean",
          'default':"false"
        },
        {
          'attribute': 'scrollable',
          'describe':'页面是否可以滚动',
          'type':"Boolean",
          'default':"false"
        },
        {
          'attribute': 'onOk',
          'describe':'点击确定的回调',
          'type':"点击确定的回调",
          'default':"-"
        },
        {
          'attribute': 'onCancel',
          'describe':'点击取消的回调，只在Modal.confirm()下有效',
          'type':"Function",
          'default':"-"
        }
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
    `,
    custompositionModal:`
&lt;style lang="less">
    .vertical-center-modal{
        display: flex;
        align-items: center;
        justify-content: center;

        .ivu-modal{
            top: 0;
        }
    }
&lt;/style>
&lt;template>
    &lt;Button @click="modal9 = true">距离顶部 20px&lt;/Button>
    &lt;Modal
        title="对话框标题"
        v-model="modal9"
        :styles="{top: '20px'}">
        &lt;p>对话框内容&lt;/p>
        &lt;p>对话框内容&lt;/p>
        &lt;p>对话框内容&lt;/p>
    &lt;/Modal>
    &lt;Button @click="modal10 = true">垂直居中&lt;/Button>
    &lt;Modal
        title="对话框标题"
        v-model="modal10"
        class-name="vertical-center-modal">
        &lt;p>对话框内容&lt;/p>
        &lt;p>对话框内容&lt;/p>
        &lt;p>对话框内容&lt;/p>
    &lt;/Modal>
&lt;/template>
&lt;script>
    export default {
        data () {
            return {
                modal9: false,
                modal10: false,
            }
        }
    }
&lt;/script>
    `,
    instanceModal:`
&lt;template>
    &lt;Button @click="instance('info')">消息&lt;/Button>
    &lt;Button @click="instance('success')">成功&lt;/Button>
    &lt;Button @click="instance('warning')">警告&lt;/Button>
    &lt;Button @click="instance('error')">错误&lt;/Button>
&lt;/template>
&lt;script>
    export default {
        methods: {
            instance (type) {
                const title = '对话框的标题';
                const content = '&lt;p>一些对话框内容&lt;/p>&lt;p>一些对话框内容&lt;/p>';
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
            }
        }
    }
&lt;/script>

    `,
    confirmModal:`
&lt;template>
    &lt;Button @click="confirm">标准&lt;/Button>
    &lt;Button @click="custom">自定义按钮文字&lt;/Button>
    &lt;Button @click="async">异步关闭&lt;/Button>
&lt;/template>
&lt;script>
    export default {
        methods: {
            confirm () {
                this.$Modal.confirm({
                    title: '确认对话框标题',
                    content: '&lt;p>一些对话框内容&lt;/p>&lt;p>一些对话框内容&lt;/p>',
                    onOk: () => {
                        this.$Message.info('点击了确定');
                    },
                    onCancel: () => {
                        this.$Message.info('点击了取消');
                    }
                });
            },
            custom () {
                this.$Modal.confirm({
                    title: '确认对话框标题',
                    content: '&lt;p>一些对话框内容&lt;/p>&lt;p>一些对话框内容&lt;/p>',
                    okText: 'OK',
                    cancelText: 'Cancel'
                });
            },
            async () {
                this.$Modal.confirm({
                    title: '确认对话框标题',
                    content: '&lt;p>对话框将在 2秒 后关闭&lt;/p>',
                    loading: true,
                    onOk: () => {
                        setTimeout(() => {
                            this.$Modal.remove();
                            this.$Message.info('异步关闭了对话框');
                        }, 2000);
                    }
                });
            }
        }
    }
&lt;/script>
    `,
    custominstanceModal:`
&lttemplate>
    &ltp>
        姓名：{{ value }}
    &lt/p>
    &ltp>
        &ltButton @click="render">自定义内容&lt/Button>
    &lt/p>
&lt/template>
&ltscript>
    export default {
        data () {
            return {
                value: ''
            }            
        },
        methods: {
            render () {
                this.$Modal.confirm({
                    render: (h) => {
                        return h('Input', {
                            props: {
                                value: this.value,
                                autofocus: true,
                                placeholder: 'Please enter your name...'
                            },
                            on: {
                                input: (val) => {
                                    this.value = val;
                                }
                            }
                        })
                    }
                })
            }
        }
    }
&lt/script>
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
       },
       confirm () {
           this.$Modal.confirm({
               title: '确认对话框标题',
               content: '<p>一些对话框内容</p><p>一些对话框内容</p>',
               onOk: () => {
                   this.$Message.info('点击了确定');
               },
               onCancel: () => {
                   this.$Message.info('点击了取消');
               }
           });
       },
       custom () {
            this.$Modal.confirm({
                title: '确认对话框标题',
                content: '<p>一些对话框内容</p><p>一些对话框内容</p>',
                okText: 'OK',
                cancelText: 'Cancel'
            });
        },
        async () {
            this.$Modal.confirm({
                title: '确认对话框标题',
                content: '<p>对话框将在 2秒 后关闭</p>',
                loading: true,
                onOk: () => {
                    setTimeout(() => {
                        this.$Modal.remove();
                        this.$Message.info('异步关闭了对话框');
                    }, 2000);
                }
            });
        },
        render () {
            this.$Modal.confirm({
                render: (h) => {
                    return h('Input', {
                        props: {
                            value: this.value,
                            autofocus: true,
                            placeholder: 'Please enter your name...'
                        },
                        on: {
                            input: (val) => {
                                this.value = val;
                            }
                        }
                    })
                }
            })
        }
   }
}
</script>
<style lang="less" scoped>
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
  code{
      display: inline-block;
      background: #f7f7f7;
      font-family: Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;
      margin: 0 3px;
      padding: 1px 5px;
      border-radius: 3px;
      color: #666;
      border: 1px solid #eee;
  } 
  ul{
      margin: 20px 30px;
      li{
          list-style-type:disc;
      }
  }
}
.vertical-center-modal{
    display: flex;
    align-items: center;
    justify-content: center;
    .ivu-modal{
        top: 0;
    }
}
</style>

