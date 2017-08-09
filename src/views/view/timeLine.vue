<template>
  <article class="doc-timeLine-container">
    <h1>Timeline 时间轴</h1>
    <h2>概述</h2>
    <p>
      对一系列信息进行时间排序时，垂直地展示。
    </p>
    <h2>代码示例</h2>

    <section class="demo" id="timeLine1">
      <demoTab :code="timeLineCode" :describeTitle="subTitle">
        <div slot="sample">
          <Timeline>
            <Timeline-item>
              <p class="time">1976年</p>
              <p class="content">Apple I 问世</p>
            </Timeline-item>
            <Timeline-item>
              <p class="time">1984年</p>
              <p class="content">发布 Macintosh</p>
            </Timeline-item>
            <Timeline-item>
              <p class="time">2007年</p>
              <p class="content">发布 iPhone</p>
            </Timeline-item>
            <Timeline-item>
              <p class="time">2010年</p>
              <p class="content">发布 iPad</p>
            </Timeline-item>
            <Timeline-item>
              <p class="time">2011年10月5日</p>
              <p class="content">史蒂夫·乔布斯去世</p>
            </Timeline-item>
          </Timeline>
        </div>
        <div slot="describe-content">
          最简单定义一个时间轴的用法。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="timeLine2">
      <demoTab :code="timeLineCode2" :describeTitle="subTitle2">
        <div slot="sample">
          <Timeline>
            <Timeline-item color="green">发布1.0版本</Timeline-item>
            <Timeline-item color="green">发布2.0版本</Timeline-item>
            <Timeline-item color="red">严重故障</Timeline-item>
            <Timeline-item color="blue">发布3.0版本</Timeline-item>
          </Timeline>
        </div>
        <div slot="describe-content">
          用各种颜色来标识不同状态，可以使用<code>green</code>、<code>red</code>、<code>blue</code>或自定义的颜色，默认是 blue 。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="timeLine3">
      <demoTab :code="timeLineCode3" :describeTitle="subTitle3">
        <div slot="sample">
          <Timeline pending>
            <Timeline-item>发布1.0版本</Timeline-item>
            <Timeline-item>发布2.0版本</Timeline-item>
            <Timeline-item>发布3.0版本</Timeline-item>
            <Timeline-item><a href="#">查看更多</a></Timeline-item>
          </Timeline>
        </div>
        <div slot="describe-content">
          通过添加<code>pending</code>属性来标记最后一个为幽灵节点，标识还未完成。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="timeLine4">
      <demoTab :code="timeLineCode4" :describeTitle="subTitle4">
        <div slot="sample">
          <Timeline>
            <Timeline-item color="green">
              <Icon type="trophy" slot="dot"></Icon>
              <span>发布里程碑版本</span>
            </Timeline-item>
            <Timeline-item>发布1.0版本</Timeline-item>
            <Timeline-item>发布2.0版本</Timeline-item>
            <Timeline-item>发布3.0版本</Timeline-item>
          </Timeline>
        </div>
        <div slot="describe-content">
          接受一个 slot 来自定义轴点的内容，比如一个图标。
        </div>
      </demoTab>
    </section>
    </section>

    <h2 id="timeLine5">API</h2>
    <h3>Timeline props</h3>
    <section class="demo">
      <Table border :columns="propsColumns" :data="propsData"></Table>
    </section>
    <h3>TimelineItem props</h3>
    <section class="demo">
      <Table border :columns="itemPropsColumns" :data="itemPropsData"></Table>
    </section>
    <h3>TimelineItem slot</h3>
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
          attribute: 'pending',
          describe:'指定是否最后一个节点为幽灵节点',
          type:"Boolean",
          default:"false"
        }],
        itemPropsColumns:[
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
        itemPropsData:[{
          attribute: 'color',
          describe:'圆圈颜色，可选值为<code>blue</code>、<code>red</code>、<code>green</code>，或自定义色值',
          type:"String",
          default:"blue"
        }],
        slotColumns:[
          {
            title: '名称',
            key: 'name',
          },
          {
            title: '说明',
            key: 'describe',
            width:'550px'
          }],
        slotData:[{
          name: 'dot',
          describe:'自定义时间轴点内容'
        },
          {
            name: '无',
            describe:'基本内容'
          }],
        "subTitle": '基础用法',
        "timeLineCode": `
          &lt;style scoped>
            .time{
                font-size: 14px;
                font-weight: bold;
            }
            .content{
                padding-left: 5px;
            }
          &lt;/style>
          &lt;template>
             &lt;Timeline>
                 &lt;Timeline-item>
                     &lt;p class="time">1976年&lt;/p>
                     &lt;p class="content">Apple I 问世&lt;/p>
                 &lt;/Timeline-item>
                 &lt;Timeline-item>
                     &lt;p class="time">1984年&lt;/p>
                     &lt;p class="content">发布 Macintosh&lt;/p>
                 &lt;/Timeline-item>
                 &lt;Timeline-item>
                     &lt;p class="time">2007年&lt;/p>
                     &lt;p class="content">发布 iPhone&lt;/p>
                 &lt;/Timeline-item>
                 &lt;Timeline-item>
                     &lt;p class="time">2010年&lt;/p>
                     &lt;p class="content">发布 iPad&lt;/p>
                 &lt;/Timeline-item>
                 &lt;Timeline-item>
                     &lt;p class="time">2011年10月5日&lt;/p>
                     &lt;p class="content">史蒂夫·乔布斯去世&lt;/p>
                 &lt;/Timeline-item>
             &lt;/Timeline>
          &lt;/template>
          &lt;script>
              export default {
              }
          &lt;/script>
        `,
        "subTitle2": '圆圈颜色',
        "timeLineCode2": `
          &lt;template>
             &lt;Timeline>
                 &lt;Timeline-item color="green">发布1.0版本&lt;/Timeline-item>
                 &lt;Timeline-item color="green">发布2.0版本&lt;/Timeline-item>
                 &lt;Timeline-item color="red">严重故障&lt;/Timeline-item>
                 &lt;Timeline-item color="blue">发布3.0版本&lt;/Timeline-item>
             &lt;/Timeline>
          &lt;/template>
          &lt;script>
              export default {
              }
          &lt;/script>
        `,
        "subTitle3": '最后一个',
        "timeLineCode3": `
          &lt;template>
             &lt;Timeline pending>
                 &lt;Timeline-item>发布1.0版本&lt;/Timeline-item>
                 &lt;Timeline-item>发布2.0版本&lt;/Timeline-item>
                 &lt;Timeline-item>发布3.0版本&lt;/Timeline-item>
                 &lt;Timeline-item>
                     &lt;a href="#">查看更多&lt;/a>
                 &lt;/Timeline-item>
             &lt;/Timeline>
          &lt;/template>
          &lt;script>
              export default {
              }
          &lt;/script>
        `,
        "subTitle4": '自定义时间轴点',
        "timeLineCode4": `
          &lt;template>
             &lt;Timeline>
                 &lt;Timeline-item color="green">
                     &lt;Icon type="trophy" slot="dot">&lt;/Icon>
                     &lt;span>发布里程碑版本&lt;/span>
                 &lt;/Timeline-item>
                 &lt;Timeline-item>发布1.0版本&lt;/Timeline-item>
                 &lt;Timeline-item>发布2.0版本&lt;/Timeline-item>
                 &lt;Timeline-item>发布3.0版本&lt;/Timeline-item>
             &lt;/Timeline>
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
<style scoped>
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
  .time{
  font-size: 14px;
  font-weight: bold;
  }
  .content{
  padding-left: 5px;
  }


  </style>
