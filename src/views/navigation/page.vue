<template>
  <article class="doc-alert-container">
    <h1>Page 分页</h1>
    <h2>概述</h2>
    <p>
      当数据量较多时，使用分页可以快速进行数据切换。
    </p>
    <h2>示例代码</h2>
    <section class="demo" id="page1">
      <demoTab :code="pageCode" :describeTitle="describeTitle">
        <div slot="sample">
          <Page :total="100"></Page>
        </div>
        <div slot="describe-content">
          基本的分页，页数过多时会自动折叠。
        </div>
      </demoTab>
    </section>
    <section class="demo" id="page2">
      <demoTab :code="pageCode2" :describeTitle="describeTitle2">
        <div slot="sample">
          <Page :total="100" show-sizer></Page>
        </div>
        <div slot="describe-content">
          可以切换每页显示的数量。
        </div>
      </demoTab>
    </section>
    <section class="demo" id="page3">
      <demoTab :code="pageCode3" :describeTitle="describeTitle3">
        <div slot="sample">
          <Page :total="100" show-elevator></Page>
        </div>
        <div slot="describe-content">
          快速跳转到某一页。
        </div>
      </demoTab>
    </section>
    <section class="demo" id="page4">
      <demoTab :code="pageCode4" :describeTitle="describeTitle4">
        <div slot="sample">
          <Page :total="100" show-total></Page>
        </div>
        <div slot="describe-content">
          显示总共多少条数据，接受 slot 来自定义内容，默认显示共{{ total }}条。
        </div>
      </demoTab>
    </section>
    <section class="demo" id="page5">
      <demoTab :code="pageCode5" :describeTitle="describeTitle5">
        <div slot="sample">
          <Page :current="2" :total="50" simple></Page>
        </div>
        <div slot="describe-content">
          设置simple属性即可使用简洁版的分页，通过输入页码回车切换，或使用鼠标点击切换页码，或使用键盘的上下键来切换。简洁分页不能使用总数、电梯和切换数量。
        </div>
      </demoTab>
    </section>
    <h2 id="PageAPI">API</h2>
    <h3>Page props</h3>
    <section class="demo">
      <Table border :columns="propsColumns" :data="propsData"></Table>
    </section>
    <h3>Page events</h3>
    <section class="demo">
      <Table border :columns="eventsColumns" :data="eventsData"></Table>
    </section>
    <h3>Page slot</h3>
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
    data(){
      return {
        describeTitle: '基本',
        describeTitle2: '每页数量',
        describeTitle3: '电梯',
        describeTitle4: '总数',
        describeTitle5: '简洁',
        pageCode: `&lt;template>
        &lt;div>
             &lt;Page :total="100">&lt;/Page>
        &lt;/div>
  &lt;/template>
   &lt;script>
        export default {

        }
   &lt;/script>
        `,
        pageCode2: `&lt;template>
        &lt;div>
             &lt;Page :total="100" show-sizer>&lt;/Page>
        &lt;/div>
  &lt;/template>
   &lt;script>
        export default {

        }
   &lt;/script>
        `,
        pageCode3: `&lt;template>
        &lt;div>
             &lt;Page :total="100" show-elevator>&lt;/Page>
        &lt;/div>
  &lt;/template>
   &lt;script>
        export default {

        }
   &lt;/script>
        `,
        pageCode4: `&lt;template>
        &lt;div>
             &lt;Page :total="100" show-total>&lt;/Page>
        &lt;/div>
  &lt;/template>
   &lt;script>
        export default {

        }
   &lt;/script>
        `,
        pageCode5: `&lt;template>
        &lt;div>
             &lt;Page :current="2" :total="50" simple>&lt;/Page>
        &lt;/div>
  &lt;/template>
   &lt;script>
        export default {

        }
   &lt;/script>
        `,
        propsColumns:[
          {
            title: '属性',
            key: 'attribute',
          },
          {
            title: '说明',
            key: 'describe',
            width:'450px'
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
        propsData:[
          {
            attribute: 'current',
            describe:'当前页码',
            type:"Number",
            default:"1"
          },
          {
            attribute: 'total',
            describe:'数据总数',
            type:"Number",
            default:"0"
          },
          {
            attribute: 'page-size',
            describe:'每页条数',
            type:"Number",
            default:"10"
          },
          {
            attribute: 'page-size-opts',
            describe:'每页条数切换的配置',
            type:"Array",
            default:"[10, 20, 30, 40]"
          },
          {
            attribute: 'placement',
            describe:'条数切换弹窗的展开方向，可选值为 bottom 和 top',
            type:"String",
            default:"bottom"
          },
          {
            attribute: 'simple',
            describe:'简洁版',
            type:"Boolean",
            default:"false"
          },
          {
            attribute: 'show-total',
            describe:'显示总数',
            type:"Boolean",
            default:"false"
          },
          {
            attribute: 'show-elevator',
            describe:'显示电梯，可以快速切换到某一页',
            type:"Boolean",
            default:"false"
          },
          {
            attribute: 'show-sizer',
            describe:'显示分页，用来改变page-size',
            type:"Boolean",
            default:"false"
          },
          {
            attribute: 'class-name',
            describe:'自定义 class 名称',
            type:"String",
            default:"-"
          },
          {
            attribute: 'styles',
            describe:'自定义 style 样式',
            type:"Object",
            default:"-"
          }
        ],
        eventsColumns:[
          {
            title: '事件名',
            key: 'eventsName',
          },
          {
            title: '说明',
            key: 'describe',
            width:'450px'
          },
          {
            title: '返回值',
            key: 'returnVal'
          }
        ],
        eventsData:[
          {
            eventsName:'on-change',
            describe:'页码改变的回调，返回改变后的页码',
            returnVal:'页码'
          },
          {
            eventsName:'on-page-size-change',
            describe:'切换每页条数时的回调，返回切换后的每页条数',
            returnVal:'page-size'
          }
        ],
        slotColumns:[
          {
            title: '名称',
            key: 'slotName',
            width: '200px'
          },
          {
            title: '说明',
            key: 'describe'
          }
        ],
        slotData:[
          {
            slotName:'无',
            describe:'自定义显示总数的内容'
          }
        ]
      }
    }
  }
</script>
<style>

</style>
