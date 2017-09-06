<template>
    <article class="doc-treeSelect-container">
      <h1>TreeSelect 下拉树选择器</h1>
      <h2>概述</h2>
      <p>
        结合Select和Tree，支持单选和多选。
      </p>
      <h2>代码示例</h2>

      <section class="demo" id="treeSelect1">
        <demoTab :code="treeSelectCode" :describeTitle="subTitle">
          <div slot="sample" class="example">
            <Row>
              <Col span="12" style="padding-right:10px">
                <TreeSelect :data="baseData" placeholder="请选择..."  :width="160" :fields="treeFields"></TreeSelect>
              </Col>
              <Col span="12">
                <TreeSelect :multiple="multiple" :data="baseData" placeholder="请选择..."  :width="160" :fields="treeFields"></TreeSelect>
              </Col>
            </Row>
          </div>
          <div slot="describe-content">
            下拉树选择器的基本用法，可以使用 data绑定数据。<br/>
            通过设置属性 <code>multiple</code> 实现单选或者多选，默认false，单选。<br/>
            通过设置属性 <code>fields</code> 配置字段映射。具体用法参见Tree的fields。
          </div>
        </demoTab>
      </section>

      <section class="demo" id="treeSelect2">
        <demoTab :code="treeSelectCode2" :describeTitle="subTitle2">
          <div slot="sample" class="example">
            <TreeSelect :data="baseData" placeholder="请选择..."  :width="160" :selectHeight="150" :fields="treeFields"></TreeSelect>
          </div>
          <div slot="describe-content">
            下拉树选择器可以设置宽高。<br/>
            通过属性 <code>width</code> 设置输入框和下拉选项的宽度，Number类型。<br/>
            通过属性 <code>selectHeight</code> 设置下拉选项的高度，Number类型,默认是200px。
          </div>
        </demoTab>
      </section>

      <section class="demo" id="treeSelect3">
        <demoTab :code="treeSelectCode3" :describeTitle="subTitle3">
          <div slot="sample" class="example">
            <Row>
              <Col span="10">
              <TreeSelect :data="baseData3" ref="treeselect1" placeholder="请选择..."  :width="160" :fields="treeFields"></TreeSelect>
              </Col>
              <Col span="10">
              <TreeSelect :multiple="multiple" ref="treeselect2" :data="baseData" placeholder="请选择..."  :width="160" :fields="treeFields"></TreeSelect>
              </Col>
              <Col span="4">
                <Button @click="setDefaultDataTree('1-1-2,1-2','treeselect2')">方法设置选中值</Button>
              </Col>
            </Row>
          </div>
          <div slot="describe-content">
            下拉树选择器可以设置默认选中值。<br/>
            通过设置<code>data</code> 的<code>selected</code>为true。<br/>
            通过调用下拉树的 <code>setDefaultValue</code> 方法设置选中值；setDefaultValue方法的参数是字符串类型，多个id用逗号（，）拼接。
          </div>
        </demoTab>
      </section>

      <h2 id="treeSelect4">API</h2>
      <h3>TreeSelect props</h3>
      <section class="demo">
        <Table border :columns="propsColumns" :data="propsData"></Table>
      </section>
      <h3>TreeSelect events</h3>
      <section class="demo">
        <Table border :columns="eventsColumns" :data="eventsData"></Table>
      </section>
      <h3>TreeSelect methods</h3>
      <section class="demo">
        <Table border :columns="methodsColumns" :data="methodsData"></Table>
      </section>
    </article>
</template>
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
  .ts-wrap{
    height:32px;
  }
  .demo .example{
    height:170px;
  }
</style>
<script>
    import demoTab from '@/components/DemoTab'
    export default{
      components: {
        demoTab
      },
      data(){
          return {
            multiple:true,
            baseData: [
              {
                name: 'parent 1',
                id:'1-1',
                child: [
                  {
                    name: 'parent 1-1',
                    id:'1-1-1',
                    child: [
                      {
                        name: 'children 1-1-1',
                        id:'1-1-1-1'
                      },
                      {
                        name: 'children 1-1-2',
                        id:'1-1-1-2',
                      }]
                  },
                  {
                    name: 'parent 1-2',
                    id:'1-1-2',
                    child: [{
                      name: 'children 1-2-1',
                      id:'1-1-2-1'
                    }]
                  }]
              },
              {
                name: 'parent 2',
                id:'1-2'
              }
            ],
            baseData2: [
              {
                name: 'parent 1',
                id:'1-1',
                child: [
                  {
                    name: 'parent 1-1',
                    id:'1-1-1',
                    child: [
                      {
                        name: 'children 1-1-1',
                        id:'1-1-1-1'
                      },
                      {
                        name: 'children 1-1-2',
                        id:'1-1-1-2',
                        selected: true
                      }]
                  },
                  {
                    name: 'parent 1-2',
                    id:'1-1-2',
                    child: [{
                      name: 'children 1-2-1',
                      id:'1-1-2-1'
                    }]
                  }]
              },
              {
                name: 'parent 2',
                id:'1-2'
              }
            ],
            baseData3: [
              {
                name: 'parent 1',
                id:'1-1',
                child: [
                  {
                    name: 'parent 1-1',
                    id:'1-1-1',
                    child: [
                      {
                        name: 'children 1-1-1',
                        id:'1-1-1-1'
                      },
                      {
                        name: 'children 1-1-2',
                        id:'1-1-1-2',
                      }]
                  },
                  {
                    name: 'parent 1-2',
                    id:'1-1-2',
                    child: [{
                      name: 'children 1-2-1',
                      id:'1-1-2-1'
                    }]
                  }]
              },
              {
                name: 'parent 2',
                id:'1-2'
              }
            ],
            treeFields:[
              {field:'name',map:'title'},
              {field:'child',map:'children'}
            ],
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
              attribute: 'multiple',
              describe:'单选或者多选，设置为true时是多选',
              type:"Boolean",
              default:"false"
            },{
              attribute: 'width',
              describe:'下拉树的宽度',
              type:"Number",
              default:"-"
            },{
              attribute: 'selectHeight',
              describe:'下拉树下拉选项的高度',
              type:"Number",
              default:"200"
            },{
              attribute: 'fields',
              describe:'data的字段映射，如[{field: "name", map: "title"}],则将数据中的name字段映射为treeselect中的title字段。具体用法参见tree的fields',
              type:"Array",
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
              eventsName: 'on-select-change',
              describe:'在选中一条数据时触发',
              return:"选中的一条数据对象"
            }],
            methodsColumns:[
              {
                title: '方法名',
                key: 'methodsName',
              },
              {
                title: '说明',
                key: 'describe',
                width:'450px'
              },{
                title: '参数类型',
                key: 'return',
              }],
            methodsData:[{
              methodsName: 'setDefaultValue',
              describe:'设置选中值，一般用于表单里回显',
              return:"string，多个用逗号拼接"
            }],
            "subTitle": '基础用法',
            "treeSelectCode": `
              &lt;template>
                &lt;Row>
                  &lt;Col span="12">
                    &lt;TreeSelect :data="baseData" placeholder="请选择..."  :width="160" :fields="treeFields">&lt;/TreeSelect>
                  &lt;/Col>
                  &lt;Col span="12">
                    &lt;TreeSelect :multiple="multiple" :data="baseData" placeholder="请选择..."  :width="160" :fields="treeFields">&lt;/TreeSelect>
                  &lt;/Col>
                &lt;/Row>
              &lt;/template>
              &lt;script>
                  export default {
                    data () {
                      return {
                        multiple: true,
                        baseData: [
                          {
                            name: 'parent 1',
                            id:'1-1',
                            child: [
                              {
                                name: 'parent 1-1',
                                id:'1-1-1',
                                child: [
                                  {
                                    name: 'children 1-1-1',
                                    id:'1-1-1-1'
                                  },
                                  {
                                    name: 'children 1-1-2',
                                    id:'1-1-1-2',
                                  }]
                              },
                              {
                                name: 'parent 1-2',
                                id:'1-1-2',
                                child: [{
                                  name: 'children 1-2-1',
                                  id:'1-1-2-1'
                                }]
                              }]
                          },
                          {
                            name: 'parent 2',
                            id:'1-2'
                          }
                        ],
                        treeFields:[
                          {field:'name',map:'title'},
                          {field:'child',map:'children'}
                        ]
                      }
                    }
                  }
              &lt;/script>
            `,
            "subTitle2": '设置宽高',
            "treeSelectCode2": `
              &lt;template>
                  &lt;TreeSelect :data="baseData" placeholder="请选择..." :width="200" :selectHeight="150" :fields="treeFields">&lt;/TreeSelect>
                &lt;/Row>
              &lt;/template>
              &lt;script>
                  export default {
                    data () {
                      return {
                        baseData: [
                          {
                            name: 'parent 1',
                            id:'1-1',
                            child: [
                              {
                                name: 'parent 1-1',
                                id:'1-1-1',
                                child: [
                                  {
                                    name: 'children 1-1-1',
                                    id:'1-1-1-1'
                                  },
                                  {
                                    name: 'children 1-1-2',
                                    id:'1-1-1-2',
                                  }]
                              },
                              {
                                name: 'parent 1-2',
                                id:'1-1-2',
                                child: [{
                                  name: 'children 1-2-1',
                                  id:'1-1-2-1'
                                }]
                              }]
                          },
                          {
                            name: 'parent 2',
                            id:'1-2'
                          }
                        ],
                        treeFields:[
                          {field:'name',map:'title'},
                          {field:'child',map:'children'}
                        ]
                      }
                    }
                  }
              &lt;/script>
            `,
            "subTitle3": '默认选中',
            "treeSelectCode3": `
              &lt;template>
                &lt;Row>
                  &lt;Col span="10">
                    &lt;TreeSelect ref="treeselect1" :data="baseData1" placeholder="请选择..."  :width="160" :fields="treeFields">&lt;/TreeSelect>
                  &lt;/Col>
                  &lt;Col span="10">
                    &lt;TreeSelect ref="treeselect2" :multiple="multiple" :data="baseData" placeholder="请选择..."  :width="160" :fields="treeFields">&lt;/TreeSelect>
                  &lt;/Col>
                  &lt;Col span="4">
                    &lt;Button @click="setDefaultDataTree('1-1-2,1-2','treeselect2')">设置选中值&lt;/Button>
                  &lt;/Col>
                &lt;/Row>
              &lt;/template>
              &lt;script>
                  export default {
                    data () {
                      return {
                        multiple: true,
                        baseData: [
                          {
                            name: 'parent 1',
                            id:'1-1',
                            child: [
                              {
                                name: 'parent 1-1',
                                id:'1-1-1',
                                child: [
                                  {
                                    name: 'children 1-1-1',
                                    id:'1-1-1-1'
                                  },
                                  {
                                    name: 'children 1-1-2',
                                    id:'1-1-1-2',
                                  }]
                              },
                              {
                                name: 'parent 1-2',
                                id:'1-1-2',
                                child: [{
                                  name: 'children 1-2-1',
                                  id:'1-1-2-1'
                                }]
                              }]
                          },
                          {
                            name: 'parent 2',
                            id:'1-2'
                          }
                        ],
                        baseData3: [
                          {
                            name: 'parent 1',
                            id:'1-1',
                            child: [
                              {
                                name: 'parent 1-1',
                                id:'1-1-1',
                                child: [
                                  {
                                    name: 'children 1-1-1',
                                    id:'1-1-1-1'
                                  },
                                  {
                                    name: 'children 1-1-2',
                                    id:'1-1-1-2',
                                  }]
                              },
                              {
                                name: 'parent 1-2',
                                id:'1-1-2',
                                child: [{
                                  name: 'children 1-2-1',
                                  id:'1-1-2-1'
                                }]
                              }]
                          },
                          {
                            name: 'parent 2',
                            id:'1-2'
                          }
                        ],
                        baseData2: [
                          {
                            name: 'parent 1',
                            id:'1-1',
                            child: [
                              {
                                name: 'parent 1-1',
                                id:'1-1-1',
                                child: [
                                  {
                                    name: 'children 1-1-1',
                                    id:'1-1-1-1'
                                  },
                                  {
                                    name: 'children 1-1-2',
                                    id:'1-1-1-2',
                                    selected: true
                                  }]
                              },
                              {
                                name: 'parent 1-2',
                                id:'1-1-2',
                                child: [{
                                  name: 'children 1-2-1',
                                  id:'1-1-2-1'
                                }]
                              }]
                          },
                          {
                            name: 'parent 2',
                            id:'1-2'
                          }
                        ],
                        treeFields:[
                          {field:'name',map:'title'},
                          {field:'child',map:'children'}
                        ]
                      }
                    },
                    mounted(){
                      this.setDefaultDataTree2();
                    },
                    methods:{
                       setDefaultDataTree2(){
                          this.baseData3=this.baseData2;
                       },
                       setDefaultDataTree(ids,ref){
                          this.$refs[ref].setDefaultValue(ids);
                       }
                    }
                  }
              &lt;/script>
            `,
          }
      },
      mounted(){
        this.setDefaultDataTree2();
      },
      methods:{
        setDefaultDataTree2(){
          this.baseData3=this.baseData2;
        },
        setDefaultDataTree(ids,ref){
            this.$refs[ref].setDefaultValue(ids);
        }
      }

    }
</script>
