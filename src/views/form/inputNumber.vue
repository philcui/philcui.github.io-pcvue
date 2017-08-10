<template>
  <article class="doc-alert-container">
    <h1>InputNumber 数字输入框</h1>
    <h2>概述</h2>
    <p>
      使用鼠标或键盘输入一定范围的标准数值。
    </p>
    <h2>示例代码</h2>
    <section class="demo" id="inputNumber1">
      <demoTab :code="inputNumberCode" :describeTitle="describeTitle">
        <div slot="sample">
          <Input-number :max="10" :min="1" v-model="value1"></Input-number>
        </div>
        <div slot="describe-content">
          可以通过输入、鼠标点击或键盘的上下键来改变数值大小。
        </div>
      </demoTab>
    </section>
    <section class="demo" id="inputNumber2">
      <demoTab :code="inputNumberCode2" :describeTitle="describeTitle2">
        <div slot="sample">
          <Input-number :max="10" :min="1" :step="1.2" v-model="value2"></Input-number>
        </div>
        <div slot="describe-content">
          通过设置step属性控制每次改变的精度。
        </div>
      </demoTab>
    </section>
    <section class="demo" id="inputNumber3">
      <demoTab :code="inputNumberCode3" :describeTitle="describeTitle3">
        <div slot="sample">
          <Input-number v-model="value3" size="small"></Input-number>
          <Input-number v-model="value4"></Input-number>
          <Input-number v-model="value5" size="large"></Input-number>
        </div>
        <div slot="describe-content">
          通过设置size属性为large和small将输入框设置为大和小尺寸，不设置为默认（中）尺寸。
        </div>
      </demoTab>
    </section>
    <section class="demo" id="inputNumber4">
      <demoTab :code="inputNumberCode4" :describeTitle="describeTitle4">
        <div slot="sample">
          <Input-number v-model="value6" :disabled="disabled"></Input-number>
          <Button type="primary" @click="disabled = !disabled">Toggle Disabled</Button>
        </div>
        <div slot="describe-content">
          通过设置disabled属性禁用输入框，点击按钮切换状态。
        </div>
      </demoTab>
    </section>
    <h2 id="PageAPI">API</h2>
    <h3>InputNumber props</h3>
    <section class="demo">
      <Table border :columns="propsColumns" :data="propsData"></Table>
    </section>
    <h3>InputNumber events</h3>
    <section class="demo">
      <Table border :columns="eventsColumns" :data="eventsData"></Table>
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
        describeTitle: '基础用法',
        value1: 1,
        describeTitle2: '小数',
        value2: 1,
        describeTitle3: '尺寸',
        value3: 2,
        value4: 2,
        value5: 2,
        describeTitle4: '不可用 ',
        disabled: true,
        value6: 1,
        inputNumberCode: `&lt;template>
        &lt;div>
             &lt;Input-number :max="10" :min="1" v-model="value1">&lt;/Input-number>
        &lt;/div>
  &lt;/template>
   &lt;script>
        export default {
            data () {
              return {
                value1: 1
              }
            }
        }
   &lt;/script>
        `,
        inputNumberCode2:  `&lt;template>
        &lt;div>
             &lt;Input-number :max="10" :min="1" :step="1.2" v-model="value2">&lt;/Input-number>
        &lt;/div>
  &lt;/template>
   &lt;script>
        export default {
            data () {
              return {
                value2: 1
              }
            }
        }
   &lt;/script>
        `,
        inputNumberCode3:  `&lt;template>
        &lt;div>
             &lt;Input-number v-model="value3" size="small">&lt;/Input-number>
             &lt;Input-number v-model="value4">&lt;/Input-number>
             &lt;Input-number v-model="value5" size="large">&lt;/Input-number>
        &lt;/div>
  &lt;/template>
   &lt;script>
        export default {
            data () {
              return {
                value3: 2,
                value4: 2,
                value5: 2
              }
            }
        }
   &lt;/script>
        `,
        inputNumberCode4:  `&lt;template>
        &lt;div>
             &lt;Input-number v-model="value6" :disabled="disabled">&lt;/Input-number>
             &lt;Button type="primary" @click="disabled = !disabled">Toggle Disabled&lt;/Button>
        &lt;/div>
  &lt;/template>
   &lt;script>
        export default {
            data () {
              return {
                disabled: true,
                value6: 1
              }
            }
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
            attribute: 'max',
            describe:'最大值',
            type:"Number",
            default:"Infinity"
          },
          {
            attribute: 'min',
            describe:'最小值',
            type:"Number",
            default:"-Infinity"
          },
          {
            attribute: 'value',
            describe:'当前值，可以使用 v-model 双向绑定数据',
            type:"Number",
            default:"1"
          },
          {
            attribute: 'step',
            describe:'每次改变的步伐，可以是小数',
            type:"Number",
            default:"1"
          },
          {
            attribute: 'size',
            describe:'输入框尺寸，可选值为large和small或者不填',
            type:"String",
            default:"-"
          },
          {
            attribute: 'disabled',
            describe:'设置禁用状态',
            type:"Boolean",
            default:"false"
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
            describe:'数值改变时的回调，返回当前值',
            returnVal:'当前值'
          }
        ]
      }
    }
  }
</script>
<style>

</style>
