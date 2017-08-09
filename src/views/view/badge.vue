<template>
  <article class="doc-alert-container">
    <h1>Badge 徽标数</h1>
    <h2>概述</h2>
    <p>主要用于通知未读数的角标，提醒用户点击。</p>
    <h2>代码示例</h2>
    <section class="demo">
      <demoTab :code="inputCode" :describeTitle="subTitle1">
        <div slot="sample">
          <Badge count="3">
            <a href="#" class="demo-badge"></a>
          </Badge>
        </div>
        <div slot="describe-content">
          最简单的使用方法
        </div>
      </demoTab>
    </section>

    <section class="demo">
      <demoTab :code="inputCode3" :describeTitle="subTitle3">
        <div slot="sample">
          <Badge count="100">
            <a href="#" class="demo-badge"></a>
          </Badge>
          <Badge count="1000" overflow-count="999">
            <a href="#" class="demo-badge"></a>
          </Badge>
        </div>
        <div slot="describe-content">
          通过设置<code>overflow-count</code>属性设置一个封顶值，<br/>当超过时，
          会显示<code>${overflowCount}+</code>
        </div>
      </demoTab>
    </section>

    <section class="demo">
      <demoTab :code="inputCode3" :describeTitle="subTitle3">
        <div slot="sample">
          <Badge count="100">
            <a href="#" class="demo-badge"></a>
          </Badge>
          <Badge count="1000" overflow-count="999">
            <a href="#" class="demo-badge"></a>
          </Badge>
        </div>
        <div slot="describe-content">
          通过设置<code>overflow-count</code>属性设置一个封顶值，<br/>当超过时，
          会显示<code>${overflowCount}+</code>
        </div>
      </demoTab>
    </section>

    <section class="demo">
      <demoTab :code="inputCode4" :describeTitle="subTitle4">
        <div slot="sample">
          <Badge count="10"></Badge>
          <Badge count="20" class-name="demo-badge-alone"></Badge>
        </div>
        <div slot="describe-content">
          可以没有 slot 独立展示。
        </div>
      </demoTab>
    </section>
    <h2 id="switch3">API</h2>
    <h3>Badge   props</h3>
    <section class="demo">
      <Table border :columns="propsColumns" :data="propsData"></Table>
    </section>
  </article>
</template>
<script>
  import demoTab from '@/components/DemoTab';
  export default {
    components: {
      demoTab
    },
      data(){
          return{
            propsData:[{
              attribute: 'count',
              describe:'显示的数字，大于overflowCount时，显示${overflowCount}+，为 0 时隐藏',
              type:"Number | String",
              default:"-"
            },{
              attribute: 'overflow-count',
              describe:'展示封顶的数字值',
              type:"Number | String",
              default:"99"
            },{
              attribute: 'dot',
              describe:'不展示数字，只有一个小红点，如需隐藏 dot ，需要设置count为 0',
              type:"Boolean",
              default:"false"
            },{
              attribute: 'class-name',
              describe:'自定义的class名称，dot 模式下无效',
              type:"String",
              default:"-"
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
            subTitle4:'独立使用及自定义样式',
            "inputCode4":`&lt;template>
          &lt;Badge count="10">&lt;/Badge>
          &lt;Badge count="20" class-name="demo-badge-alone">&lt;/Badge>
&lt;/template>`,
            subTitle3:`封顶数字`,
            "inputCode3":`&lt;template>
          &lt;Badge count="100">
            &lt;a href="#" class="demo-badge">&lt;/a>
          &lt;/Badge>
          &lt;Badge count="1000" overflow-count="999">
            &lt;a href="#" class="demo-badge">&lt;/a>
          &lt;/Badge>
     &lt;/template>`,
            "inputCode2":`&lt;template>
  &lt;Badge dot>
    &lt;a href="#" class="demo-badge">&lt;/a>
  &lt;/Badge>
  &lt;Badge dot>
    &lt;Icon type="ios-bell-outline" size="26">&lt;/Icon>
  &lt;/Badge>
  &lt;Badge dot>
    &lt;a href="#">可以是一个链接&lt;/a>
  &lt;/Badge>
&lt;/template>`,
            subTitle2:'小红点',
            "inputCode":`&lt;template>
  &lt;Badge count="3">
    &lt;a href="#" class="demo-badge">&lt;/a>
  &lt;/Badge>
&lt;/template>`,
            subTitle1:'基础用法'
          }
      }
  }
</script>
<style scoped>
  .demo-badge{
    width: 42px;
    height: 42px;
    background: #eee;
    border-radius: 6px;
    display: inline-block;
  }
  .demo-badge-alone{
    background: #5cb85c !important;
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
