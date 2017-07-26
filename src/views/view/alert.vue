<template>
  <article class="doc-alert-container">
    <h1>Alert 警告提示</h1>
    <h2>概述</h2>
    <p>
      静态地呈现一些警告信息，可手动关闭。
    </p>
    <h2>示例代码</h2>
    <section class="demo" id="basic">
      <demoTab :code="basicAlert" :describeTitle="subTitle">
        <div slot="sample">
           <Alert>消息提示文案</Alert>
           <Alert type="success">成功提示文案</Alert>
           <Alert type="warning">警告提示文案</Alert>
           <Alert type="error">错误提示文案</Alert>
        </div>
        <div slot="describe-content">
           基本使用方法，有四种样式可以选择info、success、warning、error。
        </div>
      </demoTab>
    </section>
    <section class="demo" id="describe">
      <demoTab :code="descAlert" :describeTitle="subTitledec">
        <div slot="sample">
           <Alert>
            消息提示文案
            <template slot="desc">消息提示的描述文案消息</template>
            </Alert>
           <Alert type="success">
               成功提示文案
               <span slot="desc">成功的提示描述文案</span>
           </Alert>
           <Alert type="warning">
               警告提示文案
               <template slot="desc">
                   警告的提示描述文案
               </template>
           </Alert>
           <Alert type="error">
               失败提示文案
               <template slot="desc">失败的提示描述文案<br/>失败的提示描述文案</template>
           </Alert>
        </div>
        <div slot="describe-content">
           自定义&lt;slot name="desc">描述内容。
        </div>
      </demoTab>
    </section>
    <section class="demo" id="icon">
      <demoTab :code="iconAlert" :describeTitle="subTitleicon">
        <div slot="sample">
           <Alert show-icon>消息提示文案</Alert>
           <Alert type="success" show-icon>成功提示文案</Alert>
           <Alert type="warning" show-icon>警告提示文案</Alert>
           <Alert type="error" show-icon>错误提示文案</Alert>
           <Alert show-icon>
               消息提示文案
               <template slot="desc">消息提示的描述文案消息提示的描述文案消息提示的描述文案消息提示的描述文案消息提示的描述文案</template>
           </Alert>
           <Alert type="success" show-icon>
               成功提示文案
               <span slot="desc">成功的提示描述文案成功的提示描述文案成功的提示描述文案成功的提示描述文案成功的提示描述文案</span>
           </Alert>
           <Alert type="warning" show-icon>
               警告提示文案
               <template slot="desc">
                   警告的提示描述文案警告的提示描述文案警告的提示描述文案
               </template>
           </Alert>
           <Alert type="error" show-icon>
               错误提示文案
               <span slot="desc">
                   自定义错误描述文案。
               </span>
           </Alert>
           <Alert show-icon>
               自定义图标
               <Icon type="ios-lightbulb-outline" slot="icon"></Icon>
               <template slot="desc">自定义图标文案自定义图标文案自定义图标文案自定义图标文案自定义图标文案</template>
           </Alert>
        </div>
        <div slot="describe-content" id="icon">
           根据 type 属性自动添加不同图标，或者自定义图标 slot 。
        </div>
      </demoTab>
    </section>
    <section class="demo" id="close">
      <demoTab :code="closableAlert" :describeTitle="subTitlecloseable">
        <div slot="sample">
           <Alert closable>消息提示文案</Alert>
           <Alert type="success" show-icon closable>
               成功提示文案
               <span slot="desc">成功的提示描述文案成功的提示描述文案成功的提示描述文案成功的提示描述文案成功的提示描述文案</span>
           </Alert>
           <Alert type="warning" closable>
               自定义关闭内容
               <span slot="close">不再提示</span>
           </Alert>
        </div>
        <div slot="describe-content">
           显示关闭按钮，点击可关闭提示，也可以自定义关闭 slot 。
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
      "subTitledec": "含描述信息",
      "subTitleicon": "图标",
      "subTitlecloseable": "可关闭",
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
      "basicAlert": `
&lt;template>
  &lt;Alert>消息提示文案&lt;/Alert>
  &lt;Alert type="success">成功提示文案&lt;/Alert>
  &lt;Alert type="warning">警告提示文案&lt;/Alert>
  &lt;Alert type="error">错误提示文案&lt;/Alert>
&lt;/template>
&lt;script>
    export default {
        
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
      `,
      "iconAlert":`
&lt;template>
  &lt;Alert show-icon>消息提示文案&lt;/Alert>
  &lt;Alert type="success" show-icon>成功提示文案&lt;/Alert>
  &lt;Alert type="warning" show-icon>警告提示文案&lt;/Alert>
  &lt;Alert type="error" show-icon>错误提示文案&lt;/Alert>
  &lt;Alert show-icon>
      消息提示文案
      &lt;template slot="desc">消息提示的描述文案消息提示的描述文案消息提示的描述文案消息提示的描述文案消息提示的描述文案&lt;/template>
  &lt;/Alert>
  &lt;Alert type="success" show-icon>
      成功提示文案
      &lt;span slot="desc">成功的提示描述文案成功的提示描述文案成功的提示描述文案成功的提示描述文案成功的提示描述文案&lt;/span>
  &lt;/Alert>
  &lt;Alert type="warning" show-icon>
      警告提示文案
      &lt;template slot="desc">
          警告的提示描述文案警告的提示描述文案警告的提示描述文案
      &lt;/template>
  &lt;/Alert>
  &lt;Alert type="error" show-icon>
      错误提示文案
      &lt;span slot="desc">
          自定义错误描述文案。
      &lt;/span>
  &lt;/Alert>
  &lt;Alert show-icon>
      自定义图标
      &lt;Icon type="ios-lightbulb-outline" slot="icon">&lt;/Icon>
      &lt;template slot="desc">自定义图标文案自定义图标文案自定义图标文案自定义图标文案自定义图标文案&lt;/template>
  &lt;/Alert>
&lt;/template>
&lt;script>
    export default {
        
    }
&lt;/script>
      `,
       "closableAlert":`
&lt;template>
  &lt;Alert closable>消息提示文案&lt;/Alert>
  &lt;Alert type="success" show-icon closable>
      成功提示文案
      &lt;span slot="desc">成功的提示描述文案成功的提示描述文案成功的提示描述文案成功的提示描述文案成功的提示描述文案&lt;/span>
  &lt;/Alert>
  &lt;Alert type="warning" closable>
      自定义关闭内容
      &lt;span slot="close">不再提示&lt;/span>
  &lt;/Alert>
&lt;/template>
&lt;script>
    export default {
        
    }
&lt;/script>
      `
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
