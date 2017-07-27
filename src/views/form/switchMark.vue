<template>
  <article class="doc-alert-container">
    <h1>Switch 开关</h1>
    <h2>概述</h2>
    <p>
      在两种状态间切换时用到的开关选择器。
    </p>
    <h2>示例代码</h2>
    <section class="demo" id="switch1">
    <demoTab :code="checkBoxCode" :describeTitle="describeTitle">
      <div slot="sample">
        <div class="flex">
          <i-switch v-model="m1">
            <span slot="open">开</span>
            <span slot="close">关</span>
          </i-switch>
          {{ m1 }}
        </div>
      </div>
      <div slot="describe-content">
        基本用法，状态切换时会触发事件。<br>
        disabled:禁用开关,默认为false。
      </div>
    </demoTab>
    </section>
    <section class="demo" id="switch2">
      <demoTab :code="checkBoxCode2" :describeTitle="describeTitle2">
        <div slot="sample">
            <div class="pt">
              <i-switch :disabled="disabled"></i-switch>
            </div>
        </div>
        <div slot="describe-content">
          基本用法，状态切换时会触发事件。<br>
          disabled:禁用开关,默认为false。
        </div>
      </demoTab>
    </section>

    <h2 id="switch3">API</h2>
    <h3>Switch props</h3>
    <section class="demo">
      <Table border :columns="propsColumns" :data="propsData"></Table>
    </section>
    <h3>Switch events </h3>
    <section class="demo">
      <Table border :columns="propsColumns2" :data="propsData2"></Table>
    </section>
    <h3>Switch slot</h3>
    <section class="demo">
      <Table border :columns="propsColumns3" :data="propsData3"></Table>
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
        describeTitle:'基本',
        describeTitle2:'禁用',
        m1: false,
        disabled:true,
        propsColumns:[
          {
            title: '属性',
            key: 'attribute',
          },
          {
            title: '说明',
            key: 'describe',
            width:'350px'
          },
          {
            title: '类型',
            key: 'type',
          },
          {
            title: '默认值',
            key: 'default'
          }],
        propsColumns2:[
          {
            title: '事件名',
            key: 'event',
          },
          {
            title: '说明',
            key: 'describe',
            width:'450px'
          },
          {
            title: '返回值',
            key: 'returnKey',
          }
        ],
        propsColumns3:[
          {
          title: '名称',
          key: 'title',
        },
          {
            title: '说明',
            key: 'describe',
            width:'450px'
          }],
        propsData:[{
          attribute: 'value',
          describe:'指定当前是否选中，可以使用 v-model 双向绑定数据',
          type:"Boolean",
          default:"false"
        },{
          attribute: 'size',
          describe:'开关的尺寸，可选值为large、small或者不写。建议开关如果使用了2个汉字的文字，使用 large。',
          type:"String",
          default:"-"
        },{
          attribute: 'disabled',
          describe:'	禁用开关',
          type:"Boolean",
          default:"false"
        }],
        propsData2:[{
          event:'on-change',
          describe:'	开关变化时触发，返回当前的状态',
          returnKey:'true | false'
        }],
        propsData3:[
          {
            title:'open',
            describe:'自定义显示打开时的内容',
            width:'200px'
          },
          {
            title:'close',
            describe:'自定义显示关闭时的内容',
          }
        ],
        checkBoxCode: `  &lt;template>
        &lt;div>
            &lt;i-switch v-model="m1">
            &lt;span slot="open">开&lt;/span>
            &lt;span slot="close">关&lt;/span>
            &lt;/i-switch>
            {{ m1 }}
        &lt;/div>
  &lt;/template>
    &lt;script>
        export default {
            data () {
                return {
                    m1: false,
                    disabled:true,
                }
            },
            methods: {
              change (status) {
                console.log(status)
              }
          }
        }
    &lt;/script>`,
        checkBoxCode2: `  &lt;template>
        &lt;div>
            &lt;i-switch :disabled="disabled">&lt;/i-switch>
        &lt;/div>
  &lt;/template>
    &lt;script>
        export default {
            data () {
                return {
                    disabled:true,
                }
            },

        }
    &lt;/script>`,
      }
    },
    methods: {
      change (status) {
        console.log(status)
      }
    }
  }
</script>
<style>
.pt {
  padding-top: 30px;
}
</style>
