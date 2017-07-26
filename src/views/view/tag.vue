<template>
  <article class="doc-tag-container">
    <h2>Tag标签</h2>
    <h3>概述</h3>
    <p>
      对不同维度进行简单的标记和分类。对不同维度进行简单的标记和分类。对不同维度进行简单的标记和分类。对不同维度进行简单的标记和分类。对不同维度进行简单的标记和分类。对不同维度进行简单的标记和分类。对不同维度进行简单的标记和分类。对不同维度进行简单的标记和分类。
    </p>
    <h3>示例代码</h3>
    <demoTab :code="gridCode" :describeTitle="subTitle1">
      <div slot="sample">
         <Tag>tag1</Tag>
         <Tag>tag2</Tag>
         <Tag>tag3</Tag>
         <Tag closable>tag4</Tag>
      </div>
      <div slot="describe-content">
         简单的展示，添加属性closable可以关闭标签。<br/>
         点击关闭标签时，会触发 on-close 事件，需自己实现关闭逻辑。
      </div>
    </demoTab>
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
      "subTitle1": "基本用法",
      "gridCode": `
&lt;template>
   &lt;Tag>tag1&lt;/Tag>
   &lt;Tag>tag2&lt;/Tag>
   &lt;Tag>tag3&lt;/Tag>
   &lt;Tag closable>tag4&lt;/Tag>
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
  h2{
    margin-top:45px;
    line-height:40px;
  }
}
</style>
