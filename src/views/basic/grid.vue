<template>
  <article class="doc-grid-container">
    <h1>Grid 栅格</h1>
    <h2>概述</h2>
    <section class="demo">
       <Row class="demo-row">
          <Col span="24" class="demo-col">24：100%</Col>
       </Row>
       <Row class="demo-row">
          <Col span="12" class="demo-col">12: 50%</Col>
          <Col span="12" class="demo-col">12: 50%</Col>
       </Row>
       <Row class="demo-row">
          <Col span="8" class="demo-col">8：33.33%</Col>
          <Col span="8" class="demo-col">8：33.33%</Col>
          <Col span="8" class="demo-col">8：33.33%</Col>
       </Row>
       <Row class="demo-row">
          <Col span="6" class="demo-col">6：25%</Col>
          <Col span="6" class="demo-col">6：25%</Col>
          <Col span="6" class="demo-col">6：25%</Col>
          <Col span="6" class="demo-col">6：25%</Col>
       </Row>
       <Row class="demo-row">
          <Col span="16" class="demo-col">16：66.66%</Col>
          <Col span="8" class="demo-col">8：33.33%</Col>
       </Row>
    </section>
    <p>我们采用了24栅格系统，将区域进行24等分，这样可以轻松应对大部分布局问题。使用栅格系统进行网页布局，可以使页面排版美观、舒适。
我们定义了两个概念，行row和列col，具体使用方法如下：</p>
    <ul>
      <li>使用row在水平方向创建一行</li>
      <li>将一组col插入在row中</li>
      <li>在每个col中，键入自己的内容</li>
      <li>通过设置col的span参数，指定跨越的范围，其范围是1到24</li>
      <li>每个row中的col总和应该为24</li>
    </ul>
    <blockquote class="attention">注意：非 template/render 模式下，需使用 i-col。</blockquote>
    <h2>代码示例</h2>
    <section class="demo" id="basic">
      <demoTab :code="gridCode" :describeTitle="describeTitle">
        <div slot="sample">
          <Row>
            <Col span="12">col-12</Col>
            <Col span="12">col-12</Col>
          </Row>
          <br>
          <Row>
              <Col span="8">col-8</Col>
              <Col span="8">col-8</Col>
              <Col span="8">col-8</Col>
          </Row>
          <br>
          <Row>
              <Col span="6">col-6</Col>
              <Col span="6">col-6</Col>
              <Col span="6">col-6</Col>
              <Col span="6">col-6</Col>
          </Row>
        </div>
        <div slot="describe-content">
           水平排列的布局。<br/>
           col必须放在row里面。
        </div>
      </demoTab>
    </section>
    <section class="demo" id="gutter">
        <demoTab :code="guttergridCode" :describeTitle="describeTitlegutter">
          <div slot="sample" class="gutter">
            <Row :gutter="16">
                <Col span="6">
                    <div>col-6</div>
                </Col>
                <Col span="6">
                    <div>col-6</div>
                </Col>
                <Col span="6">
                    <div>col-6</div>
                </Col>
                <Col span="6">
                    <div>col-6</div>
                </Col>
            </Row>
          </div>
          <div slot="describe-content">
            通过给 row 添加 gutter 属性，可以给下属的 col 添加间距，推荐使用 (16+8n)px 作为栅格间隔。
          </div>
        </demoTab>
    </section>
    <section class="demo" id="order">
        <demoTab :code="ordergridCode" :describeTitle="describeTitleorder">
          <div slot="sample">
            <Row type="flex">
               <Col span="6" order="4">1 | order-4</Col>
               <Col span="6" order="3">2 | order-3</Col>
               <Col span="6" order="2">3 | order-2</Col>
               <Col span="6" order="1">4 | order-1</Col>
            </Row>
          </div>
          <div slot="describe-content">
            通过 Flex 布局的order来改变栅格的顺序。
          </div>
        </demoTab>
    </section>
    <section class="demo" id="sort">
        <demoTab :code="sortgridCode" :describeTitle="describeTitlesort">
          <div slot="sample">
            <Row>
                <Col span="18" push="6">col-18 | push-6</Col>
                <Col span="6" pull="18">col-6 | pull-18</Col>
            </Row>
          </div>
          <div slot="describe-content">
             通过设置push和pull来改变栅格的顺序。
          </div>
        </demoTab>
    </section>
    <section class="demo" id="offset">
        <demoTab :code="offsetgridCode" :describeTitle="describeTitleoffset">
          <div slot="sample">
             <Row>
                 <Col span="8">col-8</Col>
                 <Col span="8" offset="8">col-8 | offset-8</Col>
             </Row>
             <br>
             <Row>
                 <Col span="6" offset="8">col-6 | offset-8</Col>
                 <Col span="6" offset="4">col-6 | offset-4</Col>
             </Row>
             <br>
             <Row>
                 <Col span="12" offset="8">col-12 | offset-8</Col>
             </Row>
          </div>
          <div slot="describe-content">
             通过设置offset属性，将列进行左右偏移，偏移栅格数为offset的值。
          </div>
        </demoTab>
    </section>
    <section class="demo" id="flex">
        <demoTab :code="flexgridCode" :describeTitle="describeTitleflex">
          <div slot="sample">
              <p>子元素向左排列</p>
              <Row type="flex" justify="start" class="code-row-bg">
                  <Col span="4">col-4</Col>
                  <Col span="4">col-4</Col>
                  <Col span="4">col-4</Col>
                  <Col span="4">col-4</Col>
              </Row>
              <p>子元素向右排列</p>
              <Row type="flex" justify="end" class="code-row-bg">
                  <Col span="4">col-4</Col>
                  <Col span="4">col-4</Col>
                  <Col span="4">col-4</Col>
                  <Col span="4">col-4</Col>
              </Row>
              <p>子元素居中排列</p>
              <Row type="flex" justify="center" class="code-row-bg">
                  <Col span="4">col-4</Col>
                  <Col span="4">col-4</Col>
                  <Col span="4">col-4</Col>
                  <Col span="4">col-4</Col>
              </Row>
              <p>子元素等宽排列</p>
              <Row type="flex" justify="space-between" class="code-row-bg">
                  <Col span="4">col-4</Col>
                  <Col span="4">col-4</Col>
                  <Col span="4">col-4</Col>
                  <Col span="4">col-4</Col>
              </Row>
              <p>子元素分散排列</p>
              <Row type="flex" justify="space-around" class="code-row-bg">
                  <Col span="4">col-4</Col>
                  <Col span="4">col-4</Col>
                  <Col span="4">col-4</Col>
                  <Col span="4">col-4</Col>
              </Row>
          </div>
          <div slot="describe-content">
             通过给row设置参数justify为不同的值，来定义子元素的排布方式。在flex模式下有效。
          </div>
        </demoTab>
    </section>
    <section class="demo" id="align">
        <demoTab :code="aligngridCode" :describeTitle="describeTitlealign">
          <div slot="sample">
              <p>顶部对齐</p>
              <Row type="flex" justify="center" align="top" class="code-row-bg">
                  <Col span="4"><p style="height: 80px">col-4</p></Col>
                  <Col span="4"><p style="height: 30px">col-4</p></Col>
                  <Col span="4"><p style="height: 100px">col-4</p></Col>
                  <Col span="4"><p style="height: 60px">col-4</p></Col>
              </Row>
              <p>底部对齐</p>
              <Row type="flex" justify="center" align="bottom" class="code-row-bg">
                  <Col span="4"><p style="height: 80px">col-4</p></Col>
                  <Col span="4"><p style="height: 30px">col-4</p></Col>
                  <Col span="4"><p style="height: 100px">col-4</p></Col>
                  <Col span="4"><p style="height: 60px">col-4</p></Col>
              </Row>
              <p>居中对齐</p>
              <Row type="flex" justify="center" align="middle" class="code-row-bg">
                  <Col span="4"><p style="height: 80px">col-4</p></Col>
                  <Col span="4"><p style="height: 30px">col-4</p></Col>
                  <Col span="4"><p style="height: 100px">col-4</p></Col>
                  <Col span="4"><p style="height: 60px">col-4</p></Col>
              </Row>
              </div>
              <div slot="describe-content">
                通过给row设置参数align为不同的值，来定义子元素在垂直方向上的排布方式。在flex模式下有效。
              </div>
            </demoTab>
      </section>
      <section class="demo" id="response">
        <demoTab :code="responsegridCode" :describeTitle="describeTitleresponse">
          <div slot="sample">
              <Row>
                  <Col :xs="2" :sm="4" :md="6" :lg="8">Col</Col>
                  <Col :xs="20" :sm="16" :md="12" :lg="8">Col</Col>
                  <Col :xs="2" :sm="4" :md="6" :lg="8">Col</Col>
              </Row>
          </div>
          <div slot="describe-content">
             参照 Bootstrap 的 响应式设计，预设四个响应尺寸：xs sm md lg，详见 API。调整浏览器尺寸来查看效果。
          </div>
        </demoTab>
    </section>
    <section class="demo" id="else">
        <demoTab :code="elseCode" :describeTitle="describeTitleelse">
          <div slot="sample">
            <Row>
              <Col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col</Col>
              <Col :xs="{ span: 11, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col</Col>
              <Col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col</Col>
            </Row>
          </div>
          <div slot="describe-content">
            span pull push offset order 属性可以通过内嵌到 xs sm md lg 属性中来使用。<br/>
            其中 :xs="6" 相当于 :xs="{ span: 6 }"。
          </div>
        </demoTab>
    </section>

    <h2 id="api">API</h2>
    <h3>Row props</h3>
    <section class="demo">
      <Table border :columns="propsColumns" :data="rowpropsData"></Table>
    </section>
    <h3>Col props</h3>
    <section class="demo">
      <Table border :columns="propsColumns" :data="colpropsData"></Table>
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
      "describeTitle": "基础用法",
      "describeTitlegutter":"区块间隔",
      "describeTitleorder":"栅格顺序(Flex)",
      "describeTitlesort":"栅格排序",
      "describeTitleoffset":"栅格顺序(左右偏移)",
      "describeTitleflex":"Flex布局",
      "describeTitlealign":"Flex对齐",
      "describeTitleresponse":"响应式布局",
      "describeTitleelse":"其它属性的响应式",
      "propsColumns":[
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
      "rowpropsData":[{
            attribute: 'gutter',
            describe:'栅格间距，单位 px，左右平分',
            type:"Number",
            default:"0"
          },
          {
            attribute: 'type',
            describe:'布局模式，可选值为flex或不选，在现代浏览器下有效',
            type:"String",
            default:"-"
          },{
            attribute: 'align',
            describe:'flex 布局下的垂直对齐方式，可选值为top、middle、bottom',
            type:"String",
            default:"-"
          },{
            attribute: 'justify',
            describe:'flex 布局下的水平排列方式，可选值为start、end、center、space-around、space-between',
            type:"String",
            default:"-"
          },{
            attribute: 'class-name',
            describe:'自定义的class名称',
            type:"String",
            default:"-"
          }],
      "colpropsData":[{
            attribute: 'span',
            describe:'栅格的占位格数，可选值为0~24的整数，为 0 时，相当于display:none',
            type:"Number | String",
            default:"-"
          },{
            attribute: 'order',
            describe:'栅格的顺序，在flex布局模式下有效',
            type:"Number | String",
            default:"-"
          },{
            attribute: 'offset',
            describe:'栅格左侧的间隔格数，间隔内不可以有栅格',
            type:"Number | String",
            default:"-"
          },{
            attribute: 'push',
            describe:'栅格向右移动格数',
            type:"Number | String",
            default:"-"
          },{
            attribute: 'pull',
            describe:'栅格向左移动格数',
            type:"Number | String",
            default:"-"
          },{
            attribute: 'class-name',
            describe:'自定义的class名称',
            type:"String",
            default:"-"
          },{
            attribute: 'xs',
            describe:'<768px 响应式栅格，可为栅格数或一个包含其他属性的对象',
            type:"Number | Object",
            default:"-"
          },{
            attribute: 'sm',
            describe:'≥768px 响应式栅格，可为栅格数或一个包含其他属性的对象',
            type:"Number | Object",
            default:"-"
          },{
            attribute: 'md',
            describe:'≥992px 响应式栅格，可为栅格数或一个包含其他属性的对象',
            type:"Number | Object",
            default:"-"
          },{
            attribute: 'lg',
            describe:'≥1200px 响应式栅格，可为栅格数或一个包含其他属性的对象',
            type:"Number | Object",
            default:"-"
          }],
      "gridCode": `
&lt;template>
    &lt;Row>
        &lt;Col span="12">col-12&lt;/Col>
        &lt;Col span="12">col-12&lt;/Col>
    &lt;/Row>
    &lt;br>
    &lt;Row>
        &lt;Col span="8">col-8&lt;/Col>
        &lt;Col span="8">col-8&lt;/Col>
        &lt;Col span="8">col-8&lt;/Col>
    &lt;/Row>
    &lt;br>
    &lt;Row>
        &lt;Col span="6">col-6&lt;/Col>
        &lt;Col span="6">col-6&lt;/Col>
        &lt;Col span="6">col-6&lt;/Col>
        &lt;Col span="6">col-6&lt;/Col>
    &lt;/Row>
&lt;/template>
&lt;script>
    export default {

    }
&lt;/script>
`,
"guttergridCode":`
&lt;template>
    &lt;Row :gutter="16">
        &lt;Col span="6">
            &lt;div>col-6&lt;/div>
        &lt;/Col>
        &lt;Col span="6">
            &lt;div>col-6&lt;/div>
        &lt;/Col>
        &lt;Col span="6">
            &lt;div>col-6&lt;/div>
        &lt;/Col>
        &lt;Col span="6">
            &lt;div>col-6&lt;/div>
        &lt;/Col>
    &lt;/Row>
&lt;/template>
&lt;script>
    export default {
        
    }
&lt;/script>
`,
"ordergridCode":`
&lt;template>
    &lt;Row type="flex">
        &lt;Col span="6" order="4">1 | order-4&lt;/Col>
        &lt;Col span="6" order="3">2 | order-3&lt;/Col>
        &lt;Col span="6" order="2">3 | order-2&lt;/Col>
        &lt;Col span="6" order="1">4 | order-1&lt;/Col>
    &lt;/Row>
&lt;/template>
&lt;script>
    export default {
        
    }
&lt;/script>
`,
"offsetgridCode":`
&lt;template>
    &lt;Row>
        &lt;Col span="8">col-8&lt;/Col>
        &lt;Col span="8" offset="8">col-8 | offset-8&lt;/Col>
    &lt;/Row>
    &lt;br>
    &lt;Row>
        &lt;Col span="6" offset="8">col-6 | offset-8&lt;/Col>
        &lt;Col span="6" offset="4">col-6 | offset-4&lt;/Col>
    &lt;/Row>
    &lt;br>
    &lt;Row>
        &lt;Col span="12" offset="8">col-12 | offset-8&lt;/Col>
    &lt;/Row>
&lt;/template>
&lt;script>
    export default {
        
    }
&lt;/script>
`,
"flexgridCode":`
&lt;template>
    &lt;p>子元素向左排列&lt;/p>
    &lt;Row type="flex" justify="start" class="code-row-bg">
        &lt;Col span="4">col-4&lt;/Col>
        &lt;Col span="4">col-4&lt;/Col>
        &lt;Col span="4">col-4&lt;/Col>
        &lt;Col span="4">col-4&lt;/Col>
    &lt;/Row>
    &lt;p>子元素向右排列&lt;/p>
    &lt;Row type="flex" justify="end" class="code-row-bg">
        &lt;Col span="4">col-4&lt;/Col>
        &lt;Col span="4">col-4&lt;/Col>
        &lt;Col span="4">col-4&lt;/Col>
        &lt;Col span="4">col-4&lt;/Col>
    &lt;/Row>
    &lt;p>子元素居中排列&lt;/p>
    &lt;Row type="flex" justify="center" class="code-row-bg">
        &lt;Col span="4">col-4&lt;/Col>
        &lt;Col span="4">col-4&lt;/Col>
        &lt;Col span="4">col-4&lt;/Col>
        &lt;Col span="4">col-4&lt;/Col>
    &lt;/Row>
    &lt;p>子元素等宽排列&lt;/p>
    &lt;Row type="flex" justify="space-between" class="code-row-bg">
        &lt;Col span="4">col-4&lt;/Col>
        &lt;Col span="4">col-4&lt;/Col>
        &lt;Col span="4">col-4&lt;/Col>
        &lt;Col span="4">col-4&lt;/Col>
    &lt;/Row>
    &lt;p>子元素分散排列&lt;/p>
    &lt;Row type="flex" justify="space-around" class="code-row-bg">
        &lt;Col span="4">col-4&lt;/Col>
        &lt;Col span="4">col-4&lt;/Col>
        &lt;Col span="4">col-4&lt;/Col>
        &lt;Col span="4">col-4&lt;/Col>
    &lt;/Row>
&lt;/template>
&lt;script>
    export default {
        
    }
&lt;/script>
`,
"aligngridCode":`
&lt;template>
    &lt;p>顶部对齐&lt;/p>
    &lt;Row type="flex" justify="center" align="top" class="code-row-bg">
        &lt;Col span="4">&lt;p style="height: 80px">col-4&lt;/p>&lt;/Col>
        &lt;Col span="4">&lt;p style="height: 30px">col-4&lt;/p>&lt;/Col>
        &lt;Col span="4">&lt;p style="height: 100px">col-4&lt;/p>&lt;/Col>
        &lt;Col span="4">&lt;p style="height: 60px">col-4&lt;/p>&lt;/Col>
    &lt;/Row>
    &lt;p>底部对齐&lt;/p>
    &lt;Row type="flex" justify="center" align="bottom" class="code-row-bg">
        &lt;Col span="4">&lt;p style="height: 80px">col-4&lt;/p>&lt;/Col>
        &lt;Col span="4">&lt;p style="height: 30px">col-4&lt;/p>&lt;/Col>
        &lt;Col span="4">&lt;p style="height: 100px">col-4&lt;/p>&lt;/Col>
        &lt;Col span="4">&lt;p style="height: 60px">col-4&lt;/p>&lt;/Col>
    &lt;/Row>
    &lt;p>居中对齐&lt;/p>
    &lt;Row type="flex" justify="center" align="middle" class="code-row-bg">
        &lt;Col span="4">&lt;p style="height: 80px">col-4&lt;/p>&lt;/Col>
        &lt;Col span="4">&lt;p style="height: 30px">col-4&lt;/p>&lt;/Col>
        &lt;Col span="4">&lt;p style="height: 100px">col-4&lt;/p>&lt;/Col>
        &lt;Col span="4">&lt;p style="height: 60px">col-4&lt;/p>&lt;/Col>
    &lt;/Row>
&lt;/template>
&lt;script>
    export default {
        
    }
&lt;/script>
`,
"responsegridCode":`
&lt;template>
    &lt;Row>
        &lt;Col :xs="2" :sm="4" :md="6" :lg="8">Col&lt;/Col>
        &lt;Col :xs="20" :sm="16" :md="12" :lg="8">Col&lt;/Col>
        &lt;Col :xs="2" :sm="4" :md="6" :lg="8">Col&lt;/Col>
    &lt;/Row>
&lt;/template>
&lt;script>
    export default {
    }
&lt;/script>
`,
"elseCode":`
&lt;template>
    &lt;Row>
        &lt;Col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col&lt;/Col>
        &lt;Col :xs="{ span: 11, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col&lt;/Col>
        &lt;Col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col&lt;/Col>
    &lt;/Row>
&lt;/template>
&lt;script>
    export default {
        
    }
&lt;/script>
`,
"sortgridCode":`
&lt;template>
    &lt;Row>
        &lt;Col span="18" push="6">col-18 | push-6&lt;/Col>
        &lt;Col span="6" pull="18">col-6 | pull-18&lt;/Col>
    &lt;/Row>
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
<style lang="less" scoped>
.demo{
  background-color: #fff;
}
.ivu-col{
  color: #fff;
  text-align: center;
  line-height: 45px;
  font-size: 1em;
}
.ivu-col:nth-child(2n+1){
  background-color: rgba(0,153,229,.7);
}
.ivu-col:nth-child(2n){
  background-color: rgba(0,153,229,.5);
}
.demo-row{
  margin-bottom:5px;
  background-image:linear-gradient(90deg,#f5f5f5 4.16666667%,transparent 0,transparent 8.33333333%,#f5f5f5 0,#f5f5f5 12.5%,transparent 0,transparent 16.66666667%,#f5f5f5 0,#f5f5f5 20.83333333%,transparent 0,transparent 25%,#f5f5f5 0,#f5f5f5 29.16666667%,transparent 0,transparent 33.33333333%,#f5f5f5 0,#f5f5f5 37.5%,transparent 0,transparent 41.66666667%,#f5f5f5 0,#f5f5f5 45.83333333%,transparent 0,transparent 50%,#f5f5f5 0,#f5f5f5 54.16666667%,transparent 0,transparent 58.33333333%,#f5f5f5 0,#f5f5f5 62.5%,transparent 0,transparent 66.66666667%,#f5f5f5 0,#f5f5f5 70.83333333%,transparent 0,transparent 75%,#f5f5f5 0,#f5f5f5 79.16666667%,transparent 0,transparent 83.33333333%,#f5f5f5 0,#f5f5f5 87.5%,transparent 0,transparent 91.66666667%,#f5f5f5 0,#f5f5f5 95.83333333%,transparent 0);
  .demo-col{
    line-height: 80px;
  }
}
ul{
  margin-top:10px;
  margin-bottom: 10px;
}
ul li{
   list-style: disc;
   margin: 5px 30px;
}
blockquote.attention{
  padding: 5px 5px 3px 10px;
  line-height: 1.5;
  border-left: 4px solid #ddd;
  margin-bottom: 20px;
  color: #666;
  font-size: 14px;
}
.gutter{
  .ivu-col{
     background-color: #fff;
     &:nth-child(2n+1) div{
       background-color: rgba(0,153,229,.7);
     }
     &:nth-child(2n) div{
       background-color: rgba(0,153,229,.5);
     }
  }
}
</style>
