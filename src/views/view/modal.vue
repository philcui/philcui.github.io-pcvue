<template>
  <article class="doc-modal-container">
    <h1>Modal 对话框</h1>
    <h2>概述</h2>
    <p>
      模态对话框，在浮层中显示，引导用户进行相关操作。<br/>
      Modal提供了两种用法，普通组件使用和封装好的简洁实例调用。
    </p>
    <h2>示例代码</h2>
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
           最简单的使用方法，通过控制属性visible来显示 / 隐藏对话框。<br/>
           可以使用 v-model 实现双向绑定。<br/>
           默认按键盘ESC键也可以关闭。
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
      "modal1": false,
      "subTitle": "基础用法",
      "propscolumns":[
        {
            'title': '属性',
            'key': 'attribute',
        },
        {
            'title': '说明',
            'key': 'describe'
        },
        {
            'title': '类型',
            'key': 'type',
        },
        {
            'title': '默认值',
            'key': 'default'
        }
      ],
      "propsdata":[
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
      "descAlert":`
&lt;template>
  &lt;Alert>
   消息提示文案
   &lt;template slot="desc">消息提示的描述文案消息&lt;/template>
   &lt;/Alert>
  &lt;Alert type="success">
      成功提示文案
      &lt;span slot="desc">成功的提示描述文案&lt;/span>
  &lt;/Alert>
  &lt;Alert type="warning">
      警告提示文案
      &lt;template slot="desc">
          警告的提示描述文案
      &lt;/template>
  &lt;/Alert>
  &lt;Alert type="error">
      失败提示文案
      &lt;template slot="desc">失败的提示描述文案&lt;br/>失败的提示描述文案&lt;/template>
  &lt;/Alert>
&lt;/template>
&lt;script>
    export default {
        
    }
&lt;/script>
      `
    }
  },
  methods: {
       ok () {
           this.$Message.info('点击了确定');
       },
       cancel () {
           this.$Message.info('点击了取消');
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

