<template>
  <div >
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
        基本组件-单选框。主要用于一组可选项单项选择，或者单独用于切换到选中状态。
      </div>
    </demoTab>
  </div>
</template>
<script>
  import demoTab from '@/components/DemoTab'
  export default {
    components: {
      demoTab
    },
    data(){
        return {
          "describeTitle":'notice',
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
