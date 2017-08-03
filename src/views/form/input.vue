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
          基本用法，可以使用 <code>v-model</code> 实现数据的双向绑定。
          可以直接设置 style 来改变输入框的宽度，默认 100%。
        </div>
      </demoTab>
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
