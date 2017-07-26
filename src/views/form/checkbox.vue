<template>
  <div >
    <demoTab :code="checkBoxCode" :describeTitle="describeTitle">
      <div slot="sample">
        <Checkbox v-model="disabledSingle" disabled>Checkbox</Checkbox>
        <Checkbox-group v-model="disabledGroup">
          <Checkbox label="香蕉" disabled></Checkbox>
          <Checkbox label="苹果" disabled></Checkbox>
          <Checkbox label="西瓜"></Checkbox>
          <Checkbox label="榴莲"></Checkbox>
        </Checkbox-group>
      </div>
      <div slot="describe-content">
        基本组件-多选框。主要用于一组可选项多项选择，或者单独用于标记切换某种状态。
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
        disabledGroup: ['苹果'],
        "checkBoxCode": `  &lt;template>
        &lt;div>
          &lt;Checkbox v-model="disabledSingle" disabled>Checkbox&lt;/Checkbox>
            &lt;Checkbox-group v-model="disabledGroup">
              &lt;Checkbox label="香蕉" disabled>&lt;/Checkbox>
              &lt;Checkbox label="苹果" disabled>&lt;/Checkbox>
              &lt;Checkbox label="西瓜">&lt;/Checkbox>
              &lt;Checkbox label="榴莲"> &lt;/Checkbox>
           &lt;/Checkbox-group>
        &lt;/div>
  &lt;/template>
    &lt;script>
        export default {
            data () {
                return {
                    disabledSingle: true,
                    disabledGroup: ['苹果'],
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
