<template>
  <div >
    <demoTab :code="checkBoxCode" :describeTitle="describeTitle">
      <div slot="sample">
        <div class="flex">
          <i-switch v-model="m1">
            <span slot="open">开</span>
            <span slot="close">关</span>
          </i-switch>
          {{ m1 }}

          <div class="pt">
            <div @click="m1 = !m1">toggle</div>
            <i-switch :disabled="disabled"></i-switch>
          </div>
        </div>
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
        m1: false,
        disabled:true,
        "checkBoxCode": `  &lt;template>
        &lt;div>
         &lt;i-switch v-model="m1">
            &lt;span slot="open">开&lt;/span>
            &lt;span slot="close">关&lt;/span>
            &lt;/i-switch>
            {{ m1 }}
            &lt;div @click="m1 = !m1">toggle&lt;/div>
            &lt;i-switch :disabled="disabled">&lt;/i-switch>
        &lt;/div>
  &lt;/template>
    &lt;script>
        export default {
            data () {
                return {
                    m1: false,
                    disabled:true,
                }
            },
            methods: {
              change (status) {
                console.log(status)
              }
          }
        }
    &lt;/script>
        `}
    },
    methods: {
      change (status) {
        console.log(status)
      }
    }
  }
</script>
<style>
.pt {
  padding-top: 30px;
}
</style>
