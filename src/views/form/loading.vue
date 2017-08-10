<template>
  <article class="doc-alert-container">
    <h1>Progress 进度条</h1>
    <h2 >概述</h2>
    <p>
      展示操作或任务的当前进度，比如上传文件。
    </p>
    <blockquote>注意：非 template/render 模式下，需使用 i-progress。</blockquote>
    <h2 >示例代码</h2>
    <section class="demo" id="progress1">
      <demoTab :code="noticeModelCode" :describeTitle="describeTitle">
        <div slot="sample">
          <div>
            <i-progress :percent="percent"></i-progress>
            <Button-group size="large">
              <Button icon="ios-plus-empty" @click.native="add"></Button>
              <Button icon="ios-minus-empty" @click.native="minus"></Button>
            </Button-group>
            <i-progress :percent="25" :stroke-width="5"></i-progress>
            <i-progress :percent="100">
              <Icon type="checkmark-circled"></Icon>
              <span>成功</span>
            </i-progress>
          </div>
        </div>
        <div slot="describe-content">
          通过自定义<code>slot</code>和属性<code>stroke-width</code>改变进度条效果。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="progress2">
      <demoTab :code="noticeModelCode02" :describeTitle="describeTitle5">
        <div slot="sample">
          <div style="height: 100px;">
            <Progress  :percent="25"></Progress>
            <Progress  :percent="45" status="active"></Progress>
            <Progress  :percent="65" status="wrong"></Progress>
            <Progress  :percent="100"></Progress>
            <Progress  :percent="25" hide-info></Progress>
          </div>
        </div>
        <div slot="describe-content">
          处在不同状态下的进度条，当 percent 为 100 时，自动将状态置为 success。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="progress3">
      <demoTab :code="noticeModelCode05" :describeTitle="describeTitle6">
        <div slot="sample">
          <div style="height: 100px;">
            <Progress vertical :percent="25"></Progress>
            <Progress vertical :percent="45" status="active"></Progress>
            <Progress vertical :percent="65" status="wrong"></Progress>
            <Progress vertical :percent="100"></Progress>
            <Progress vertical :percent="25" hide-info></Progress>
          </div>
        </div>
        <div slot="describe-content">
          设置属性 <code>vertical</code> 将以垂直方向显示。
        </div>
      </demoTab>
    </section>

    <!--<section class="demo" id="progress4">
      <demoTab :code="noticeModelCode3" :describeTitle="describeTitle3">
        <div slot="sample">
          <Progress :percent="percent"></Progress>
          <Button-group size="large">
            <Button icon="ios-plus-empty" @click="add"></Button>
            <Button icon="ios-minus-empty" @click="minus"></Button>
          </Button-group>
        </div>
        <div slot="describe-content">
          <p> 通过数据的联动和逻辑控制，实现动态效果。</p>
        </div>
      </demoTab>
    </section>-->

    <!--<section class="demo" id="progress3">
      <demoTab :code="noticeModelCode4" :describeTitle="describeTitle4">
        <div slot="sample">
          <Progress :percent="25" :stroke-width="5"></Progress>
          <Progress :percent="100">
            <Icon type="checkmark-circled"></Icon>
            <span>成功</span>
          </Progress>
        </div>
        <div slot="describe-content">
          <p> 通过自定义slot和属性stroke-width改变进度条效果。</p>
        </div>
      </demoTab>
    </section>-->

    <h2 id="Progressapi">API</h2>
    <h3>Progress props</h3>
    <section class="demo">
      <Table border :columns="propsColumns" :data="propsData"></Table>
    </section>
    <h3>Progress slot </h3>
    <section class="demo">
      <Table border :columns="propsColumns02" :data="propsData02"></Table>
    </section>


    <h1 id="Circleapi">Circle 进度环</h1>
    <h2 >概述</h2>
    <p>
      图表类组件。一般有两种用途：
    </p>
    <ul>
      <li>显示某项任务进度的百分比；</li>
      <li>统计某些指标的占比。</li>
    </ul>
    <h2 >代码示例</h2>

    <section class="demo" id="progress4">
      <demoTab :code="code1" :describeTitle="describeTitle5">
        <div slot="sample">
          <i-circle :percent="80">
            <span class="demo-i-circle-inner" style="font-size:24px">80%</span>
          </i-circle>
          <i-circle :percent="100" stroke-color="#5cb85c">
            <Icon type="ios-checkmark-empty" size="60" style="color:#5cb85c"></Icon>
          </i-circle>
          <i-circle :percent="35" stroke-color="#ff5500">
        <span class="demo-i-circle-inner">
            <Icon type="ios-close-empty" size="50" style="color:#ff5500"></Icon>
        </span>
          </i-circle>
        </div>
        <div slot="describe-content">
          圆形进度环有一系列的参数可配置，具体可以查看下面的API文档。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="progress5">
      <demoTab :code="code2" :describeTitle="codeTitle2">
        <div slot="sample">
          <i-circle :percent="percent" :stroke-color="color">
            <Icon v-if="percent == 100" type="ios-checkmark-empty" size="60" style="color:#5cb85c"></Icon>
            <span v-else style="font-size:24px">{{ percent }}%</span>
          </i-circle>
          <Button-group size="large">
            <Button icon="ios-plus-empty" @click="add"></Button>
            <Button icon="ios-minus-empty" @click="minus"></Button>
          </Button-group>
        </div>
        <div slot="describe-content">
          通过数据的联动和逻辑控制，实现交互效果。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="progress6">
      <demoTab :code="code3" :describeTitle="codeTitle3">
        <div slot="sample">
          <i-circle
            :size="250"
            :trail-width="4"
            :stroke-width="5"
            :percent="75"
            stroke-linecap="square"
            stroke-color="#43a3fb">
            <div class="demo-i-circle-custom">
              <h1>42,001,776</h1>
              <p>消费人群规模</p>
              <span>
                总占人数
                <i>75%</i>
            </span>
            </div>
          </i-circle>
        </div>
        <div slot="describe-content">
          通过自定义<code>slot</code>和丰富的配置，可以组合出很多统计效果。
        </div>
      </demoTab>
    </section>

    <h2 id="api01">API</h2>
    <h3>Circle props </h3>
    <section class="demo">
      <Table border :columns="propsColumns" :data="apiData"></Table>
    </section>

    <h3>Circle slot </h3>
    <section class="demo">
      <Table border :columns="propsColumns02" :data="apiData02"></Table>
    </section>


  </article>
</template>
<script>
  import demoTab from '@/components/DemoTab'
  export default {
    components: {
      demoTab
    },
    computed: {
      color () {
        let color = '#2db7f5';
        if (this.percent == 100) {
          color = '#5cb85c';
        }
        return color;
      }
    },
    data(){
        return {
          vertical:true,
          "noticeModelCode05":`&lt;template>
&lt;div style="height: 100px;">
            &lt;Progress vertical :percent="25">&lt;/Progress>
            &lt;Progress vertical :percent="45" status="active">&lt;/Progress>
            &lt;Progress vertical :percent="65" status="wrong">&lt;/Progress>
            &lt;Progress vertical :percent="100">&lt;/Progress>
            &lt;Progress vertical :percent="25" hide-info>&lt;/Progress>
          &lt;/div>
&lt;/template>`,
          describeTitle6:'垂直方向',
          propsData02:[
            {
              name: '无',
              describe:'自定义显示状态内容'
            }
          ],
          propsData:[
            {
              attribute: 'percent',
              describe:'百分比',
              type:"Number",
              default:"0"
            },
            {
              attribute: 'status',
              describe:'状态，可选值为normal、active、wrong、success',
              type:"String",
              default:"normal"
            },
            {
              attribute: 'stroke-width',
              describe:'进度条的线宽，单位 px',
              type:"Number",
              default:"10"
            },
            {
              attribute: 'hide-info',
              describe:'隐藏数值或状态图标',
              type:"Boolean",
              default:"false"
            },
            {
              attribute: 'vertical',
              describe:'是否在垂直方向显示',
              type:"Boolean",
              default:"false"
            }
              ],
          percent: 0,
          apiData02:[
            {
              name: '无',
              describe:'自定义显示中间内容，内容默认垂直居中'
            }
          ],
          propsColumns02:[
            {
              title: '名称',
              key: 'name',
            },
            {
              title: '说明',
              key: 'describe'
            },
          ],
          apiData:[{
            attribute: 'percent',
            describe:'百分比',
            type:"Number",
            default:"0"
          },{
            attribute: 'size',
            describe:'图表的宽度和高度，单位 px',
            type:"Number",
            default:"120"
          },{
            attribute: 'stroke-linecap',
            describe:'进度环顶端的形状，可选值为square（方）和round（圆）',
            type:"String",
            default:"	round"
          },{
            attribute: 'stroke-width',
            describe:'进度环的线宽，单位 px',
            type:"Number",
            default:"6"
          },{
            attribute: 'stroke-color',
            describe:'进度环的颜色',
            type:"String",
            default:"	#2db7f5"
          },{
            attribute: 'trail-width',
            describe:'进度环背景的线宽，单位 px',
            type:"Number",
            default:"5"
          },{
            attribute: 'trail-color',
            describe:'	进度环背景的颜色',
            type:"String",
            default:"#eaeef2"
          }],
          propsColumns:[{
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
          "code3":`&lt;template>
&lt;i-circle
            :size="250"
            :trail-width="4"
            :stroke-width="5"
            :percent="75"
            stroke-linecap="square"
            stroke-color="#43a3fb">
            &lt;div class="demo-i-circle-custom">
              &lt;h1>42,001,776&lt;/h1>
              &lt;p>消费人群规模&lt;/p>
              &lt;span>
                总占人数
                &lt;i>75%&lt;/i>
            &lt;/span>
            &lt;/div>
          &lt;/i-circle>
&lt;/template>`,
          codeTitle3:"自定义更多样式",
          "code2":`&lt;template>
&lt;i-circle :percent="percent" :stroke-color="color">
            &lt;Icon v-if="percent == 100" type="ios-checkmark-empty" size="60" style="color:#5cb85c">&lt;/Icon>
            &lt;span v-else style="font-size:24px">{{ percent }}%&lt;/span>
          &lt;/i-circle>
          &lt;Button-group size="large">
            &lt;Button icon="ios-plus-empty" @click="add">&lt;/Button>
            &lt;Button icon="ios-minus-empty" @click="minus">&lt;/Button>
          &lt;/Button-group>
&lt;/template>`,
          codeTitle2:'配合外部组件使用',
          "code1":`&lt;template>
&lt;i-circle :percent="80">
            &lt;span class="demo-i-circle-inner" style="font-size:24px">80%&lt;/span>
          &lt;/i-circle>
          &lt;i-circle :percent="100" stroke-color="#5cb85c">
            &lt;Icon type="ios-checkmark-empty" size="60" style="color:#5cb85c">&lt;/Icon>
          &lt;/i-circle>
          &lt;i-circle :percent="35" stroke-color="#ff5500">
        &lt;span class="demo-i-circle-inner">
            &lt;Icon type="ios-close-empty" size="50" style="color:#ff5500">&lt;/Icon>
        &lt;/span>
          &lt;/i-circle>
&lt;/template>`,
          describeTitle5:'基础用法',
          describeTitle:'自定义更多样式',
          describeTitle2:'Progress--垂直方向',
          describeTitle3:'Progress--配合外部组件使用',
          describeTitle4:'Progress--自定义更多样式',
          "noticeModelCode":`
&lt;template>
&lt;i-progress :percent="percent">&lt;/i-progress>
            &lt;Button-group size="large">
              &lt;Button icon="ios-plus-empty" @click.native="add">&lt;/Button>
              &lt;Button icon="ios-minus-empty" @click.native="minus">&lt;/Button>
            &lt;/Button-group>
            &lt;i-progress :percent="25" :stroke-width="5">&lt;/i-progress>
            &lt;i-progress :percent="100">
              &lt;Icon type="checkmark-circled">&lt;/Icon>
              &lt;span>成功&lt;/span>
            &lt;/i-progress>
&lt;/template>`,
          "noticeModelCode02":`
&lt;template>
&lt;Progress vertical :percent="25">&lt;/Progress>
            &lt;Progress vertical :percent="45" status="active">&lt;/Progress>
            &lt;Progress vertical :percent="65" status="wrong">&lt;/Progress>
            &lt;Progress vertical :percent="100">&lt;/Progress>
            &lt;Progress vertical :percent="25" hide-info>&lt;/Progress>&lt;/template>`,
          "noticeModelCode03":`
&lt;template>
&lt;Progress :percent="percent">&lt;/Progress>
          &lt;Button-group size="large">
            &lt;Button icon="ios-plus-empty" @click="add">&lt;/Button>
            &lt;Button icon="ios-minus-empty" @click="minus">&lt;/Button>
          &lt;/Button-group>&lt;/template>`,
          "noticeModelCode04":`
&lt;template>
&lt;Progress :percent="25" :stroke-width="5">&lt;/Progress>
          &lt;Progress :percent="100">
            &lt;Icon type="checkmark-circled">&lt;/Icon>
            &lt;span>成功&lt;/span>
          &lt;/Progress>&lt;/template>`,
        }
    },
    methods:{
      add () {
        if (this.percent >= 100) {
          return false;
        }
        this.percent += 10;
      },
      minus () {
        if (this.percent <= 0) {
          return false;
        }
        this.percent -= 10;
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
  .demo-i-circle-custom{
  & h1{
      color: #3f414d;
      font-size: 28px;
      font-weight: normal;
    }
  & p{
      color: #657180;
      font-size: 14px;
      margin: 10px 0 15px;
    }
  & span{
      display: block;
      padding-top: 15px;
      color: #657180;
      font-size: 14px;
  &:before{
     content: '';
     display: block;
     width: 50px;
     height: 1px;
     margin: 0 auto;
     background: #e0e3e6;
     position: relative;
     top: -15px;
   };
  }
  & span i{
      font-style: normal;
      color: #3f414d;
    }
  }
</style>
