<template>
  <article class="doc-datePicker-container">
    <h1>DatePicker 日期选择器</h1>
    <h2>概述</h2>
    <p>
      选择或输入日期，支持年、月、日期等类型，支持选择范围。
    </p>
    <h2>代码示例</h2>

    <section class="demo">
      <demoTab :code="datePickerCode" :describeTitle="subTitle">
        <div slot="sample" class="example">
          <Row>
            <Col span="12">
            <Date-picker type="date" placeholder="选择日期" style="width: 200px"></Date-picker>
            </Col>
            <Col span="12">
            <Date-picker type="daterange" placement="bottom-end" placeholder="选择日期" style="width: 200px"></Date-picker>
            </Col>
          </Row>
        </div>
        <div slot="describe-content">
          设置属性 <code>type</code> 为 <code>date</code> 或 <code>daterange</code> 分别显示<strong>选择单日</strong>和<strong>选择范围</strong>类型。<br/>
          设置属性 <code>placement</code> 可以更改选择器出现的方向，与 Poptip 和 Tooltip 配置一致，支持 12 个方向，详见 API。
        </div>
      </demoTab>
    </section>

    <section class="demo">
      <demoTab :code="datePickerCode2" :describeTitle="subTitle2">
        <div slot="sample" class="example">
          <Row>
            <Col span="12">
            <Date-picker type="date" :options="options1" placeholder="选择日期" style="width: 200px"></Date-picker>
            </Col>
            <Col span="12">
            <Date-picker type="daterange" :options="options2" placement="bottom-end" placeholder="选择日期" style="width: 200px"></Date-picker>
            </Col>
          </Row>
        </div>
        <div slot="describe-content">
          设置属性 <code>options</code> 对象中的 <code>shortcuts</code> 可以设置快捷选项，详见示例代码。<br/>
          其中 <strong>value</strong> 为函数，必须返回一个日期，如果是 daterange 类型，需要返回一个数组。<br/>
          value 接收任何正确的日期格式，比如 2016-12-24 或 12/24/16 都是正确的。<br/>
        </div>
      </demoTab>
    </section>

    <section class="demo">
      <demoTab :code="datePickerCode3" :describeTitle="subTitle3">
        <div slot="sample" class="example">
          <Row>
            <Col span="12">
            <Date-picker :value="value1" format="yyyy年MM月dd日" type="date" placeholder="选择日期" style="width: 200px"></Date-picker>
            </Col>
            <Col span="12">
            <Date-picker :value="value2" format="yyyy/MM/dd" type="daterange" placement="bottom-end" placeholder="选择日期" style="width: 200px"></Date-picker>
            </Col>
          </Row>
        </div>
        <div slot="describe-content">
          设置属性 <code>format</code> 可以改变日期的显示格式，详见 Date。<br/>
          注意，format 只是改变显示的格式，并非改变 value 值。<br/>
        </div>
      </demoTab>
    </section>

    <section class="demo">
    <demoTab :code="datePickerCode4" :describeTitle="subTitle4">
      <div slot="sample" class="example2">
        <Date-picker type="datetime" placeholder="选择日期和时间" style="width: 200px"></Date-picker>
        <br>
        <Date-picker type="datetime" format="yyyy-MM-dd HH:mm" placeholder="选择日期和时间（不含秒）" style="width: 200px"></Date-picker>
        <br>
        <Date-picker type="datetimerange" placeholder="选择日期和时间" style="width: 300px"></Date-picker>
        <br>
        <Date-picker type="datetimerange" format="yyyy-MM-dd HH:mm" placeholder="选择日期和时间（不含秒）" style="width: 300px"></Date-picker>
      </div>
      <div slot="describe-content">
        设置属性 <code>type</code> 为 <code>datetime</code> 或 <code>datetimerange</code> 可以选择时间。<br/>
        设置 format 并且忽略秒，可以只设置小时和分钟维度。
      </div>
    </demoTab>
  </section>

    <section class="demo">
      <demoTab :code="datePickerCode5" :describeTitle="subTitle5">
        <div slot="sample" class="example">
          <Row>
            <Col span="12">
            <Date-picker type="year" placeholder="选择年" style="width: 200px"></Date-picker>
            </Col>
            <Col span="12">
            <Date-picker type="month" placeholder="选择月" style="width: 200px"></Date-picker>
            </Col>
          </Row>
        </div>
        <div slot="describe-content">
          设置属性 <code>type</code> 为 <code>year</code> 或 <code>month</code> 可以使用选择年或月的功能。
        </div>
      </demoTab>
    </section>

    <section class="demo">
      <demoTab :code="datePickerCode6" :describeTitle="subTitle6">
        <div slot="sample" class="example">
          <Row>
            <Col span="12">
            <Date-picker type="date" :options="options3" placeholder="选择日期" style="width: 200px"></Date-picker>
            </Col>
            <Col span="12">
            <Date-picker type="date" :options="options4" placeholder="选择日期" style="width: 200px"></Date-picker>
            </Col>
          </Row>
        </div>
        <div slot="describe-content">
          设置属性 <code>options</code> 对象中的 <code>disabledDate</code> 可以设置不可选择的日期。<br/>
          disabledDate 是函数，参数为当前的日期，需要返回 Boolean 是否禁用这天。
        </div>
      </demoTab>
    </section>

    <section class="demo">
      <demoTab :code="datePickerCode7" :describeTitle="subTitle7">
        <div slot="sample" class="example3">
          <Row>
            <Col span="12">
            <Date-picker type="date" confirm placeholder="选择日期" style="width: 200px"></Date-picker>
            </Col>
            <Col span="12">
            <Date-picker type="daterange" confirm placement="bottom-end" placeholder="选择日期" style="width: 200px"></Date-picker>
            </Col>
          </Row>
        </div>
        <div slot="describe-content">
          设置属性 <code>confirm</code>，选择日期后，选择器不会主动关闭，需用户确认后才可关闭。<br/>
          确认按钮并没有影响日期的正常选择。
        </div>
      </demoTab>
    </section>

    <section class="demo">
      <demoTab :code="datePickerCode8" :describeTitle="subTitle8">
        <div slot="sample" class="example3">
          <Date-picker
            :open="open"
            :value="value3"
            confirm
            type="date"
            @on-change="handleChange"
            @on-clear="handleClear"
            @on-ok="handleOk">
            <a href="javascript:void(0)" @click="handleClick">
              <Icon type="ios-calendar-outline"></Icon>
              <template v-if="value3 === ''">选择日期</template>
              <template v-else>{{ value3 }}</template>
            </a>
          </Date-picker>
        </div>
        <div slot="describe-content">
          对于一些定制化的场景，可以使用 slot 配合参数 <code>open</code> 及事件来手动控制组件的显示状态，详见示例和 API
        </div>
      </demoTab>
    </section>

    <section class="demo">
      <demoTab :code="datePickerCode9" :describeTitle="subTitle9">
        <div slot="sample" class="example">
          <Row>
            <Col span="8">
            <Date-picker size="small" type="date" placeholder="选择日期"></Date-picker>
            </Col>
            <Col span="8">
            <Date-picker type="date" placeholder="选择日期"></Date-picker>
            </Col>
            <Col span="8">
            <Date-picker size="large" type="date" placeholder="选择日期"></Date-picker>
            </Col>
          </Row>
        </div>
        <div slot="describe-content">
          通过设置属性 <code>size</code> 为 <code>large</code> 或 <code>small</code> 可以调整选择器尺寸为大或小，默认不填为中
        </div>
      </demoTab>
    </section>

    <h2 id="switch3">API</h2>
    <h3>DatePicker props</h3>
    <section class="demo">
      <Table border :columns="propsColumns" :data="propsData"></Table>
    </section>
    <h3>option<br/> 选择器额外配置</h3>
    <section class="demo">
      <Table border :columns="optionsColumns" :data="optionsData"></Table>
    </section>
    <h3>DatePicker events</h3>
    <section class="demo">
      <Table border :columns="eventsColumns" :data="eventsData"></Table>
    </section>
    <h3>DatePicker slot</h3>
    <section class="demo">
      <Table border :columns="slotColumns" :data="slotData"></Table>
    </section>

    <h3>常见的日期和时间格式</h3>
    <section class="demo">
      <Table border :columns="dateformatColumns" :data="dateformatData"></Table>
    </section>
    <h4>以上是 utvue 支持的日期格式，你可以自由组合出你需要的类型，例如：</h4>
      <ul type="disc" style="margin-left:30px;list-style: disc;">
        <li>yyyy年M月d日：2017年1月1日</li>
        <li>MM/dd/yy：12/24/16</li>
        <li>H点m分s秒：9点41分0秒</li>
      </ul>

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
        value1: '2016-01-01',
        value2: ['2016-01-01', '2016-02-15'],
        open: false,
        value3: '',
        options1: {
          shortcuts: [
            {
              text: '今天',
              value () {
                return new Date();
              },
              onClick: (picker) => {
                this.$Message.info('点击了今天');
              }
            },
            {
              text: '昨天',
              value () {
                const date = new Date();
                date.setTime(date.getTime() - 3600 * 1000 * 24);
                return date;
              },
              onClick: (picker) => {
                this.$Message.info('点击了昨天');
              }
            },
            {
              text: '一周前',
              value () {
                const date = new Date();
                date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                return date;
              },
              onClick: (picker) => {
                this.$Message.info('点击了一周前');
              }
            }
          ]
        },
        options2: {
          shortcuts: [
            {
              text: '最近一周',
              value () {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                return [start, end];
              }
            },
            {
              text: '最近一个月',
              value () {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                return [start, end];
              }
            },
            {
              text: '最近三个月',
              value () {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                return [start, end];
              }
            }
          ]
        },
        options3: {
          disabledDate (date) {
            return date && date.valueOf() < Date.now() - 86400000;
          }
        },
        options4: {
          disabledDate (date) {
            const disabledDay = date.getDate();
            return disabledDay === 15;
          }
        },
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
          describe:'显示类型，可选值为 <code>date</code>、<code>daterange</code>、<code>datetime</code>、<code>datetimerange</code>、<code>year</code>、<code>month</code>',
          type:"String",
          default:"date"
        },{
          attribute: 'value',
          describe:'日期，可以是 JavaScript 的 Date，例如 new Date()，也可以是标准的日期格式，具体用法查看底部<code>常见的日期和时间格式</code><br/>注意：value 使用 v-model 时，值是 Date 类型，可以配合 @on-change 使用 ',
          type:"Date",
          default:"-"
        },{
          attribute: 'format',
          describe:'展示的日期格式',
          type:"Date",
          default:"<ul type='disc' style='list-style: disc;'><li><strong>date | daterange</strong>：yyyy-MM-dd</li><li><strong>datetime | datetimerange</strong>： yyyy-MM-dd HH:mm:ss</li><li><strong>year</strong>：yyyy </li><li><strong>month</strong>：yyyy-MM</li></ul>"
        },{
          attribute: 'placement',
          describe:'日期选择器出现的位置，可选值为<code>top</code><code>top-start</code><code>top-end</code><code>bottom</code><code>bottom-start</code><code>bottom-end</code><code>left</code><code>left-start</code><code>left-end</code><code>right</code><code>right-start</code><code>right-end</code>',
          type:"String",
          default:"bottom-start"
        },{
          attribute: 'placeholder',
          describe:'占位文本',
          type:"String",
          default:"空"
        },{
          attribute: 'options',
          describe:'选择器额外配置，比如不可选日期与快捷选项，具体项详见下表',
          type:"Object",
          default:"-"
        },{
          attribute: 'confirm',
          describe:'是否显示底部控制栏，开启后，选择完日期，选择器不会主动关闭，需用户确认后才可关闭',
          type:"Boolean",
          default:"false"
        },{
          attribute: 'open',
          describe:'手动控制日期选择器的显示状态，true 为显示，false 为收起。使用该属性后，选择器不会主动关闭。建议配合 slot 及 confirm 和相关事件一起使用',
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
        optionsColumns:[
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
        optionsData:[{
          attribute: 'shortcuts',
          describe:'设置快捷选项，每项内容：<ul type="disc" style="margin-left:30px;list-style: disc;"><li><strong>text | String</strong>：显示的文案</li><li><strong>value | Function</strong>：返回指定的日期，如需自己控制逻辑，可不设置，并使用 onClick 回调 </li><li><strong>onClick | Function</strong>：点击时的回调，参数为当前日期选择器的 Vue 实例，当需要自定义复杂操作时，可以使用</li></ul>',
          type:"Array",
          default:"-"
        },{
          attribute: 'disabledDate',
          describe:'设置不可选择的日期，参数为当前的日期，需要返回 Boolean 是否禁用这天',
          type:"Function",
          default:"-"
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
          describe:'日期发生变化时触发',
          return:"已经格式化后的日期，比如 2016-01-01"
        },{
          eventsName: 'on-open-change',
          describe:'弹出日历和关闭日历时触发',
          return:"true | false"
        },{
          eventsName: 'on-ok',
          describe:'在 confirm 模式下有效，点击确定按钮时触发',
          return:"-"
        },{
          eventsName: 'on-clear',
          describe:'在 confirm 模式或 clearable = true 时有效，在清空日期时触发',
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
        dateformatColumns:[
          {
            title: '名称',
            key: 'name',
          },
          {
            title: '说明',
            key: 'describe',
            width:'450px'
          },{
            title: '示例',
            key: 'example',
          }],
        dateformatData:[{
          name: 'yyyy',
          describe:'年份（四位）',
          example:"2017"
        },{
          name: 'yy',
          describe:'年份（两位）',
          example:"17"
        },{
          name: 'MM',
          describe:'月份（两位）',
          example:"01"
        },{
          name: 'M',
          describe:'月份（一位）',
          example:"1"
        },{
          name: 'MMMM',
          describe:'月份（英文）',
          example:"January"
        },{
          name: 'MMM',
          describe:'月份（英文简写）',
          example:"Jan"
        },{
          name: 'dd',
          describe:'日期（两位）',
          example:"01"
        },{
          name: 'd',
          describe:'日期（一位）',
          example:"1"
        },{
          name: 'Do',
          describe:'日期（简写）',
          example:"1st"
        },{
          name: 'DD',
          describe:'星期（两位）',
          example:"00"
        },{
          name: 'D',
          describe:'星期（一位）',
          example:"0"
        },{
          name: 'dddd',
          describe:'星期（英文）',
          example:"Monday"
        },{
          name: 'ddd',
          describe:'星期（英文简写）',
          example:"Mon"
        },{
          name: 'HH',
          describe:'小时（24小时制两位）',
          example:"01"
        },{
          name: 'H',
          describe:'小时（24小时制一位）',
          example:"1"
        },{
          name: 'hh',
          describe:'小时（12小时制两位）',
          example:"01"
        },{
          name: 'h',
          describe:'小时（12小时制一位）',
          example:"1"
        },{
          name: 'mm',
          describe:'分钟（两位）',
          example:"01"
        },{
          name: 'm',
          describe:'分钟（一位）',
          example:"1"
        },{
          name: 'ss',
          describe:'秒钟（两位）',
          example:"01"
        },{
          name: 's',
          describe:'秒钟（一位）',
          example:"1"
        },{
          name: 'SSS',
          describe:'毫秒（三位）',
          example:"019"
        },{
          name: 'SS',
          describe:'毫秒（两位）',
          example:"01"
        },{
          name: 'S',
          describe:'毫秒（一位）',
          example:"1"
        },{
          name: 'A',
          describe:'上午与下午（大写）',
          example:"AM/PM"
        },{
          name: 'a',
          describe:'上午与下午（小写）',
          example:"am/pm"
        },{
          name: 'ZZ',
          describe:'时区',
          example:"+0800"
        }],
        "subTitle": "基础用法",
        "datePickerCode": `
          &lt;template>
             &lt;Row>
                 &lt;Col span="12">
                     &lt;Date-picker type="date" placeholder="选择日期" style="width: 200px">&lt;/Date-picker>
                 &lt;/Col>
                 &lt;Col span="12">
                     &lt;Date-picker type="daterange" placement="bottom-end" placeholder="选择日期" style="width: 200px">&lt;/Date-picker>
                 &lt;/Col>
             &lt;/Row>
          &lt;/template>
          &lt;script>
              export default {
              }
          &lt;/script>
          `,
        "subTitle2": "快捷方式",
        "datePickerCode2": `
          &lt;template>
             &lt;Row>
                 &lt;Col span="12">
                     &lt;Date-picker type="date" :options="options1" placeholder="选择日期" style="width: 200px">&lt;/Date-picker>
                 &lt;/Col>
                 &lt;Col span="12">
                     &lt;Date-picker type="daterange" :options="options2" placement="bottom-end" placeholder="选择日期" style="width: 200px">&lt;/Date-picker>
                 &lt;/Col>
             &lt;/Row>
          &lt;/template>
          &lt;script>
              export default {
                data () {
                  return {
                      options1: {
                          shortcuts: [
                              {
                                  text: '今天',
                                  value () {
                                      return new Date();
                                  },
                                  onClick: (picker) => {
                                      this.$Message.info('点击了今天');
                                  }
                              },
                              {
                                  text: '昨天',
                                  value () {
                                      const date = new Date();
                                      date.setTime(date.getTime() - 3600 * 1000 * 24);
                                      return date;
                                  },
                                  onClick: (picker) => {
                                      this.$Message.info('点击了昨天');
                                  }
                              },
                              {
                                  text: '一周前',
                                  value () {
                                      const date = new Date();
                                      date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                                      return date;
                                  },
                                  onClick: (picker) => {
                                      this.$Message.info('点击了一周前');
                                  }
                              }
                          ]
                      },
                      options2: {
                          shortcuts: [
                              {
                                  text: '最近一周',
                                  value () {
                                      const end = new Date();
                                      const start = new Date();
                                      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                                      return [start, end];
                                  }
                              },
                              {
                                  text: '最近一个月',
                                  value () {
                                      const end = new Date();
                                      const start = new Date();
                                      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                                      return [start, end];
                                  }
                              },
                              {
                                  text: '最近三个月',
                                  value () {
                                      const end = new Date();
                                      const start = new Date();
                                      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                                      return [start, end];
                                  }
                              }
                          ]
                      }
                  }
                }
              }
          &lt;/script>
          `,
        "subTitle3": "日期格式",
        "datePickerCode3": `
          &lt;template>
             &lt;Row>
                 &lt;Col span="12">
                     &lt;Date-picker :value="value1" format="yyyy年MM月dd日" type="date" placeholder="选择日期" style="width: 200px">&lt;/Date-picker>
                 &lt;/Col>
                 &lt;Col span="12">
                     &lt;Date-picker :value="value2" format="yyyy/MM/dd" type="daterange" placement="bottom-end" placeholder="选择日期" style="width: 200px">&lt;/Date-picker>
                 &lt;/Col>
             &lt;/Row>
          &lt;/template>
          &lt;script>
              export default {
                data () {
                  return {
                      value1: '2016-01-01',
                      value2: ['2016-01-01', '2016-02-15']
                  }
                }
              }
          &lt;/script>
          `,
        "subTitle4": "日期时间选择",
        "datePickerCode4": `
          &lt;template>
             &lt;Date-picker type="datetime" placeholder="选择日期和时间" style="width: 200px">&lt;/Date-picker>
             &lt;br/>
             &lt;Date-picker type="datetime" format="yyyy-MM-dd HH:mm" placeholder="选择日期和时间（不含秒）" style="width: 200px">&lt;/Date-picker>
             &lt;br/>
             &lt;Date-picker type="datetimerange" placeholder="选择日期和时间" style="width: 300px">&lt;/Date-picker>
             &lt;br/>
             &lt;Date-picker type="datetimerange" format="yyyy-MM-dd HH:mm" placeholder="选择日期和时间（不含秒）" style="width: 300px">&lt;/Date-picker>
          &lt;/template>
          &lt;script>
              export default {
              }
          &lt;/script>
          `,
        "subTitle5": "年和月",
        "datePickerCode5": `
          &lt;template>
             &lt;Row>
                 &lt;Col span="12">
                     &lt;Date-picker type="year" placeholder="选择年" style="width: 200px">&lt;/Date-picker>
                 &lt;/Col>
                 &lt;Col span="12">
                     &lt;Date-picker type="month" placeholder="选择月" style="width: 200px">&lt;/Date-picker>
                 &lt;/Col>
             &lt;/Row>
          &lt;/template>
          &lt;script>
              export default {
              }
          &lt;/script>
          `,
        "subTitle6": "不可选日期 ",
        "datePickerCode6": `
          &lt;template>
             &lt;Row>
                 &lt;Col span="12">
                     &lt;Date-picker type="date" :options="options3" placeholder="选择日期" style="width: 200px">&lt;/Date-picker>
                 &lt;/Col>
                 &lt;Col span="12">
                     &lt;Date-picker type="date" :options="options4" placeholder="选择日期" style="width: 200px">&lt;/Date-picker>
                 &lt;/Col>
             &lt;/Row>
          &lt;/template>
          &lt;script>
              export default {
                data () {
                  return {
                      options3: {
                          disabledDate (date) {
                              return date && date.valueOf() < Date.now() - 86400000;
                          }
                      },
                      options4: {
                          disabledDate (date) {
                              const disabledDay = date.getDate();
                              return disabledDay === 15;
                          }
                      }
                  }
                }
              }
          &lt;/script>
          `,
        "subTitle7": "带有确认操作",
        "datePickerCode7": `
          &lt;template>
             &lt;Row>
                 &lt;Col span="12">
                     &lt;Date-picker type="date" confirm placeholder="选择日期" style="width: 200px">&lt;/Date-picker>
                 &lt;/Col>
                 &lt;Col span="12">
                     &lt;Date-picker type="daterange" confirm placement="bottom-end" placeholder="选择日期" style="width: 200px">&lt;/Date-picker>
                 &lt;/Col>
             &lt;/Row>
          &lt;/template>
          &lt;script>
              export default {
              }
          &lt;/script>
          `,
        "subTitle8": "手动控制组件 ",
        "datePickerCode8": `
          &lt;template>
             &lt;Date-picker :open="open" :value="value3" confirm type="date" @on-change="handleChange" @on-clear="handleClear" @on-ok="handleOk">
                 &lt;a href="javascript:void(0)" @click="handleClick">
                     &lt;Icon type="ios-calendar-outline">&lt;/Icon>
                     &lt;template v-if="value3 === ''">选择日期&lt;/template>
                     &lt;template v-else>{{ value3 }}&lt;/template>
                 &lt;/a>
             &lt;/Date-picker>
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
                    handleChange (date) {
                        this.value3 = date;
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
        "subTitle9": "尺寸 ",
        "datePickerCode9": `
          &lt;template>
             &lt;Row>
                 &lt;Col span="8">
                     &lt;Date-picker size="small" type="date" placeholder="选择日期">&lt;/Date-picker>
                 &lt;/Col>
                 &lt;Col span="8">
                     &lt;Date-picker type="date" placeholder="选择日期">&lt;/Date-picker>
                 &lt;/Col>
                 &lt;Col span="8">
                     &lt;Date-picker size="large" type="date" placeholder="选择日期">&lt;/Date-picker>
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
      handleChange (date) {
        this.value3 = date;
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
<style lang="less">
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
  min-height: 170px;
}
.demo .example2{
  min-height: 350px;
}
.demo .example3{
  min-height: 200px;
}
</style>
