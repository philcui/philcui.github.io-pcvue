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
      <demoTab :code="inputCode2" :describeTitle="subTitle2">
        <div slot="sample">
          <Badge dot>
            <a href="#" class="demo-badge"></a>
          </Badge>
          <Badge dot style="margin-left: 40px">
            <Icon type="ios-bell-outline" size="26"></Icon>
          </Badge>
          <Badge dot style="margin-left: 40px">
            <a href="#">可以是一个链接</a>
          </Badge>
        </div>
        <div slot="describe-content">
          最简单的使用方法
        </div>
      </demoTab>
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
</style>
