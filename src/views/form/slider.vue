<template>
  <article class="doc-slider-container">
    <h1>Slider 滑块</h1>
    <h2>概述</h2>
    <p>
      滑动输入器，用于在数值区间/自定义区间内进行选择，支持连续或离散值。
    </p>
    <h2>代码示例</h2>

    <section class="demo" id="slider1">
      <demoTab :code="sliderCode" :describeTitle="subTitle">
        <div slot="sample">
          <Slider v-model="value1"></Slider>
          <Slider v-model="value2" range></Slider>
          <Slider v-model="value3" range disabled></Slider>
        </div>
        <div slot="describe-content">
          滑块的基本用法，可以使用 v-model 双向绑定数据。<br/>
          通过设置属性 <code>range</code> 开启双滑块，通过设置属性 <code>disabled</code> 禁用滑块。<br/>
          注意，单滑块时，<code>value</code> 格式为数字，当开启双滑块时，<code>value</code> 为长度是2的数组，且每项为数字。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="slider2">
      <demoTab :code="sliderCode2" :describeTitle="subTitle2">
        <div slot="sample">
          <Slider v-model="value4" :step="10"></Slider>
          <Slider v-model="value5" :step="10" range></Slider>
        </div>
        <div slot="describe-content">
          通过设置属性 <code>step</code> 可以控制每次滑动的间隔。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="slider3">
      <demoTab :code="sliderCode3" :describeTitle="subTitle3">
        <div slot="sample">
          <Slider v-model="value6" :step="10" show-stops></Slider>
          <Slider v-model="value7" :step="10" show-stops range></Slider>
        </div>
        <div slot="describe-content">
          通过设置属性 <code>show-stops</code> 可以显示间断点，建议在 <code>step</code> 间隔不密集时使用。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="slider4">
      <demoTab :code="sliderCode4" :describeTitle="subTitle4">
        <div slot="sample">
          <Slider v-model="value8" show-input></Slider>
        </div>
        <div slot="describe-content">
          通过设置属性 <code>show-input</code> 可以显示数字输入框，配合使用，仅在单滑块模式下有效。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="slider5">
      <demoTab :code="sliderCode5" :describeTitle="subTitle5">
        <div slot="sample">
          <Slider v-model="value9" :tip-format="format"></Slider>
          <Slider v-model="value10" :tip-format="hideFormat"></Slider>
        </div>
        <div slot="describe-content">
          Slider 会把当前值传给 <code>tip-format</code>，并在 Tooltip 中显示 tip-format 的返回值，若为 null，则隐藏 Tooltip。
        </div>
      </demoTab>
    </section>

    <h2 id="slider6">API</h2>
    <h3>Slider props</h3>
    <section class="demo">
      <Table border :columns="propsColumns" :data="propsData"></Table>
    </section>
    <h3>Slider events</h3>
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
        value1: 25,
        value2: [20, 50],
        value3: [20, 50],
        value4: 30,
        value5: [20, 50],
        value6: 30,
        value7: [20, 50],
        value8: 25,
        value9: 25,
        value10: 25,
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
          attribute: 'value',
          describe:'滑块选定的值，可以使用 v-model 双向绑定数据。普通模式下，数据格式为数字，在双滑块模式下，数据格式为长度是2的数组，且每项都为数字',
          type:"Number | Array",
          default:"0"
        },{
          attribute: 'min',
          describe:'最小值',
          type:"Number",
          default:"0"
        },{
          attribute: 'max',
          describe:'最大值',
          type:"Number",
          default:"100"
        },{
          attribute: 'step',
          describe:'步长，取值建议能被（max - min）整除',
          type:"Number",
          default:"1"
        },{
          attribute: 'disabled',
          describe:'是否禁用滑块',
          type:"Boolean",
          default:"false"
        },{
          attribute: 'range',
          describe:'是否开启双滑块模式',
          type:"Boolean",
          default:"false"
        },{
          attribute: 'show-input',
          describe:'是否显示数字输入框，仅在单滑块模式下有效',
          type:"Boolean",
          default:"false"
        },{
          attribute: 'show-stops',
          describe:'是否显示间断点，建议在 step 不密集时使用',
          type:"Boolean",
          default:"false"
        },{
          attribute: 'show-tip',
          describe:'提示的显示控制，可选值为 <code>hover</code>（悬停，默认）、<code>always</code>（总是可见）、<code>never</code>（不可见）',
          type:"Boolean",
          default:"false"
        },{
          attribute: 'tip-format',
          describe:'Slider 会把当前值传给 <code>tip-format</code>，并在 Tooltip 中显示 tip-format 的返回值，若为 null，则隐藏 Tooltip',
          type:"Function",
          default:"value"
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
          describe:'在松开滑动时触发，返回当前的选值，在滑动过程中不会触发',
          return:"value"
        },{
          eventsName: 'on-input',
          describe:'滑动条数据变化时触发，返回当前的选值，在滑动过程中实时触发',
          return:"value"
        }],
        "subTitle": '基础用法',
        "sliderCode": `
          &lt;template>
             &lt;Slider v-model="value1">&lt;/Slider>
             &lt;Slider v-model="value2" range>&lt;/Slider>
             &lt;Slider v-model="value3" range disabled>&lt;/Slider>
          &lt;/template>
          &lt;script>
              export default {
                data () {
                  return {
                    value1: 25,
                    value2: [20, 50],
                    value3: [20, 50]
                  }
                }
              }
          &lt;/script>
        `,
        "subTitle2": '离散值',
        "sliderCode2": `
          &lt;template>
             &lt;Slider v-model="value4" :step="10">&lt;/Slider>
             &lt;Slider v-model="value5" :step="10" range>&lt;/Slider>
          &lt;/template>
          &lt;script>
              export default {
                data () {
                  return {
                    value4: 30,
                    value5: [20, 50]
                  }
                }
              }
          &lt;/script>
        `,
        "subTitle3": '显示间断点',
        "sliderCode3": `
          &lt;template>
             &lt;Slider v-model="value6" :step="10" show-stops>&lt;/Slider>
             &lt;Slider v-model="value7" :step="10" show-stops range>&lt;/Slider>
          &lt;/template>
          &lt;script>
              export default {
                data () {
                  return {
                    value6: 30,
                    value7: [20, 50]
                  }
                }
              }
          &lt;/script>
        `,
        "subTitle4": '带有输入框',
        "sliderCode4": `
          &lt;template>
             &lt;Slider v-model="value8" show-input>&lt;/Slider>
          &lt;/template>
          &lt;script>
              export default {
                data () {
                  return {
                    value8: 25
                  }
                }
              }
          &lt;/script>
        `,
        "subTitle5": '自定义提示',
        "sliderCode5": `
          &lt;template>
             &lt;Slider v-model="value9" :tip-format="format">&lt;/Slider>
             &lt;Slider v-model="value10" :tip-format="hideFormat">&lt;/Slider>
          &lt;/template>
          &lt;script>
              export default {
                data () {
                  return {
                    value9: 25,
                    value10: 25
                  }
                },
                methods: {
                  format (val) {
                    return '进度' + val + '%';
                  },
                  hideFormat () {
                    return null;
                  }
                }
              }
          &lt;/script>
        `
      }
    },
    methods: {
      format (val) {
        return '进度' + val + '%';
      },
      hideFormat () {
        return null;
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
