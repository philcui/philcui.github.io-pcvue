<template>
  <article class="doc-alert-container">
    <h1>Alert 警告提示</h1>
    <h2>概述</h2>
    <p>
      静态地呈现一些警告信息，可手动关闭。
    </p>
    <h2>示例代码</h2>
    <section class="demo">
      <demoTab :code="basicAlert" :describeTitle="subTitle1">
        <div slot="sample">
           <Alert>消息提示文案</Alert>
           <Alert type="success">成功提示文案</Alert>
           <Alert type="warning">警告提示文案</Alert>
           <Alert type="error">错误提示文案</Alert>
        </div>
        <div slot="describe-content">
           基本使用方法，有四种样式可以选择info、success、warning、error。
        </div>
      </demoTab>
    </section>
    <section class="demo">
      <demoTab :code="descAlert" :describeTitle="subTitle2">
        <div slot="sample">
           <Alert>
            消息提示文案
            <template slot="desc">消息提示的描述文案消息</template>
            </Alert>
           <Alert type="success">
               成功提示文案
               <span slot="desc">成功的提示描述文案</span>
           </Alert>
           <Alert type="warning">
               警告提示文案
               <template slot="desc">
                   警告的提示描述文案
               </template>
           </Alert>
           <Alert type="error">
               失败提示文案
               <template slot="desc">失败的提示描述文案<br/>失败的提示描述文案</template>
           </Alert>
        </div>
        <div slot="describe-content" class='describeContent'>
           自定义&lt;slot name="desc">描述内容。
        </div>
      </demoTab>
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
      "subTitle1": "基础用法",
      "subTitle2": "含描述信息",
      "basicAlert": `
&lt;template>
  &lt;Alert>消息提示文案&lt;/Alert>
  &lt;Alert type="success">成功提示文案&lt;/Alert>
  &lt;Alert type="warning">警告提示文案&lt;/Alert>
  &lt;Alert type="error">错误提示文案&lt;/Alert>
&lt;/template>
&lt;script>
    export default {
        
    }
&lt;/script>
`,
      "descAlert":`
&lt;template>
  &lt;Alert>
   消息提示文案
   &lt;template slot="desc">消息提示的描述文案消息&lt;/template>
   &lt;/Alert>
  &lt;Alert type="success">
      成功提示文案
      &lt;span slot="desc">成功的提示描述文案&lt;/span>
  &lt;/Alert>
  &lt;Alert type="warning">
      警告提示文案
      &lt;template slot="desc">
          警告的提示描述文案
      &lt;/template>
  &lt;/Alert>
  &lt;Alert type="error">
      失败提示文案
      &lt;template slot="desc">失败的提示描述文案&lt;br/>失败的提示描述文案&lt;/template>
  &lt;/Alert>
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
article {
  padding-left: 30px;
  h1, h2{
    margin:12px 0px;
  }
  h1{
    font-weight: 400;
    margin-top: 40px;
  }
  h2{
    font-weight: 400;
  }
  section.demo{
    margin: 20px 10px;
  }
}
</style>
