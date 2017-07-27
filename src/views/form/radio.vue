<template>
  <article class="doc-alert-container">
    <h1>Radio 单选框</h1>
    <h2>概述</h2>
    <p>
      基本组件-单选框。主要用于一组可选项单项选择，或者单独用于切换到选中状态。
    </p>
    <h2>示例代码</h2>
    <section class="demo">
      <demoTab :code="radioCode" :describeTitle="describeTitle">
        <div slot="sample">
          <Radio v-model="disabledSingle" disabled>Radio</Radio>
          <Radio-group v-model="disabledGroup">
            <Radio label="金斑蝶" disabled></Radio>
            <Radio label="爪哇犀牛"></Radio>
            <Radio label="印度黑羚"></Radio>
          </Radio-group>
        </div>
        <div slot="describe-content">
          通过设置disabled属性来禁用单选框。<br>
          使用Radio-group实现一组互斥的选项组。
          <br>在组合使用时，Radio 使用 label 来自动判断。
          <br>每个 Radio 的内容可以自定义，如不填写则默认使用 label 的值。
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
    data(){
        return {
          "describeTitle":'组合使用',
          disabledSingle: true,
          disabledGroup: '爪哇犀牛',
          "radioCode": `  &lt;template>
        &lt;div>
            &lt;Radio v-model="disabledSingle" disabled>Radio &lt;/Radio>
               &lt;Radio-group v-model="disabledGroup">
                 &lt;Radio label="金斑蝶" disabled> &lt;/Radio>
                 &lt;Radio label="爪哇犀牛"> &lt;/Radio>
                 &lt;Radio label="印度黑羚"> &lt;/Radio>
               &lt;/Radio-group>
        &lt;/div>
  &lt;/template>
    &lt;script>
        export default {
            data () {
                return {
                    disabledSingle: true,
                    disabledGroup: '爪哇犀牛'
                }
            }
        }
    &lt;/script>
        `}
    }
  }
</script>
<style>

</style>
