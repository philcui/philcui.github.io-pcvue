<template>
  <article class="doc-cascader-container">
    <h1>cascader 级联选择</h1>
    <h2>概述</h2>
    <p>
      从一组相关联的数据集合中进行选择，常用于省市区、公司级层、事务分类等。<br/>
      相比 Select 组件，可以一次性完成选择，体验更好。
    </p>
    <h2>代码示例</h2>

    <section class="demo" id="cascader1">
      <demoTab :code="cascaderCode" :describeTitle="subTitle">
        <div slot="sample">
          <Cascader :data="data" v-model="value1"></Cascader>
        </div>
        <div slot="describe-content">
          级联选择对数据有较严格要求，请参照示例的格式使用<code>data</code>，每项数据至少包含 <code>value</code>、<code>label</code> 两项，子集为 <code>children</code>，以此类推。<br/>
          <code>value</code> 为当前选择的数据的 value 值的数组，比如 <code>['beijing', 'gugong']</code> ，按照级联顺序依次排序，使用 <code>v-model</code> 进行双向绑定。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="cascader2">
      <demoTab :code="cascaderCode2" :describeTitle="subTitle2">
        <div slot="sample" class="example">
          <Cascader :data="data" v-model="value2"></Cascader>
        </div>
        <div slot="describe-content">
          指定 <code>value</code> 默认值，组件会在初始化时选定数据。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="cascader3">
      <demoTab :code="cascaderCode3" :describeTitle="subTitle3">
        <div slot="sample" class="example">
          <Cascader :data="data" trigger="hover"></Cascader>
        </div>
        <div slot="describe-content">
          设置属性 <code>trigger</code> 为 <code>hover</code>，当鼠标悬停时就会展开子集。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="cascader4">
      <demoTab :code="cascaderCode4" :describeTitle="subTitle4">
        <div slot="sample" class="example">
          {{ text }}
          <Cascader :data="data" @on-change="handleChange">
            <a href="javascript:void(0)">选择</a>
          </Cascader>
        </div>
        <div slot="describe-content">
          通过设置 slot 可以自定义显示内容，不局限于输入框。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="cascader5">
      <demoTab :code="cascaderCode5" :describeTitle="subTitle5">
        <div slot="sample" class="example">
          <Cascader :data="data2" disabled></Cascader>
          <br/>
          <Cascader :data="data2"></Cascader>
        </div>
        <div slot="describe-content">
          设置属性 <code>disabled</code> 可以禁用组件。<br/>
          给某项数据设置 <code>disabled: true</code> 可以禁用某一项。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="cascader6">
      <demoTab :code="cascaderCode6" :describeTitle="subTitle6">
        <div slot="sample" class="example">
          <Cascader :data="data" change-on-select></Cascader>
        </div>
        <div slot="describe-content">
          设置属性 <code>change-on-select</code> 点任何一级都可以选择。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="cascader7">
      <demoTab :code="cascaderCode7" :describeTitle="subTitle7">
        <div slot="sample" class="example">
          <Cascader :data="data3" :render-format="format"></Cascader>
        </div>
        <div slot="describe-content">
          对于显示的结果，可以通过 <code>render-format</code> 接收一个函数来自定义。<br/>
          其中第一个参数 <code>labels</code> 是当前选择的label的集合，第二个参数 <code>selectedData</code> 是当前选择的数据集合，可以利用它们组合出你想要显示的内容。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="cascader8">
      <demoTab :code="cascaderCode8" :describeTitle="subTitle8">
        <div slot="sample" class="example">
          <Cascader :data="data" size="large"></Cascader>
          <br>
          <Cascader :data="data"></Cascader>
          <br>
          <Cascader :data="data" size="small"></Cascader>
        </div>
        <div slot="describe-content">
          通过设置<code>size</code>属性为<code>large</code>和<code>small</code>将输入框设置为大和小尺寸，不设置为默认（中）尺寸。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="cascader9">
      <demoTab :code="cascaderCode9" :describeTitle="subTitle9">
        <div slot="sample" class="example">
          <Cascader :data="data4" :load-data="loadData"></Cascader>
        </div>
        <div slot="describe-content">
          使用 <code>load-data</code> 属性可以异步加载子选项，需要给数据增加 <code>loading</code> 来标识当前是否在加载中。<br/>
          load-data 的第二个参数为回调，如果执行，则会自动展开当前项的子列表。
        </div>
      </demoTab>
    </section>

    <!--<section class="demo" id="cascader10">
      <demoTab :code="cascaderCode10" :describeTitle="subTitle10">
        <div slot="sample" class="example">
          <Cascader v-model="value3" :data="data" filterable></Cascader>
        </div>
        <div slot="describe-content">
          使用属性 <code>filterable</code> 可直接搜索选项并选择。<br/>
          暂不支持服务端搜索。
        </div>
      </demoTab>
    </section>-->

    <h2 id="cascader11">API</h2>
    <h3>Cascader props</h3>
    <section class="demo">
      <Table border :columns="propsColumns" :data="propsData"></Table>
    </section>
    <h3>Cascader events</h3>
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
        value1: [],
        data: [{
          value: 'beijing',
          label: '北京',
          children: [
            {
              value: 'gugong',
              label: '故宫'
            },
            {
              value: 'tiantan',
              label: '天坛'
            },
            {
              value: 'wangfujing',
              label: '王府井'
            }
          ]
        }, {
          value: 'jiangsu',
          label: '江苏',
          children: [
            {
              value: 'nanjing',
              label: '南京',
              children: [
                {
                  value: 'fuzimiao',
                  label: '夫子庙',
                }
              ]
            },
            {
              value: 'suzhou',
              label: '苏州',
              children: [
                {
                  value: 'zhuozhengyuan',
                  label: '拙政园',
                },
                {
                  value: 'shizilin',
                  label: '狮子林',
                }
              ]
            }
          ],
        }],
        value2: ['jiangsu', 'suzhou', 'zhuozhengyuan'],
        data: [{
          value: 'beijing',
          label: '北京',
          children: [
            {
              value: 'gugong',
              label: '故宫'
            },
            {
              value: 'tiantan',
              label: '天坛'
            },
            {
              value: 'wangfujing',
              label: '王府井'
            }
          ]
        }, {
          value: 'jiangsu',
          label: '江苏',
          children: [
            {
              value: 'nanjing',
              label: '南京',
              children: [
                {
                  value: 'fuzimiao',
                  label: '夫子庙',
                }
              ]
            },
            {
              value: 'suzhou',
              label: '苏州',
              children: [
                {
                  value: 'zhuozhengyuan',
                  label: '拙政园',
                },
                {
                  value: 'shizilin',
                  label: '狮子林',
                }
              ]
            }
          ],
        }],
        text: '未选择',
        data2: [{
          value: 'zhejiang',
          label: '浙江',
          children: [{
            value: 'hangzhou',
            label: '杭州',
            children: [{
              value: 'xihu',
              label: '西湖'
            }]
          }]
        }, {
          value: 'jiangsu',
          label: '江苏',
          disabled: true,
          children: [{
            value: 'nanjing',
            label: '南京',
            children: [{
              value: 'zhonghuamen',
              label: '中华门'
            }]
          }]
        }],
        data3: [{
          value: 'zhejiang',
          label: '浙江',
          children: [{
            value: 'hangzhou',
            label: '杭州',
            children: [{
              value: 'xihu',
              label: '西湖',
              code: 310000
            }]
          }]
        }, {
          value: 'jiangsu',
          label: '江苏',
          children: [{
            value: 'nanjing',
            label: '南京',
            children: [{
              value: 'zhonghuamen',
              label: '中华门',
              code: 210000
            }]
          }]
        }],
        data4: [
          {
            value: 'beijing',
            label: '北京',
            children: [],
            loading: false
          },
          {
            value: 'hangzhou',
            label: '杭州',
            children: [],
            loading:false
          }
        ],
        value3: [],
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
          attribute: 'data',
          describe:'可选项的数据源，格式参照示例说明',
          type:"Array",
          default:"[]"
        },{
          attribute: 'value',
          describe:'当前已选项的数据，格式参照示例说明',
          type:"Array",
          default:"[]"
        },{
          attribute: 'render-format',
          describe:'选择后展示的函数，用于自定义显示格式',
          type:"Function",
          default:"label => label.join(' / ')"
        },{
          attribute: 'disabled',
          describe:'是否禁用选择器',
          type:"Boolean",
          default:"false"
        },{
          attribute: 'clearable',
          describe:'是否支持清除',
          type:"Boolean",
          default:"true"
        },{
          attribute: 'placeholder',
          describe:'输入框占位符',
          type:"String",
          default:"请选择"
        },{
          attribute: 'trigger',
          describe:'次级菜单展开方式，可选值为 <code>click</code> 或 <code>hover</code>',
          type:"String",
          default:"click"
        },{
          attribute: 'change-on-select',
          describe:'当此项为 true 时，点选每级菜单选项值都会发生变化，具体见上面的示例',
          type:"Function",
          default:"value"
        },{
          attribute: 'size',
          describe:'输入框大小，可选值为<code>large</code>和<code>small</code>或者不填',
          type:"String",
          default:"-"
        },{
          attribute: 'loading-data',
          describe:'动态获取数据，数据源需标识 loading',
          type:"Function",
          default:"-"
        },{
          attribute: 'filterable',
          describe:'是否支持搜索',
          type:"Boolean",
          default:"false"
        },{
          attribute: 'not-found-text',
          describe:'当搜索列表为空时显示的内容',
          type:"String",
          default:"无匹配数据"
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
          describe:'选择完成后的回调，返回值 value 即已选值 value，selectedData 为已选项的具体数据',
          return:"value, selectedData"
        },{
          eventsName: 'on-visible-change',
          describe:'展开和关闭弹窗时触发',
          return:"显示状态，Boolean"
        }],
        "subTitle":'基础用法',
        "cascaderCode":`
          &lt;template>
             &lt;Cascader :data="data" v-model="value1">&lt;/Cascader>
          &lt;/template>
          &lt;script>
              export default {
                data () {
                  return {
                      value1: [],
                      data: [{
                          value: 'beijing',
                          label: '北京',
                          children: [
                              {
                                  value: 'gugong',
                                  label: '故宫'
                              },
                              {
                                  value: 'tiantan',
                                  label: '天坛'
                              },
                              {
                                  value: 'wangfujing',
                                  label: '王府井'
                              }
                          ]
                      }, {
                          value: 'jiangsu',
                          label: '江苏',
                          children: [
                              {
                                  value: 'nanjing',
                                  label: '南京',
                                  children: [
                                      {
                                          value: 'fuzimiao',
                                          label: '夫子庙',
                                      }
                                  ]
                              },
                              {
                                  value: 'suzhou',
                                  label: '苏州',
                                  children: [
                                      {
                                          value: 'zhuozhengyuan',
                                          label: '拙政园',
                                      },
                                      {
                                          value: 'shizilin',
                                          label: '狮子林',
                                      }
                                  ]
                              }
                          ],
                      }]
                  }
                }
              }
          &lt;/script>
        `,
        "subTitle2":'默认值 ',
        "cascaderCode2":`
          &lt;template>
             &lt;Cascader :data="data" v-model="value2">&lt;/Cascader>
          &lt;/template>
          &lt;script>
              export default {
                data () {
                  return {
                      value2: ['jiangsu', 'suzhou', 'zhuozhengyuan'],
                      data: [{
                          value: 'beijing',
                          label: '北京',
                          children: [
                              {
                                  value: 'gugong',
                                  label: '故宫'
                              },
                              {
                                  value: 'tiantan',
                                  label: '天坛'
                              },
                              {
                                  value: 'wangfujing',
                                  label: '王府井'
                              }
                          ]
                      }, {
                          value: 'jiangsu',
                          label: '江苏',
                          children: [
                              {
                                  value: 'nanjing',
                                  label: '南京',
                                  children: [
                                      {
                                          value: 'fuzimiao',
                                          label: '夫子庙',
                                      }
                                  ]
                              },
                              {
                                  value: 'suzhou',
                                  label: '苏州',
                                  children: [
                                      {
                                          value: 'zhuozhengyuan',
                                          label: '拙政园',
                                      },
                                      {
                                          value: 'shizilin',
                                          label: '狮子林',
                                      }
                                  ]
                              }
                          ],
                      }]
                  }
                }
              }
          &lt;/script>
        `,
        "subTitle3":'移入展开 ',
        "cascaderCode3":`
          &lt;template>
             &lt;Cascader :data="data" trigger="hover">&lt;/Cascader>
          &lt;/template>
          &lt;script>
              export default {
                data () {
                  return {
                      data: [{
                          value: 'beijing',
                          label: '北京',
                          children: [
                              {
                                  value: 'gugong',
                                  label: '故宫'
                              },
                              {
                                  value: 'tiantan',
                                  label: '天坛'
                              },
                              {
                                  value: 'wangfujing',
                                  label: '王府井'
                              }
                          ]
                      }, {
                          value: 'jiangsu',
                          label: '江苏',
                          children: [
                              {
                                  value: 'nanjing',
                                  label: '南京',
                                  children: [
                                      {
                                          value: 'fuzimiao',
                                          label: '夫子庙',
                                      }
                                  ]
                              },
                              {
                                  value: 'suzhou',
                                  label: '苏州',
                                  children: [
                                      {
                                          value: 'zhuozhengyuan',
                                          label: '拙政园',
                                      },
                                      {
                                          value: 'shizilin',
                                          label: '狮子林',
                                      }
                                  ]
                              }
                          ],
                      }]
                  }
                }
              }
          &lt;/script>
        `,
        "subTitle4":'自定义显示',
        "cascaderCode4":`
          &lt;template>
              {{ text }}
             &lt;Cascader :data="data" @on-change="handleChange">
                 &lt;a href="javascript:void(0)">选择&lt;/a>
             &lt;/Cascader>
          &lt;/template>
          &lt;script>
              export default {
                data () {
                  return {
                      text: '未选择',
                      data: [{
                          value: 'beijing',
                          label: '北京',
                          children: [
                              {
                                  value: 'gugong',
                                  label: '故宫'
                              },
                              {
                                  value: 'tiantan',
                                  label: '天坛'
                              },
                              {
                                  value: 'wangfujing',
                                  label: '王府井'
                              }
                          ]
                      }, {
                          value: 'jiangsu',
                          label: '江苏',
                          children: [
                              {
                                  value: 'nanjing',
                                  label: '南京',
                                  children: [
                                      {
                                          value: 'fuzimiao',
                                          label: '夫子庙',
                                      }
                                  ]
                              },
                              {
                                  value: 'suzhou',
                                  label: '苏州',
                                  children: [
                                      {
                                          value: 'zhuozhengyuan',
                                          label: '拙政园',
                                      },
                                      {
                                          value: 'shizilin',
                                          label: '狮子林',
                                      }
                                  ]
                              }
                          ],
                      }]
                  }
                },
                methods: {
                    handleChange (value, selectedData) {
                        this.text = selectedData.map(o => o.label).join(', ');
                    }
                }
              }
          &lt;/script>
        `,
        "subTitle5":'禁用',
        "cascaderCode5":`
          &lt;template>
             &lt;Cascader :data="data2" disabled>&lt;/Cascader>
             &lt;Cascader :data="data2">&lt;/Cascader>
          &lt;/template>
          &lt;script>
              export default {
                data () {
                  return {
                      data2: [{
                          value: 'zhejiang',
                          label: '浙江',
                          children: [{
                              value: 'hangzhou',
                              label: '杭州',
                              children: [{
                                  value: 'xihu',
                                  label: '西湖'
                              }]
                          }]
                      }, {
                          value: 'jiangsu',
                          label: '江苏',
                          disabled: true,
                          children: [{
                              value: 'nanjing',
                              label: '南京',
                              children: [{
                                  value: 'zhonghuamen',
                                  label: '中华门'
                              }]
                          }]
                      }]
                  }
                }
              }
          &lt;/script>
        `,
        "subTitle6":'选择即改变',
        "cascaderCode6":`
          &lt;template>
             &lt;Cascader :data="data" change-on-select>&lt;/Cascader>
          &lt;/template>
          &lt;script>
              export default {
                data () {
                  return {
                      data: [{
                          value: 'beijing',
                          label: '北京',
                          children: [
                              {
                                  value: 'gugong',
                                  label: '故宫'
                              },
                              {
                                  value: 'tiantan',
                                  label: '天坛'
                              },
                              {
                                  value: 'wangfujing',
                                  label: '王府井'
                              }
                          ]
                      }, {
                          value: 'jiangsu',
                          label: '江苏',
                          children: [
                              {
                                  value: 'nanjing',
                                  label: '南京',
                                  children: [
                                      {
                                          value: 'fuzimiao',
                                          label: '夫子庙',
                                      }
                                  ]
                              },
                              {
                                  value: 'suzhou',
                                  label: '苏州',
                                  children: [
                                      {
                                          value: 'zhuozhengyuan',
                                          label: '拙政园',
                                      },
                                      {
                                          value: 'shizilin',
                                          label: '狮子林',
                                      }
                                  ]
                              }
                          ],
                      }]
                  }
                }
              }
          &lt;/script>
        `,
        "subTitle7":'自定义已选项',
        "cascaderCode7":`
          &lt;template>
             &lt;Cascader :data="data3" :render-format="format">&lt;/Cascader>
          &lt;/template>
          &lt;script>
              export default {
                data () {
                  return {
                      data3: [{
                          value: 'zhejiang',
                          label: '浙江',
                          children: [{
                              value: 'hangzhou',
                              label: '杭州',
                              children: [{
                                  value: 'xihu',
                                  label: '西湖',
                                  code: 310000
                              }]
                          }]
                      }, {
                          value: 'jiangsu',
                          label: '江苏',
                          children: [{
                              value: 'nanjing',
                              label: '南京',
                              children: [{
                                  value: 'zhonghuamen',
                                  label: '中华门',
                                  code: 210000
                              }]
                          }]
                      }]
                  }
                },
                methods: {
                  format (labels, selectedData) {
                      const index = labels.length - 1;
                      const data = selectedData[index] || false;
                      if (data && data.code) {
                          return labels[index] + ' - ' + data.code;
                      }
                      return labels[index];
                  }
                }
              }
          &lt;/script>
        `,
        "subTitle8":'尺寸',
        "cascaderCode8":`
          &lt;template>
             &lt;Cascader :data="data" size="large">&lt;/Cascader>
             &lt;br/>
             &lt;Cascader :data="data">&lt;/Cascader>
             &lt;br/>
             &lt;Cascader :data="data" size="small">&lt;/Cascader>
          &lt;/template>
          &lt;script>
              export default {
                data () {
                  return {
                      data: [{
                          value: 'beijing',
                          label: '北京',
                          children: [
                              {
                                  value: 'gugong',
                                  label: '故宫'
                              },
                              {
                                  value: 'tiantan',
                                  label: '天坛'
                              },
                              {
                                  value: 'wangfujing',
                                  label: '王府井'
                              }
                          ]
                      }, {
                          value: 'jiangsu',
                          label: '江苏',
                          children: [
                              {
                                  value: 'nanjing',
                                  label: '南京',
                                  children: [
                                      {
                                          value: 'fuzimiao',
                                          label: '夫子庙',
                                      }
                                  ]
                              },
                              {
                                  value: 'suzhou',
                                  label: '苏州',
                                  children: [
                                      {
                                          value: 'zhuozhengyuan',
                                          label: '拙政园',
                                      },
                                      {
                                          value: 'shizilin',
                                          label: '狮子林',
                                      }
                                  ]
                              }
                          ],
                      }]
                  }
                }
              }
          &lt;/script>
        `,
        "subTitle9":'动态加载选项',
        "cascaderCode9":`
          &lt;template>
             &lt;Cascader :data="data4" :load-data="loadData">&lt;/Cascader>
          &lt;/template>
          &lt;script>
              export default {
                data () {
                  return {
                      data4: [
                        {
                            value: 'beijing',
                            label: '北京',
                            children: [],
                            loading: false
                        },
                        {
                            value: 'hangzhou',
                            label: '杭州',
                            children: [],
                            loading:false
                        }
                      ]
                  }
                },
                methods: {
                    loadData (item, callback) {
                        item.loading = true;
                        setTimeout(() => {
                            if (item.value === 'beijing') {
                                item.children = [
                                    {
                                        value: 'talkingdata',
                                        label: 'TalkingData'
                                    },
                                    {
                                        value: 'baidu',
                                        label: '百度'
                                    },
                                    {
                                        value: 'sina',
                                        label: '新浪'
                                    }
                                ];
                            } else if (item.value === 'hangzhou') {
                                item.children = [
                                    {
                                        value: 'ali',
                                        label: '阿里巴巴'
                                    },
                                    {
                                        value: '163',
                                        label: '网易'
                                    }
                                ];
                            }
                            item.loading = false;
                            callback();
                        }, 1000);
                    }
                }
              }
          &lt;/script>
        `,
        "subTitle10":'搜索',
        "cascaderCode10":`
          &lt;template>
             &lt;Cascader v-model="value3" :data="data" filterable>&lt;/Cascader>
          &lt;/template>
          &lt;script>
              export default {
                data () {
                  return {
                      value1: [],
                      data: [{
                          value3: [],
                          label: '北京',
                          children: [
                              {
                                  value: 'gugong',
                                  label: '故宫'
                              },
                              {
                                  value: 'tiantan',
                                  label: '天坛'
                              },
                              {
                                  value: 'wangfujing',
                                  label: '王府井'
                              }
                          ]
                      }, {
                          value: 'jiangsu',
                          label: '江苏',
                          children: [
                              {
                                  value: 'nanjing',
                                  label: '南京',
                                  children: [
                                      {
                                          value: 'fuzimiao',
                                          label: '夫子庙',
                                      }
                                  ]
                              },
                              {
                                  value: 'suzhou',
                                  label: '苏州',
                                  children: [
                                      {
                                          value: 'zhuozhengyuan',
                                          label: '拙政园',
                                      },
                                      {
                                          value: 'shizilin',
                                          label: '狮子林',
                                      }
                                  ]
                              }
                          ],
                      }]
                  }
                }
              }
          &lt;/script>
        `

      }
    },
    methods: {
      handleChange (value, selectedData) {
        this.text = selectedData.map(o => o.label).join(', ');
      },
      format (labels, selectedData) {
        const index = labels.length - 1;
        const data = selectedData[index] || false;
        if (data && data.code) {
          return labels[index] + ' - ' + data.code;
        }
        return labels[index];
      },
      loadData (item, callback) {
        item.loading = true;
        setTimeout(() => {
          if (item.value === 'beijing') {
            item.children = [
              {
                value: 'talkingdata',
                label: 'TalkingData'
              },
              {
                value: 'baidu',
                label: '百度'
              },
              {
                value: 'sina',
                label: '新浪'
              }
            ];
          } else if (item.value === 'hangzhou') {
            item.children = [
              {
                value: 'ali',
                label: '阿里巴巴'
              },
              {
                value: '163',
                label: '网易'
              }
            ];
          }
          item.loading = false;
          callback();
        }, 1000);
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
    height:170px;
  }
</style>
