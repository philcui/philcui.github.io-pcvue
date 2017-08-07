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
           设置属性 type 为 card 可以显示卡片样式，常用于容器顶部。
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
      "subTitle": "基础用法",
      "subTitledisabled": "禁用",
      "subTitleicon": "图标",
      "subTitlesmall": "迷你型",
      "subTitlecard": "卡片样式",
      "subTitleclosable": "可关闭",
      "tab0": true,
      "tab1": true,
      "tab2": true,
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
      `
    }
  },
  methods: {
      handleTabRemove (name) {
          this['tab' + name] = false;
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
}
</style>
