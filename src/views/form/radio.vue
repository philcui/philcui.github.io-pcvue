<template>
  <article class="doc-alert-container">
    <h1>Radio 单选框</h1>
    <h2>概述</h2>
    <p>
      基本组件-单选框。主要用于一组可选项单项选择，或者单独用于切换到选中状态。
    </p>
    <h2>示例代码</h2>
    <section class="demo" id="radio1">
      <demoTab :code="radioCode" :describeTitle="describeTitle">
        <div slot="sample">
          <Radio v-model="single">Radio</Radio>
        </div>
        <div slot="describe-content">
          使用 v-model 可以双向绑定数据。
        </div>
      </demoTab>
    </section>
    <section class="demo" id="radio2">
      <demoTab :code="radioCode2" :describeTitle="describeTitle2">
        <div slot="sample">
          <Radio v-model="disabledSingle" disabled>Radio</Radio>
          <Radio-group v-model="disabledGroup">
            <Radio label="金斑蝶" disabled></Radio>
          </Radio-group>
        </div>
        <div slot="describe-content">
          通过设置disabled属性来禁用单选框。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="radio3">
      <demoTab :code="radioCode2" :describeTitle="describeTitle3">
        <div slot="sample">
          <Radio-group v-model="phone">
            <Radio label="apple">
              <Icon type="social-apple"></Icon>
              <span>Apple</span>
            </Radio>
            <Radio label="android">
              <Icon type="social-android"></Icon>
              <span>Android</span>
            </Radio>
            <Radio label="windows">
              <Icon type="social-windows"></Icon>
              <span>Windows</span>
            </Radio>
          </Radio-group>
          <br>
          <br>
          <Radio-group v-model="animal">
            <Radio label="金斑蝶"></Radio>
            <Radio label="爪哇犀牛"></Radio>
            <Radio label="印度黑羚"></Radio>
          </Radio-group>
        </div>
        <div slot="describe-content">
          使用Radio-group实现一组互斥的选项组。<br>
          在组合使用时，Radio 使用 label 来自动判断。每个 Radio 的内容可以自定义，如不填写则默认使用 label 的值。
        </div>
      </demoTab>
    </section>
    <h2 id="radio4">API</h2>
    <h3>Radio props</h3>
    <section class="demo">
      <Table border :columns="propsColumns" :data="propsData"></Table>
    </section>

    <h3>Radio events</h3>
    <section class="demo">
      <Table border :columns="eventColumns" :data="eventData"></Table>
    </section>

    <h3>RadioGroup props</h3>
    <section class="demo">
      <Table border :columns="propsColumns" :data="rgData"></Table>
    </section>

    <h3>RadioGroup events </h3>
    <section class="demo">
      <Table border :columns="eventColumns" :data="eventData2"></Table>
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
          single: false,
          describeTitle:'单独使用',
          describeTitle2:'不可用',
          describeTitle3:'组合使用',
          disabledSingle: true,
          disabledGroup: '爪哇犀牛',
          phone: 'apple',
          animal: '爪哇犀牛',
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
          eventColumns:[ {
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
            }],
          propsData:[
           {
            attribute: 'value',
            describe:'只在单独使用时有效。可以使用 v-model 双向绑定数据',
            type:"Boolean",
            default:"false"
          },{
            attribute: 'label',
            describe:'只在组合使用时有效。指定当前选项的 value 值，组合会自动判断当前选择的项目',
            type:"String | Number",
            default:"-"
          },{
            attribute: 'disabled',
            describe:'是否禁用当前项',
            type:"Boolean",
            default:"false"
          }],
          eventData:[
            {
              event:'on-change',
              describe:'在选项状态发生改变时触发，返回当前状态。通过修改外部的数据改变时不会触发',
              returnKey:'...'
            }
          ],
          eventData2:[
            {
              event:'on-change',
              describe:'在选项状态发生改变时触发，返回当前选中的项。通过修改外部的数据改变时不会触发',
              returnKey:'...'
            }
          ],
          rgData:[
            {
              attribute: 'value',
              describe:'指定当前选中的项目数据。可以使用 v-model 双向绑定数据',
              type:"String | Number",
              default:"-"
            },{
              attribute: 'type',
              describe:'可选值为 button 或不填，为 button 时使用按钮样式',
              type:"String",
              default:"-"
            },{
              attribute: 'size',
              describe:'尺寸，只对按钮样式生效，可选值为large和small或者不设置',
              type:"String",
              default:"-"
            },{
              attribute: 'vertical',
              describe:'是否垂直排列，按钮样式下无效',
              type:"Boolean",
              default:"false"
            }

          ],
          radioCode:`  &lt;template>
        &lt;div>
             &lt;Radio v-model="single">Radio &lt;/Radio>
        &lt;/div>
  &lt;/template>
    &lt;script>
        export default {
            data () {
                return {
                    single: false,
                }
            }
        }
    &lt;/script>
        `,
          radioCode2: `  &lt;template>
        &lt;div>
            &lt;Radio v-model="disabledSingle" disabled>Radio &lt;/Radio>
               &lt;Radio-group v-model="disabledGroup">
                 &lt;Radio label="金斑蝶" disabled> &lt;/Radio>
               &lt;/Radio-group>
        &lt;/div>
  &lt;/template>
    &lt;script>
        export default {
            data () {
                return {
                    disabledSingle: true,
                    disabledGroup: '爪哇犀牛'
                }
            }
        }
    &lt;/script>`,
          radioCode2: `   &lt;template>
        &lt;div>
             &lt;Radio-group v-model="phone">
             &lt;Radio label="apple">
               &lt;Icon type="social-apple"> &lt;/Icon>
               &lt;span>Apple &lt;/span>
            &lt;/Radio>
             &lt;Radio label="android">
               &lt;Icon type="social-android"> &lt;/Icon>
               &lt;span>Android&lt;/span>
             &lt;/Radio>
             &lt;Radio label="windows">
               &lt;Icon type="social-windows"> &lt;/Icon>
               &lt;span>Windows &lt;/span>
             &lt;/Radio>
           &lt;/Radio-group>
           &lt;br>
           &lt;br>
           &lt;Radio-group v-model="animal">
             &lt;Radio label="金斑蝶"> &lt;/Radio>
             &lt;Radio label="爪哇犀牛"> &lt;/Radio>
             &lt;Radio label="印度黑羚"> &lt;/Radio>
           &lt;/Radio-group>
         &lt;/div>
   &lt;/template>
     &lt;script>
        export default {
            data () {
                return {
                    phone: 'apple',
                    animal: '爪哇犀牛'
                }
            }
        }
    &lt;/script>`,
        }
    }
  }
</script>
<style>

</style>
