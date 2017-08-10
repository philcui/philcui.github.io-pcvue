<template>
  <article class="doc-tabs-container">
    <h1>Tabs 标签页</h1>
    <h2>概述</h2>
    <p>
      选项卡切换组件，常用于平级区域大块内容的的收纳和展现。
    </p>
    <h2>示例代码</h2>
    <section class="demo" id="basic">
      <demoTab :code="basicTab" :describeTitle="subTitle">
        <div slot="sample">
           <Tabs value="name1">
              <Tab-pane label="标签一" name="name1">标签一的内容</Tab-pane>
              <Tab-pane label="标签二" name="name2">标签二的内容</Tab-pane>
              <Tab-pane label="标签三" name="name3">标签三的内容</Tab-pane>
          </Tabs>
        </div>
        <div slot="describe-content">
           value 与 Tab-pane 的 name 对应，用于标识当前激活的是哪一项，name 值默认从 0 开始，默认激活第一项。可以使用 v-model 双向绑定数据。
        </div>
      </demoTab>
    </section>
    <section class="demo" id="disabled">
      <demoTab :code="disabledTab" :describeTitle="subTitledisabled">
        <div slot="sample">
          <Tabs>
              <Tab-pane label="标签一">标签一的内容</Tab-pane>
              <Tab-pane label="标签二" disabled>标签二的内容</Tab-pane>
              <Tab-pane label="标签三">标签三的内容</Tab-pane>
          </Tabs>
        </div>
        <div slot="describe-content">
          禁用某一项
        </div>
      </demoTab>
    </section>
    <section class="demo" id="icon">
      <demoTab :code="iconTab" :describeTitle="subTitleicon">
        <div slot="sample">
            <Tabs>
                <Tab-pane label="macOS" icon="social-apple">标签一的内容</Tab-pane>
                <Tab-pane label="Windows" icon="social-windows">标签二的内容</Tab-pane>
                <Tab-pane label="Linux" icon="social-tux">标签三的内容</Tab-pane>
            </Tabs>
        </div>
        <div slot="describe-content" id="icon">
           通过设置属性 icon，可以显示一个图标。
        </div>
      </demoTab>
    </section>
    <section class="demo" id="small">
      <demoTab :code="smallTab" :describeTitle="subTitlesmall">
        <div slot="sample">
          <Tabs size="small">
              <Tab-pane label="标签一">标签一的内容</Tab-pane>
              <Tab-pane label="标签二">标签二的内容</Tab-pane>
              <Tab-pane label="标签三">标签三的内容</Tab-pane>
          </Tabs>
        </div>
        <div slot="describe-content">
           设置属性 size 为 small 可以显示为迷你型，只在 type 为 line 时有效。
        </div>
      </demoTab>
    </section>
    <section class="demo" id="render">
      <demoTab :code="renderTab" :describeTitle="subTitlerender">
        <div slot="sample">
          <Tabs>
              <Tab-pane :label="label" name="name1">标签一的内容</Tab-pane>
              <Tab-pane label="标签二" name="name2">标签二的内容</Tab-pane>
              <Tab-pane label="标签三" name="name3">标签三的内容</Tab-pane>
          </Tabs>
        </div>
        <div slot="describe-content">
           设置 label 为 Render 函数后，可以自定义标签页的内容。
        </div>
      </demoTab>
    </section>
    <section class="demo" id="extra">
      <demoTab :code="extraTab" :describeTitle="subTitleextra">
        <div slot="sample">
           <Tabs type="card">
               <Tab-pane v-for="tab in tabs" :key="tab" :label="'标签' + tab">标签{{ tab }}</Tab-pane>
               <Button type="ghost" @click="handleTabsAdd" size="small" slot="extra" :disabled="tabs > 3">增加</Button>
           </Tabs>
        </div>
        <div slot="describe-content">
           设置 slot extra 可以在页签右边添加附加操作。
        </div>
      </demoTab>
    </section>
    <section class="demo" id="card">
      <demoTab :code="cardTab" :describeTitle="subTitlecard">
        <div slot="sample">
          <Tabs type="card">
              <Tab-pane label="标签一">标签一的内容</Tab-pane>
              <Tab-pane label="标签二">标签二的内容</Tab-pane>
              <Tab-pane label="标签三">标签三的内容</Tab-pane>
          </Tabs>
        </div>
        <div slot="describe-content">
           设置属性 type 为 card 可以显示卡片样式，常用于容器顶部。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="closable">
      <demoTab :code="closableTab" :describeTitle="subTitleclosable">
        <div slot="sample">
          <Tabs type="card" closable @on-tab-remove="handleTabRemove">
              <Tab-pane label="标签一" v-if="tab0">标签一的内容</Tab-pane>
              <Tab-pane label="标签二" v-if="tab1">标签二的内容</Tab-pane>
              <Tab-pane label="标签三" v-if="tab2">标签三的内容</Tab-pane>
          </Tabs>
        </div>
        <div slot="describe-content">
           通过设置属性 closable 可以关闭某一项，仅在 type 为 card 时有效。<br/>
           需结合 @on-tab-remove 事件手动关闭标签页。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="noanimate">
      <demoTab :code="noanimateTab" :describeTitle="subTitlenoanimate">
        <div slot="sample">
          <Tabs :animated="false">
              <Tab-pane label="标签一">标签一的内容</Tab-pane>
              <Tab-pane label="标签二">标签二的内容</Tab-pane>
              <Tab-pane label="标签三">标签三的内容</Tab-pane>
          </Tabs>
        </div>
        <div slot="describe-content">
           通过设置属性 animated 为 false 可以禁用动画。
        </div>
      </demoTab>
    </section>

    <h2 id="api">API</h2>

    <h3>Tabs props</h3>
    <section class="demo">
     <Table border :columns="propscolumns" :data="propsdata"></Table>
    </section>

    <h3>Tabs events</h3>
    <section class="demo">
     <Table border :columns="eventcolumns" :data="eventdata"></Table>
    </section>

    <h3>Tabs slot</h3>
    <section class="demo">
     <Table border :columns="slotcolumns" :data="slotdata"></Table>
    </section>

    <h3>TabPane props</h3>
    <section class="demo">
     <Table border :columns="propscolumns" :data="TabPanePropsdata"></Table>
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
      "subTitle": "基础用法",
      "subTitledisabled": "禁用",
      "subTitleicon": "图标",
      "subTitlesmall": "迷你型",
      "subTitlecard": "卡片样式",
      "subTitleclosable": "可关闭",
      "subTitlenoanimate":"禁用动画",
      "subTitlerender":"自定义标签页",
      "subTitleextra":"附加内容",
      "tab0": true,
      "tab1": true,
      "tab2": true,
      "tabs": 2,
      "label": (h) => {
                    return h('div', [
                        h('span', '标签一'),
                        h('Badge', {
                            props: {
                                count: 3
                            }
                        })
                    ])
                },
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
          'attribute': 'value',
          'describe':'当前激活 tab 面板的 name，可以使用 v-model 双向绑定数据',
          'type':"String",
          'default':"默认为第一项的 name"
        },
        {
          'attribute': 'type',
          'describe':'页签的基本样式，可选值为 line 和 card',
          'type':"String",
          'default':"line"
        },
        {
          'attribute': 'size',
          'describe':'尺寸，可选值为 default 和 small，仅在 type="line" 时有效',
          'type':"String",
          'default':"default"
        },
        {
          'attribute': 'closable',
          'describe':'是否可以关闭页签，仅在 type="card" 时有效',
          'type':"Boolean",
          'default':"false"
        },
        {
          'attribute': 'animated',
          'describe':'是否使用 CSS3 动画',
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
          'event': 'on-click',
          'describe':'tab 被点击时触发',
          'return':"name"
        },
        {
          'event': 'on-tab-remove',
          'describe':'tab 被关闭时触发',
          'return':"name"
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
          "name": "extra",
          "describe":"附加内容"
        }
      ],
      'TabPanePropsdata':[
        {
          'attribute': 'name',
          'describe':'用于标识当前面板，对应 value，默认为其索引值',
          'type':"String | Number",
          'default':"-"
        },
        {
          'attribute': 'label',
          'describe':'选项卡头显示文字，支持 Render 函数。',
          'type':"String | Function",
          'default':"空"
        },
        {
          'attribute': 'icon',
          'describe':'选项卡图标',
          'type':"String",
          'default':"-"
        },
        {
          'attribute': 'disabled',
          'describe':'是否禁用该选项卡',
          'type':"Boolean",
          'default':"false"
        },
        {
          'attribute': 'closable',
          'describe':'是否可以关闭页签，仅在 type="card" 时有效',
          'type':"Boolean",
          'default':"null"
        }
      ],
      "basicTab": `
&lt;template>
    &lt;Tabs value="name1">
        &lt;Tab-pane label="标签一" name="name1">标签一的内容&lt;/Tab-pane>
        &lt;Tab-pane label="标签二" name="name2">标签二的内容&lt;/Tab-pane>
        &lt;Tab-pane label="标签三" name="name3">标签三的内容&lt;/Tab-pane>
    &lt;/Tabs>
&lt;/template>
&lt;script>
    export default {
        
    }
&lt;/script>
`,
      "disabledTab":`
&lt;template>
    &lt;Tabs>
        &lt;Tab-pane label="标签一">标签一的内容&lt;/Tab-pane>
        &lt;Tab-pane label="标签二" disabled>标签二的内容&lt;/Tab-pane>
        &lt;Tab-pane label="标签三">标签三的内容&lt;/Tab-pane>
    &lt;/Tabs>
&lt;/template>
&lt;script>
    export default {
        
    }
&lt;/script>
      `,
      "iconTab":`
&lt;template>
    &lt;Tabs>
        &lt;Tab-pane label="macOS" icon="social-apple">标签一的内容&lt;/Tab-pane>
        &lt;Tab-pane label="Windows" icon="social-windows">标签二的内容&lt;/Tab-pane>
        &lt;Tab-pane label="Linux" icon="social-tux">标签三的内容&lt;/Tab-pane>
    &lt;/Tabs>
&lt;/template>
&lt;script>
    export default {
        
    }
&lt;/script>
      `,
       "smallTab":`
&lt;template>
    &lt;Tabs size="small">
        &lt;Tab-pane label="标签一">标签一的内容&lt;/Tab-pane>
        &lt;Tab-pane label="标签二">标签二的内容&lt;/Tab-pane>
        &lt;Tab-pane label="标签三">标签三的内容&lt;/Tab-pane>
    &lt;/Tabs>
&lt;/template>
&lt;script>
    export default {
        
    }
&lt;/script>
      `,
      "cardTab":`
&lt;template>
    &lt;Tabs type="card">
        &lt;Tab-pane label="标签一">标签一的内容&lt;/Tab-pane>
        &lt;Tab-pane label="标签二">标签二的内容&lt;/Tab-pane>
        &lt;Tab-pane label="标签三">标签三的内容&lt;/Tab-pane>
    &lt;/Tabs>
&lt;/template>
&lt;script>
    export default {
        
    }
&lt;/script>
      `,
      "closableTab":`
&lt;template>
    &lt;Tabs type="card" closable @on-tab-remove="handleTabRemove">
        &lt;Tab-pane label="标签一" v-if="tab0">标签一的内容&lt;/Tab-pane>
        &lt;Tab-pane label="标签二" v-if="tab1">标签二的内容&lt;/Tab-pane>
        &lt;Tab-pane label="标签三" v-if="tab2">标签三的内容&lt;/Tab-pane>
    &lt;/Tabs>
&lt;/template>
&lt;script>
    export default {
        data () {
            return {
                tab0: true,
                tab1: true,
                tab2: true
            }
        },
        methods: {
            handleTabRemove (name) {
                this['tab' + name] = false;
            }
        }
    }
&lt;/script>
      `,
      "noanimateTab":`
&lt;template>
    &lt;Tabs :animated="false">
        &lt;Tab-pane label="标签一">标签一的内容&lt;/Tab-pane>
        &lt;Tab-pane label="标签二">标签二的内容&lt;/Tab-pane>
        &lt;Tab-pane label="标签三">标签三的内容&lt;/Tab-pane>
    &lt;/Tabs>
&lt;/template>
&lt;script>
    export default {
        
    }
&lt;/script>
      `,
      "renderTab":`
&lt;template>
    &lt;Tabs>
        &lt;Tab-pane :label="label" name="name1">标签一的内容&lt;/Tab-pane>
        &lt;Tab-pane label="标签二" name="name2">标签二的内容&lt;/Tab-pane>
        &lt;Tab-pane label="标签三" name="name3">标签三的内容&lt;/Tab-pane>
    &lt;/Tabs>
&lt;/template>
&lt;script>
    export default {
        data () {
            return {
                label: (h) => {
                    return h('div', [
                        h('span', '标签一'),
                        h('Badge', {
                            props: {
                                count: 3
                            }
                        })
                    ])
                }
            }
        }
    }
&lt;/script>
      `,
       "extraTab":`
&lt;template>
    &lt;Tabs type="card">
        &lt;Tab-pane v-for="tab in tabs" :key="tab" :label="'标签' + tab">标签{{ tab }}&lt;/Tab-pane>
        &lt;Button type="ghost" @click="handleTabsAdd" size="small" slot="extra" :disabled="tabs > 3">增加&lt;/Button>
    &lt;/Tabs>
&lt;/template>
&lt;script>
    export default {
        data () {
            return {
                tabs: 2
            }
        },
        methods: {
            handleTabsAdd () {
                this.tabs ++;
            }
        }
    }
&lt;/script>
      `
    }
  },
  methods: {
      handleTabRemove (name) {
          this['tab' + name] = false;
      },
    handleTabsAdd () {
         this.tabs ++;
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
  .demo-tabs-style1 > .ivu-tabs-card > .ivu-tabs-content {
        height: 120px;
        margin-top: -16px;
    }

    .demo-tabs-style1 > .ivu-tabs-card > .ivu-tabs-content > .ivu-tabs-tabpane {
        background: #fff;
        padding: 16px;
    }

    .demo-tabs-style1 > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab {
        border-color: transparent;
    }

    .demo-tabs-style1 > .ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active {
        border-color: #fff;
    }
    .demo-tabs-style2 > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab{
        border-radius: 0;
        background: #fff;
    }
    .demo-tabs-style2 > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active{
        border-top: 1px solid #3399ff;
    }
    .demo-tabs-style2 > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active:before{
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        background: #3399ff;
        position: absolute;
        top: 0;
        left: 0;
    }
}

</style>
