<template>
  <article class="doc-rate-container">
    <h1>Rate 评分</h1>
    <h2>概述</h2>
    <p>
      对事物进行快速的评级操作，或对评价进行展示。
    </p>
    <h2>代码示例</h2>

    <section class="demo" id="rate1">
      <demoTab :code="rateCode" :describeTitle="subTitle">
        <div slot="sample">
          <Rate v-model="value"></Rate>
        </div>
        <div slot="describe-content">
          基本用法。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="rate2">
      <demoTab :code="rateCode2" :describeTitle="subTitle2">
        <div slot="sample">
          <Rate allow-half v-model="valueHalf"></Rate>
        </div>
        <div slot="describe-content">
          设置属性 <code>allow-half</code> 可以选中半星。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="rate3">
      <demoTab :code="rateCode3" :describeTitle="subTitle3">
        <div slot="sample">
          <Row>
            <i-col span="12">
              <Rate show-text v-model="valueText"></Rate>
            </i-col>
            <i-col span="12">
              <Rate show-text v-model="valueCustomText">
                <span style="color: #f5a623">{{ valueCustomText }}</span>
              </Rate>
            </i-col>
          </Row>
        </div>
        <div slot="describe-content">
          设置属性 <code>show-text</code> 可以显示提示文字。<br/>
          提示内容也可以通过 slot 自定义。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="rate4">
      <demoTab :code="rateCode4" :describeTitle="subTitle4">
        <div slot="sample">
          <Rate disabled v-model="valueDisabled"></Rate>
        </div>
        <div slot="describe-content">
          设置属性 <code>disabled</code> 开启只读模式，无法交互。
        </div>
      </demoTab>
    </section>

    <h2 id="rate5">API</h2>
    <h3>Rate props</h3>
    <section class="demo">
      <Table border :columns="propsColumns" :data="propsData"></Table>
    </section>
    <h3>Rate events</h3>
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
    data () {
      return {
        value: 0,
        valueHalf: 2.5,
        valueText: 3,
        valueCustomText: 3.8,
        valueDisabled: 2,
        propsColumns:[
          {
            title: '属性',
            key: 'attribute',
          },
          {
            title: '说明',
            key: 'describe',
            width:'350px'
          },{
            title: '类型',
            key: 'type',
          },{
            title: '默认值',
            key: 'default',
          }],
        propsData:[{
          attribute: 'count',
          describe:'star 总数',
          type:"Number",
          default:"5"
        },{
          attribute: 'value',
          describe:'当前 star 数，可以使用 v-model 双向绑定数据',
          type:"Number",
          default:"0"
        },{
          attribute: 'allow-half',
          describe:'是否允许半选',
          type:"Boolean",
          default:"false"
        },{
          attribute: 'disabled',
          describe:'是否只读，无法进行交互',
          type:"Boolean",
          default:"false"
        },{
          attribute: 'show-text',
          describe:'是否显示提示文字',
          type:"Boolean",
          default:"false"
        }],
        eventsColumns:[
          {
            title: '事件名',
            key: 'eventsName',
          },
          {
            title: '说明',
            key: 'describe',
            width:'450px'
          },{
            title: '返回值',
            key: 'return',
          }],
        eventsData:[{
          eventsName: 'on-change',
          describe:'评分改变时触发',
          return:"value"
        }],
        "subTitle": '基础用法',
        "rateCode": `
          &lt;template>
             &lt;Rate v-model="value">&lt;/Rate>
          &lt;/template>
          &lt;script>
              export default {
                data () {
                  return {
                    value: 0
                  }
                }
              }
          &lt;/script>
        `,
        "subTitle2": '半星',
        "rateCode2": `
          &lt;template>
             &lt;Rate allow-half v-model="valueHalf">&lt;/Rate>
          &lt;/template>
          &lt;script>
              export default {
                data () {
                  return {
                    valueHalf: 2.5
                  }
                }
              }
          &lt;/script>
        `,
        "subTitle3": '显示提示',
        "rateCode3": `
          &lt;template>
             &lt;Row>
                 &lt;i-col span="12">
                     &lt;Rate show-text v-model="valueText">&lt;/Rate>
                 &lt;/i-col>
                 &lt;i-col span="12">
                     &lt;Rate show-text v-model="valueCustomText">
                         &lt;span style="color: #f5a623">{{ valueCustomText }}&lt;/span>
                     &lt;/Rate>
                 &lt;/i-col>
             &lt;/Row>
          &lt;/template>
          &lt;script>
              export default {
                data () {
                  return {
                    valueText: 3,
                    valueCustomText: 3.8
                  }
                }
              }
          &lt;/script>
        `,
        "subTitle4": '只读',
        "rateCode4": `
          &lt;template>
             &lt;Rate disabled v-model="valueDisabled">&lt;/Rate>
          &lt;/template>
          &lt;script>
              export default {
                data () {
                  return {
                    valueDisabled: 2
                  }
                }
              }
          &lt;/script>
        `
      }
    }
  }
</script>
<style lang ="less" scoped>
  code {
    display: inline-block;
    background: #f7f7f7;
    font-family: Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;
    margin: 0 3px;
    padding: 1px 5px;
    border-radius: 3px;
    color: #666;
    border: 1px solid #eee;
  }

</style>
