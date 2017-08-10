<template>
  <article class="doc-breadcrumb-container">
    <h1>Breadcrumb 面包屑</h1>
    <h2>概述</h2>
    <p>
      显示网站的层级结构，告知用户当前所在位置，以及在需要向上级导航时使用。
    </p>
    <h2>代码示例</h2>
    <section class="demo" id="breadcrumb1">
      <demoTab :code="breadcrumbCode" :describeTitle="subTitle">
        <div slot="sample">
          <Breadcrumb>
            <Breadcrumb-item href="/">Home</Breadcrumb-item>
            <Breadcrumb-item href="/navigation/breadcrumb">Navigation</Breadcrumb-item>
            <Breadcrumb-item>Breadcrumb</Breadcrumb-item>
          </Breadcrumb>
        </div>
        <div slot="describe-content">
          最基础的用法，通过设置<code>href</code>属性添加链接。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="breadcrumb2">
      <demoTab :code="breadcrumbCode2" :describeTitle="subTitle2">
        <div slot="sample">
          <Breadcrumb>
            <Breadcrumb-item href="/">
              <Icon type="ios-home-outline"></Icon> Home
            </Breadcrumb-item>
            <Breadcrumb-item href="/navigation/breadcrumb">
              <Icon type="social-buffer-outline"></Icon> Navigation
            </Breadcrumb-item>
            <Breadcrumb-item>
              <Icon type="pound"></Icon> Breadcrumb
            </Breadcrumb-item>
          </Breadcrumb>
        </div>
        <div slot="describe-content">
          可自定义每项的内容，比如带有一个图标。
        </div>
      </demoTab>
    </section>

    <section class="demo" id="breadcrumb3">
      <demoTab :code="breadcrumbCode3" :describeTitle="subTitle3">
        <div slot="sample">
          <Breadcrumb separator=">">
            <Breadcrumb-item href="/">Home</Breadcrumb-item>
            <Breadcrumb-item href="/navigation/breadcrumb">Navigation</Breadcrumb-item>
            <Breadcrumb-item>Breadcrumb</Breadcrumb-item>
          </Breadcrumb>
          <Breadcrumb separator="<b class='demo-breadcrumb-separator'>=></b>">
            <Breadcrumb-item href="/">Home</Breadcrumb-item>
            <Breadcrumb-item href="/navigation/breadcrumb">Navigation</Breadcrumb-item>
            <Breadcrumb-item>Breadcrumb</Breadcrumb-item>
          </Breadcrumb>
        </div>
        <div slot="describe-content">
          通过设置<code>separator</code>属性来自定义分隔符，比如 <code>></code> ，也可以接受自定义的HTML字符串。
        </div>
      </demoTab>
    </section>

    <h2 id="breadcrumb4">API</h2>
    <h3>Breadcrumb props</h3>
    <section class="demo">
      <Table border :columns="propsColumns" :data="propsData"></Table>
    </section>
    <h3>BreadcrumbItem props</h3>
    <section class="demo">
      <Table border :columns="itemsColumns" :data="itemsData"></Table>
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
          attribute: 'separator',
          describe:'自定义分隔符',
          type:"String | Element String",
          default:"/"
        }],
        itemsColumns:[
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
        itemsData:[{
          attribute: 'href',
          describe:'链接，不传则没有链接',
          type:"String",
          default:"-"
        },{
          attribute: 'replace',
          describe:'由跳转时，开启 replace 将不会向 history 添加新记录',
          type:"Boolean",
          default:"false"
        }],
        "subTitle": '基础用法',
        "breadcrumbCode": `
          &lt;template>
             &lt;Breadcrumb>
                 &lt;Breadcrumb-item href="/">Home&lt;/Breadcrumb-item>
                 &lt;Breadcrumb-item href="/navigation/breadcrumb">Navigation&lt;/Breadcrumb-item>
                 &lt;Breadcrumb-item>Breadcrumb&lt;/Breadcrumb-item>
             &lt;/Breadcrumb>
          &lt;/template>
          &lt;script>
              export default {
              }
          &lt;/script>
        `,
        "subTitle2": '带图标的',
        "breadcrumbCode2": `
          &lt;template>
             &lt;Breadcrumb>
                 &lt;Breadcrumb-item href="/">
                     &lt;Icon type="ios-home-outline">&lt;/Icon> Home
                 &lt;/Breadcrumb-item>
                 &lt;Breadcrumb-item href="/navigation/breadcrumb">
                     &lt;Icon type="social-buffer-outline">&lt;/Icon> Navigation
                 &lt;/Breadcrumb-item>
                 &lt;Breadcrumb-item>
                     &lt;Icon type="pound">&lt;/Icon> Breadcrumb
                 &lt;/Breadcrumb-item>
             &lt;/Breadcrumb>
          &lt;/template>
          &lt;script>
              export default {
              }
          &lt;/script>
        `,
        "subTitle3": '分隔符',
        "breadcrumbCode3": `
          &lt;style>
              .demo-breadcrumb-separator{
                  color: #ff5500;
                  padding: 0 5px;
              }
          &lt;/style>
          &lt;template>
             &lt;Breadcrumb separator=">">
                 &lt;Breadcrumb-item href="/">Home&lt;/Breadcrumb-item>
                 &lt;Breadcrumb-item href="/navigation/breadcrumb">Navigation&lt;/Breadcrumb-item>
                 &lt;Breadcrumb-item>Breadcrumb&lt;/Breadcrumb-item>
             &lt;/Breadcrumb>
             &lt;Breadcrumb separator="&lt;b class='demo-breadcrumb-separator'>=>&lt;/b>">
                 &lt;Breadcrumb-item href="/">Home&lt;/Breadcrumb-item>
                 &lt;Breadcrumb-item href="/navigation/breadcrumb">Navigation&lt;/Breadcrumb-item>
                 &lt;Breadcrumb-item>Breadcrumb&lt;/Breadcrumb-item>
             &lt;/Breadcrumb>
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
</style>
<style>
  .demo-breadcrumb-separator{
    color: #ff5500;
    padding: 0 5px;
  }

</style>
