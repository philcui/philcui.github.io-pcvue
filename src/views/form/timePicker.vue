<template>
  <article class="doc-timePicker-container">
    <h1>TimePicker 时间选择器</h1>
    <h2>概述</h2>
    <p>
      选择或输入标准时间，支持选择范围。
    </p>
    <h2>代码示例</h2>

    <section class="demo" id="time1">
      <demoTab :code="timePickerCode" :describeTitle="subTitle">
        <div slot="sample" class="example">
          <Row>
            <Col span="12">
            <Time-picker type="time" placeholder="选择时间" style="width: 168px"></Time-picker>
            </Col>
            <Col span="12">
            <Time-picker type="timerange" placement="bottom-end" placeholder="选择时间" style="width: 168px"></Time-picker>
            </Col>
          </Row>
        </div>
        <div slot="describe-content">
          设置属性 <code>type</code> 为 <code>time</code> 或 <code>timerange</code> 分别显示<strong>选择单个时间</strong>和<strong>选择范围时间</strong>类型。<br/>
          设置属性 <code>placement</code> 可以更改选择器出现的方向，与 Poptip 和 Tooltip 配置一致，支持 12 个方向，详见 API。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="time2">
      <demoTab :code="timePickerCode2" :describeTitle="subTitle2">
        <div slot="sample" class="example">
          <Row>
            <Col span="12">
            <Time-picker :value="value1" format="HH点mm分ss秒" placeholder="选择时间" style="width: 168px"></Time-picker>
            </Col>
            <Col span="12">
            <Time-picker :value="value2" format="HH’mm’ss" type="timerange" placement="bottom-end" placeholder="选择时间" style="width: 168px"></Time-picker>
            </Col>
          </Row>
        </div>
        <div slot="describe-content">
          设置属性 <code>format</code> 可以改变时间的显示格式，详见 Date。<br/>
          注意，format 只是改变显示的格式，并非改变 value 值。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="time3">
      <demoTab :code="timePickerCode3" :describeTitle="subTitle3">
        <div slot="sample" class="example">
          <Row>
            <Col span="12">
            <Time-picker format="HH:mm" placeholder="选择时间" style="width: 112px"></Time-picker>
            </Col>
            <Col span="12">
            <Time-picker format="HH:mm" type="timerange" placement="bottom-end" placeholder="选择时间" style="width: 168px"></Time-picker>
            </Col>
          </Row>
        </div>
        <div slot="describe-content">
          组件浮层中的列会随着 <code>format</code> 变化，当略去 <code>format</code> 中的秒时，浮层中对应的列也会消失。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="time4">
      <demoTab :code="timePickerCode4" :describeTitle="subTitle4">
        <div slot="sample">
          <Row>
            <Col span="12">
            <Time-picker
              :disabled-hours="[1,5,10]"
              :disabled-minutes="[0,10,20]"
              placeholder="选择时间"
              style="width: 168px"></Time-picker>
            </Col>
            <Col span="12">
            <Time-picker
              hide-disabled-options
              :disabled-hours="[1,5,10]"
              :disabled-minutes="[0,10,20]"
              placeholder="选择时间"
              style="width: 168px"></Time-picker>
            </Col>
          </Row>
        </div>
        <div slot="describe-content">
          可以使用 <code>disabled-hours</code> <code>disabled-minutes</code> <code>disabled-seconds</code> 组合禁止用户选择某个时间。<br/>
          使用 <code>hide-disabled-options</code> 可以直接把不可选择的项隐藏。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="time5">
      <demoTab :code="timePickerCode5" :describeTitle="subTitle5">
        <div slot="sample" class="example">
          <Row>
            <Col span="12">
            <Time-picker confirm placeholder="选择时间" style="width: 168px"></Time-picker>
            </Col>
            <Col span="12">
            <Time-picker confirm type="timerange" placement="bottom-end" placeholder="选择时间" style="width: 168px"></Time-picker>
            </Col>
          </Row>
        </div>
        <div slot="describe-content">
          设置属性 <code>confirm</code>，选择器会有清空和确定按钮。<br/>
          确认按钮并没有影响时间的正常选择。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="time6">
      <demoTab :code="timePickerCode6" :describeTitle="subTitle6">
        <div slot="sample" class="example">
          <Time-picker
            :open="open"
            :value="value3"
            confirm
            @on-change="handleChange"
            @on-clear="handleClear"
            @on-ok="handleOk">
            <a href="javascript:void(0)" @click="handleClick">
              <Icon type="ios-clock-outline"></Icon>
              <template v-if="value3 === ''">选择时间</template>
              <template v-else>{{ value3 }}</template>
            </a>
          </Time-picker>
        </div>
        <div slot="describe-content">
          对于一些定制化的场景，可以使用 slot 配合参数 <code>open</code> <code>confirm</code> 及事件来手动控制组件的显示状态，详见示例和 API。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="time7">
      <demoTab :code="timePickerCode7" :describeTitle="subTitle7">
        <div slot="sample" class="example">
          <Row>
            <Col span="8">
            <Time-picker size="small" placeholder="选择时间"></Time-picker>
            </Col>
            <Col span="8">
            <Time-picker placeholder="选择时间"></Time-picker>
            </Col>
            <Col span="8">
            <Time-picker size="large" placeholder="选择时间"></Time-picker>
            </Col>
          </Row>
        </div>
        <div slot="describe-content">
          通过设置属性 <code>size</code> 为 <code>large</code> 或 <code>small</code> 可以调整选择器尺寸为大或小，默认不填为中。
        </div>
      </demoTab>
    </section>

    <h2 id="time8">API</h2>
    <h3>TimePicker props</h3>
    <section class="demo">
      <Table border :columns="propsColumns" :data="propsData"></Table>
    </section>
    <h3>TimePicker events</h3>
    <section class="demo">
      <Table border :columns="eventsColumns" :data="eventsData"></Table>
    </section>
    <h3>TimePicker slot</h3>
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
    data () {
      return {
        value1: '09:41:00',
        value2: ['09:41:00', '12:00:00'],
        open: false,
        value3: '',
        propsColumns:[
        {
          title: '属性',
          key: 'attribute',
        },
        {
          title: '说明',
          key: 'describe',
          width:'400px'
        },{
          title: '类型',
          key: 'type',
        },{
          title: '默认值',
          key: 'default',
        }],
        propsData:[{
          attribute: 'type',
          describe:'显示类型，可选值为 <code>time</code>、<code>timerange</code>',
          type:"String",
          default:"time"
        },{
          attribute: 'value',
          describe:'时间，可以是 JavaScript 的 Date，例如 new Date()，也可以是标准的时间格式，具体用法查看datePicker里<code>常见的日期和时间格式</code><br/>注意：value 使用 v-model 时，值是 Date 类型，可以配合 @on-change 使用 ',
          type:"Date",
          default:"-"
        },{
          attribute: 'format',
          describe:'展示的时间格式',
          type:"Date",
          default:"HH:mm:ss"
        },{
          attribute: 'placement',
          describe:'时间选择器出现的位置，可选值为<code>top</code><code>top-start</code><code>top-end</code><code>bottom</code><code>bottom-start</code><code>bottom-end</code><code>left</code><code>left-start</code><code>left-end</code><code>right</code><code>right-start</code><code>right-end</code>',
          type:"String",
          default:"bottom-start"
        },{
          attribute: 'placeholder',
          describe:'占位文本',
          type:"String",
          default:"空"
        },{
          attribute: 'confirm',
          describe:'是否显示底部控制栏',
          type:"Boolean",
          default:"false"
        },{
          attribute: 'open',
          describe:'手动控制时间选择器的显示状态，true 为显示，false 为收起。使用该属性后，选择器不会主动关闭。建议配合 slot 及 confirm 和相关事件一起使用',
          type:"Boolean",
          default:"null"
        },{
          attribute: 'size',
          describe:'尺寸，可选值为<code>large</code>和<code>small</code>或者不设置',
          type:"String",
          default:"-"
        },{
          attribute: 'disabled',
          describe:'是否禁用选择器',
          type:"Boolean",
          default:"false"
        },{
          attribute: 'clearable',
          describe:'是否显示清除按钮',
          type:"Boolean",
          default:"true"
        },{
          attribute: 'readonly',
          describe:'完全只读，开启后不会弹出选择器，只在没有设置 open 属性下生效',
          type:"Boolean",
          default:"false"
        },{
          attribute: 'editable',
          describe:'文本框是否可以输入，只在没有使用 slot 时有效',
          type:"Boolean",
          default:"true"
        },{
          attribute: 'transfer',
          describe:'是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果',
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
          describe:'时间发生变化时触发',
          return:"已经格式化后的时间，比如 09:41:00"
        },{
          eventsName: 'on-open-change',
          describe:'弹出浮层和关闭浮层时触发',
          return:"true | false"
        },{
          eventsName: 'on-ok',
          describe:'点击确定按钮时触发',
          return:"-"
        },{
          eventsName: 'on-clear',
          describe:'在清空日期时触发',
          return:"-"
        }],
        slotColumns:[
        {
          title: '名称',
          key: 'name',
        },
        {
          title: '说明',
          key: 'describe',
          width:'450px'
        }],
        slotData:[{
          name: '无',
          describe:'自定义选择器的显示内容，建议与 open 等参数一起使用，详见示例'
        }],
        "subTitle": "基础用法",
        "timePickerCode": `
        &lt;template>
           &lt;Row>
               &lt;Col span="12">
                   &lt;Time-picker type="time" placeholder="选择时间" style="width: 168px">&lt;/Time-picker>
               &lt;/Col>
               &lt;Col span="12">
                   &lt;Time-picker type="timerange" placement="bottom-end" placeholder="选择时间" style="width: 168px">&lt;/Time-picker>
               &lt;/Col>
           &lt;/Row>
        &lt;/template>
        &lt;script>
            export default {
            }
        &lt;/script>
        `,
        "subTitle2": "时间格式 ",
        "timePickerCode2": `
        &lt;template>
           &lt;Row>
               &lt;Col span="12">
                   &lt;Time-picker :value="value1" format="HH点mm分ss秒" placeholder="选择时间" style="width: 168px">&lt;/Time-picker>
               &lt;/Col>
               &lt;Col span="12">
                   &lt;Time-picker :value="value2" format="HH’mm’ss" type="timerange" placement="bottom-end" placeholder="选择时间" style="width: 168px">&lt;/Time-picker>
               &lt;/Col>
           &lt;/Row>
        &lt;/template>
        &lt;script>
            export default {
              data () {
                return {
                    value1: '09:41:00',
                    value2: ['09:41:00', '12:00:00']
                }
              }
            }
        &lt;/script>
        `,
        "subTitle3": "选择时分 ",
        "timePickerCode3": `
        &lt;template>
           &lt;Row>
               &lt;Col span="12">
                   &lt;Time-picker format="HH:mm" placeholder="选择时间" style="width: 112px">&lt;/Time-picker>
               &lt;/Col>
               &lt;Col span="12">
                   &lt;Time-picker format="HH:mm" type="timerange" placement="bottom-end" placeholder="选择时间" style="width: 168px">&lt;/Time-picker>
               &lt;/Col>
           &lt;/Row>
        &lt;/template>
        &lt;script>
            export default {
            }
        &lt;/script>
        `,
        "subTitle4": "不可选时间",
        "timePickerCode4": `
        &lt;template>
           &lt;Row>
               &lt;Col span="12">
                   &lt;Time-picker :disabled-hours="[1,5,10]" :disabled-minutes="[0,10,20]" placeholder="选择时间" style="width: 168px">&lt;/Time-picker>
               &lt;/Col>
               &lt;Col span="12">
                   &lt;Time-picker hide-disabled-options :disabled-hours="[1,5,10]" :disabled-minutes="[0,10,20]" placeholder="选择时间" style="width: 168px">&lt;/Time-picker>
               &lt;/Col>
           &lt;/Row>
        &lt;/template>
        &lt;script>
            export default {
            }
        &lt;/script>
        `,
        "subTitle5": "带有确认操作",
        "timePickerCode5": `
        &lt;template>
           &lt;Row>
               &lt;Col span="12">
                   &lt;Time-picker confirm placeholder="选择时间" style="width: 168px">&lt;/Time-picker>
               &lt;/Col>
               &lt;Col span="12">
                   &lt;Time-picker confirm type="timerange" placement="bottom-end" placeholder="选择时间" style="width: 168px">&lt;/Time-picker>
               &lt;/Col>
           &lt;/Row>
        &lt;/template>
        &lt;script>
            export default {
            }
        &lt;/script>
        `,
        "subTitle6": "手动控制组件",
        "timePickerCode6": `
        &lt;template>
           &lt;Time-picker :open="open" :value="value3" confirm type="date" @on-change="handleChange" @on-clear="handleClear" @on-ok="handleOk">
               &lt;a href="javascript:void(0)" @click="handleClick">
                   &lt;Icon type="ios-clock-outline">&lt;/Icon>
                   &lt;template v-if="value3 === ''">选择时间&lt;/template>
                   &lt;template v-else>{{ value3 }}&lt;/template>
               &lt;/a>
           &lt;/Time-picker>
        &lt;/template>
        &lt;script>
            export default {
              data () {
                return {
                    open: false,
                    value3: ''
                }
              },
              methods: {
                  handleClick () {
                      this.open = !this.open;
                  },
                  handleChange (time) {
                      this.value3 = time;
                  },
                  handleClear () {
                      this.open = false;
                  },
                  handleOk () {
                      this.open = false;
                  }
              }
            }
        &lt;/script>
        `,
        "subTitle7": "尺寸",
        "timePickerCode7": `
        &lt;template>
           &lt;Row>
               &lt;Col span="8">
                   &lt;Time-picker size="small" placeholder="选择时间">&lt;/Time-picker>
               &lt;/Col>
               &lt;Col span="8">
                   &lt;Time-picker placeholder="选择时间">&lt;/Time-picker>
               &lt;/Col>
               &lt;Col span="8">
                   &lt;Time-picker size="large" placeholder="选择时间">&lt;/Time-picker>
               &lt;/Col>
           &lt;/Row>
        &lt;/template>
        &lt;script>
            export default {
            }
        &lt;/script>
        `
      }
    },
    methods: {
      handleClick () {
        this.open = !this.open;
      },
      handleChange (time) {
        this.value3 = time;
      },
      handleClear () {
        this.open = false;
      },
      handleOk () {
        this.open = false;
      }
    }
  }
</script>
<style lang="less" scoped>
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
  .demo .example{
    height:150px;
  }
</style>
