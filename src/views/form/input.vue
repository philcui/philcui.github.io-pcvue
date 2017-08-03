<template>
  <article class="doc-alert-container">
    <h1>Input 输入框</h1>
    <h2>概述</h2>
    <p>
      基本表单组件，支持 input 和 textarea，并在原生控件基础上进行了功能扩展，可以组合使用。
    </p>
    <blockquote>注意：非 template/render 模式下，需使用 <code>i-input</code>。</blockquote>
    <h2>代码示例</h2>
    <section class="demo">
      <demoTab :code="inputCode" :describeTitle="subTitle1">
        <div slot="sample">
          <Input v-model="value" placeholder="请输入..."></Input>
        </div>
        <div slot="describe-content">
          基本用法，可以使用 <code>v-model</code> 实现数据的双向绑定。<br/>
          可以直接设置 style 来改变输入框的宽度，默认 100%。
        </div>
      </demoTab>
    </section>
    <section class="demo">
      <demoTab :code="inputCode02" :describeTitle="subTitle02">
        <div slot="sample">
          <Input v-model="value01"  icon="ios-clock-outline" placeholder="请输入..."></Input>
          <Input v-model="value02" class="ivu-icon-left"  icon="ios-home-outline" placeholder="请输入..."></Input>
        </div>
        <div slot="describe-content">
          通过 <code>icon</code> 属性可以在输入框右边加一个图标。<br/>
          点击图标，会触发 <code>on-click</code> 事件。<br/>
          设置<code>class="ivu-icon-left"</code> 使图标显示在左边
        </div>
      </demoTab>
    </section>
    <section class="demo">
      <demoTab :code="inputCode03" :describeTitle="subTitle03">
        <div slot="sample">
          <Input v-model="value5" type="textarea" :rows="2" placeholder="请输入..."></Input>
          <Input v-model="value6" type="textarea" :rows="4" placeholder="请输入..."></Input>
        </div>
        <div slot="describe-content">
          通过设置属性 <code>type</code> 为 textarea 来使用文本域，用于多行输入。<br/>
          通过设置属性 <code>rows</code> 控制文本域默认显示的行数。
        </div>
      </demoTab>
    </section>
    <section class="demo">
      <demoTab :code="inputCode04" :describeTitle="subTitle04">
        <div slot="sample">
          <Input v-model="value7" type="textarea" :autosize="true" placeholder="请输入..."></Input>
          <Input v-model="value8" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></Input>
        </div>
        <div slot="describe-content">
          设置属性 <code>autosize</code>，文本域会自动适应高度的变化。<br/>
          <code>autosize</code>也可以设定为一个对象，指定最小行数和最大行数。
        </div>
      </demoTab>
    </section>
    <section class="demo">
      <demoTab :code="inputCode05" :describeTitle="subTitle05">
        <div slot="sample">
          <Input v-model="value9" disabled placeholder="请输入..."></Input>
          <Input v-model="value10" disabled type="textarea" placeholder="请输入..."></Input>
        </div>
        <div slot="describe-content">
          通过添加<code>disabled</code>属性可设置为不可用状态。
        </div>
      </demoTab>
    </section>
    <section class="demo">
      <demoTab :code="inputCode06" :describeTitle="subTitle06">
        <div slot="sample">
          <Input v-model="value11">
          <span slot="prepend">http://</span>
          <span slot="append">.com</span>
          </Input>
          <br>
          <Input v-model="value12">
          <Select v-model="select1" slot="prepend" style="width: 80px">
            <Option value="http">http://</Option>
            <Option value="https">https://</Option>
          </Select>
          <Select v-model="select2" slot="append" style="width: 70px">
            <Option value="com">.com</Option>
            <Option value="org">.org</Option>
            <Option value="io">.io</Option>
          </Select>
          </Input>
          <br>
          <Input v-model="value13">
          <Select v-model="select3" slot="prepend" style="width: 80px">
            <Option value="day">日活</Option>
            <Option value="month">月活</Option>
          </Select>
          <Button slot="append" icon="ios-search"></Button>
          </Input>
        </div>
        <div slot="describe-content">
          通过前置和后置的 slot 可以实现复合型的输入框。
        </div>
      </demoTab>
    </section>
    <h2 id="switch3">API</h2>
    <h3>Input props</h3>
    <section class="demo">
      <Table border :columns="propsColumns" :data="propsData"></Table>
    </section>
    <h3>Input events</h3>
    <section class="demo">
      <Table border :columns="propsColumns02" :data="propsData02"></Table>
    </section>
    <h3>Input slot</h3>
    <section class="demo">
      <Table border :columns="propsColumns03" :data="propsData03"></Table>
    </section>
    <h3>Input methods</h3>
    <section class="demo">
      <Table border :columns="propsColumns04" :data="propsData04"></Table>
    </section>
  </article>
</template>
<script>
  import demoTab from '@/components/DemoTab';
  export default{
    components: {
      demoTab
    },
    data(){
        return{
          propsColumns04:[
            {
              title: '方法名',
              key: 'methodsName',
            },
            {
              title: '说明',
              key: 'describe',
              width:'450px'
            },
            {
              title: '参数',
              key: 'params'
            }
          ],
          propsData04:[
            {
              methodsName:'focus',
              describe:'手动聚焦输入框',
              params:'无'
            }
          ],
          propsColumns03:[
            {
              title: '名称',
              key: 'title',
            },{
              title: '说明',
              key: 'describe'
            }
          ],
          propsData03:[
            {
              title:'prepend',
              describe:'前置内容，仅在 text 类型下有效'
            },
            {
              title:'append',
              describe:'后置内容，仅在 text 类型下有效'
            }
          ],
          propsColumns02:[
            {
              title: '属性',
              key: 'attribute',
            },
            {
              title: '说明',
              key: 'describe',
              width:'350px'
            },{
              title: '返回值',
              key: 'returnKey',
            }],
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
          propsData02:[{
            attribute: 'on-enter',
            describe:'按下回车键时触发',
            returnKey:'无'
          },{
              attribute: 'on-click',
              describe:'设置 icon 属性后，点击图标时触发',
              returnKey:'无'
            },{
            attribute: 'on-change',
            describe:'数据改变时触发',
            returnKey:'event'
          },{
            attribute: 'on-focus',
            describe:'输入框聚焦时触发',
            returnKey:'无'
          },{
            attribute: 'on-blur',
            describe:'输入框失去焦点时触发',
            returnKey:'无'
          },{
            attribute: 'on-keyup',
            describe:'原生的 keyup 事件',
            returnKey:'event'
          },{
            attribute: 'on-keydown',
            describe:'原生的 keydown 事件',
            returnKey:'event'
          },{
            attribute: 'on-keypress',
            describe:'原生的 keypress 事件',
            returnKey:'event'
          }],
          propsData:[{
            attribute: 'type',
            describe:'输入框类型，可选值为 text、password 或 textarea',
            type:"String",
            default:"text"
          },{
            attribute: 'value',
            describe:'绑定的值，可使用 v-model 双向绑定',
            type:"String | Number",
            default:"空"
          },{
            attribute: 'size',
            describe:'输入框尺寸，可选值为large和small或者不设置',
            type:"String",
            default:"-"
          },{
            attribute: 'placeholder',
            describe:'占位文本',
            type:"String",
            default:"-"
          },{
            attribute: 'disabled',
            describe:'设置输入框为禁用状态',
            type:"Boolean",
            default:"false"
          },{
            attribute: 'readonly',
            describe:'设置输入框为只读',
            type:"Boolean",
            default:"false"
          },{
            attribute: 'maxlength',
            describe:'最大输入长度',
            type:"Number",
            default:"-"
          },{
            attribute: 'icon',
            describe:'输入框尾部图标，仅在 text 类型下有效',
            type:"String",
            default:"-"
          },{
              attribute: 'rows',
              describe:'文本域默认行数，仅在 textarea 类型下有效',
              type:"Number",
              default:"2"
          },{
            attribute: 'autosize',
            describe:'自适应内容高度，仅在 textarea 类型下有效，可传入对象，如 { minRows: 2, maxRows: 6 }',
            type:"Boolean | Object",
            default:"false"
          },{
            attribute: 'number',
            describe:'将用户的输入转换为 Number 类型',
            type:"Boolean",
            default:"false"
          },{
            attribute: 'autofocus',
            describe:'自动获取焦点',
            type:"Boolean",
            default:"false"
          },{
            attribute: 'class',
            describe:'class="ivu-icon-left"图标在做显示',
            type:"String",
            default:"-"
          }],
          value9: '',
          value10: '',
          subTitle06:'复合型输入框',
          subTitle05:'禁用状态',
          value7: '',
          value8: '',
          subTitle04:'适应文本高度的文本域',
          value5: '',
          value6: '',
          subTitle03:'文本域',
          value01: '',
          value02: '',
            subTitle02:'带Icon的输入框',
          subTitle1:'基础用法',
          "inputCode": `
            &lt;template>
               &lt;Input v-model="value" placeholder="请输入...">&lt;/Input>
            &lt;/template>
            &lt;script>
                export default {
                }
            &lt;/script>
            `,
          "inputCode02": `
            &lt;template>
               &lt;Input v-model="value01" icon="ios-clock-outline" placeholder="请输入...">&lt;/Input>
               &lt;Input v-model="value02" class="ivu-icon-left"  icon="ios-home-outline" placeholder="请输入...">&lt;/Input>
            &lt;/template>
            &lt;script>
                export default {
                }
            &lt;/script>
            `,
          "inputCode03": `
            &lt;template>
               &lt;Input v-model="value5" type="textarea" :rows="2" placeholder="请输入...">&lt;/Input>&lt;br/>&lt;br/>
          &lt;Input v-model="value6" type="textarea" :rows="4" placeholder="请输入...">&lt;/Input>
            &lt;/template>
            &lt;script>
                export default {
                }
            &lt;/script>
            `,
          "inputCode04": `
            &lt;template>
               &lt;Input v-model="value7" type="textarea" :autosize="true" placeholder="请输入...">&lt;/Input>
          &lt;Input v-model="value8" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入...">&lt;/Input>
            &lt;/template>
            &lt;script>
                export default {
                }
            &lt;/script>
            `,
          "inputCode05": `
            &lt;template>
               &lt;Input v-model="value9" disabled placeholder="请输入...">&lt;/Input>
    &lt;Input v-model="value10" disabled type="textarea" placeholder="请输入...">&lt;/Input>
            &lt;/template>
            &lt;script>
                export default {
                }
            &lt;/script>
            `,
          "inputCode06": `
            &lt;template>
               &lt;Input v-model="value11">
          &lt;span slot="prepend">http://&lt;/span>
          &lt;span slot="append">.com&lt;/span>
          &lt;/Input>
          &lt;br>
          &lt;Input v-model="value12">
          &lt;Select v-model="select1" slot="prepend" style="width: 80px">
            &lt;Option value="http">http://&lt;/Option>
            &lt;Option value="https">https://&lt;/Option>
          &lt;/Select>
          &lt;Select v-model="select2" slot="append" style="width: 70px">
            &lt;Option value="com">.com&lt;/Option>
            &lt;Option value="org">.org&lt;/Option>
            &lt;Option value="io">.io&lt;/Option>
          &lt;/Select>
          &lt;/Input>
          &lt;br>
          &lt;Input v-model="value13">
          &lt;Select v-model="select3" slot="prepend" style="width: 80px">
            &lt;Option value="day">日活&lt;/Option>
            &lt;Option value="month">月活&lt;/Option>
          &lt;/Select>
          &lt;Button slot="append" icon="ios-search">&lt;/Button>
          &lt;/Input>
            &lt;/template>
            &lt;script>
                export default {
                }
            &lt;/script>
            `
        }
    }
  }
</script>
<style lang="less">
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
</style>
