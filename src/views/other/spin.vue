<template>
  <article class="doc-spin-container">
    <h1>Spin 加载中</h1>
    <h2>概述</h2>
    <p>
      当区块正在获取数据中时可使用，适当的等待动画可以提升用户体验。
    </p>
    <h2>代码示例</h2>

    <section class="demo" id="spin1">
      <demoTab :code="spinCode" :describeTitle="subTitle">
        <div slot="sample">
          <Spin></Spin>
        </div>
        <div slot="describe-content">
          最简单使用 Spin 的方法。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="spin2">
      <demoTab :code="spinCode2" :describeTitle="subTitle2">
        <div slot="sample">
          <Row>
            <Col span="8">
              <Spin size="small"></Spin>
            </Col>
            <Col span="8">
              <Spin></Spin>
            </Col>
            <Col span="8">
              <Spin size="large"></Spin>
            </Col>
          </Row>
        </div>
        <div slot="describe-content">
          通过设置<code>size</code>属性为<code>large</code>和<code>small</code>将 Spin 设置为大和小尺寸，不设置为默认（中）尺寸。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="spin3">
      <demoTab :code="spinCode3" :describeTitle="subTitle3">
        <div slot="sample">
          <div class="demo-spin-container">
            <Spin fix></Spin>
          </div>
        </div>
        <div slot="describe-content">
          在容器内部垂直居中固定，需要父级有<code>relative</code>或<code>absolute</code>。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="spin4">
      <demoTab :code="spinCode4" :describeTitle="subTitle4">
        <div slot="sample">
          <Row>
            <Col class="demo-spin-col" span="8">
            <Spin fix>加载中...</Spin>
            </Col>
            <Col class="demo-spin-col" span="8">
            <Spin fix>
              <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
              <div>Loading</div>
            </Spin>
            </Col>
            <Col class="demo-spin-col" span="8">
            <Spin fix>
              <div class="loader">
                <svg class="circular" viewBox="25 25 50 50">
                  <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10"></circle>
                </svg>
              </div>
            </Spin>
            </Col>
          </Row>
        </div>
        <div slot="describe-content">
          自定义 Spin 的内容，可以是简单的文字，也可以是很复杂的动画。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="spin5">
      <demoTab :code="spinCode5" :describeTitle="subTitle5">
        <div slot="sample">
          <div class="demo-spin-article">
            <h3>登金陵凤凰台</h3>
            <address>李白</address>
            <article>
              <p>凤凰台上凤凰游，凤去台空江自流。</p>
              <p>吴宫花草埋幽径，晋代衣冠成古丘。</p>
              <p>三山半落青天外，二水中分白鹭洲。</p>
              <p>总为浮云能蔽日，长安不见使人愁。</p>
            </article>
            <Spin size="large" fix v-if="spinShow"></Spin>
          </div>
          <br>
          切换显示状态：<i-switch @on-change="spinShow = !spinShow"></i-switch>
        </div>
        <div slot="describe-content">
          控制 Spin 组件的显示和消失。
        </div>
      </demoTab>
    </section>

    <h2 id="spin6">API</h2>
    <h3>Spin props</h3>
    <section class="demo">
      <Table border :columns="propsColumns" :data="propsData"></Table>
    </section>
    <h3>Spin slot</h3>
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
        spinShow: true,
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
          attribute: 'size',
          describe:'Spin尺寸，可选值为<code>large</code>和<code>small</code>或者不设置',
          type:"String",
          default:"-"
        },{
          attribute: 'fix',
          describe:'是否固定，需要父级有<code>relative</code>或<code>absolute</code>',
          type:"Boolean",
          default:"false"
        }],
        slotColumns:[
          {
            title: '名称',
            key: 'name',
          },
          {
            title: '说明',
            key: 'describe',
            width:'500px'
          }],
        slotData:[{
          name: '无',
          describe:'自定义 Spin 的内容，设置slot后，默认的样式不生效'
        }],
        "subTitle": '基础用法',
        "spinCode": `
          &lt;template>
             &lt;Spin>&lt;/Spin>
          &lt;/template>
          &lt;script>
              export default {
              }
          &lt;/script>
        `,
        "subTitle2": '各种尺寸',
        "spinCode2": `
          &lt;template>
              &lt;Row>
                 &lt;Col span="8">
                     &lt;Spin size="small">&lt;/Spin>
                 &lt;/Col>
                 &lt;Col span="8">
                     &lt;Spin>&lt;/Spin>
                 &lt;/Col>
                 &lt;Col span="8">
                     &lt;Spin size="large">&lt;/Spin>
                 &lt;/Col>
             &lt;/Row>
          &lt;/template>
          &lt;script>
              export default {
              }
          &lt;/script>
        `,
        "subTitle3": '居中固定',
        "spinCode3": `
          &lt;style>
              .demo-spin-container{
                display: inline-block;
                  width: 200px;
                  height: 100px;
                  position: relative;
                  border: 1px solid #eee;
              }
          &lt;/style>
          &lt;template>
             &lt;div class="demo-spin-container">
                 &lt;Spin fix>&lt;/Spin>
             &lt;/div>
          &lt;/template>
          &lt;script>
              export default {
              }
          &lt;/script>
        `,
        "subTitle4": '自定义内容',
        "spinCode4": `
          &lt;style>
              .demo-spin-icon-load{
                  animation: ani-demo-spin 1s linear infinite;
              }
              @keyframes ani-demo-spin {
                  from { transform: rotate(0deg);}
                  50%  { transform: rotate(180deg);}
                  to   { transform: rotate(360deg);}
              }
              .demo-spin-col{
                  height: 100px;
                  position: relative;
                  border: 1px solid #eee;
              }
              .loader{
                 width: 30px;
                 height: 30px;
                 position: relative;
                 margin: 0 auto;
                 }
             .circular {
                  -webkit-animation: rotate 2s linear infinite;
                 animation: rotate 2s linear infinite;
                 height: 100%;
                  -webkit-transform-origin: center center;
                  -ms-transform-origin: center center;
                 transform-origin: center center;
                 width: 100%;
                 position: absolute;
                 top: 0;
                 bottom: 0;
                 left: 0;
                 right: 0;
                 margin: auto;
                 }

             .path {
                 stroke-dasharray: 1, 200;
                 stroke-dashoffset: 0;
                  -webkit-animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
                 animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
                 stroke-linecap: round;
                 }
             @-webkit-keyframes rotate {
               100% {
                  -webkit-transform: rotate(360deg);
                  transform: rotate(360deg);
               }
             }
             @keyframes  rotate {
               100% {
                 -webkit-transform: rotate(360deg);
                 transform: rotate(360deg);
               }
             }
             @-webkit-keyframes dash {
               0% {
                 stroke-dasharray: 1, 200;
                 stroke-dashoffset: 0;
               }
               50% {
                 stroke-dasharray: 89, 200;
                 stroke-dashoffset: -35;
               }
               100% {
                 stroke-dasharray: 89, 200;
                 stroke-dashoffset: -124;
               }
             }
             @keyframes  dash {
               0% {
                 stroke-dasharray: 1, 200;
                 stroke-dashoffset: 0;
               }
               50% {
                 stroke-dasharray: 89, 200;
                 stroke-dashoffset: -35;
               }
               100% {
                 stroke-dasharray: 89, 200;
                 stroke-dashoffset: -124;
               }
             }
             @-webkit-keyframes color {
               100%, 0% {
                stroke: #d62d20;
               }
               40% {
                stroke: #0057e7;
               }
               66% {
                stroke: #008744;
               }
               80%, 90% {
                stroke: #ffa700;
               }
             }
             @keyframes  color {
               100%, 0% {
                stroke: #d62d20;
               }
               40% {
                stroke: #0057e7;
               }
               66% {
                stroke: #008744;
               }
               80%, 90% {
                stroke: #ffa700;
               }
             }
          &lt;/style>
          &lt;template>
             &lt;Row>
                 &lt;Col class="demo-spin-col" span="8">
                     &lt;Spin fix>加载中...&lt;/Spin>
                 &lt;/Col>
                 &lt;Col class="demo-spin-col" span="8">
                     &lt;Spin fix>
                         &lt;Icon type="load-c" size=18 class="demo-spin-icon-load">&lt;/Icon>
                         &lt;div>Loading&lt;/div>
                     &lt;/Spin>
                 &lt;/Col>
                 &lt;Col class="demo-spin-col" span="8">
                     &lt;Spin fix>
                         &lt;div>
                             &lt;svg class="circular" viewBox="25 25 50 50">
                                 &lt;circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10">&lt;/circle>
                             &lt;/svg>
                         &lt;/div>
                     &lt;/Spin>
                 &lt;/Col>
             &lt;/Row>
          &lt;/template>
          &lt;script>
              export default {
              }
          &lt;/script>
        `,
        "subTitle5": '状态切换',
        "spinCode5": `
          &lt;template>
             &lt;div class="demo-spin-article">
                 &lt;h3>登金陵凤凰台&lt;/h3>
                 &lt;address>李白&lt;/address>
                 &lt;article>
                     &lt;p>凤凰台上凤凰游，凤去台空江自流。&lt;/p>
                     &lt;p>吴宫花草埋幽径，晋代衣冠成古丘。&lt;/p>
                     &lt;p>三山半落青天外，二水中分白鹭洲。&lt;/p>
                     &lt;p>总为浮云能蔽日，长安不见使人愁。&lt;/p>
                 &lt;/article>
                 &lt;Spin size="large" fix v-if="spinShow">&lt;/Spin>
             &lt;/div>
             &lt;br/>
             切换显示状态：&lt;i-switch @on-change="spinShow = !spinShow">&lt;/i-switch>
          &lt;/template>
          &lt;script>
              export default {
                data () {
                  return {
                    spinShow: true
                  }
                }
              }
          &lt;/script>
        `
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
  .demo-spin-article{
    width: 400px;
    height: 200px;
    padding: 10px;
    position: relative;
    border: 1px solid #eee;
    text-align: center;
  }
  .demo-spin-article h3{
    font-size: 22px;
  }
  .demo-spin-article address{
    color: #999;
    font-style: normal;
    font-size: 14px;
  }
  .demo-spin-article p{
    font-size: 16px;
  }
  .demo-spin-container{
    display: inline-block;
    width: 200px;
    height: 100px;
    position: relative;
    border: 1px solid #eee;
  }

  .demo-spin-icon-load{
    animation: ani-demo-spin 1s linear infinite;
  }
  @keyframes ani-demo-spin {
    from { transform: rotate(0deg);}
    50%  { transform: rotate(180deg);}
    to   { transform: rotate(360deg);}
  }
  .demo-spin-col{
    height: 100px;
    position: relative;
    border: 1px solid #eee;
  }

   .loader{
       width: 30px;
       height: 30px;
       position: relative;
       margin: 0 auto;
       }
   .circular {
        -webkit-animation: rotate 2s linear infinite;
       animation: rotate 2s linear infinite;
       height: 100%;
        -webkit-transform-origin: center center;
        -ms-transform-origin: center center;
       transform-origin: center center;
       width: 100%;
       position: absolute;
       top: 0;
       bottom: 0;
       left: 0;
       right: 0;
       margin: auto;
       }

   .path {
       stroke-dasharray: 1, 200;
       stroke-dashoffset: 0;
        -webkit-animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
       animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
       stroke-linecap: round;
       }
   @-webkit-keyframes rotate {
     100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
     }
   }
   @keyframes  rotate {
     100% {
       -webkit-transform: rotate(360deg);
       transform: rotate(360deg);
     }
   }
   @-webkit-keyframes dash {
     0% {
       stroke-dasharray: 1, 200;
       stroke-dashoffset: 0;
     }
     50% {
       stroke-dasharray: 89, 200;
       stroke-dashoffset: -35;
     }
     100% {
       stroke-dasharray: 89, 200;
       stroke-dashoffset: -124;
     }
   }
   @keyframes  dash {
     0% {
       stroke-dasharray: 1, 200;
       stroke-dashoffset: 0;
     }
     50% {
       stroke-dasharray: 89, 200;
       stroke-dashoffset: -35;
     }
     100% {
       stroke-dasharray: 89, 200;
       stroke-dashoffset: -124;
     }
   }
   @-webkit-keyframes color {
     100%, 0% {
      stroke: #d62d20;
     }
     40% {
      stroke: #0057e7;
     }
     66% {
      stroke: #008744;
     }
     80%, 90% {
      stroke: #ffa700;
     }
   }
   @keyframes  color {
     100%, 0% {
      stroke: #d62d20;
     }
     40% {
      stroke: #0057e7;
     }
     66% {
      stroke: #008744;
     }
     80%, 90% {
      stroke: #ffa700;
     }
   }
</style>
<style>

</style>
