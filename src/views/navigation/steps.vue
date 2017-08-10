<template>
  <article class="doc-alert-container">
    <h1>Steps 步骤条</h1>
    <h2>概述</h2>
    <p>
      拆分某项流程的步骤，引导用户按流程完成任务。
    </p>
    <h2>代码示例</h2>
    <section class="demo" id="steps1">
      <demoTab :code="inputCode" :describeTitle="subTitle1">
        <div slot="sample">
          <Steps :current="1">
            <Step title="已完成" content="这里是该步骤的描述信息"></Step>
            <Step title="进行中" content="这里是该步骤的描述信息"></Step>
            <Step title="待进行" content="这里是该步骤的描述信息"></Step>
            <Step title="待进行" content="这里是该步骤的描述信息"></Step>
          </Steps>
        </div>
        <div slot="describe-content">
          基本用法，组件会根据<code>current</code>自动判断各步骤状态。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="steps2">
      <demoTab :code="inputCode2" :describeTitle="subTitle2">
        <div slot="sample">
          <Steps :current="1">
            <Step title="注册" icon="person-add"></Step>
            <Step title="上传头像" icon="camera"></Step>
            <Step title="验证邮箱" icon="email"></Step>
          </Steps>
        </div>
        <div slot="describe-content">
          通过设置<code>Step</code>的<code>icon</code>属性可以自定义图标。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="steps3">
      <demoTab :code="inputCode3" :describeTitle="subTitle3">
        <div slot="sample">
          <Steps :current="2" size="small">
            <Step title="已完成"></Step>
            <Step title="进行中"></Step>
            <Step title="待进行"></Step>
            <Step title="待进行"></Step>
          </Steps>
        </div>
        <div slot="describe-content">
          设置属性<code>size</code>为<code>small</code>启用迷你版。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="steps4">
      <demoTab :code="inputCode4" :describeTitle="subTitle4">
        <div slot="sample">
          <p>当前正在进行第 {{ current + 1 }} 步</p>
          <Steps :current="current">
            <Step title="步骤1"></Step>
            <Step title="步骤2"></Step>
            <Step title="步骤3"></Step>
            <Step title="步骤4"></Step>
          </Steps>
          <i-button type="primary" @click="next">下一步</i-button>
        </div>
        <div slot="describe-content">
          点击下一步按钮可以切换当前进度状态。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="steps5">
      <demoTab :code="inputCode5" :describeTitle="subTitle5">
        <div slot="sample">
          <Steps :current="2" direction="vertical">
            <Step title="已完成" content="这里是该步骤的描述信息"></Step>
            <Step title="已完成" content="这里是该步骤的描述信息"></Step>
            <Step title="进行中" content="这里是该步骤的描述信息"></Step>
            <Step title="待进行" content="这里是该步骤的描述信息"></Step>
          </Steps>
        </div>
        <div slot="describe-content">
          设置属性<code>direction</code>为<code>vertical</code>在垂直方向展示。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="steps6">
      <demoTab :code="inputCode6" :describeTitle="subTitle6">
        <div slot="sample">
          <Steps :current="1" status="error">
            <Step title="已完成" content="这里是该步骤的描述信息"></Step>
            <Step title="进行中" content="这里是该步骤的描述信息"></Step>
            <Step title="待进行" content="这里是该步骤的描述信息"></Step>
            <Step title="待进行" content="这里是该步骤的描述信息"></Step>
          </Steps>
        </div>
        <div slot="describe-content">
          设置<code>Steps</code>的属性<code>status</code>为<code>error</code>指定当前步骤状态。
        </div>
      </demoTab>
    </section>

    <h2 id="switch3">API</h2>
    <h3>Steps props</h3>
    <section class="demo" id="api">
      <Table border :columns="propsColumns" :data="propsData"></Table>
    </section>

    <h3>Step  props</h3>
    <section class="demo">
      <Table border :columns="propsColumns" :data="propsData2"></Table>
    </section>

  </article>
</template>
<script>
  import demoTab from '@/components/DemoTab';
  export default {
    components: {
      demoTab
    },
    methods: {
      next () {
        if (this.current == 3) {
          this.current = 0;
        } else {
          this.current += 1;
        }
      }
    },
      data(){
          return{
            propsData:[{
              attribute: 'current',
              describe:'当前步骤，从 0 开始计数',
              type:"Number",
              default:"0"
            },{
              attribute: 'status',
              describe:'当前步骤的状态，可选值为wait、process、finish、error',
              type:"String",
              default:"process"
            },{
              attribute: 'size',
              describe:'步骤条的尺寸，可选值为small或者不写',
              type:"String",
              default:"-"
            },{
              attribute: 'direction',
              describe:'步骤条的方向，可选值为horizontal（水平）或vertical（垂直）',
              type:"String",
              default:"horizontal"
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
            propsData2:[{
              attribute: 'status',
              describe:'步骤的状态，可选值为wait、process、finish、error，不设置时自动判断',
              type:"String",
              default:"process"
            },{
              attribute: 'title',
              describe:'标题',
              type:"String",
              default:"空"
            },{
              attribute: 'content',
              describe:'步骤的详细描述，可选',
              type:"String",
              default:"-"
            },{
              attribute: 'icon',
              describe:'步骤的图标，可选',
              type:"String",
              default:"-"
            }],
            "inputCode6":`&lt;template>
  &lt;Steps :current="1" status="error">
    &lt;Step title="已完成" content="这里是该步骤的描述信息">&lt;/Step>
    &lt;Step title="进行中" content="这里是该步骤的描述信息">&lt;/Step>
    &lt;Step title="待进行" content="这里是该步骤的描述信息">&lt;/Step>
    &lt;Step title="待进行" content="这里是该步骤的描述信息">&lt;/Step>
  &lt;/Steps>
&lt;/template>`,
            subTitle6:'步骤运行错误',
            subTitle5:'垂直方向',
            "inputCode5":`&lt;template>
  &lt;Steps :current="2" direction="vertical">
    &lt;Step title="已完成" content="这里是该步骤的描述信息">&lt;/Step>
    &lt;Step title="已完成" content="这里是该步骤的描述信息">&lt;/Step>
    &lt;Step title="进行中" content="这里是该步骤的描述信息">&lt;/Step>
    &lt;Step title="待进行" content="这里是该步骤的描述信息">&lt;/Step>
  &lt;/Steps>
&lt;/template>`,
            current: 0,
            "inputCode4":`&lt;template>
  &lt;p>当前正在进行第 {{ current + 1 }} 步&lt;/p>
  &lt;Steps :current="current">
    &lt;Step title="步骤1">&lt;/Step>
    &lt;Step title="步骤2">&lt;/Step>
    &lt;Step title="步骤3">&lt;/Step>
    &lt;Step title="步骤4">&lt;/Step>
  &lt;/Steps>
  &lt;i-button type="primary" @click="next">下一步&lt;/i-button>
&lt;/template>`,
            subTitle4:"切换步骤",
            "inputCode3":`&lt;template>
  &lt;Steps :current="2" size="small">
      &lt;Step title="已完成">&lt;/Step>
      &lt;Step title="进行中">&lt;/Step>
      &lt;Step title="待进行">&lt;/Step>
      &lt;Step title="待进行">&lt;/Step>
  &lt;/Steps>
&lt;/template>`,
            subTitle3:'迷你版',
            "inputCode2":`&lt;template>
  &lt;Steps :current="1">
    &lt;Step title="注册" icon="person-add">&lt;/Step>
    &lt;Step title="上传头像" icon="camera">&lt;/Step>
    &lt;Step title="验证邮箱" icon="email">&lt;/Step>
  &lt;/Steps>
&lt;/template>`,
            subTitle2:'带图标的步骤条 ',
            subTitle1:"基础用法",
            "inputCode":`&lt;template>
  &lt;Steps :current="1">
    &lt;Step title="已完成" content="这里是该步骤的描述信息">&lt;/Step>
    &lt;Step title="进行中" content="这里是该步骤的描述信息">&lt;/Step>
    &lt;Step title="待进行" content="这里是该步骤的描述信息">&lt;/Step>
    &lt;Step title="待进行" content="这里是该步骤的描述信息">&lt;/Step>
  &lt;/Steps>
&lt;/template>`
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
</style>
