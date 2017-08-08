<template>
  <article class="doc-select-container">
    <h1>Select 选择器</h1>
    <h2>概述</h2>
    <p>
      使用模拟的增强下拉选择器来代替浏览器原生的选择器。<br/>
      选择器支持单选、多选、搜索，以及键盘快捷操作。
    </p>
    <blockquote>注意：非 template/render 模式下，需使用<code>i-select</code>、<code>i-option</code>。</blockquote>
    <h2>代码示例</h2>
    <section class="demo" id="select1">
      <demoTab :code="selectCode" :describeTitle="subTitle">
        <div slot="sample">
          <Select v-model="model1" style="width:200px">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </div>
        <div slot="describe-content">
          基本用法。可以使用 <code>v-model</code> 双向绑定数据。<br/>
          单选时，<code>value</code> 只接受字符串和数字类型，多选时，只接受数组类型，组件会自动根据<code>Option</code>的<code>value</code>来返回选中的数据。<br/>
          可以给<code>Select</code>添加 <code>style</code> 样式，比如宽度。<br/>
          在展开选择器后，可以使用键盘的up和down快速上下选择，按下Enter选择，按下Esc收起选择器。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="select2">
      <demoTab :code="selectCode2" :describeTitle="subTitle2">
        <div slot="sample" class="example">
          <Select v-model="model2" size="small" style="width:100px">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
          <Select v-model="model3" style="width:100px">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
          <Select v-model="model4" size="large" style="width:100px">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </div>
        <div slot="describe-content">
          通过设置<code>size</code>属性为<code>large</code>和<code>small</code>将输入框设置为大和小尺寸，不设置为默认（中）尺寸。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="select3">
      <demoTab :code="selectCode3" :describeTitle="subTitle3">
        <div slot="sample">
          <Select v-model="model5" disabled style="width:200px">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
          <Select v-model="model6" style="width:200px">
            <Option value="beijing">北京市</Option>
            <Option value="shanghai" disabled>上海市</Option>
            <Option value="shenzhen">深圳市</Option>
          </Select>
        </div>
        <div slot="describe-content">
          通过给<code>Select</code>设置属性<code>disabled</code>禁用整个选择器。<br/>
          通过给<code>Option</code>设置属性<code>disabled</code>可以禁用当前项。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="select4">
      <demoTab :code="selectCode4" :describeTitle="subTitle4">
        <div slot="sample" class="example">
          <Select v-model="model7" clearable style="width:200px">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </div>
        <div slot="describe-content">
          通过设置属性<code>clearable</code>可以清空已选项，仅适用于单选模式。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="select5">
      <demoTab :code="selectCode5" :describeTitle="subTitle5">
        <div slot="sample" class="example">
          <Select v-model="model8" style="width:200px">
            <Option-group label="热门城市">
              <Option v-for="item in cityList1" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Option-group>
            <Option-group label="其它城市">
              <Option v-for="item in cityList2" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Option-group>
          </Select>
        </div>
        <div slot="describe-content">
          使用<code>Option-group</code>可将选项进行分组。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="select6">
      <demoTab :code="selectCode6" :describeTitle="subTitle6">
        <div slot="sample">
          <Select v-model="model9" style="width:200px">
            <Option value="beijing" label="北京市">
              <span>北京</span>
              <span style="float:right;color:#ccc">Beiing</span>
            </Option>
            <Option value="shanghai" label="上海市">
              <span>上海</span>
              <span style="float:right;color:#ccc">ShangHai</span>
            </Option>
            <Option value="shenzhen" label="深圳市">
              <span>深圳</span>
              <span style="float:right;color:#ccc">ShenZhen</span>
            </Option>
          </Select>
        </div>
        <div slot="describe-content">
          对选项内容可以进行自定义。注意在<code>Option</code>中使用<code>label</code>属性，可以让选择器优先读取该属性的值以显示，否则选中时显示的内容会和自定义的一样，这往往不是我们想要的。<br/>
          对于选项显示内容的逻辑：优先显示 slot 内容，如果没有定义 slot，则显示<code>label</code>的值，如果没有设置 label，则显示<code>value</code>的值。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="select7">
      <demoTab :code="selectCode7" :describeTitle="subTitle7">
        <div slot="sample" class="example">
          <Select v-model="model10" multiple style="width:260px">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </div>
        <div slot="describe-content">
          通过设置属性<code>multiple</code>可以开启多选模式。多选模式下，<code>model</code> 接受数组类型的数据，所返回的也是数组。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="select8">
      <demoTab :code="selectCode8" :describeTitle="subTitle8">
        <div slot="sample" class="example">
          <Row>
            <Col span="12" style="padding-right:10px">
            <Select v-model="model11" filterable>
              <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
            </Col>
            <Col span="12">
            <Select v-model="model12" filterable multiple>
              <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
            </Col>
          </Row>
        </div>
        <div slot="describe-content">
          通过设置属性<code>filterable</code>可以开启搜索模式。单选和多选都支持搜索模式。多选搜索时，可以使用键盘<code>Delete</code>快捷删除最后一个已选项。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="select9">
      <demoTab :code="selectCode9" :describeTitle="subTitle9">
        <div slot="sample">
          <Row>
            <Col span="12" style="padding-right:10px">
            <Select
              v-model="model13"
              filterable
              remote
              :remote-method="remoteMethod1"
              :loading="loading1">
              <Option v-for="option in options1" :value="option.value" :key="option.value">{{option.label}}</Option>
            </Select>
            </Col>
            <Col span="12">
            <Select
              v-model="model14"
              multiple
              filterable
              remote
              :remote-method="remoteMethod2"
              :loading="loading2">
              <Option v-for="option in options2" :value="option.value" :key="option.value">{{option.label}}</Option>
            </Select>
            </Col>
          </Row>
        </div>
        <div slot="describe-content">
          远程搜索需同时设置 <code>filterable</code>、<code>remote</code>、<code>remote-method</code>、<code>loading</code> 四个 props，其中 loading 用于控制是否正在搜索中，remote-method 是远程搜索的方法。<br/>
          注意：需要给 Option 设置 key。<br/>
          设置初始显示值，需设置 <code>label</code> 属性。<br/>
          本例为美国州名，尝试输入一些字母。<br/>
        </div>
      </demoTab>
    </section>

    <h2 id="select10">API</h2>
    <h3>Select props</h3>
    <section class="demo">
      <Table border :columns="propsColumns" :data="propsData"></Table>
    </section>
    <h3>Select events</h3>
    <section class="demo">
      <Table border :columns="eventsColumns" :data="eventsData"></Table>
    </section>
    <h3>Select methods</h3>
    <section class="demo">
      <Table border :columns="methodsColumns" :data="methodsData"></Table>
    </section>
    <h3>Option props</h3>
    <section class="demo">
      <Table border :columns="optionsColumns" :data="optionsData"></Table>
    </section>
    <h3>OptionGroup props</h3>
    <section class="demo">
      <Table border :columns="groupColumns" :data="groupData"></Table>
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
        cityList: [
          {
            value: 'beijing',
            label: '北京市'
          },
          {
            value: 'shanghai',
            label: '上海市'
          },
          {
            value: 'shenzhen',
            label: '深圳市'
          },
          {
            value: 'hangzhou',
            label: '杭州市'
          },
          {
            value: 'nanjing',
            label: '南京市'
          },
          {
            value: 'chongqing',
            label: '重庆市'
          }
        ],
        cityList1: [
          {
            value: 'beijing',
            label: '北京市'
          },
          {
            value: 'shanghai',
            label: '上海市'
          },
          {
            value: 'shenzhen',
            label: '深圳市'
          }
        ],
        cityList2: [
          {
            value: 'hangzhou',
            label: '杭州市'
          },
          {
            value: 'nanjing',
            label: '南京市'
          },
          {
            value: 'chongqing',
            label: '重庆市'
          }
        ],
        model1: '',
        model2: '',
        model3: '',
        model4: '',
        model5: '',
        model6: '',
        model7: '',
        model8: '',
        model9: '',
        model10: [],
        model11: '',
        model12: [],
        model13: '',
        loading1: false,
        options1: [],
        model14: [],
        loading2: false,
        options2: [],
        list: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New hampshire', 'New jersey', 'New mexico', 'New york', 'North carolina', 'North dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode island', 'South carolina', 'South dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West virginia', 'Wisconsin', 'Wyoming'],
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
          describe:'指定选中项目的 value 值，可以使用 v-model 双向绑定数据。单选时只接受 String 或 Number，多选时只接受 Array',
          type:"String | Number | Array",
          default:"空"
        },{
          attribute: 'multiple',
          describe:'是否支持多选',
          type:"Boolean",
          default:"false"
        },{
          attribute: 'disabled',
          describe:'是否禁用',
          type:"Boolean",
          default:"false"
        },{
          attribute: 'clearable',
          describe:'是否可以清空选项，只在单选时有效',
          type:"Boolean",
          default:"false"
        },{
          attribute: 'filterable',
          describe:'是否支持搜索',
          type:"Boolean",
          default:"false"
        },{
          attribute: 'remote',
          describe:'是否使用远程搜索',
          type:"Boolean",
          default:"false"
        },{
          attribute: 'remote-method',
          describe:'远程搜索的方法',
          type:"Function",
          default:"-"
        },{
          attribute: 'loading',
          describe:'当前是否正在远程搜索',
          type:"Boolean",
          default:"false"
        },{
          attribute: 'loading-text',
          describe:'远程搜索中的文字提示',
          type:"String",
          default:"加载中"
        },{
          attribute: 'label',
          describe:'仅在 remote 模式下，初始化时使用。因为仅通过 value 无法得知选项的 label，需手动设置。',
          type:"String | Number | Array",
          default:"空"
        },{
          attribute: 'size',
          describe:'选择框大小，可选值为<code>large</code>和<code>small</code>或者不填',
          type:"String",
          default:"-"
        },{
          attribute: 'placeholder',
          describe:'选择框默认文字',
          type:"String",
          default:"请选择"
        },{
          attribute: 'not-found-text',
          describe:'当下拉列表为空时显示的内容',
          type:"String",
          default:"无匹配数据"
        },{
          attribute: 'label-in-value',
          describe:'在返回选项时，是否将 label 和 value 一并返回，默认只返回 value',
          type:"Boolean",
          default:"false"
        },{
          attribute: 'placement',
          describe:'弹窗的展开方向，可选值为 <code>bottom</code> 和 <code>top</code>',
          type:"String",
          default:"bottom"
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
          describe:'选中的<code>Option</code>变化时触发，默认返回 value，如需返回 label，详见 label-in-value 属性',
          return:"当前选中项"
        },{
          eventsName: 'on-query-change',
          describe:'搜索词改变时触发',
          return:"query"
        }],
        methodsColumns:[
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
        methodsData:[{
          eventsName: 'setQuery',
          describe:'设置搜索词，为空时清空，仅在 <code>filterable="true"</code> 时有效',
          return:"query"
        },{
          eventsName: 'clearSingleSelect',
          describe:'清空单选项，仅在 <code>clearable="true"</code> 时有效',
          return:"无"
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
          attribute: 'value',
          describe:'选项值，默认根据此属性值进行筛选，必填',
          type:"String | Number",
          default:"无"
        },{
          attribute: 'label',
          describe:'选项显示的内容，默认会读取 slot，无 slot 时，优先读取该 label 值，无 label 时，读取 value。当选中时，选择器会显示 label 为已选文案。大部分情况不需要配置此项，直接写入 slot 即可，在自定义选项时，该属性非常有用。',
          type:"String",
          default:"-"
        },{
          attribute: 'disabled',
          describe:'组件距离右部的距离',
          type:"Boolean",
          default:"false"
        }],
       groupColumns:[
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
        groupData:[{
          attribute: 'label',
          describe:'分组的组名',
          type:"String",
          default:"空"
        }],
        "subTitle": '基础用法',
        "selectCode": `
          &lt;template>
             &lt;Select v-model="model1" style="width:200px">
                 &lt;Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}&lt;/Option>
             &lt;/Select>
          &lt;/template>
          &lt;script>
              export default {
                data () {
                  return {
                    cityList: [
                      {
                        value: 'beijing',
                        label: '北京市'
                      },
                      {
                        value: 'shanghai',
                        label: '上海市'
                      },
                      {
                        value: 'shenzhen',
                        label: '深圳市'
                      },
                      {
                        value: 'hangzhou',
                        label: '杭州市'
                      },
                      {
                        value: 'nanjing',
                        label: '南京市'
                      },
                      {
                        value: 'chongqing',
                        label: '重庆市'
                      }
                    ],
                    model1: ''
                  }
                }
              }
          &lt;/script>
        `,
        "subTitle2": '尺寸',
        "selectCode2": `
          &lt;template>
             &lt;Select v-model="model2" size="small" style="width:100px">
                 &lt;Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}&lt;/Option>
             &lt;/Select>
             &lt;Select v-model="model3" style="width:100px">
                 &lt;Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}&lt;/Option>
             &lt;/Select>
             &lt;Select v-model="model4" size="large" style="width:100px">
                 &lt;Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}&lt;/Option>
             &lt;/Select>
          &lt;/template>
          &lt;script>
              export default {
                data () {
                  return {
                    cityList: [
                      {
                        value: 'beijing',
                        label: '北京市'
                      },
                      {
                        value: 'shanghai',
                        label: '上海市'
                      },
                      {
                        value: 'shenzhen',
                        label: '深圳市'
                      },
                      {
                        value: 'hangzhou',
                        label: '杭州市'
                      },
                      {
                        value: 'nanjing',
                        label: '南京市'
                      },
                      {
                        value: 'chongqing',
                        label: '重庆市'
                      }
                    ],
                    model2: '',
                    model3: '',
                    model4: ''
                  }
                }
              }
          &lt;/script>
        `,
        "subTitle3": '禁用',
        "selectCode3": `
          &lt;template>
             &lt;Select v-model="model5" disabled style="width:200px">
                 &lt;Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}&lt;/Option>
             &lt;/Select>
             &lt;Select v-model="model6" style="width:200px">
                 &lt;Option value="beijing">北京市&lt;/Option>
                 &lt;Option value="shanghai" disabled>上海市&lt;/Option>
                 &lt;Option value="shenzhen">深圳市&lt;/Option>
             &lt;/Select>
          &lt;/template>
          &lt;script>
              export default {
                data () {
                  return {
                    cityList: [
                      {
                        value: 'beijing',
                        label: '北京市'
                      },
                      {
                        value: 'shanghai',
                        label: '上海市'
                      },
                      {
                        value: 'shenzhen',
                        label: '深圳市'
                      },
                      {
                        value: 'hangzhou',
                        label: '杭州市'
                      },
                      {
                        value: 'nanjing',
                        label: '南京市'
                      },
                      {
                        value: 'chongqing',
                        label: '重庆市'
                      }
                    ],
                    model5: '',
                    model6: ''
                  }
                }
              }
          &lt;/script>
        `,
        "subTitle4": '可清空',
        "selectCode4": `
          &lt;template>
             &lt;Select v-model="model7" clearable style="width:200px">
                 &lt;Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}&lt;/Option>
             &lt;/Select>
          &lt;/template>
          &lt;script>
              export default {
                data () {
                  return {
                    cityList: [
                      {
                        value: 'beijing',
                        label: '北京市'
                      },
                      {
                        value: 'shanghai',
                        label: '上海市'
                      },
                      {
                        value: 'shenzhen',
                        label: '深圳市'
                      },
                      {
                        value: 'hangzhou',
                        label: '杭州市'
                      },
                      {
                        value: 'nanjing',
                        label: '南京市'
                      },
                      {
                        value: 'chongqing',
                        label: '重庆市'
                      }
                    ],
                    model7: ''
                  }
                }
              }
          &lt;/script>
        `,
        "subTitle5": '分组',
        "selectCode5": `
          &lt;template>
             &lt;Select v-model="model8" style="width:200px">
                 &lt;Option-group label="热门城市">
                     &lt;Option v-for="item in cityList1" :value="item.value" :key="item.value">{{ item.label }}&lt;/Option>
                 &lt;/Option-group>
                 &lt;Option-group label="其它城市">
                     &lt;Option v-for="item in cityList2" :value="item.value" :key="item.value">{{ item.label }}&lt;/Option>
                 &lt;/Option-group>
             &lt;/Select>
          &lt;/template>
          &lt;script>
              export default {
                data () {
                  return {
                    cityList: [
                      {
                        value: 'beijing',
                        label: '北京市'
                      },
                      {
                        value: 'shanghai',
                        label: '上海市'
                      },
                      {
                        value: 'shenzhen',
                        label: '深圳市'
                      },
                      {
                        value: 'hangzhou',
                        label: '杭州市'
                      },
                      {
                        value: 'nanjing',
                        label: '南京市'
                      },
                      {
                        value: 'chongqing',
                        label: '重庆市'
                      }
                    ],
                    cityList1: [
                        {
                            value: 'beijing',
                            label: '北京市'
                        },
                        {
                            value: 'shanghai',
                            label: '上海市'
                        },
                        {
                            value: 'shenzhen',
                            label: '深圳市'
                        }
                    ],
                    cityList2: [
                        {
                            value: 'hangzhou',
                            label: '杭州市'
                        },
                        {
                            value: 'nanjing',
                            label: '南京市'
                        },
                        {
                            value: 'chongqing',
                            label: '重庆市'
                        }
                    ],
                    model8: ''
                  }
                }
              }
          &lt;/script>
        `,
        "subTitle6": '自定义模板',
        "selectCode6": `
          &lt;template>
             &lt;Select v-model="model9" style="width:200px">
                 &lt;Option value="beijing" label="北京市">
                     &lt;span>北京&lt;/span>
                     &lt;span style="float:right;color:#ccc">Beiing&lt;/span>
                 &lt;/Option>
                 &lt;Option value="shanghai" label="上海市">
                     &lt;span>上海&lt;/span>
                     &lt;span style="float:right;color:#ccc">Beiing&lt;/span>
                 &lt;/Option>
                 &lt;Option value="shenzhen" label="深圳市">
                     &lt;span>深圳&lt;/span>
                     &lt;span style="float:right;color:#ccc">Beiing&lt;/span>
                 &lt;/Option>
             &lt;/Select>
          &lt;/template>
          &lt;script>
              export default {
                data () {
                  return {
                    model9: ''
                  }
                }
              }
          &lt;/script>
        `,
        "subTitle7": '多选',
        "selectCode7": `
          &lt;template>
             &lt;Select v-model="model10" multiple style="width:260px">
                 &lt;Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}&lt;/Option>
             &lt;/Select>
          &lt;/template>
          &lt;script>
              export default {
                data () {
                  return {
                    cityList: [
                      {
                          value: 'beijing',
                          label: '北京市'
                      },
                      {
                          value: 'shanghai',
                          label: '上海市'
                      },
                      {
                          value: 'shenzhen',
                          label: '深圳市'
                      },
                      {
                          value: 'hangzhou',
                          label: '杭州市'
                      },
                      {
                          value: 'nanjing',
                          label: '南京市'
                      },
                      {
                          value: 'chongqing',
                          label: '重庆市'
                      }
                    ],
                    model10:[]
                  }
                }
              }
          &lt;/script>
        `,
        "subTitle8": '可搜索',
        "selectCode8": `
          &lt;template>
             &lt;Row>
                 &lt;Col span="12" style="padding-right:10px">
                     &lt;Select v-model="model11" filterable>
                         &lt;Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}&lt;/Option>
                     &lt;/Select>
                 &lt;/Col>
                 &lt;Col span="12">
                     &lt;Select v-model="model12" filterable multiple>
                         &lt;Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}&lt;/Option>
                     &lt;/Select>
                 &lt;/Col>
             &lt;/Row>
          &lt;/template>
          &lt;script>
              export default {
                data () {
                  return {
                    cityList: [
                      {
                          value: 'beijing',
                          label: '北京市'
                      },
                      {
                          value: 'shanghai',
                          label: '上海市'
                      },
                      {
                          value: 'shenzhen',
                          label: '深圳市'
                      },
                      {
                          value: 'hangzhou',
                          label: '杭州市'
                      },
                      {
                          value: 'nanjing',
                          label: '南京市'
                      },
                      {
                          value: 'chongqing',
                          label: '重庆市'
                      }
                    ],
                    model11: '',
                    model12: []
                  }
                }
              }
          &lt;/script>
        `,
        "subTitle9": '远程搜索 ',
        "selectCode9": `
          &lt;template>
             &lt;Row>
                 &lt;Col span="12" style="padding-right:10px">
                     &lt;Select v-model="model13" filterable remote :remote-method="remoteMethod1" :loading="loading1">
                         &lt;Option v-for="option in options1" :value="option.value" :key="option.value">{{option.label}}&lt;/Option>
                     &lt;/Select>
                 &lt;/Col>
                 &lt;Col span="12">
                     &lt;Select v-model="model14" filterable multiple remote :remote-method="remoteMethod2" :loading="loading2">
                         &lt;Option v-for="option in options2" :value="option.value" :key="option.value">{{option.label}}&lt;/Option>
                     &lt;/Select>
                 &lt;/Col>
             &lt;/Row>
          &lt;/template>
          &lt;script>
              export default {
                data () {
                  return {
                    model13: '',
                    loading1: false,
                    options1: [],
                    model14: [],
                    loading2: false,
                    options2: [],
                    list: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New hampshire', 'New jersey', 'New mexico', 'New york', 'North carolina', 'North dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode island', 'South carolina', 'South dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West virginia', 'Wisconsin', 'Wyoming'],
                  }
                },
                methods: {
                    remoteMethod1 (query) {
                        if (query !== '') {
                            this.loading1 = true;
                            setTimeout(() => {
                                this.loading1 = false;
                                const list = this.list.map(item => {
                                    return {
                                        value: item,
                                        label: item
                                    };
                                });
                                this.options1 = list.filter(item => item.label.toLowerCase().indexOf(query.toLowerCase()) > -1);
                            }, 200);
                        } else {
                            this.options1 = [];
                        }
                    },
                    remoteMethod2 (query) {
                        if (query !== '') {
                            this.loading2 = true;
                            setTimeout(() => {
                                this.loading2 = false;
                                const list = this.list.map(item => {
                                    return {
                                        value: item,
                                        label: item
                                    };
                                });
                                this.options2 = list.filter(item => item.label.toLowerCase().indexOf(query.toLowerCase()) > -1);
                            }, 200);
                        } else {
                            this.options2 = [];
                        }
                    }
                }
              }
          &lt;/script>
        `
      }
    },
    methods: {
      remoteMethod1 (query) {
          debugger
        if (query !== '') {
          this.loading1 = true;
          setTimeout(() => {
            this.loading1 = false;
            const list = this.list.map(item => {
              return {
                value: item,
                label: item
              };
            });
            this.options1 = list.filter(item => item.label.toLowerCase().indexOf(query.toLowerCase()) > -1);
          }, 200);
        } else {
          this.options1 = [];
        }
      },
      remoteMethod2 (query) {
        if (query !== '') {
          this.loading2 = true;
          setTimeout(() => {
            this.loading2 = false;
            const list = this.list.map(item => {
              return {
                value: item,
                label: item
              };
            });
            this.options2 = list.filter(item => item.label.toLowerCase().indexOf(query.toLowerCase()) > -1);
          }, 200);
        } else {
          this.options2 = [];
        }
      }
    }
  }
</script>
<style lang="less" scoped>
  article blockquote {
    padding: 5px 5px 3px 10px;
    line-height: 1.5;
    border-left: 4px solid #ddd;
    margin:12px 0 20px;
    color: #666;
    font-size: 14px;
  }
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
    height:170px;
  }
</style>
